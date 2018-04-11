const another = require('./send.js');
const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
    uri: `http://urzasarchives.com/bdo/wbtbdo/wbtna/`,
    transform: function (body) {
      return cheerio.load(body);
    }
  };

bosses = [null,null,null,null,null,null,null,null]
class boss {
    constructor(name, dt_first) {
      this.height = height;
      this.width = width;
    }
  }
function webscrapper(){
    rp(options)
    .then(($) => {
        var row = 8
        $('tbody tr td').each(function(i,elem){
            bossIndex = (i)%8
            console.log(bossIndex)
            console.log($(this).text().replace(/(\r\n\t|\n|\r\t|\t)/gm,""))

        })
    })
    .catch((err) => {
        console.log(err);
    });
}


function myFunction () {
    console.log('My Function Started');
    var msg = "s";
    // msg = webscrapper()
    if(msg != ""){
        another.data.send(msg)
        console.log("My Function Stopped!")
    }
    
}

// setInterval(function() {myFunction();}, 3 * 1000);
myFunction();