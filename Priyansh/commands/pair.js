module.exports.config = {
  name: "pair",
  version: "1.0.1", 
  hasPermssion: 0,
  credits: "🌺 𝐕𝐈𝐈𝐇𝐀𝐍➺𝐑𝐃𝐗",
  description: "pairing",
  commandCategory: "Love", 
  usages: "pair", 
  cooldowns: 10
};

module.exports.run = async function({ api, event, Threads, Users }) {
    const axios = global.nodemodule["axios"];
    const fs = global.nodemodule["fs-extra"];
    const { createCanvas, loadImage } = require('canvas');

    var { participantIDs } = (await Threads.getData(event.threadID)).threadInfo;
    var tle = Math.floor(Math.random() * 101);
    var namee = (await Users.getData(event.senderID)).name;
    const botID = api.getCurrentUserID();
    const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
    var id = listUserID[Math.floor(Math.random() * listUserID.length)];
    var name = (await Users.getData(id)).name;
    var arraytag = [];
    const gifCute = [
        "https://i.pinimg.com/originals/42/9a/89/429a890a39e70d522d52c7e52bce8535.gif",
        "https://i.ibb.co/r2jdFqn9/HvPID5q.gif",
        "https://i.pinimg.com/originals/9c/94/78/9c9478bb26b2160733ce0c10a0e10d10.gif",
        "https://i.pinimg.com/originals/9d/0d/38/9d0d38c79b9fcf05f3ed71697039d27a.gif",
        "https://i.ibb.co/DPCPZ5d6/BWji8Em.gif"
    ];

    arraytag.push({id: event.senderID, tag: namee});
    arraytag.push({id: id, tag: name});

    // Download profile pics
    let Avatar = (await axios.get(`https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })).data; 
    fs.writeFileSync(__dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8"));

    let Avatar2 = (await axios.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(__dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8"));

    // Download random GIF frame
    let gifLove = (await axios.get(gifCute[Math.floor(Math.random() * gifCute.length)], { responseType: "arraybuffer" })).data; 
    fs.writeFileSync(__dirname + "/cache/giflove.png", Buffer.from(gifLove, "utf-8"));

    // Load images and create canvas
    let frame = await loadImage(__dirname + "/cache/giflove.png");
    let dp1 = await loadImage(__dirname + "/cache/avt.png");
    let dp2 = await loadImage(__dirname + "/cache/avt2.png");

    const canvas = createCanvas(frame.width, frame.height);
    const ctx = canvas.getContext("2d");

    // Draw frame
    ctx.drawImage(frame, 0, 0, frame.width, frame.height);

    // Adjust DP1 (left) and DP2 (right)
    let dpSize = Math.min(frame.width / 4, frame.height / 4); // size for both DPs
    ctx.drawImage(dp1, frame.width * 0.15, frame.height * 0.3, dpSize, dpSize);
    ctx.drawImage(dp2, frame.width * 0.65, frame.height * 0.3, dpSize, dpSize);

    // Save final image
    let finalPath = __dirname + "/cache/finalPair.png";
    fs.writeFileSync(finalPath, canvas.toBuffer("image/png"));

    var imglove = [];
    imglove.push(fs.createReadStream(finalPath));

    // Send message
    var msg = {
        body: `💕✨ 𝑷𝒆𝒓𝒇𝒆𝒄𝒕 𝑴𝒂𝒕𝒄𝒉 𝑭𝒐𝒖𝒏𝒅 ✨💕

🌸 ${namee} 💖 ${name} 🌸

"𝑻𝒘𝒐 𝒉𝒆𝒂𝒓𝒕𝒔 𝒃𝒆𝒂𝒕𝒊𝒏𝒈 𝒂𝒔 𝒐𝒏𝒆,
𝑻𝒘𝒐 𝒔𝒐𝒖𝒍𝒔 𝒅𝒂𝒏𝒄𝒊𝒏𝒈 𝒊𝒏 𝒉𝒂𝒓𝒎𝒐𝒏𝒚"

━━━━━━━━━━━━━━━━━━━━━━━
💫 𝑳𝒐𝒗𝒆 𝑪𝒐𝒎𝒑𝒂𝒕𝒊𝒃𝒊𝒍𝒊𝒕𝒚: ${tle}% 💫
━━━━━━━━━━━━━━━━━━━━━━━

🌹 "𝑻𝒓𝒖𝒆 𝒍𝒐𝒗𝒆 𝒊𝒔 𝒏𝒐𝒕 𝒂𝒃𝒐𝒖𝒕 𝒇𝒊𝒏𝒅𝒊𝒏𝒈 
𝒔𝒐𝒎𝒆𝒐𝒏𝒆 𝒑𝒆𝒓𝒇𝒆𝒄𝒕, 𝒃𝒖𝒕 𝒔𝒆𝒆𝒊𝒏𝒈 
𝒂𝒏 𝒊𝒎𝒑𝒆𝒓𝒇𝒆𝒄𝒕 𝒑𝒆𝒓𝒔𝒐𝒏 𝒑𝒆𝒓𝒇𝒆𝒄𝒕𝒍𝒚" 🌹

✨ 𝑴𝒂𝒚 𝒚𝒐𝒖𝒓 𝒍𝒐𝒗𝒆 𝒔𝒕𝒐𝒓𝒚 𝒃𝒆 𝒂𝒔 
𝒃𝒆𝒂𝒖𝒕𝒊𝒇𝒖𝒍 𝒂𝒔 𝒂 𝒇𝒂𝒊𝒓𝒚𝒕𝒂𝒍𝒆 ✨

💝 🌺 𝗢𝗪𝗡𝗘𝗥 👑➪🦋⃟⃟ ⍣⃝ 𝐕𝐈𝐈𝐇𝐀𝐍➺𝐑𝐃𝐗༆𓆪⃟⍨⃝`,
        mentions: arraytag,
        attachment: imglove
    };

    return api.sendMessage(msg, event.threadID, event.messageID);
};
