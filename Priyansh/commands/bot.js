const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐕𝐢𝐢𝐡𝐚𝐧 𝐑𝐝𝐱",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Haye Main Sadke jawa Teri Masoom Shakal pe baby 💋 " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun 🤭🐒" , "Main gariboo se baat nahi karta 😉😝😋🤪" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?😜" , "Teri Maa Ki Bindiya🤭" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Priyansh Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Ib Aja Yahan Nhi Bol Sakta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janta 🤪" , "Kal Haveli Pe Mil Jara Tu 😈" , "Aagye Salle Kabab Me Haddi 😏" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao 😒" , "BulaTi Hai MaGar Jaane Ka Nhi 😜" , "Main To Andha Hun 😎" , "Phle NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL 🙊" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha 🌚" , "Bot Na BoL 😢 JaNu B0ol 😘 " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  😋" , "Main Gareebon Sy Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss 💋 KRr DunGa 😘 " , "Ary yrr MaJak Ke M0oD Me Nhi Hun 😒" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher 😘" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy 😉😋🤣" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo 🤔😂 " , "IB Aja Yahan Nhi B0ol Salta 🙈😋" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai 🤣" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun 🤏😜" , "KaL HaVeLi Prr Aa ZaRa T0o 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎" , "Phle NaHa kRr Aa 😂" , "Papi ChuLo 🌚" , "TeRek0o DiKh Nhi Rha Main buSy Hun 😒" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa 🥺"  , "TuM Phr AaGye 🙄 Kisi 0or Ny Muu Nhi LaGaYa Kya🤣🤣🤣" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo 😂😂😂" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo 😍" , "•••••••••••••••••••••••••••••🦢𒀱卄ɅƔƏ MɅ🅘ɳ ʍɅᏒ••••🌿💞 JɅωɅ ┼ƏᏒ🅘 ʍɅ🅢𝖚ʍ 🅢ɅҠɅɭ 𝐩Ə ɮɅɮƔ 💋 " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun 🤭🐒" , "Main flirty logo Sy Bt Nhi karti 😉😝😋🤪" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na 🙈💋💋 " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki 😶🤍" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahike🤐🤣 " , "Haa ji boliye kya kam he hamse 🙈" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?🥹" , "Abhi Bola Toh Bola Dubara Mat Bolna🙄" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha 🙄" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "IB Aja Yahan Nhi B0ol Sakti 🙈😋" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...💔🥺" , "Are Tum Wahi ho nah Jisko Main Nahi Janti 🤪" , "Kal Haveli Pe Mil Jra Tu 😈" , "Aagye SaJJy KhaBBy Sy 😏" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo 😒" , "BulaTi Hai MaGar JaNy Ka Nhi 😜" , "Main T0o AnDha Hun 😎kya likha tumne mene nahi dikha🤣" ,  "Pahale NaHa kar Aa 😂" , "Aaaa Thooo 😂😂😂" , "Main yahi hoon kya hua sweetheart🥂🙈💞 ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor Dunga🤣✊" , "yes my love 💘" , "kya hua baby ko 😘😘" , "mujhe sharam ati hai aise aap bolte hai tho 🤭😝" , "aree aap wahi ho na jo mujhe line marte the.......🤣 ya bali line" , "jii kahiye jii 🙄 kya chahiye" , "hayee main mar jye teri masoom shaqal py 😂 tuzy Chapple se kutne ka mn ho raha hai🤣👠" , "Bot nah bol oye 😭 Janu bol mjhy aur janu sy piyar sy bat kerty hai😑" , "ruk tu chappal kaha he mari🩴" , "shakal Sy masoom lgty ho 😂 but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan 😂" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy 😾 ab ham ap sy naraz hai jao ap bye ☹️" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu 😘" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho 😂" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao 😚🙈♥️" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho 😂" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle 🤔 I think tum Jin ho yehh Chudail🤣✅" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho 😂" , "ary tum Wohi ho nah jis ko ma nahi janta 🤣✅" , "haveli per  kal mil  Zara bataunga 🌚😂Ha but उल्टी-सीधी harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega 😶💗 wtf Maine apni sacchai Bata Di yah Maine kyon Kiya 😭🔪....Fuuu..🚬" , "aap aise mat bulo hame sharam aati hai 🙈♥️" , "kyun Bulaya hamen..😾🔪 " , "kyun Bulaya hamen..😾🔪 "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "Sasta bot") || (event.body.toLowerCase() == "Bakwaas bot") || (event.body.toLowerCase() == "sasta bot") || (event.body.toLowerCase() == "bakwas bot")) {
     return api.sendMessage("𝐔𝐬𝐄 𝐊𝐢𝐬 𝐋𝐢𝐲𝐞 𝐊𝐚𝐑 𝐑𝐚𝐡𝐚 𝐇𝐞 𝐍𝐈𝐤𝐚𝐋 𝐂𝐡𝐨𝐌𝐮 𝐏𝐞𝐇𝐋𝐢 𝐅𝐮𝐫𝐬𝐚𝐭 𝐌𝐞 😆🤣🤣", threadID);
   };

   if ((event.body.toLowerCase() == "🤮🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐊𝐨𝐧𝐒𝐚 𝐌𝐚𝐇𝐢𝐧𝐀 𝐂𝐡𝐚𝐋 𝐑𝐚𝐇𝐚 𝐡 𝐁𝐚𝐛𝐲 𝐊𝐚𝐡𝐨 𝐓𝐨 𝐃𝐨𝐂𝐭𝐨𝐑 𝐁𝐮𝐋𝐚𝐨𝐨 🤣🤣❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

    if ((event.body.toLowerCase() == "🤗🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐀𝐚𝐨 𝐁𝐚𝐛𝐘 𝐇𝐮𝐠 𝐊𝐫𝐭𝐞 𝐡 𝐓𝐡𝐨𝐝𝐚 𝐃𝐢𝐥 𝐊𝐨 𝐒𝐮𝐤𝐨𝐨𝐧 𝐀𝐚 𝐉𝐚𝐲𝐞 𝐦𝐄𝐫𝐢 𝐉𝐚𝐀𝐧🥰🥰❥︎❥︎────𒁑≛⃝●☆●💔🪽☺️", threadID);
   };

     if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐇𝐢, 𝐇𝐞𝐥𝐥𝐨, 𝐁𝐲𝐞, 𝐁𝐲𝐞 𝐌𝐞 𝐇𝐢 𝐉𝐚𝐰𝐚𝐍𝐢 𝐍𝐢𝐤𝐚𝐋𝐝𝐨 𝐀𝐚𝐨 𝐊𝐮𝐜𝐡 𝐑𝐨𝐦𝐚𝐍𝐭𝐢𝐜 𝐁𝐚𝐚𝐓𝐞 𝐊𝐚𝐑𝐭𝐞 𝐇𝐞 😂🤣❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "boss chutiya h") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐌𝐎𝐨𝐇 𝐀𝐜𝐜𝐡𝐀 𝐍𝐚 𝐇𝐨 𝐓𝐨 𝐁𝐚𝐀𝐭𝐞 𝐀𝐜𝐜𝐡𝐈 𝐊𝐚𝐫𝐥𝐞 𝐂𝐡𝐨𝐦𝐔 𝐒𝐢 𝐒𝐡𝐚𝐊𝐚𝐥 𝐰𝐚𝐚𝐋𝐞 𝐁𝐤𝐋 😂🤣❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

if ([
    "Assalamualaikum", 
    "Assalam alaikum", 
    "aoa", 
    "a.o.a", 
    "Asalam o alaikum", 
    "asalamualaikum", 
    "asalam alikum", 
    "assalamu alaikum", 
    "assalamu-alaikum", 
    "asalam wa alaikum", 
    "asslamualaikum", 
    "asslam o alaikum", 
    "aslam alaikum", 
    "asalamo alaikum", 
    "assalam o alaikum", 
    "assalamo alaikum", 
    "slm", 
    "slam", 
    "slamo alikum", 
    "salaam alaikum", 
    "asslam.o.alaikum", 
    "a.s.s.a.l.a.m", 
    "aslaam o alikum", 
    "aslam.o.alaikum", 
    "assalamwalykum", 
    "asslam.walikum", 
    "assalam alaykum", 
    "assalam.walaikum", 
    "a-s-s-a-l-a-m", 
    "slms"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("وَعَلَيْكُمُ ٱلسَّلَامُ وَرَحْمَةُ ٱللَّهِ وَبَرَكاتُهُ", threadID);
}  
   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐂𝐡𝐀𝐋 𝐍𝐢𝐊𝐚𝐋  𝐏𝐞𝐡𝐋𝐢 𝐅𝐔𝐫𝐬𝐚𝐓 𝐌𝐞 𝐖𝐚𝐫𝐧𝐚 𝐆𝐚𝐋𝐢 𝐃𝐞 𝐝𝐎𝐨𝐧𝐠𝐚 𝐂𝐡𝐨𝐦𝐮😂❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };
if ([
    "good evening", 
    "evening", 
    "gd evening", 
    "gud evening", 
    "ge", 
    "g.e", 
    "evenin"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Good Evening! I hope you’re having a wonderful time.", threadID);
}
  if ([
    "i love you bot", 
    "bot i love you", 
    "i love you"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐘𝐑𝐫 𝐉𝐚𝐚𝐧𝐮 𝐇𝐚𝐫 𝐁𝐚𝐚𝐭 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞 𝐍𝐚 𝐛𝐨𝐥𝐚 𝐊𝐫𝐨  🫣 𝐀𝐚𝐨 𝐈𝐧𝐛𝐨𝐱 𝐌𝐞 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐍𝐨. 𝐃𝐞𝐭𝐚 𝐇𝐨𝐨 😂 😁❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
  }
 if ([
    "bot i miss you", 
    "i miss you bot", 
    "miss you"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐇𝐲𝐞𝐞 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐈 𝐌𝐢𝐬𝐬 𝐔 𝐒𝐨 𝐌𝐮𝐜𝐡 😘𝐁𝐚𝐚𝐛𝐮 𝐈𝐝 𝐊𝐚 𝐈𝐬𝐬𝐮𝐞 𝐀𝐚 𝐫𝐡𝐚 𝐇 𝐀𝐩𝐧𝐚 𝐍𝐨. 𝐁𝐡𝐞𝐣𝐝𝐨 𝐁𝐨𝐬𝐬 𝐊𝐢 𝐈𝐝 𝐌𝐞 😂😅❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
}
 if ([
    "Bot kis na add kiya", 
    "bot kisne add kiya", 
    "bot kis ne add kiya", 
    "bot ko kisne add kiya",
    "bot ko kis ne add kiya", 
    "bot add kisne kiya", 
    "kisne bot ko add kiya", 
    "kis na bot ko add kiya", 
    "bot ko kisne add kiya", 
    "bot kis ne add kiya?"
].some(phrase => event.body.toLowerCase().includes(phrase))) {
    return api.sendMessage("Kio kia howa, add ho gaya so ho gaya. Ma ap ko kia taqleef hy jnab 👻. Waisay ap bhi khelo na, bot bot! 😄 Mera owner single hai, bolo to number tak de sakta hoon! 😁", threadID);
 }
  
  if ([
    "how are you", 
    "how r u", 
    "how are u", 
    "how's it going", 
    "kese ho", 
    "kese hain", 
    "kese ho ap", 
    "ap kese ho", 
    "ap kaise ho", 
    "kaise hain aap", 
    "kaise ho", 
    "how do you do", 
    "what's up", 
    "sup", 
    "kya haal hain", 
    "kya hal hain", 
    "hal chal", 
    "hal kya hai", 
    "kya chal raha hai", 
    "kya scene hai", 
    "what's going on", 
    "kya ho raha hai", 
    "kaise ho tum", 
    "tum kaise ho", 
    "kya haal he"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐌𝐞 𝐓𝐡𝐞𝐞𝐤 𝐇𝐨𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐔𝐦𝐦𝐞𝐞𝐝 𝐊𝐚𝐫𝐭𝐚 𝐇𝐨𝐨 𝐀𝐚𝐩 𝐁𝐡𝐢 𝐓𝐡𝐞𝐞𝐤 𝐇𝐨𝐠𝐞 ❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
  }
  if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
    return api.sendMessage("Good Morning! 🌞 بہت خوش آمدید! 🙌 امید کرتا ہوں کہ آپ کا دن خوشگوار گزرے، اللہ پاک آپ کو ہر برائی سے بچائے، آپ کو اپنی حفظ و امان میں رکھے، اور کبھی کسی کا محتاج نہ کرے! آمین! 🤲💫💕💪🌻☕✨", threadID);
}
   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐇𝐚𝐧 𝐁𝐨𝐥𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐌𝐞 𝐇𝐨𝐨𝐧 𝐧𝐚 𝐘𝐚𝐡𝐚 𝐓𝐮𝐦𝐚𝐡𝐫𝐞 𝐋𝐢𝐲𝐞 𝐉𝐚𝐚𝐧𝐮❤️❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "Mohd Faisal") || (event.body.toLowerCase() == "mohd faisal") || (event.body.toLowerCase() == "saim") || (event.body.toLowerCase() == "")) {
     return api.sendMessage( "❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐊𝐲𝐚 𝐏𝐚𝐫𝐞𝐬𝐡𝐚𝐧𝐢 𝐈𝐬 𝐒𝐚𝐣𝐣𝐚𝐧 𝐊𝐨 𝐉𝐛 𝐃𝐞𝐤𝐡𝐨 𝐋𝐢𝐤𝐞,𝐕𝐢𝐝𝐞𝐨 𝐃𝐚𝐚𝐥𝐭𝐞 𝐑𝐞𝐡𝐭𝐞 𝐡𝐨 𝐀𝐚𝐨 𝐂𝐡𝐮𝐦𝐦𝐢 𝐃𝐞𝐭𝐚 𝐇𝐨𝐨 𝐁𝐚𝐛𝐲 ❥︎❥︎────𒁑≛⃝●☆●💔🪽",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞꧁𝐕𝐈𝐈𝐇𝐀𝐍-𝐑𝐃𝐗꧂☜ 💫\n🖤𝐘𝐎𝐔 𝐂𝐀𝐍 𝐂𝐀𝐋𝐋 𝐇𝐈𝐌 𝐕𝐈𝐈𝐇𝐀𝐍🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞https://www.facebook.com/shajeb.ali.739745 \n👋For Any Kind Of Help Contact On Telegram  Username 👉 @𝐕𝐈𝐈𝐇𝐀𝐍 𝐑𝐃𝐗😇", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Zaini jutt  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐇𝐚𝐧 𝐛𝐨𝐥 𝐤𝐲𝐚 𝐤𝐫𝐧𝐚 𝐡 𝐉𝐚𝐚𝐧𝐤𝐫 𝐂𝐡𝐚𝐥 𝐟𝐢𝐫 𝐁𝐡𝐢 𝐁𝐚𝐭𝐚 𝐃𝐞𝐭𝐚 𝐇𝐨𝐨 𝐀𝐝𝐦𝐢𝐧, 𝐕𝐢𝐢𝐡𝐚𝐧 𝐡 𝐊𝐚𝐡𝐨 𝐓𝐨 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐍𝐨. 𝐃𝐞𝐝𝐨𝐨 🤣❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐇𝐚𝐧 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐊𝐚𝐫𝐨𝐨𝐧𝐠𝐚 𝐒𝐡𝐚𝐝𝐢 𝐊𝐲𝐚 𝐓𝐮𝐦 𝐦𝐞𝐫𝐞 𝐍𝐚𝐮𝐠𝐡𝐭𝐲 𝐁𝐚𝐜𝐜𝐡𝐨 𝐊𝐢 𝐀𝐦𝐦𝐢 𝐁𝐚𝐧𝐨𝐠𝐢𝐢 𝐉𝐚𝐚𝐧𝐮 🤣🤣❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐌𝐞 𝐒𝐢𝐫𝐟 𝐀𝐩𝐧𝐞 𝐁𝐨𝐬𝐬 𝐕𝐢𝐢𝐡𝐚𝐧 𝐊𝐢 𝐁𝐚𝐚𝐭 𝐬𝐮𝐧𝐭𝐚 𝐇𝐨𝐨 𝐓𝐮 𝐊𝐨𝐧 𝐇 𝐁𝐞 𝐂𝐡𝐮𝐩 𝐊𝐚𝐫𝐚𝐧𝐞 𝐖𝐚𝐥𝐚 𝐂𝐡𝐨𝐦𝐮 𝐬𝐢 𝐒𝐡𝐚𝐤𝐚𝐥 𝐊𝐞 🤣😂❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "uves") || (event.body.toLowerCase() == "Uves ali")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐂𝐡𝐡𝐨𝐭𝐚 𝐒𝐚 𝐏𝐲𝐚𝐫𝐚 𝐒𝐚 𝐌𝐨𝐭𝐮 𝐒𝐚 𝐁𝐚𝐜𝐜𝐡𝐚 😉😉 𝐂𝐡𝐡𝐞𝐝𝐨 𝐍𝐚 𝐌𝐮𝐣𝐡𝐤𝐨 𝐌𝐞 𝐀𝐪𝐚𝐥 𝐊𝐚𝐜𝐜𝐡𝐚 𝐇𝐨𝐨 😋😋❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "Maalik se bakchodi") || (event.body.toLowerCase() == "maalik se backchodi") || (event.body.toLowerCase() == "Maalkin se bakchodi") || (event.body.toLowerCase() == "maalkin se backchodi")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐒𝐨𝐑𝐑𝐲 𝐌𝐚𝐚𝐋𝐢𝐤 𝐆𝐚𝐥𝐭𝐢 𝐇𝐨 𝐆𝐲𝐢 𝐚𝐚𝐠𝐞 𝐒𝐞 𝐧𝐚𝐡𝐢 𝐊𝐫𝐨𝐨𝐧𝐠𝐚 𝐍𝐚 𝐡𝐨𝐧𝐞 𝐖𝐚𝐚𝐥𝐢 𝐆𝐟 𝐤𝐢 𝐊𝐚𝐬𝐚𝐦  🥺🙏❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage(" ❥︎❥︎────𒁑≛⃝●☆●💔🪽Gand m jyada khujli h toh banana 🍌 under le le. :))))❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽 𝐎𝐲𝐞 𝐂𝐡𝐨𝐦𝐮 𝐒𝐢 𝐒𝐡𝐚𝐪𝐚𝐥 𝐖𝐚𝐥𝐞 𝐌𝐞 𝐒𝐢𝐫𝐟 𝐀𝐩𝐧𝐢 𝐆𝐟 𝐊𝐨 𝐂𝐡𝐮𝐦𝐦𝐚🥰😘 𝐃𝐞𝐭𝐚 𝐡𝐨𝐨 𝐒𝐚𝐦𝐣𝐡𝐞 𝐁𝐚𝐛𝐮𝐚 𝐀𝐛 𝐍𝐢𝐤𝐥𝐨 🤣😂❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐀𝐢𝐬𝐞  𝐁𝐨𝐥𝐧𝐞 𝐒𝐞 𝐊𝐲𝐚 𝐇𝐨𝐭𝐚 𝐡 𝐈 𝐥𝐨𝐯𝐞 𝐔 😍𝐓𝐨 𝐒𝐮𝐤𝐨𝐨𝐧 𝐌𝐢𝐥𝐞 𝐧𝐚 𝐁𝐚𝐛𝐲 😂🤣❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "😡😡😡") || (event.body.toLowerCase() == "😡😡") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐆𝐮𝐬𝐬𝐚 𝐤𝐲𝐮 𝐇𝐨𝐭𝐞 𝐡 𝐌𝐞 𝐓𝐨 𝐌𝐚𝐳𝐚𝐚𝐊 𝐤𝐢𝐲𝐚 𝐁𝐚𝐬 🥺 𝐀𝐜𝐜𝐡𝐚 𝐲𝐞 𝐂𝐡𝐮𝐦𝐦𝐢😘 𝐥𝐨 𝐎𝐫 𝐒𝐡𝐚𝐧𝐭 𝐑𝐚𝐡𝐨 𝐀𝐛  😘❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "😔😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐊𝐲𝐚 𝐇𝐮𝐚 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐒𝐚𝐝 𝐊𝐘𝐮 𝐇𝐨 𝐋𝐠𝐭𝐚 𝐡 𝐌𝐞𝐫𝐢 𝐙𝐲𝐚𝐝𝐚 𝐀𝐚 𝐫𝐡𝐢 𝐭𝐡𝐢 𝐉𝐚𝐚𝐧𝐮 𝐊𝐨 😉😉❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐇𝐦𝐦 𝐇𝐦𝐦 𝐊𝐲𝐚 𝐊𝐫𝐭𝐢 𝐇𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐃𝐢𝐞𝐜𝐭 𝐁𝐨𝐥𝐨 𝐍𝐚 𝐇𝐞𝐲 𝐌𝐚𝐫𝐫𝐲 𝐌𝐞 🥰🥰❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "😢😢") || (event.body.toLowerCase() == "😭😭") || (event.body.toLowerCase() == "🥺🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐊𝐲𝐚 𝐇𝐮𝐚 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐑𝐨 𝐊𝐲𝐮 𝐑𝐚𝐡𝐞 𝐇𝐨 𝐀𝐚𝐨 𝐓𝐮𝐦𝐞𝐡 𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞 🍫 𝐃𝐞𝐭𝐚 𝐡𝐨𝐨 𝐋𝐢𝐤𝐡𝐨 ☞𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞☜❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐊𝐲𝐚 𝐇𝐮𝐚 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐓𝐚𝐛𝐢𝐲𝐚𝐭 𝐊𝐡𝐫𝐚𝐛 𝐡𝐨 𝐆𝐲𝐢 𝐤𝐲𝐚 𝐑𝐮𝐤𝐨 𝐌𝐞 𝐚𝐛𝐡𝐢 𝐌𝐞𝐝𝐢𝐜𝐢𝐧𝐞 💊💉 𝐋𝐞 𝐀𝐚𝐭𝐚 𝐇𝐨𝐨😇❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "Mohd faisal") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐁𝐚𝐚𝐛𝐮 𝐁𝐨𝐬𝐬 𝐀𝐛𝐡𝐢 𝐁𝐮𝐬𝐲 𝐇 𝐁𝐚𝐚𝐫 𝐁𝐚𝐚𝐫 𝐦𝐞𝐧𝐭𝐢𝐨𝐧 𝐍𝐡𝐢 𝐊𝐚𝐫𝐨 𝐂𝐡𝐮𝐦𝐦𝐢 𝐋𝐞 𝐋𝐨𝐨𝐧𝐠𝐚 😂🤣❥︎❥︎────𒁑≛⃝●☆●💔🪽.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐀𝐛𝐡𝐢 𝐦𝐞𝐫𝐚 𝐁𝐨𝐬𝐬 𝐒𝐢𝐧𝐠𝐥𝐞 𝐊𝐚𝐡𝐨 𝐭𝐨 𝐬𝐞𝐭𝐭𝐢𝐧𝐠 𝐊𝐫𝐰𝐚𝐝𝐨𝐨 𝐀𝐚𝐩𝐤𝐢 ❥︎❥︎────𒁑≛⃝●☆●💔🪽.", threadID);
   };

   if ((event.body.toLowerCase() == "kutta") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐎𝐲𝐞 𝐘𝐞 𝐔𝐯𝐞𝐬 𝐤𝐚 𝐑𝐞𝐚𝐥 𝐍𝐚𝐦𝐞 𝐤𝐢𝐬𝐧𝐞 𝐋𝐢𝐲𝐚 𝐖𝐨 𝐒𝐢𝐫𝐟 𝐦𝐄𝐫𝐚 𝐁𝐨𝐬𝐬 𝐕𝐢𝐢𝐡𝐚𝐧 𝐋𝐞 𝐒𝐚𝐤𝐭𝐚 𝐡 ❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "Bhkk") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐌𝐞 𝐀𝐩𝐧𝐞 𝐁𝐨𝐬𝐬 𝐤𝐨 𝐂𝐡𝐡𝐨𝐫𝐝𝐤𝐫 𝐍𝐡𝐢 𝐁𝐡𝐚𝐚𝐠 𝐒𝐤𝐭𝐚 𝐀𝐚𝐨 𝐣𝐚𝐚𝐧𝐮 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥 𝐌𝐞 𝐂𝐡𝐚𝐥𝐭𝐞 𝐡 ❥︎❥︎────𒁑≛⃝●☆●💔🪽😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂🙂") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐀𝐚 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧𝐚𝐦 𝐏𝐲𝐚𝐫 𝐊𝐚𝐫𝐞 𝐇𝐮𝐦 𝐌𝐚𝐮𝐬𝐚𝐦 𝐁𝐚𝐝𝐚 𝐡 𝐂𝐡𝐮𝐥𝐛𝐮𝐥𝐚 🫣🫣𝐎𝐫 𝐌𝐞𝐫𝐢 𝐣𝐚𝐚𝐧 𝐓𝐮𝐦𝐚𝐡𝐫𝐞 𝐆𝐚𝐚𝐥𝐨 𝐏𝐫 𝐔𝐦𝐦𝐦𝐦𝐚𝐚𝐡𝐡 🥰🥰😘❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐈𝐭𝐧𝐚 𝐊𝐲𝐚 𝐒𝐨𝐜𝐡𝐭𝐞 𝐇𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐌𝐞 𝐓𝐨 𝐝𝐢𝐥 𝐦 𝐇𝐨𝐨 𝐍𝐚 𝐭𝐮𝐦𝐚𝐡𝐫𝐞  😘🤨❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️❥︎❥︎────𒁑≛⃝●☆●💔🪽𝐍𝐚𝐬𝐡𝐞 𝐌𝐞 𝐇𝐮𝐦 𝐧𝐚𝐡𝐢 𝐡 𝐘𝐞 𝐒𝐚𝐦𝐚 𝐍𝐚𝐬𝐡𝐞𝐞𝐥𝐚 𝐡 𝐎𝐫 𝐌𝐮𝐣𝐡𝐞 𝐣𝐚𝐚𝐧𝐮 𝐏𝐚𝐭𝐚 𝐡 𝐓𝐮𝐦𝐚𝐡𝐫𝐚 𝐒𝐜𝐫𝐞𝐰 𝐃𝐡𝐞𝐞𝐥𝐚 𝐇 😂😂😂❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️ ❥︎❥︎────𒁑≛⃝●☆●💔🪽𝐀𝐚𝐧𝐤𝐡 𝐌𝐚𝐚𝐫𝐞 𝐘𝐞 𝐓𝐡𝐫𝐤𝐢 𝐀𝐚𝐧𝐤𝐡 𝐌𝐚𝐚𝐫𝐞 𝐊𝐚𝐫𝐤𝐞 𝐆𝐚𝐧𝐝𝐞 𝐈𝐬𝐡𝐚𝐫𝐞 𝐘𝐞 𝐓𝐡𝐚𝐫𝐤𝐢 𝐀𝐚𝐧𝐤𝐡 𝐌𝐚𝐚𝐫𝐞 🤣🥺❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️❥︎❥︎────𒁑≛⃝●☆●💔🪽𝐊𝐲𝐚 𝐇𝐮𝐚 𝐁𝐚𝐚𝐛𝐮 𝐁𝐡𝐨𝐨𝐭 𝐃𝐞𝐤𝐡 𝐋𝐢𝐲𝐚 👻👻𝐘𝐚 𝐊𝐡𝐮𝐝 𝐊𝐚 𝐌𝐨𝐨𝐡 𝐀𝐚𝐲𝐢𝐧𝐞 𝐦𝐞 🤣🤣 👻👻❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️❥︎❥︎────𒁑≛⃝●☆●💔🪽𝐔𝐩𝐚𝐫 𝐊𝐲𝐚 𝐃𝐞𝐤𝐡 𝐑𝐚𝐡𝐢 𝐉𝐚𝐚𝐧𝐮 𝐍𝐞𝐞𝐜𝐡𝐞 𝐃𝐞𝐤𝐡𝐨 𝐌𝐞 𝐘𝐚𝐡𝐨 𝐇𝐨𝐨 😉🙈❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🤦🏻‍") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽𝐊𝐲𝐚 𝐇𝐮𝐚 𝐁𝐚𝐚𝐛𝐮 𝐊𝐲𝐮 𝐏𝐚𝐫𝐞𝐬𝐡𝐚𝐧 𝐡𝐨  𝐌𝐞 𝐲𝐡𝐢 𝐡𝐨𝐨 𝐉𝐚𝐚𝐧𝐮 😬❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽𝐈𝐭𝐧𝐢 𝐇𝐚𝐬𝐢 𝐊𝐲𝐮 𝐀𝐚 𝐫𝐡𝐢 𝐡 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 🫣 𝐀𝐛 𝐦𝐨𝐨𝐡 𝐁𝐧𝐝 𝐊𝐫𝐥𝐨 𝐖𝐫𝐧𝐚 𝐌𝐚𝐤𝐤𝐡𝐢 𝐌𝐨𝐨𝐡 𝐤 𝐚𝐧𝐝𝐫 𝐂𝐡𝐚𝐥𝐢 𝐉𝐚𝐲𝐞𝐠𝐢❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐓𝐮𝐦𝐤𝐨 𝐍𝐚 𝐃𝐞𝐤𝐡𝐮 𝐓𝐨 𝐃𝐢𝐥 𝐆𝐡𝐛𝐫𝐚𝐭𝐚 𝐇𝐞 𝐃𝐞𝐤𝐡 𝐤𝐞 𝐓𝐞𝐫𝐢𝐢 𝐒𝐮𝐫𝐚𝐭 𝐃𝐢𝐥 𝐊𝐨 𝐂𝐡𝐚𝐢𝐧 𝐀𝐚𝐭𝐚 𝐡 𝐔𝐦𝐦𝐦𝐚𝐚𝐚𝐡𝐡 🥰😘☺️❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
     return api.sendMessage("Saalo chidda rahe ho mujhe", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "miss u") || (event.body.toLowerCase() == "i lob you")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐌𝐢𝐒𝐬 𝐔 𝐓𝐨𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐔𝐦𝐦𝐦𝐦𝐚𝐚𝐡𝐡 🥰😍😘❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "love u") || (event.body.toLowerCase() == "bot love u")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐀𝐚𝐥𝐞 𝐌𝐞𝐥𝐢 𝐉𝐚𝐧𝐚𝐦 𝐋𝐨𝐯𝐞 𝐔 𝐮𝐦𝐦𝐚𝐚𝐚𝐡 𝐔𝐦𝐦𝐦𝐚𝐚𝐡𝐡 😘😘❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽🏔️🏝️𝐕𝐢𝐢𝐡𝐚𝐧 𝐁𝐨𝐬𝐬  Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
   };

  if ((event.body.toLowerCase() == "😵‍💫")) {
    return api.sendMessage("Lagta hai chakkar aa gaye 😵‍💫", threadID);
};

