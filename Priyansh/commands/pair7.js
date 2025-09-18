module.exports.config = {
	name: "pair7",
	version: "1.0.4",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "",
	commandCategory: "Picture",
	cooldowns: 5,
	dependencies: {
        "axios": "",
        "fs-extra": "",
        "jimp": ""
    }
}

module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'pairing.jpg');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.pinimg.com/736x/15/fa/9d/15fa9d71cdd07486bb6f728dae2fb264.jpg", path);
}

async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");

    let pairing_img = await jimp.read(__root + "/pairing.jpg");
    let pathImg = __root + `/pairing_${one}_${two}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    let avatarTwo = __root + `/avt_${two}.png`;
    
    // Download avatars
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
    
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));

    // ==== DP SIZE & POSITION FIX ====
    let dpWidth = 250;
    let dpHeight = 255;

    // Adjust positions according to frame for perfect alignment
    let dpOneX = 75; // sender DP X
    let dpOneY = 50; // sender DP Y
    let dpTwoX = 25; // pair DP X
    let dpTwoY = 50;  // pair DP Y

    pairing_img.composite(circleOne.resize(dpWidth, dpHeight), dpOneX, dpOneY)
               .composite(circleTwo.resize(dpWidth, dpHeight), dpTwoX, dpTwoY);
    // ================================

    let raw = await pairing_img.getBufferAsync("image/png");
    
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

module.exports.run = async function({ api, event, args, Users, Threads, Currencies }) {
    const fs = require("fs-extra");
    const { threadID, messageID, senderID } = event;

    var tl = ['21%', '67%', '19%', '37%', '17%', '96%', '52%', '62%', '76%', '83%', '100%', '99%', "0%", "48%"];
    var tle = tl[Math.floor(Math.random() * tl.length)];

    let dataa = await api.getUserInfo(senderID);
    let namee = dataa[senderID].name;

    let loz = await api.getThreadInfo(threadID);
    var emoji = loz.participantIDs;
    var id = emoji[Math.floor(Math.random() * emoji.length)];
    let data = await api.getUserInfo(id);
    let name = data[id].name;

    var arraytag = [];
    arraytag.push({id: senderID, tag: namee});
    arraytag.push({id: id, tag: name});
        
    var one = senderID, two = id;

    return makeImage({ one, two }).then(path => 
        api.sendMessage({
            body: `Congrats ${namee} has been paired with ${name}\nThe Match rate is: ${tle}`,
            mentions: arraytag,
            attachment: fs.createReadStream(path)
        }, threadID, () => fs.unlinkSync(path), messageID)
    );
}
