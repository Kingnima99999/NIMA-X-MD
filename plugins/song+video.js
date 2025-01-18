const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    react: "🎶",
    desc: "downlod song",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("*⛔Please give me url or titel*")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
 *🎶NIMA-XMD SONG🎶*
 
*•*  ℹ️ *title* : *${deta.title}*
*•*  📃 *description* : ${deta.description}
*•*  🕘 *time* : ${deta.timestamp}
*•*  📅 *ago* : ${deta.ago}
*•*  👓 *views* : ${deta.views}
> NIMA-XMD
`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod audio+ document

let link = `https://apitest1-f7dcf17bd59b.herokuapp.com/download/ytmp3?url=${url}`
let down = link.result.dl_link
//send audio message 
await conn.sendMessage(from,{audio:{url:down},mimetype:"audio/mpeg",caption :" > NIMA-XMD"},{quoted:mek})
await conn.sendMessage(from,{document:{url:down},mimetype:"audio/mpeg",fileName:deta.title + ".mp3" ,caption :"> NIMA-XMD"},{quoted:mek})

  

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//========video dl=======

cmd({
    pattern: "video",
    react: "🎬",
    desc: "downlod video",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("⛔Please give me url or title")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
*📽️NIMA-XMD VIDEO📽️*
*•*  ℹ️ *title* : *${deta.title}*
*•*  📃 *description* : ${deta.description}
*•*  🕘 *time* : ${deta.timestamp}
*•*  📅 *ago* : ${deta.ago}
*•*  👓 *views* : ${deta.views}
> NIMA-XMD
`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod video + document 

let link = `https://apitest1-f7dcf17bd59b.herokuapp.com/download/ytmp4?url=${url}`
let down = link.result.dl

//send video  message 
await conn.sendMessage(from,{video:{url:down},mimetype:"video/mp4",caption :"> NIMA-XMD"},{quoted:mek})
await conn.sendMessage(from,{document:{url:down},mimetype:"video/mp4",fileName:deta.title + ".mp4",caption :"> NIMA-XMD"},{quoted:mek})

  

}catch(e){
console.log(e)
reply(`${e}`)
}
})
