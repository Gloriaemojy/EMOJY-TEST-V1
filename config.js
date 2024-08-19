//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254706024086";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU4wdmljNEROWjZzMkk1TngwSnVEdE5tTkVnV21xWDVlb0s1NGJpSVRsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjlrVjVWZmo2WTEra0RTMFNublA3VTF5cWtEMVVLeCtGV1MrLzJvdTNIcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDRVpPdkhuWExHWHhuQzRwMDQyNXpjUnAyWkR3bzVJVEFXVmxhYThzQ21ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQVHE2ekVHYUFtbkJ5SmFmUXkzWStJOUlaVXc1elV1czRmcFBMckIvc2pnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDU0lYUENBMnlXWTVvWDlqZk1kYnhMSVprQW40cXVpQ2hXRDE5RGlKSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZXbDQvbEpNc2RmT0MrcG9nZzhNcXRYc1BRNlZ3RXJvdlJhVDBBZlJueFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hYbGI5SUtFOGV2bW40MUZKS3JDWEtZOTRsZzBFN2crZjA4SGV2YVAwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOHRnOU91cFVWWElVODB2cUNBS0pScjFaQTJ3bGxuTUhVcllXbE90MmsxYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVwaDErNjFOdnJsWHdIYWZxT3I4VWNkcUNXVEx1ZVd2WWN2bG5ySGR1c0I0NW5BSlZ2TE4vNEpDaUs4VWF2Y21QOExILzZtOVY5RmdOWE8rQzU1d2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkxLCJhZHZTZWNyZXRLZXkiOiJFUDUzSHN0LzAzcVEvNGNEYVpOaW5vZHNqNUt1cDJVN0dvekxNN2c3RDZZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIRVBkei1JS1FiR2NpREdnZU9SVWpnIiwicGhvbmVJZCI6ImM2NTE2MTIxLTY3OGMtNDc1NS05YjBhLTk1MzY4MGE4NWM1OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuL0thRWxiWkl2ZnRDei9ESkx3NlBrMEI2aFU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZML2txb21CWGtyYnZPU0NZOUdRc21LS0tmWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ012dW5QQUhFUHI5aTdZR0dDRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1jL1Nrd092cGNXSkFKUzIzcWtBekFoZXNFeHdUekNsWFZ2aG9CMWtPRlk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ii95cDA0Um9oRmM1ZUdUbDl2MTdKWnYzQkZSYzJFeG1hWG9ieGxheDdCS3V1NThCcElWcjM5MWZFU2ZrcXdOSlJNMGE3VzA2ODJVRW5aNHJQRXl1SEJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJBUzRMZUVDRHJkUVBoNzhHSkRhK0hOSWJQa3Q4ZVZ6K0N1cU1ISUZ3cDl2andRZDRHekN3NzhLR1RrT2FTSms2MExFWmtxc3JBbnA2c0U1Yms4bVpoUT09In0sIm1lIjp7ImlkIjoiMjU0NzA2MDI0MDg2OjczQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkVtb2p5X0JXWSIsImxpZCI6IjI4MDcwMjE2Nzg2NzUwNTo3M0BsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA2MDI0MDg2OjczQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpuUDBwTURyNlhGaVFDVXR0NnBBTXdJWHJCTWNFOHdwVjFiNGFBZFpEaFcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNDA1NTMwNiwibGFzdFByb3BIYXNoIjoiMjhaUmxhIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPZGYifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "Emojy BWY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