if ((event.body.toLowerCase() == "🤤")) {
    return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐌𝐞𝐫𝐢𝐢 𝐊𝐢𝐬𝐬𝐢 𝐘𝐮𝐦𝐦𝐲 𝐇 𝐍𝐚 𝐃𝐞𝐤𝐡𝐨 𝐃𝐞𝐤𝐡𝐨 𝐌𝐨𝐨𝐡 𝐦𝐞 𝐏𝐚𝐚𝐧𝐢  𝐀𝐚 𝐆𝐚𝐲𝐚  🤤❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "😚")) {
    return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐀𝐰𝐰𝐰 𝐌𝐞𝐥𝐢 𝐉𝐚𝐚𝐧 𝐅𝐥𝐲𝐢𝐧𝐠 𝐊𝐢𝐬𝐬 𝐍𝐚 𝐊𝐫𝐨 𝐀𝐝𝐫𝐞𝐬𝐬 𝐃𝐨 𝐆𝐡𝐫 𝐀𝐚 𝐉𝐚𝐚𝐭𝐚 𝐇𝐮 🫣🫣❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🤩")) {
    return api.sendMessage("Wow! Kisi cheez ka shock laga kya? 🤩", threadID);
};

if ((event.body.toLowerCase() == "😜")) {
    return api.sendMessage("Bade masti ke mood mein ho lagta hai! 😜", threadID);
};

