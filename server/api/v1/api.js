const express = require("express");
const router = express.Router();
const tweets = require('./tweets/routes');
const users = require('./users/routes');

router.use('/tweets', tweets);
router.use('/users', users)
//router.use('');`

router.get('/', (req, res) => {
	res.send('<p>API Twitter Example.</p>');
})


/*
router.get('/tweets/:id', (req, res) => {
   let found = db.find(function(element) {
	  return element.id == req.params.id;
	});

   res.json(found)
});

router.put('/tweets/:id', (req, res) => {
	
	let updated = false;
	
	for (let i = 0; i < db.length; i++){
		if (db[i].id == req.params.id) {
	   		db[i] = {
	   			id: db[i].id,
	   			content: req.body.content || db[i].content,
				author: req.body.author || db[i].author,
				location: req.body.location || db[i].location,
				created_date: db[i].created_date,
				modified_date: moment().format()
	   		}
	   			
	   		updated = true;
	   	}
   }

   if (updated) {
   	res.json({message: `tweet edited.`})
   }else{
   	res.json({info: `Tweet no existe.`})
   }
})

router.delete('/tweets/:id', (req, res) => {
	
	let deleted = false;
	
	for (let i = 0; i < db.length; i++){
		if (db[i].id == req.params.id) {
	   		db.splice(i, 1)
			deleted = true;
			break;   
	   	}
   	}

   if (deleted) {
   	res.json({message: `tweet deleted!`})
   }else{
   	res.json({info: `Tweet no encontrado.`})
   }
});
*/

module.exports = router;