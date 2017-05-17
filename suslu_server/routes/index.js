var express = require('express');
var router = express.Router();
var db = require('../db/db.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

// Konu Açma-------------------------------------
router.post('/createPost',function(req,res,next){
	db.Post.create({
		baslik: req.body.formValues.baslik,
		kategori:req.body.formValues.kategori,
		icerik: req.body.formValues.icerik,
		pictureData_1 : req.body.formValues.pictureData_1,
		pictureData_2 : req.body.formValues.pictureData_2,
		pictureData_3 : req.body.formValues.pictureData_3,
		begeniler: req.body.formValues.begeniler,
		yorumlar: req.body.formValues.yorumlar
	});
	db.Post.findById(2).then(function(project) {
		res.send(req.body); 	
});	
});
//------------------------------------------------
//Sohbet Konularını Listeleme
router.post('/getSohbet',function(req,res,next){


	db.Post.findAll({ where: { kategori :req.body.type}}).then(function(sohbetler){
		console.log(sohbetler);
		res.send(sohbetler);
	});
});

//------------------------------------------------
//Seçilen Marka Ürünlerini listeleme 
router.post('/getUrunler',function(req,res,next){
	db.Urun.findAll({ where:{ brand :req.body.type}}).then(function(urunler){
		res.send(urunler);
	});	
});
module.exports = router;

