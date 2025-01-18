const config = require('../config')
const {cmd , commands} = require('../command')
//bot  alive
cmd({
    pattern: "alive",
     alias: ["menu","list"],
    desc: "Check bot online or check",
    category: "main",
    react: "😈",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const msg = `
╭☐ *♚NIMA-XMD♚*
│ *.* alive
│ *.* ping
│ *.* menu
│ *.* owner
│ *.* song 
│ *.* video 
╰───────☒

`
return await conn.sendMessage(from,{image: {url: `./bot.jpg`},caption: msg},{quoted: mek})
}catch(e){
console.log(e)
reply(`👿Error`)
}
})
