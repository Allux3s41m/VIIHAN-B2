const fs = require("fs");
const Canvas = require("canvas");
const path = require("path");

module.exports.config = {
    name: "pair",
    version: "1.0.11",
    hasPermssion: 0,
    credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡",
    description: "Pair two users with frame and DP",
    commandCategory: "Fun"
};

module.exports.run = async function({ event, api }) {
    try {
        // Paths
        const framePath = path.join(__dirname, "cache", "frame.png"); // existing frame
        const userDPPath = path.join(__dirname, "cache", "userDP.png"); // user DP

        // Load images
        const frame = await Canvas.loadImage(framePath);
        const userDP = await Canvas.loadImage(userDPPath);

        // Canvas 1080x1083
        const canvas = Canvas.createCanvas(1080, 1083);
        const ctx = canvas.getContext("2d");

        // Draw frame (unchanged)
        ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);

        // DP circular mask & alignment
        const dpSize = 200; // DP diameter
        const dpX = 440; // adjust X to center in frame
        const dpY = 300; // adjust Y to center in frame

        ctx.save();
        ctx.beginPath();
        ctx.arc(dpX + dpSize / 2, dpY + dpSize / 2, dpSize / 2, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        // Draw DP
        ctx.drawImage(userDP, dpX, dpY, dpSize, dpSize);
        ctx.restore();

        // Save final image
        const outPath = path.join(__dirname, "cache", "pair_final.png");
        const buffer = canvas.toBuffer("image/png");
        fs.writeFileSync(outPath, buffer);

        // Send message
        api.sendMessage({ body: "Pair image ready!", attachment: fs.createReadStream(outPath) }, event.threadID);

    } catch (err) {
        console.error(err);
        api.sendMessage("Error generating pair image!", event.threadID);
    }
};