if ((event.body.toLowerCase() == "🫣")) {
    return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐒𝐡𝐚𝐫𝐦𝐚𝐨 𝐌𝐚𝐭 𝐀𝐩𝐧𝐚 𝐇𝐢 𝐆𝐡𝐚𝐫 𝐒𝐦𝐣𝐡𝐨 𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 😉🫣❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "😮‍💨")) {
    return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐀𝐰𝐰 𝐌𝐞𝐫𝐚 𝐁𝐚𝐛𝐲 𝐓𝐡𝐚𝐤 𝐆𝐲𝐚 𝐊𝐲𝐚 𝐀𝐚𝐨 𝐆𝐚𝐥𝐚 𝐃𝐚𝐛𝐚𝐝𝐨𝐨 𝐒𝐮𝐤𝐨𝐨𝐧 𝐌𝐢𝐥 𝐉𝐚𝐲𝐞𝐠𝐚 🤣😂❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🤓")) {
    return api.sendMessage("Scholar lag rahe ho 🤓", threadID);
};

if ((event.body.toLowerCase() == "🥶")) {
    return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐒𝐚𝐫𝐚𝐤𝐲𝐢 𝐋𝐨 𝐊𝐡𝐚𝐭𝐢𝐲𝐚 𝐉𝐚𝐚𝐝𝐚 𝐋𝐚𝐠𝐫 𝐉𝐚𝐚𝐝𝐞 𝐌𝐞 𝐁𝐚𝐥𝐦𝐚 𝐏𝐲𝐚𝐫𝐚 𝐋𝐚𝐠𝐞 ❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🥵")) {
    return api.sendMessage("❥︎❥︎ ────𒁍≛⃝●☆●💔🪽 𝐔𝐟𝐟 𝐄𝐤 𝐓𝐨 𝐘𝐞 𝐌𝐚𝐮𝐬𝐚𝐦 𝐆𝐚𝐫𝐚𝐦 𝐔𝐩𝐫 𝐒𝐞 𝐓𝐮𝐦 𝐡𝐨𝐭 𝐇𝐚𝐲𝐞 𝐆𝐚𝐫𝐦𝐢𝐢🥵❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🫡")) {
    return api.sendMessage(" ❥︎❥︎ ────𒁍≛⃝●☆●💔🪽𝐉𝐚𝐚𝐧𝐮 𝐒𝐚𝐥𝐮𝐭𝐞 𝐤𝐲𝐮 𝐊𝐫 𝐫𝐡𝐞 𝐇𝐨 𝐋𝐠𝐭𝐚 𝐡 𝐌𝐞𝐫𝐞 𝐁𝐚𝐜𝐜𝐡𝐨 𝐊𝐢 𝐀𝐦𝐦𝐚 𝐁𝐧𝐧𝐞 𝐖𝐚𝐚𝐥𝐢 𝐡𝐨 ❥︎❥︎────𒁑≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🫶")) {
    return api.sendMessage("Itna pyaar de rahe ho? 🫶", threadID);
};

