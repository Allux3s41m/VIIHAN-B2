module.exports.config = {
  name: "crush",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "ЁЭРВЁЭРШЁЭРБЁЭРДЁЭРС тШвя╕П_ЁЦгШ -ЁЭРБЁЭРОЁЭРУ тЪая╕П ЁЭС╗ЁЭСмЁЭСиЁЭС┤_ тШвя╕П",
  description: "Get Pair From Mention",
  commandCategory: "love",
  usages: "[@mention]",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "path": "",
    "jimp": ""
  }
};

module.exports.onLoad = async () => {
  const { resolve } = global.nodemodule["path"];
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { downloadFile } = global.utils;
  const dirMaterial = __dirname + `/cache/canvas/`;
  const path = resolve(__dirname, 'cache/canvas', 'crush.png');
  if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
  if (!existsSync(path)) await downloadFile("https://i.imgur.com/PlVBaM1.jpg", path);
};

async function makeImage({ one, two }) {
  const fs = global.nodemodule["fs-extra"];
  const path = global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
  const jimp = global.nodemodule["jimp"];
  const __root = path.resolve(__dirname, "cache", "canvas");

  let batgiam_img = await jimp.read(__root + "/crush.png");
  let pathImg = __root + `/batman${one}_${two}.png`;
  let avatarOne = __root + `/avt_${one}.png`;
  let avatarTwo = __root + `/avt_${two}.png`;

  let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));

  let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));

  let circleOne = await jimp.read(await circle(avatarOne));
  let circleTwo = await jimp.read(await circle(avatarTwo));
  batgiam_img.composite(circleOne.resize(191, 191), 93, 111).composite(circleTwo.resize(190, 190), 434, 107);

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

const crushCaptions = [
  "ржкрзНрж░рзЗржорзЗ ржпржжрж┐ ржЕржкрзВрж░рзНржгрждрж╛ржЗ рж╕рзБржирзНржжрж░ рж╣ржпрж╝, рждржмрзЗ ржкрзВрж░рзНржгрждрж╛рж░ рж╕рзМржирзНржжрж░рзНржп ржХрзЛржерж╛ржпрж╝?тЭдя╕П",
  "ржпржжрж┐ ржмрзГрж╖рзНржЯрж┐ рж╣рждрж╛ржотАж рждрзЛржорж╛рж░ ржжрзГрж╖рзНржЯрж┐ ржЫрзБржБржпрж╝рзЗ ржжрж┐рждрж╛ржо! ржЪрзЛржЦрзЗ ржЬржорж╛ ржмрж┐рж╖рж╛ржжржЯрзБржХрзБ ржПржХ ржирж┐ржорзЗрж╖рзЗ ржзрзБржпрж╝рзЗ ржжрж┐рждрж╛ржоЁЯдЧ",
  "рждрзЛржорж╛рж░ ржнрж╛рж▓рзЛржмрж╛рж╕рж╛рж░ ржкрзНрж░рждрж┐ржЪрзНржЫржмрж┐ ржжрзЗржЦрзЗржЫрж┐ ржмрж╛рж░рзЗ ржмрж╛рж░ЁЯТЦ",
  "рждрзЛржорж╛рж░ рж╕рж╛ржерзЗ ржПржХржЯрж┐ ржжрж┐ржи рж╣рждрзЗ ржкрж╛рж░рзЗ ржнрж╛рж▓рзЛ, ржХрж┐ржирзНрждрзБ рждрзЛржорж╛рж░ рж╕рж╛ржерзЗ рж╕ржмржЧрзБрж▓рж┐ ржжрж┐ржи рж╣рждрзЗ ржкрж╛рж░рзЗ ржнрж╛рж▓рзЛржмрж╛рж╕рж╛ЁЯМ╕",
  "ржПржХ ржмржЫрж░ ржиржпрж╝, ржХржпрж╝рзЗржХ ржЬржирзНржо рж╢рзБржзрзБ рждрзЛржорж╛рж░ ржкрзНрж░рзЗржорзЗ ржкрж░рждрзЗ ржкрж░рждрзЗ ржЗ ржЪрж▓рзЗ ржпрж╛ржмрзЗЁЯШН",
  "ржХрзЗржоржи ржХрж░рзЗ ржПржЗ ржоржиржЯрж╛ ржжрзЗржм рждрзЛржорж╛ржХрзЗтАж ржмрзЗрж╕рзЗржЫрж┐ ржпрж╛ржХрзЗ ржнрж╛рж▓рзЛ ржЖржорж┐, ржоржи ржжрж┐ржпрж╝рзЗржЫрж┐ рждрж╛ржХрзЗЁЯл╢",
  "ржкрж┐ржЫрзБ ржкрж┐ржЫрзБ ржШрзБрж░рж▓рзЗ ржХрж┐ ржЖрж░ ржкрзНрж░рзЗржо рж╣ржпрж╝рзЗ ржпрж╛ржпрж╝тАж ржХрж╛ржЫрзЗ ржПрж╕рзЗ ржмрж╛рж╕рж▓рзЗ ржнрж╛рж▓рзЛ, ржоржи ржкрж╛ржУржпрж╝рж╛ ржпрж╛ржпрж╝тЭдя╕ПтАНЁЯй╣",
  "рждрзБржорж┐ ржерж╛ржХрж▓рзЗ ржирж┐ржЬрзЗржХрзЗ ржПржоржи рж╕рзБржЦрзА ржоржирзЗ рж╣ржпрж╝, ржпрзЗржирзЛ ржЖржорж╛рж░ ржЬрзАржмржирзЗ ржХрзЛржирзЛ ржжрзБржГржЦржЗ ржирзЗржЗЁЯШК",
  "рждрзЛржорж╛рж░ рж╣рж╛рждржЯрж╛ ржзрж░рждрзЗ ржкрж╛рж░рж▓рзЗ ржоржирзЗ рж╣ржпрж╝ ржкрзБрж░рзЛ ржкрзГржерж┐ржмрзАржЯрж╛ ржзрж░рзЗ ржЖржЫрж┐ЁЯе░",
  "рждрзЛржорж╛рж░ ржкрзНрж░рждрж┐ ржнрж╛рж▓рзЛ рж▓рж╛ржЧрж╛ ржпрзЗржирзЛ ржкрзНрж░рждрж┐ржирж┐ржпрж╝ржд ржмрзЗржбрж╝рзЗржЗ ржЪрж▓ржЫрзЗЁЯШШ"
];

module.exports.run = async function ({ event, api, args }) {
  const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, senderID } = event;
  const mention = Object.keys(event.mentions);
  if (!mention[0]) return api.sendMessage("ржПржХржЬржиржХрзЗ ржорзЗржирж╢ржи ржХрж░рзЛ!", threadID, messageID);
  else {
    const one = senderID, two = mention[0];
    const caption = crushCaptions[Math.floor(Math.random() * crushCaptions.length)];
    return makeImage({ one, two }).then(path =>
      api.sendMessage({ body: `тЬзтАвтЭБЁЭРВЁЭРлЁЭРоЁЭРмЁЭРбтЭБтАвтЬз\n\n${caption}`, attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID)
    );
  }
};
