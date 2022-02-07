const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
	
        function rasteleSembol(uzunluk, semboller) {

    var maske = '';
    
    if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';
    
    if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if (semboller.indexOf('0') > -1) maske += '0123456789';
    
    
    var sonuc = '';
    
     
    
    for (var i = uzunluk; i > 0; --i) 
    
    {
    
    sonuc += maske[Math.floor(Math.random() * maske.length)];
    
    }
    
    return sonuc;

}
setInterval (function () {
message.channel.send("https://discord.com/template/" + rasteleSembol(12,'0aA') +"");
}, 1 * 3000); 
}

exports.conf = {
  aliases: []
};

exports.help = {
  name : "şablon-başlat"
};