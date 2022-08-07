const Discord = require("discord.js")
var http = require('http');
var fs = require('fs');
const { parse } = require("path");
var kisisayisi
let urlci

var http = require('http');

  http.createServer(function (req, res) {           //Oyuncu sayısını çekiyor.
     urlci= req.url;
    const kelimeler = ["%", "20","/"]
    kelimeler.forEach(i => {
        urlci = urlci.replaceAll(i, "")
        })
    kisisayisi = urlci;
    
    res.end();
  }).listen(22422);


const client = new Discord.Client({
    intents:["GUILDS","GUILD_MESSAGES",]
  
})

function kisisayisii(){
	if(kisisayisi == null){
		client.user.setActivity("0"+" Aktif Oyuncu SS13", {   //Oyuncu sayısını yazıyor.
        type: "PLAYING",

    });
	}
	else{
	client.user.setActivity(kisisayisi+" Aktif Oyuncu SS13", {   //Oyuncu sayısını yazıyor.
    type: "PLAYING",

    });
	}
}
setInterval(kisisayisii,16000);

var number = 0;
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)

})

function poly(){
 var obj;
 fs.readFile('C://lastg/data/npc_saves/poly.json', 'utf8', function (err, data) {   //Poly i otomatik çekip chate yazdıran
   if (err) throw err;
   obj = JSON.parse(data);

   client.channels.fetch('913872860823584768').then(channel => {
    channel.send(obj.phrases[Math.floor(Math.random() * obj.phrases.length)]);
  });
   
 });
}
setInterval(poly, 600000);
var prefix ="!";



client.on('message', message => {
  if ((message.content.startsWith(prefix + 'say')&& message.author.id ==`289873346504556544`) ) {
    if (message.author.bot) return;
    const SayMessage = message.content.slice(4).trim();

    client.channels.fetch('913872860823584768').then(channel => {
      channel.send(SayMessage);
    });  
}
if ((message.content.startsWith(prefix + 'tip')&& message.author.id ==`140168024433885184`) ||(message.content.startsWith(prefix + 'tip')&& message.author.id ==`272434960814571520`)||(message.content.startsWith(prefix + 'tip')&& message.author.id ==`289873346504556544`)) {
    if (message.author.bot) return;
    const SayMessage = message.content.slice(4).trim();
    fs.writeFile('C:/Users/Administrator/Desktop/dcbot', SayMessage+"\n", {flag: 'a+'}, (err) => {  //tip ekleme
      if (err) {
          throw err;
      }
      message.reply("Tip Başarıyla Eklendi")
  });
  
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
if ((message.content.startsWith(prefix + 'saat'))) {
  if (message.author.bot) return;

  fs.readFile('C:/lastg/data/playerMinutes.json', function(err, data) {
    if(err) throw err;
    const parsed = JSON.parse(data);
    const top10 = Object.entries(parsed ).sort(([, a], [, b]) => b - a).map(([key,val]) => [key +": "+Math.floor(val / 60) +" Saat " + (val%60) + " Dakika"]);
   client.channels.fetch('941689961479036988').then(channel => {
    for (let index = 0; index <20; index++) {
		var i = index +1;
		
		if(i <2){
			var says =says+"1."+" "+top10[index] + "\n";
		}else{

      var says =says+i+"."+" "+top10[index] + "\n"
	  }
      if(index == 19){
        const kelimeler = ["undefined"]
        kelimeler.forEach(i => {
            says = says.replaceAll(i, "")
            })
        channel.send("```"+says+"\n"+"```");
          }
    }
    if (message.content.startsWith(prefix + 'poly')&& message.author.id ==`289873346504556544`) {
        if (message.author.bot) return;
        fs.readFile('C://lastg/data/npc_saves/poly.json', 'utf8', function (err, data) {  //Polyi komut ile chate yazdıran.
            if (err) throw err;
            obj = JSON.parse(data);
         
            client.channels.fetch('913872860823584768').then(channel => {
             channel.send(obj.phrases[Math.floor(Math.random() * obj.phrases.length)]);
           });
        });    
    }

});
      
});

}

if ((message.content.startsWith(prefix + 'wl')&& message.author.id ==`140168024433885184`) ||(message.content.startsWith(prefix + 'wl')&& message.author.id ==`272434960814571520`)||(message.content.startsWith(prefix + 'wl')&& message.author.id ==`289873346504556544`)) {
  if (message.author.bot) return;
  const SayMessage = message.content.slice(3).trim();
  fs.writeFile('C://lastg/config/whitelist.txt', SayMessage+"\n", {flag: 'a+'}, (err) => {  //WL Ekleme
    if (err) {
        throw err;
    }
    message.reply("WL Başarıyla Eklendi")
});

}
});
client.on("ready", async () => {
  setTimeout(async () => {
    client.ws.shards.forEach(shard => {
      shard.on("close", async () => {
        process.exit(1);
      });
    });
  }, 15000);
}); 
  var http = require('http');
  http.createServer(function (req, res) {
    console.log(req, res)
    number=number+1;
    if(number==1){

        let urlci= req.url;
        const kelimeler = ["%", "20","/"]
        kelimeler.forEach(i => {
            urlci = urlci.replaceAll(i, "")           //                  Round bildirim Çekiyo
            })
        client.channels.fetch('968247435090616360').then(channel => {
            channel.send('<@&968246531784314930>' +" Yeni Round Basliyor!! Harita: " + urlci);
            number = 0;
          });
    }
    res.end();
  }).listen(22322);
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
  


client.login("keyhere");