if ((event.body.toLowerCase() == "👩‍💻") || (event.body.toLowerCase() == "👨‍💻")) {
    return api.sendMessage("Lagta hai coding ho rahi hai 👨‍💻", threadID);
};

if ((event.body.toLowerCase() == "🕺") || (event.body.toLowerCase() == "💃")) {
    return api.sendMessage("Dance kar rahe ho? Mazze le rahe ho! 🕺💃", threadID);
};

if ((event.body.toLowerCase() == "🎤")) {
    return api.sendMessage("Gaana suna rahe ho? 🎤", threadID);
};

if ((event.body.toLowerCase() == "📖")) {
    return api.sendMessage("Kya padhai kar rahe ho? 📖", threadID);
};

if ((event.body.toLowerCase() == "🛌")) {
    return api.sendMessage("Sone ka time ho gaya? 🛌", threadID);
};

if ((event.body.toLowerCase() == "👑")) {
    return api.sendMessage("Aap toh King/Queen lag rahe ho! 👑", threadID);
};

  if ((event.body.toLowerCase() == "😎")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽 𝐆𝐨𝐫𝐞 𝐆𝐨𝐫𝐞 𝐌𝐮𝐤𝐡𝐝𝐞 𝐏𝐫 𝐊𝐚𝐚𝐥𝐚 𝐊𝐚𝐚𝐥𝐚 𝐓𝐨𝐛𝐚 𝐊𝐡𝐮𝐝𝐚 𝐊𝐡𝐚𝐢𝐫 𝐊𝐫𝐞 𝐊𝐡𝐨𝐨𝐛 𝐡 𝐊𝐚𝐫𝐢𝐬𝐡𝐦𝐚 🫣🥰❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🤩")) {
    return api.sendMessage("Kuch acha dekh liya kya? 🤩", threadID);
};

