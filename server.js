const express = require('express')
const hbs = require('hbs')
const fs = require('fs')

const stage = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 3000
const maintenance = process.env.APP_MAINTENANCE != 'false'

var app = express()

hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear', function () {
	return new Date().getFullYear()
})
hbs.registerHelper('screamIt', function (text) {
	return text.toUpperCase()
})

app.set('view engine', 'hbs')

app.use(function(req, res, next) {
	var log = `${new Date().toString()}: ${req.method}, ${req.url}\n`
	
	fs.appendFile('server.log', log, function (err) {
		if (err) { process.stderr.write(err) }
	})
	process.stdout.write(log)
	
	next()
})

app.use(function (req, res, next) {
	if(maintenance) {
		res.render('maintenance', {
			pageTitle: 'Maintenance Page',
			maintenanceMessage: 'Maintenance!'
		})
	} else {
		next()
	}
})

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
	res.render('home', {
		pageTitle: 'Home Page',
		welcomeMessage: 'Welcome!'
	})
})

app.get('/about', function(req, res) {
	res.render('about.hbs', {
		pageTitle: 'About Page'
	})
})

app.get('/projects', function(req, res) {
	res.render('projects', {
		pageTitle: 'Projects Page',
		projectsMessage: 'Welcome to projects page!'
	})
})

app.get('/bad', function(req, res) {
	res.send({
		errorMessage: 'Nothing works...'
	})
})

app.listen(port, function () {
	process.stdout.write(`Stage: ${stage}\n`)
	process.stdout.write(`Maintenance: ${maintenance}\n`)
	process.stdout.write(`Server is up on port ${port}\n`)
})