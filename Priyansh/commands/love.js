module.exports.config = {
 name: "love",
 version: "7.3.1",
 hasPermssion: 0,
 credits: "тАФ═Я═Я═Ю═ЮЁЭРВЁЭРШЁЭРБЁЭРДЁЭРС тШвя╕П_ЁЦгШ -ЁЭРБЁЭРОЁЭРУ тЪая╕П ЁЭС╗ЁЭСмЁЭСиЁЭС┤_ тШвя╕П",
 description: "Get Pair From Mention",
 commandCategory: "img",
 usages: "[@mention]",
 cooldowns: 5,
 dependencies: {
 "axios": "",
 "fs-extra": "",
 "path": "",
 "jimp": ""
 }
};

module.exports.onLoad = async() => {
 const { resolve } = global.nodemodule["path"];
 const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
 const { downloadFile } = global.utils;
 const dirMaterial = __dirname + '/cache/canvas/';
 const path = resolve(__dirname, 'cache/canvas', 'arr2.png');
 if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
 if (!existsSync(path)) await downloadFile("https://i.imgur.com/iaOiAXe.jpeg", path);
}

async function makeImage({ one, two }) {
 const fs = global.nodemodule["fs-extra"];
 const path = global.nodemodule["path"];
 const axios = global.nodemodule["axios"];
 const jimp = global.nodemodule["jimp"];
 const __root = path.resolve(__dirname, "cache", "canvas");

 let batgiam_img = await jimp.read(__root + "/arr2.png"); 
 let pathImg = __root + `/batman${one}_${two}.png`; 
 let avatarOne = __root + `/avt_${one}.png`; 
 let avatarTwo = __root + `/avt_${two}.png`; 
 
 let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data; 
 fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8')); 
 
 let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data; 
 fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8')); 
 
 let circleOne = await jimp.read(await circle(avatarOne)); 
 let circleTwo = await jimp.read(await circle(avatarTwo)); 
 batgiam_img.composite(circleOne.resize(200, 200), 70, 110).composite(circleTwo.resize(200, 200), 465, 110); 
 
 let raw = await batgiam_img.getBufferAsync("image/png"); 
 
 fs.writeFileSync(pathImg, raw); 
 fs.unlinkSync(avatarOne); 
 fs.unlinkSync(avatarTwo); 
 
 return pathImg;
}