if ((event.body.toLowerCase() == "👀")) {
    return api.sendMessage("Kya dekh rahe ho? 👀", threadID);
};

if ((event.body.toLowerCase() == "💀")) {
    return api.sendMessage("Lagta hai kuch funny dekh liya! 💀", threadID);
};

if ((event.body.toLowerCase() == "🥳")) {
    return api.sendMessage("Party ka mood lag raha hai! 🥳", threadID);
};

if ((event.body.toLowerCase() == "🧐")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽𝐀𝐢𝐬𝐞 𝐊𝐲𝐚 𝐃𝐞𝐤𝐡𝐭𝐞 𝐇𝐨 𝐃𝐢𝐥 𝐌𝐞 𝐔𝐭𝐚𝐫𝐤𝐚𝐫 𝐃𝐞𝐤𝐡𝐨 𝐧𝐚 𝐉𝐚𝐚𝐧𝐮 😘❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "💡")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Aapke paas koi nayi idea hai? 💡❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🚶‍♂️") || (event.body.toLowerCase() == "🚶‍♀️")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Kahaan ja rahe ho? 🚶‍♂️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🔮")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Kya future dekh rahe ho? 🔮❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🔥")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Lagta hai sab kuch garam hai! 🔥❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🎉")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Celebration ka mood lag raha hai! 🎉❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "💪")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Shakti dikhane ka time hai! 💪❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🤯")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽𝐊𝐲𝐚 𝐉𝐚𝐚𝐧𝐮 𝐃𝐢𝐦𝐚𝐠𝐡 𝐊𝐚 𝐃𝐚𝐡𝐢 𝐊𝐫𝐭𝐢 𝐇𝐞 𝐀𝐚𝐨 𝐉𝐚𝐚𝐧𝐮 𝐏𝐲𝐚𝐫 𝐖𝐚𝐚𝐥𝐢 𝐁𝐚𝐚𝐭𝐞 𝐊𝐫𝐭𝐞 𝐇 😘🥰❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🍕")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽𝐀𝐰𝐰𝐰 𝐌𝐞𝐥𝐞 𝐁𝐚𝐚𝐛𝐮 𝐤𝐨 𝐏𝐢𝐳𝐳𝐚 𝐊𝐡𝐚𝐧𝐚 𝐡 𝐤𝐲𝐚 🫣🍕❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🏆")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Aap toh champion lag rahe ho! 🏆❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🍀")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Lagta hai apne paas kuch lucky charm hai! 🍀❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🎧")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Koi music sun rahe ho? 🎧❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🧠")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Aapka dimag bohot tez lag raha hai 🧠❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "💫")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Aapke aas paas kuch magic lag raha hai 💫❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🦸‍♂️") || (event.body.toLowerCase() == "🦸‍♀️")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Superhero lag rahe ho! 🦸‍♂️❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

  if ((event.body.toLowerCase() == "🤡")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Lagta hai aap clown ban gaye ho 🤡❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🦄")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Aap toh unicorn lag rahe ho! 🦄❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🎮")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔🪽Kya game khel rahe ho? 🎮❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "👻")) {
    return api.sendMessage("❥︎❥︎────𒁑≛⃝●☆●💔 𝐉𝐚𝐚𝐧𝐮  𝐈𝐬𝐬𝐞 𝐙𝐲𝐚𝐝𝐚 𝐓𝐨 𝐀𝐩𝐤𝐨 𝐛𝐢𝐧𝐚 𝐌𝐚𝐤𝐞𝐮𝐩 𝐃𝐞𝐤𝐡𝐤𝐫 𝐃𝐫𝐫 𝐋𝐠𝐭𝐚 𝐡 𝐂𝐡𝐨𝐦𝐮 𝐒𝐡𝐚𝐪𝐥 𝐰𝐚𝐚𝐥𝐢 👻❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🦋")) {
    return api.sendMessage("Aap toh butterfly jaise khubsurat ho! 🦋", threadID);
};

