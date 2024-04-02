const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="bot@ronaldostr.cloud"
global.location="Indonesia"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mongodb-face:i21c0wmvBaET8ohq@yonzziinstance.0hy6tof.mongodb.net/?retryWrites=true&w=majority&appName=YonzziInstance"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mongodb-face:i21c0wmvBaET8ohq@yonzziinstance.0hy6tof.mongodb.net/?retryWrites=true&w=majority&appName=YonzziInstance"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Jakarta";
global.github=process.env.GITHUB|| "https://github.com/Olshinte/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/DkTVzWD13w2CQrYcCOJP4u";
global.website=process.env.GURL || "https://ronaldostr.cloud" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "62895803299969" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "62895803299969";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "62895803299969,628xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_31_04_02_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiMkxRU1hxOUtBRGJKcGUrNVlYS2V4QlBEZm1ueUZxWFhmUWdld3RTcUtFcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlVNU0pqQjAvL3Yva3c5WWdUdFQvd3pqaGhZUnZidldEVXMvcmpnRTkyMEE9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiY0oxTXRsUjVRbnBtWXBkMnJUT1YyTWdpUElieEtsdzBaRVlkUklvZFMyYz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImVVTFBGNjNEUVlGYUFnODF0T0JjWkZnZjFlVW5GN1BFZHFNWWJNblFvQms9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwibU8rZ2lMOXg1aGdneGVqa0t2UmE1TUtIL0dVOXFPRWJlZ3ZQYWovYjBFbz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInFKTmRZeVUzOGlkNXFMN0hJUXdYcjR0cmhmdndQOXU4L1g5elF1ZGdFekE9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJrRHBqUi81N2xjZjBSR1FYUUhuMXhHcXY0WlFWb0Fwa1FPSm9DOXBOMmwwPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidVk1Q3dBNEx1enh4TnNCbHFpMDBLOCtrcmF4aXdjbDBaWjVmUVM0dmNXQT1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJJZHFHS2FzRmdtNUV3NjJwcjRLTEpYN2N0b2pJL01hbStuVDk4UXVqRktXZEdsRFRkcU9JdlJ5WHhCTFJIUlhNWjhTU1ZTb2phOERUZlVVS2hYQmVoZz09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTg1LFwiYWR2U2VjcmV0S2V5XCI6XCJMNW83dDI1N3p0K0s4YmZzZ0U2OWFlWGJoZ2JmVDgxaVBKZzVsbHhPd21RPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiNjI4MjI3NzA4OTk0NEBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCI4MTAwQzAyQjhFMDc0MEMxMkMwN0UyOERCODYxQ0E3NFwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEyMDE3ODkyfSx7XCJrZXlcIjp7XCJyZW1vdGVKaWRcIjpcIjYyODIyNzcwODk5NDRAcy53aGF0c2FwcC5uZXRcIixcImZyb21NZVwiOnRydWUsXCJpZFwiOlwiQ0FBNTE0MjhGREQ5RTJFNkZBMzFBOTRBRUU2REU4MDhcIn0sXCJtZXNzYWdlVGltZXN0YW1wXCI6MTcxMjAxNzg5Mn0se1wia2V5XCI6e1wicmVtb3RlSmlkXCI6XCI2MjgyMjc3MDg5OTQ0QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkFBNUM5ODVENTA1RkFFRTBDNDdGMUNBOUY0NUY3MDhDXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTIwMTc4OTR9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiNjI4MjI3NzA4OTk0NEBzLndoYXRzYXBwLm5ldFwiLFwiZnJvbU1lXCI6dHJ1ZSxcImlkXCI6XCIwMTI1RDdBRDAyMDNEM0U1REExMTA3MkM5QjQ3RUQ4MVwifSxcIm1lc3NhZ2VUaW1lc3RhbXBcIjoxNzEyMDE3ODk0fV0sXCJuZXh0UHJlS2V5SWRcIjozMSxcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6MzEsXCJhY2NvdW50U3luY0NvdW50ZXJcIjoxLFwiYWNjb3VudFNldHRpbmdzXCI6e1widW5hcmNoaXZlQ2hhdHNcIjpmYWxzZX0sXCJkZXZpY2VJZFwiOlwiWmQ0MjRMaktRQ1NRSHVlcjRYaVpSQVwiLFwicGhvbmVJZFwiOlwiZTMxYjVmYjMtNDEzMC00YzJkLWEyYWYtYzU0MjZhMTU5YmRlXCIsXCJpZGVudGl0eUlkXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJFSnZObTRqMlZUY1VTZlkwQy9kNDRiN2ZpYTQ9XCJ9LFwicmVnaXN0ZXJlZFwiOnRydWUsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwia0lVUERLVjRHZ2FGTEllUk9yaTdaNFp3WHFnPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwicGFpcmluZ0NvZGVcIjpcIkhDU0ZTRUYyXCIsXCJtZVwiOntcImlkXCI6XCI2MjgyMjc3MDg5OTQ0OjFAcy53aGF0c2FwcC5uZXRcIixcImxpZFwiOlwiMTIwMTEzNTA4Mzg4OTgyOjFAbGlkXCIsXCJuYW1lXCI6XCJPbGkgQm90elwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSks4ZytrSEVONmpyYkFHR0FFPVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiRG9GWWw5WEZmNmNqYms1bngzWUxmY29QdnRNMlhHaWlNZnB4ZWVvWG9RWT1cIixcImFjY291bnRTaWduYXR1cmVcIjpcImFsZG92ZFNramdYL1hNVzhLbk9seE45ZXV5ME5ZcGVvNnhUdEcycHNxZFJwYlhhRHhUSW1IRHEwekJsSVhyd1hOVnFqSlJrdWIzZGNJMlBMREo2RUF3PT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwibVNuUjdRVjJ1RDVhc3NUWElqVEZQUDdGY3M1VWlQWDFVL09yS1dvOEswdUFsRjV6Ykp4MDB2NmNOcXhXb0ZwWERjV1dvdHdSMGJqVzRJdloxbHJLalE9PVwifSxcInNpZ25hbElkZW50aXRpZXNcIjpbe1wiaWRlbnRpZmllclwiOntcIm5hbWVcIjpcIjYyODIyNzcwODk5NDQ6MUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJRNkJXSmZWeFgrbkkyNU9aOGQyQzMzS0Q3N1RObHhvb2pINmNYbnFGNkVHXCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMjAxNzg5MCxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFMQUtcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMQUsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwd0Q4Yzk5Nm5VYXgzaDhQemhUQXo1VkVRbk9CaklENXJ5VzVTT0c0QlZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwOTkzMDYwMDIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxMjAxNzg5MjI0OFwifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Sahel-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Ronaldo Store",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "sahel-bot",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SAHEL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
