const Discord = require('discord.js');

const methlegalşablonlar = [
  "https://discord.com/template/PkASQK7fas5S",
  "https://discord.com/template/PDbuRWA3zgy2",
  "https://discord.com/template/RteFapVZYBvV",
  "https://discord.com/template/CWE2q4kfBzWR",
  "https://discord.com/template/G6n2Yv8pcfer",
  "https://discord.com/template/6GFyuBVXAr7M",
  "https://discord.com/template/T5XzHMtFCqe4",
  "https://discord.com/template/NAreZqTkxNvF",
  "https://discord.com/template/fTqvyBjtKuc3",
  "https://discord.com/template/XBt6pUAVbW8R",
  "https://discord.com/template/daSXnVEXWgGe",
  "https://discord.com/template/zWK96tv77qNf",
  "https://discord.com/template/6AAvBHVbzKeR",
  "https://discord.com/template/4pbPpNwTzn8B",
  "https://discord.com/template/cYSJpE4kUNHQ",
  "https://discord.com/template/kjMMzsFwr4Yq",
  "https://discord.com/template/Tha94ebKmwEX",
  "https://discord.com/template/mJAY3Fyz7cAt",
  "https://discord.com/template/5rUucXzM7zhx",
  "https://discord.com/template/akVGGCQtd8sP",
  "https://discord.com/template/J4nmqdzSMpem",
  "https://discord.com/template/hCPR4ESUGF4m",
  "https://discord.com/template/36T4Nwzwbvah",
  "https://discord.com/template/GaVbCeyun6vF",
  "https://discord.com/template/A57vCC4gBJfU",
  "https://discord.com/template/WRQKav7sfKTK",
  "https://discord.com/template/mSd8AMkNjXZp",
  "https://discord.com/template/ZeXW8uC3WGV3",
  "https://discord.com/template/TbJrqm4C4Kfy",
  "https://discord.com/template/Q5Tsqk2b2vCF",
  "https://discord.com/template/MRQZGXTCpDp5",
  "https://discord.com/template/6NBb7ranshYP",
  "https://discord.com/template/KwW2FCQxsgmb",
  "https://discord.com/template/5e5HjDwMhqFD"
];

exports.run = function(client, message, args) {
  
    var cevap = methlegalşablonlar[Math.floor(Math.random() * methlegalşablonlar.length)];

    message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["Methlegal - Rastgele Şablon"],
  permLevel: 0 
};

exports.help = {
  name: 'şablon'
};