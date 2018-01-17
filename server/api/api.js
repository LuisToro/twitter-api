const express = require("express");
const router = express.Router();

let moment = require("moment");

let db = [
	{
		id: 1,
		content: "Del 17 al 19 de enero realizaremos feria educativa Atlántico Pilo http://bit.ly/2rh7424  #LoEstamosHaciendo",
		author: "@Gobatlantico",
		location: "Barranquilla",
		created_date: moment().format(),
		modified_date: moment().format()
	},
	{
		id: 2,
		content: "Grandes y exitosas historias de emprendimiento digital han iniciado con el apoyo del @Ministerio_TIC, por eso este jueves 18 de enero te invitamos a que conozcas algunas de ellas en #EmprendoEn2018 | Inscripciones en: http://bit.ly/Emprendo2018 ",
		author: "@ConectividadCO",
		location: "Barranquilla",
		created_date: moment().format(),
		modified_date: moment().format()
	},
	{
		id: 3,
		content: "En @Gobatlantico giraremos $8.000 millones adicionales a los $45.000 millones que se han destinado, para garantizar culminación de las obras de los escenarios deportivos de los @Bquilla2018. #LoEstamosHaciendo #AtlánticoLíder",
		author: "@Gobatlantico",
		location: "Barranquilla",
		created_date: moment().format(),
		modified_date: moment().format()
	},
	{
		id: 4,
		content: "Sigue creando con el Galaxy Note 8, hazlo en grande con nuestra tecnología. #YoSoyNoter #BeatlesDay #FelizMartes",
		author: "@SamsungMobileCO",
		location: "Barranquilla",
		created_date: moment().format(),
		modified_date: moment().format()
	},
	{
		id: 5,
		content: "Habló Nahir Galarza, la joven argentina que confesó haber asesinado a su exnovio http://www.elespectador.com/noticias/el-mundo/hablo-nahir-galarza-la-joven-argentina-que-confeso-haber-asesinado-su-exnovio-articulo-733689",
		author: "@elespectador",
		location: "Barranquilla",
		created_date: moment().format(),
		modified_date: moment().format()
	}
];

router.get('/', (req, res) => {
    res.json({message: 'Bienvenido al api del taller # 1 (express)!'})
});

router.get('/tweets', (req, res) => {
    res.json(db)
});

router.get('/tweet/:id', (req, res) => {
   let found = db.find(function(element) {
	  return element.id == req.params.id;
	});

   res.json(found)
});

router.put('/tweet/:id', (req, res) => {
	
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

   if (flag) {
   	res.json({message: `tweet editado correctamente.`})
   }else{
   	res.json({error: `hubo un problema al editar el tweet.`, info: `Quizá el :id del tweet no existe.`})
   }
})

*/

router.delete('/tweet/:id', (req, res) => {
	
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

module.exports = router;