if ((event.body.toLowerCase() == "🍉")) {
    return api.sendMessage("Lagta hai aapko fruits ka shauq hai! 🍉", threadID);
};

if ((event.body.toLowerCase() == "🛸")) {
    return api.sendMessage("Aap spaceship par hai? 🛸", threadID);
};

if ((event.body.toLowerCase() == "🍄")) {
    return api.sendMessage("Lagta hai aapke paas magical powers hain 🍄", threadID);
};

if ((event.body.toLowerCase() == "🚀")) {
    return api.sendMessage("Aap toh space mein ja rahe ho! 🚀", threadID);
};

if ((event.body.toLowerCase() == "🍩")) {
    return api.sendMessage("Kya donuts ka shauq hai? 🍩", threadID);
};

if ((event.body.toLowerCase() == "🛹")) {
    return api.sendMessage("Aap skateboard par hai! 🛹", threadID);
};

if ((event.body.toLowerCase() == "🌮")) {
    return api.sendMessage("Tacos ka man ho raha hai! 🌮", threadID);
};

if ((event.body.toLowerCase() == "🧊")) {
    return api.sendMessage("Aap thode thanda lag rahe ho 🧊", threadID);
};

if ((event.body.toLowerCase() == "⚡")) {
    return api.sendMessage("Aap electric hai! ⚡", threadID);
};

