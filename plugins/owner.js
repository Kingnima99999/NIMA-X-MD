const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `
♚NIMA♚:
https://wa.me/94740250759?text=nima_boss`;
await conn.sendMessage(from,{image:{url: `./bot.jpg`},caption:dec},{quoted:mek});
await conn.sendMessage(from, { react: { text: '🧑‍💻', key: mek.key }})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
