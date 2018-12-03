module.exports = function(app) {
	
	app.route('/')
	  .get((req, res) => 
		  res.render('bemvindo'))

	app.route('/quemsoueu')
	  .get((req, res) => 
		  res.render('quemsoueu'))

	app.route('/curriculo')
	  .get((req, res) => 
		  res.render('curriculo'))

	app.route('/psicoterapia')
	  .get((req, res) => 
		  res.render('psicoterapia'))

	app.route('/coaching')
	  .get((req, res) => 
		  res.render('coaching'))

	app.route('/blog')
	  .get((req, res) => 
		  res.render('blog'))

	app.route('/contato')
	  .get((req, res) => 
		  res.render('contato'))
    
    .post((req, res) => 
		  res.render('contato'))
	  
}