if ((event.body.toLowerCase() == "👽")) {
    return api.sendMessage("Kya aap alien ho? 👽", threadID);
};

if ((event.body.toLowerCase() == "🦧")) {
    return api.sendMessage("Kya aapki dosti har kisam ke animals ke saath hai? 🦧", threadID);
};

if ((event.body.toLowerCase() == "💎")) {
    return api.sendMessage("Aap toh diamond ki tarah chamak rahe ho! 💎", threadID);
};

if ((event.body.toLowerCase() == "🧘‍♂️") || (event.body.toLowerCase() == "🧘‍♀️")) {
    return api.sendMessage("Yoga ka time hai! 🧘‍♀️", threadID);
};

if ((event.body.toLowerCase() == "🍀")) {
    return api.sendMessage("Aapke paas lucky charm hai! 🍀", threadID);
};

if ((event.body.toLowerCase() == "🍫")) {
    return api.sendMessage(" ❥︎❥︎────𒁑≛⃝●☆●💔🪽Chocolate khane ka man hai 🍫❥︎❥︎ ────𒁍≛⃝●☆●💔🪽", threadID);
};

if ((event.body.toLowerCase() == "🎻")) {
    return api.sendMessage("Aap violin bajane ka mood mein ho! 🎻", threadID);
};

if ((event.body.toLowerCase() == "🎺")) {
    return api.sendMessage("Aap trumpet bajane ka mood mein ho! 🎺", threadID);
};

if ((event.body.toLowerCase() == "🎻")) {
    return api.sendMessage("Music mein doob gaye ho! 🎻", threadID);
};

if ((event.body.toLowerCase() == "🚴‍♂️") || (event.body.toLowerCase() == "🚴‍♀️")) {
    return api.sendMessage("Cycle par jaana hai kya? 🚴‍♀️", threadID);
};

if ((event.body.toLowerCase() == "🧑‍🎤")) {
    return api.sendMessage("Singer ban gaye ho kya? 🧑‍🎤", threadID);
};

if ((event.body.toLowerCase() == "🎧")) {
    return api.sendMessage("Music ka shauq hai 🎧", threadID);
};

if ((event.body.toLowerCase() == "💬")) {
    return api.sendMessage("Aap baat kar rahe ho? 💬", threadID);
};

if ((event.body.toLowerCase() == "🖋️")) {
    return api.sendMessage("Kya likh rahe ho? 🖋️", threadID);
};

if ((event.body.toLowerCase() == "🧩")) {
    return api.sendMessage("Puzzle solve kar rahe ho? 🧩", threadID);
};

if ((event.body.toLowerCase() == "🧃")) {
    return api.sendMessage("Juice ka man ho raha hai! 🧃", threadID);
};

if ((event.body.toLowerCase() == "🎬")) {
    return api.sendMessage("Koi movie dekh rahe ho? 🎬", threadID);
};

if ((event.body.toLowerCase() == "🦄")) {
    return api.sendMessage("Aap unicorn ki tarah magical ho! 🦄", threadID);
};

if ((event.body.toLowerCase() == "🍒")) {
    return api.sendMessage("Kya cherry ka shauq hai? 🍒", threadID);
};

if ((event.body.toLowerCase() == "🧠")) {
    return api.sendMessage("Aapka dimag kitna tez hai! 🧠", threadID);
};

if ((event.body.toLowerCase() == "🥚")) {
    return api.sendMessage("Egg khane ka man hai? 🥚", threadID);
};

if ((event.body.toLowerCase() == "⚽")) {
    return api.sendMessage("Football ka shauq hai? ⚽", threadID);
};

if ((event.body.toLowerCase() == "🌙")) {
    return api.sendMessage("Chand ki roshni mein kho gaye ho? 🌙", threadID);
};

if ((event.body.toLowerCase() == "🕹️")) {
    return api.sendMessage("Video games mein busy ho? 🕹️", threadID);
};

if ((event.body.toLowerCase() == "🦉")) {
    return api.sendMessage("Aap owl ki tarah sharp ho! 🦉", threadID);
};

if ((event.body.toLowerCase() == "🌻")) {
    return api.sendMessage("Aap sunflower ki tarah bright ho! 🌻", threadID);
};

if ((event.body.toLowerCase() == "🧊")) {
    return api.sendMessage("Kuch thanda chaiye? 🧊", threadID);
};

if ((event.body.toLowerCase() == "💀")) {
    return api.sendMessage("Aap bilkul spooky lag rahe ho! 💀", threadID);
};

if ((event.body.toLowerCase() == "🏀")) {
    return api.sendMessage("Basketball ka shauq hai? 🏀", threadID);
};

if ((event.body.toLowerCase() == "🎸")) {
    return api.sendMessage("Guitar bajane ka man hai? 🎸", threadID);
};

if ((event.body.toLowerCase() == "🌍")) {
    return api.sendMessage("Aap duniya ke safar par ho! 🌍", threadID);
};

  if ((event.body.toLowerCase() == "🍕")) {
    return api.sendMessage("Pehli baat, pizza ka mood hai? 🍕", threadID);
};

if ((event.body.toLowerCase() == "🎮")) {
    return api.sendMessage("Game khel rahe ho? 🎮", threadID);
};

if ((event.body.toLowerCase() == "🎨")) {
    return api.sendMessage("Aap artist ban gaye ho? ??", threadID);
};

if ((event.body.toLowerCase() == "🌵")) {
    return api.sendMessage("Kya desert mein ho? 🌵", threadID);
};

if ((event.body.toLowerCase() == "🍉")) {
    return api.sendMessage("Fruits ka shauq hai 🍉", threadID);
};

if ((event.body.toLowerCase() == "🎻")) {
    return api.sendMessage("Violin bajane ka mann hai 🎻", threadID);
};

