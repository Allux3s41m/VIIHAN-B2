module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "SARDAR RDX",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.postimg.cc/Njt27S5d/Messenger-creation-1312207330422780.jpg"];
var callback = () => api.sendMessage({body:`
┏━━━✦❘༻༺❘✦━━━┓
   ⚡ 𝐁𝐎𝐓 𝐂𝐎𝐍𝐓𝐑𝐎𝐋 𝐏𝐀𝐍𝐄𝐋 ⚡
┗━━━✦❘༻༺❘✦━━━┛

🖥 𝗕𝗼𝘁 ➤ ${global.config.BOTNAME}  
👑 𝗢𝘄𝗻𝗲𝗿 ➤ 𝐕𝐈𝐈𝐇𝐀𝐍 𝐑𝐃𝐗 👑  
🛠 𝗠𝗼𝗱𝗲 ➤ [ 𝐏𝐫𝐨 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 🌀 ]  

🔐 𝗛𝗮𝗰𝗸𝗲𝗿 𝗔𝗰𝗰𝗲𝘀𝘀 𝗟𝗼𝗴:  
[✔] Root Access ✅  
[✔] Database Linked 🗄  
[✔] Social Media Injected 🌐  

🌐 𝗟𝗜𝗡𝗞𝗦 🔗  
📘 Facebook ➤ 𝐁𝐚𝐛𝐲 𝐂𝐨𝐦𝐞 𝐢𝐧 𝐦𝐲 𝐢𝐛 ✔
📸 Instagram ➤ 𝐎𝐧𝐥𝐲 𝐟𝐨𝐫 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥 𝐛𝐚𝐛𝐲 ✔
🐦 Twitter ➤  𝐍𝐨𝐭 𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 𝐁𝐚𝐛𝐲 ✔
🎶 TikTok ➤  𝐍𝐨𝐭 𝐀𝐯𝐚𝐢𝐥𝐚𝐛𝐥𝐞 𝐅𝐨𝐫 𝐔 ✔
📡 Telegram ➤ 𝐕𝐢𝐢𝐡𝐚𝐧 𝐑𝐝𝐱 ✔ 

📅 𝗗𝗮𝘁𝗲 ➤ ${juswa}  
⏳ 𝗨𝗽𝘁𝗶𝗺𝗲 ➤ ${hours}:${minutes}:${seconds}  

💀 STATUS: RUNNING 🔥  
┏━━━✦❘༻༺❘✦━━━┓
   𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆 𝐑𝐃𝐗 𝐁𝐎𝐓
┗━━━✦❘༻༺❘✦━━━┛


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
   