async function circle(image) {
 const jimp = require("jimp");
 image = await jimp.read(image);
 image.circle();
 return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args }) {
 const fs = global.nodemodule["fs-extra"];
 const { threadID, messageID, senderID } = event;
 const mention = Object.keys(event.mentions);
 
 
 const captions = [
 "ЁЯТЦ тОп═втОптГЭЁЯй╖ЁЯШ╜ рждрзБржорж┐ ржЖржорж╛рж░ ржЪрзЛржЦрзЗрждрзЗ рж╕рж░рж▓рждрж╛рж░ ржЙржкржорж╛ тОп═втОптГЭЁЯй╖ЁЯР░ЁЯНТ",
 "ЁЯТЦ ЁЯе║тЭдя╕П ржкрзНрж░рж┐рзЯ.....! ЁЯШК\nржХржЦржирзЛ ржХрж╛ржБржжрж╛ржУ, ржХржЦржирзЛ рж╣рж╛рж╕рж╛ржУ,\nржЖржмрж╛рж░ ржХржЦржирзЛ ржПржоржи ржнрж╛рж▓рзЛржмрж╛рж╕рж╛ ржжрж╛ржУ,\nржпрзЗржи ржкрзГржерж┐ржмрзАрж░ рж╕ржм рж╕рзБржЦ рждрзЛржорж╛рж░ ржорж╛ржЭрзЗ ржЦрзБржБржЬрзЗ ржкрж╛ржЗ...! ЁЯТФтЭдя╕П",
 " ржмрж┐ржЪрзНржЫрзЗржжрзЗрж░ ржкрж░рзЗржУ ржпрзЛржЧрж╛ржпрзЛржЧ рж░рж╛ржЦрж╛рж░ ржирж╛ржоржЗ рж╣ржЪрзНржЫрзЗ ржорж╛рзЯрж╛ ____ЁЯТЦ ЁЯТЧЁЯМ║",
 " ЁЭРПЁЭРЮЁЭРиЁЭРйЁЭРеЁЭРЮ'ЁЭРм ЁЭРжЁЭРЮЁЭРжЁЭРиЁЭРлЁЭРвЁЭРЮЁЭРм ЁЭРЪЁЭРлЁЭРЮ ЁЭРжЁЭРиЁЭРлЁЭРЮ ЁЭРйЁЭРЮЁЭРлЁЭРмЁЭРиЁЭРзЁЭРЪЁЭРе ЁЭРнЁЭРбЁЭРЪЁЭРз ЁЭРйЁЭРЮЁЭРиЁЭРйЁЭРеЁЭРЮ'ЁЭРм...\nржорж╛ржирзБрж╖рзЗ'рж░ ржерзЗржХрзЗ ржорж╛ржирзБрж╖рзЗ'рж░ рж╕рзНржорзГрждрж┐ ржмрзЗрж╢рж┐ ржЖржкржи рж╣рзЯ,\nржорж╛ржирзБрж╖ ржЫрзЗрзЬрзЗ ржпрж╛рзЯ, ржХрж┐ржирзНрждрзБ рж╕рзНржорзГрждрж┐ ржирзЯ-!!",
 " ржЗржЪрзНржЫрзЗ 'ржЧрзБрж▓рзЛ рж╢ржмрзНржжрж╣рзАржи...!!\nржнрж╛ржмржирж╛ рж╕рзЗ-рждрзЛ ржкрзНрж░рждрж┐ ржжрж┐ржи..!\nржХрж▓рзНржкржирж╛рж░ рж░ржВ ржпржжрж┐ржУ ржШржи,\nржХрж┐ржирзНрждрзБ ржмрж╛рж╕рзНрждржмрждрж╛ ржнрзАрж╖ржг ржХржарж┐ржи....!! ЁЯМ╕ЁЯТФ",
 " ржнрж╛рж▓рзЛржмрж╛рж╕рж╛ ржорж╛ржирзЗ ржХрзЗржмрж▓ ржкрзНрж░рзЗржо ржирзЯ,\nржмрж░ржВ ржПржоржи ржПржХржЬржи тАФ ржпрж╛рж░ рж╣рж╛рж╕рж┐рждрзЗржЗ рж╕ржХрж╛рж▓ рж╢рзБрж░рзБ рж╣рзЯ, ржЖрж░ ржХрж╛ржирзНржирж╛рзЯ рж░рж╛ржд ржлрзБрж░рж╛рзЯ!ЁЯТЦ ЁЯТМЁЯй╡",
 " ржпрзЗ рж╕ржорзНржкрж░рзНржХ ржЪрзЛржЦрзЗ ржжрзЗржЦрж╛ ржпрж╛рзЯ ржирж╛,\nрждржмрзБржУ ржоржи ржЬрзБрзЬрзЗ ржерж╛ржХрзЗ тАФ рж╕рзЗржЯрж╛ржЗ рж╕ржмржЪрзЗрзЯрзЗ рж╕рждрзНржп ржнрж╛рж▓рзЛржмрж╛рж╕рж╛!ЁЯТЦ ЁЯМЩЁЯе║",
 " рждрзБржорж┐ рж╣рзЯрждрзЛ ржжрзВрж░рзЗ ржЖржЫрзЛ,\nржХрж┐ржирзНрждрзБ ржЖржорж╛рж░ ржкрзНрж░рждрж┐ржЯрж╛ ржЕржирзБржнрзВрждрж┐рж░ ржарж┐ржХрж╛ржирж╛ ржПржЦржирзЛ рждрзБржорж┐!ЁЯТЦ ЁЯТЮЁЯХКя╕П",
 " ржЪрзЛржЦрзЗрж░ ржнрж╛рж╖рж╛ ржмрзЛржЭрзЗ ржпрзЗ, рж╕рзЗ-ржЗ ржкрзНрж░рж┐рзЯ ржорж╛ржирзБрж╖ред\nржХрж╛рж░ржг ржнрж╛рж▓рзЛржмрж╛рж╕рж╛ ржХржЦржирзЛ рж╢ржмрзНржжрзЗ ржирзЯ, ржжрзГрж╖рзНржЯрж┐рждрзЗ ржкрзНрж░ржХрж╛рж╢ ржкрж╛рзЯ!ЁЯТЦ ЁЯМ╕тЬи",
 " рждрзБржорж┐ ржХрзЗржмрж▓ ржорж╛ржирзБрж╖ ржирж╛,\nрждрзБржорж┐ ржПржХржЯрж╛ ржорж┐рж╖рзНржЯрж┐ ржЕржнрзНржпрж╛рж╕ тАФ ржпрж╛ржХрзЗ ржЫрж╛рзЬрж╛ржУ ржмрж╛ржБржЪрж╛ ржпрж╛рзЯ ржирж╛!ЁЯТЦ ЁЯР╗ЁЯМИ"
 ];
 
 
 const randomCaption = captions[Math.floor(Math.random() * captions.length)];

 if (!mention[0]) return api.sendMessage("Please mention 1 person.", threadID, messageID);
 else {
 const one = senderID, two = mention[0];
 return makeImage({ one, two }).then(path => api.sendMessage({ 
 body: randomCaption, 
 attachment: fs.createReadStream(path) 
 }, threadID, () => fs.unlinkSync(path), messageID));
 }
}
