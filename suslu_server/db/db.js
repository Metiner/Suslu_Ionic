var Sequelize = require('sequelize');

var s = new Sequelize('postgres://postgres:q1w2e3RR@localhost:5432/susludb');

var migrate = true;

var db = {};


db.User = s.define('user',{
   name:Sequelize.STRING,
   uname: Sequelize.STRING,
    upass:Sequelize.STRING
});


//Konular-------------------
db.Post = s.define('post',{
    baslik: Sequelize.STRING,
    kategori: Sequelize.TEXT,
    icerik:Sequelize.STRING,
    pictureData_1: Sequelize.TEXT,
    pictureData_2: Sequelize.TEXT,
    pictureData_3: Sequelize.TEXT,
    begeniler: Sequelize.INTEGER,
    yorumlar: Sequelize.TEXT
});
//---------------------------

db.Video = s.define('video',{
    ownedBy: Sequelize.STRING,
    like: Sequelize.STRING,
    comment : Sequelize.STRING
});

db.Urun = s.define('urun',{
    brand: Sequelize.STRING,
    title: Sequelize.STRING,
    yorumlar: Sequelize.STRING,
    picture: Sequelize.TEXT,
    yildiz : Sequelize.INTEGER,
    icerik : Sequelize.TEXT 
})

db.User.hasMany(db.Post);


if(migrate){
    
      db.Urun.sync({force:true}).then(function(){


        db.Urun.create({
          brand:'Alix Avien',
          title : 'Diamond Oje',
          yorumlar : 'vayamkguzelvideoymus',
          picture : 'http://www.alixavien.com/_img/prods/big/tirnak/diamond-oje.jpg',
          yildiz : 1,
          icerik : 'Kolay uygulama sağlayan fırça ve hızlı kuruyan mükemmel formüle sahiptir. Opak yapısı ile tek kat sürümde bile kapatıcılık sağlar.'
        }),
        db.Urun.create({
          
          brand:'Alix Avien',
          title : 'Diamond Klasik Ruj',
          yorumlar : 'vayamkguzelvideoymus',
          picture : 'http://www.alixavien.com/_img/prods/big/dudak/diamond-klasik-ruj.jpg',
          yildiz : 2,
          icerik : 'Yoğun renk verme özelliği, pürüssüz dudak görünümü, yumuşak sürüm ve E vitamini içerir.'
        }),
        db.Urun.create({
          
          brand:'Alix Avien',
          title : 'Dipliner',
          yorumlar : 'vayamkguzelvideoymus',
          picture : 'http://www.alixavien.com/_img/prods/big/goz/dipliner.jpg',
          yildiz : 3,
          icerik : 'Keçeli kalem ucu şeklindeki aplikatörü ile gözlerde hat çekmeyi daha kolay hale getiren bu ürün, kalem gibi kısa tutuş mesafesine sahiptir ve çok pratiktir. İçeriğindeki keratin kirpik diplerini besler. Akmaz.'
        }),
        db.Urun.create({
          
          brand:'Alix Avien',
          title : 'Dna Maskara',
          yorumlar : 'vayamkguzelvideoymus',
          picture : 'http://www.alixavien.com/_img/prods/big/goz/dna-maskara.jpg',
          yildiz : 4,
          icerik : 'Şimdiye kadar kullandığınız tüm maskaraları unutmanın zamanı geldi… Özel formülünün sık kullanımda kirpikleri uzattığı klinik olarak kanıtlanan DNA Maskara, DNA kromozomu şeklindeki özel fırçası ile de kirpiklere ihtiyaç duydukları kıvrım ve hacmi veriyor. İçerdiği Badem Yağı ise kirpikleri besliyor. Sonuç: Hayal ettiğiniz kirpikler!'
        });
    
      });    
        
      db.Video.sync({force:true}).then(function(){


        db.Video.create({
          ownedBy:'MetinerKocak',
          like : '5',
          comment : 'vayamkguzelvideoymus'
        }),
        db.Video.create({
          ownedBy:'batuhankocak',
          like : '23',
          comment : 'helalolsun'
        }),
        db.Video.create({
          ownedBy:'Selin ',
          like : '1',
          comment : 'benpekbegenmedim'
        }),
        db.Video.create({
          ownedBy:'cesi',
          like : '10',
          comment : 'hav'
        });
    
      });



    db.User.sync({force:true}).then(function(){

       db.Post.sync({force:true}).then(function () {
           db.User.create({
               name:'Metiner',
               uname: 'metiner',
               upass:'1234'
           }).then(function(){
               db.Post.create({
                   baslik:'DenemeBaslik',
                   kategori: 'DenemeKategori',
                   icerik: 'denemeicerik',
                   pictureData: 'denemePictureData'
               });
           })
       });
    });
}




module.exports = db;