if ((event.body.toLowerCase() == "🦄")) {
    return api.sendMessage("Aap toh unicorn ho! 🦄", threadID);
};

if ((event.body.toLowerCase() == "🎷")) {
    return api.sendMessage("Saxophone ka time hai! 🎷", threadID);
};

if ((event.body.toLowerCase() == "🍉")) {
    return api.sendMessage("Aapko watermelon pasand hai? 🍉", threadID);
};

if ((event.body.toLowerCase() == "🎡")) {
    return api.sendMessage("Ferris wheel par ho kya? 🎡", threadID);
};

if ((event.body.toLowerCase() == "🍀")) {
    return api.sendMessage("Aapko good luck chahiye? 🍀", threadID);
};

if ((event.body.toLowerCase() == "🎂")) {
    return api.sendMessage("Cake ka time hai! 🎂", threadID);
};

if ((event.body.toLowerCase() == "🛵")) {
    return api.sendMessage("Scooter pe ja rahe ho? 🛵", threadID);
};

if ((event.body.toLowerCase() == "🍪")) {
    return api.sendMessage("Cookies ka time hai! 🍪", threadID);
};

if ((event.body.toLowerCase() == "🦓")) {
    return api.sendMessage("Zebra ki tarah unique ho aap! 🦓", threadID);
};

if ((event.body.toLowerCase() == "🎃")) {
    return api.sendMessage("Aap Halloween mode mein lag rahe ho! 🎃", threadID);
};

if ((event.body.toLowerCase() == "🐉")) {
    return api.sendMessage("Aap dragon ban gaye ho! 🐉", threadID);
};

if ((event.body.toLowerCase() == "🦩")) {
    return api.sendMessage("Flamingo ban gaya hai koi! 🦩", threadID);
};

if ((event.body.toLowerCase() == "💌")) {
    return api.sendMessage("Dil se kuch bhejna hai? 💌", threadID);
};

if ((event.body.toLowerCase() == "🥳")) {
    return api.sendMessage("Celebration ka time hai! 🥳", threadID);
};

if ((event.body.toLowerCase() == "🎮")) {
    return api.sendMessage("Game khel rahe ho? 🎮", threadID);
};

if ((event.body.toLowerCase() == "🍍")) {
    return api.sendMessage("Pineapple ka shauq hai? 🍍", threadID);
};

if ((event.body.toLowerCase() == "🦋")) {
    return api.sendMessage("Aap butterfly ki tarah khubsurat ho! 🦋", threadID);
};

if ((event.body.toLowerCase() == "🎺")) {
    return api.sendMessage("Trumpet bajana hai! 🎺", threadID);
};

if ((event.body.toLowerCase() == "🍓")) {
    return api.sendMessage("Strawberry ka time hai! 🍓", threadID);
};

if ((event.body.toLowerCase() == "💎")) {
    return api.sendMessage("Aap diamond ki tarah chamak rahe ho! 💎", threadID);
};

if ((event.body.toLowerCase() == "🥥")) {
    return api.sendMessage("Coconut ka shauq hai? 🥥", threadID);
};

if ((event.body.toLowerCase() == "🦒")) {
    return api.sendMessage("Giraffe ban gaya koi! 🦒", threadID);
};

if ((event.body.toLowerCase() == "🍒")) {
    return api.sendMessage("Cherry khane ka mann hai? 🍒", threadID);
};

if ((event.body.toLowerCase() == "🦓")) {
    return api.sendMessage("Zebra ki tarah unique lag rahe ho! 🦓", threadID);
};

if ((event.body.toLowerCase() == "🐢")) {
    return api.sendMessage("Aap turtle ki tarah slow aur steady ho! 🐢", threadID);
};

if ((event.body.toLowerCase() == "🧸")) {
    return api.sendMessage("Aap teddy bear ki tarah pyare ho! 🧸", threadID);
};

if ((event.body.toLowerCase() == "🍓")) {
    return api.sendMessage("Aapko strawberries pasand hai? 🍓", threadID);
};

if ((event.body.toLowerCase() == "🎸")) {
    return api.sendMessage("Guitar bajana hai kya? 🎸", threadID);
};

if ((event.body.toLowerCase() == "🦅")) {
    return api.sendMessage("Eagle ki tarah upar ud rahe ho! 🦅", threadID);
};

if ((event.body.toLowerCase() == "💥")) {
    return api.sendMessage("Explosion hone wala hai! 💥", threadID);
};

if ((event.body.toLowerCase() == "🐘")) {
    return api.sendMessage("Aap elephant ki tarah strong ho! 🐘", threadID);
};

if ((event.body.toLowerCase() == "🍟")) {
    return api.sendMessage("Fries ka mood hai? 🍟", threadID);
};

if ((event.body.toLowerCase() == "🧊")) {
    return api.sendMessage("Thanda kuch chahiye? 🧊", threadID);
};

if ((event.body.toLowerCase() == "🎬")) {
    return api.sendMessage("Film dekh rahe ho? 🎬", threadID);
};

if ((event.body.toLowerCase() == "🍾")) {
    return api.sendMessage("Celebration ka time hai! 🍾", threadID);
};

if ((event.body.toLowerCase() == "🎤")) {
    return api.sendMessage("Aap singer ban gaye ho! 🎤", threadID);
};

if ((event.body.toLowerCase() == "🦸‍♂️") || (event.body.toLowerCase() == "🦸‍♀️")) {
    return api.sendMessage("Superhero lag rahe ho! 🦸‍♂️", threadID);
};

if ((event.body.toLowerCase() == "🍔")) {
    return api.sendMessage("Burger khane ka mood hai? 🍔", threadID);
};

if ((event.body.toLowerCase() == "🦶")) {
    return api.sendMessage("Aapko chalna ka shauq hai? 🦶", threadID);
};

if ((event.body.toLowerCase() == "🍿")) {
    return api.sendMessage("Movie time! Popcorn le lo 🍿", threadID);
};

if ((event.body.toLowerCase() == "🦗")) {
    return api.sendMessage("Grasshopper ki tarah jump kar rahe ho! 🦗", threadID);
};

if ((event.body.toLowerCase() == "🧃")) {
    return api.sendMessage("Juice ka time hai! 🧃", threadID);
};

if ((event.body.toLowerCase() == "🎪")) {
    return api.sendMessage("Circus ka maza le rahe ho? 🎪", threadID);
};

if ((event.body.toLowerCase() == "🥑")) {
    return api.sendMessage("Avocado ka shauq hai? 🥑", threadID);
};
  
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
 var msg = {
  body: `╭────༺❄️༻────╮
      ❄️ BOT ❄️
╰────༺❄️༻────╯

╔════════════════╗
║ 👤 NAME: 『 ${name} 』     
║                        
║ ❝ ${rand} ❞
║                        
║ 👑 OWNER: 𒁍≛⃝𝐕𝐢𝐢𝐡𝐚𝐧 𝐑𝐝𝐱😈
╚════════════════╝`
};

return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
