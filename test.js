const Discord = require("discord.js")
var http = require('http');
var fs = require('fs');
const { parse } = require("path");

const client = new Discord.Client({
    intents:["GUILDS","GUILD_MESSAGES",]
  
})

const prefix ='!'
client.on('message', message => {

    if ((message.content.startsWith(prefix + 'say')&& message.author.id ==`289873346504556544`) ) {  //genel chate yazı yazıyor.
        if (message.author.bot) return;
        const SayMessage = message.content.slice(4).trim();
    
        client.channels.fetch('913872860823584768').then(channel => {
          channel.send(SayMessage);
        });  
    }
    //tip ekliyor
    if ((message.content.startsWith(prefix + 'tip')&& message.author.id ==`140168024433885184`) ||(message.content.startsWith(prefix + 'tip')&& message.author.id ==`272434960814571520`)||(message.content.startsWith(prefix + 'tip')&& message.author.id ==`289873346504556544`)) {
        if (message.author.bot) return;
        const SayMessage = message.content.slice(4).trim();
        fs.writeFile('C:/Users/Administrator/Desktop/dcbot/tipler.txt', SayMessage+"\n", {flag: 'a+'}, (err) => {  //tip ekleme
          if (err) {
              throw err;
          }
          message.reply("Tip Başarıyla Eklendi")
      });
      //byond idnin serverda kaç saati var onu sorguluyor
    } if ((message.content.startsWith(prefix + 'kac'))) {
      if (message.author.bot) return;
      var json = JSON.parse(fs.readFileSync("C:/lastg/data/playerMinutes.json", "utf-8"))
      const SayMessage = message.content.slice(4).trim();
      if(!json[SayMessage]){

        message.reply(SayMessage + " Adında bir oyuncu bulunamadı.")
      }
      else{
        var b =Math.floor(json[SayMessage]/60);
        var c =json[SayMessage]%60;
      message.reply(SayMessage + " Adlı kişinin oynama süresi: "+b.toString()+ " Saat " + c.toString() + " Dakika");
      }
    }
    //top20 yi veriyor saat sıralamasında
    if ((message.content.startsWith(prefix + 'saat'))) {
      if (message.author.bot) return;

      fs.readFile('C:/lastg/data/playerMinutes.json', function(err, data) {
        if(err) throw err;
        const parsed = JSON.parse(data);
        const top10 = Object.entries(parsed ).sort(([, a], [, b]) => b - a).map(([key,val]) => [key +": "+Math.floor(val / 60) +" Saat " + (val%60) + " Dakika"]);
       client.channels.fetch('941689961479036988').then(channel => {
        for (let index = 0; index <20; index++) {
          var says =says+" "+top10[index] + "\n"
          
          if(index == 19){
            const kelimeler = ["undefined"]
            kelimeler.forEach(i => {
                says = says.replaceAll(i, "")
                })
            channel.send("```"+says+"\n"+"```");
              }
        }
        
      });
          
    });

    }
});
//rastgele tip atıyor
function tipler(){
  fs.readFile('C:/Users/Administrator/Desktop/dcbot/tipler.txt', function(err, data) {
      if(err) throw err;
  
      const arr = data.toString().replace(/\r\n/g,'\n').split('\n');
  
      var sonuc = arr[Math.floor(Math.random() * arr.length)];
    client.channels.fetch('913872860823584768').then(channel => {
     channel.send("```"+sonuc+"```");
   });
  });
 }
 setInterval(tipler,3600000);

 http.createServer(function (req, res) {           //Oyuncu sayısını çekiyor.

console.log(req)
 
 res.end();
}).listen(5466);

client.login("tokenburaya");
