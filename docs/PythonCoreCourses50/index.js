const https = require('https')
const fs = require('fs')
const res = require('./res.json')

const delay = (time) => {
    return new Promise(resolve => setTimeout(resolve, time))
}

const imgReg = /<img\ssrc=".*".*>/g
const cReg = /!\[.*\](.*)/g

const writeImg = (item) => https.get(item.url, res => {
    let buf = Buffer.alloc(0)
    res.on('data', chunk => {
        buf = Buffer.concat([buf, chunk])
    })
    res.on('end', () => {
        fs.writeFileSync(`./imgs/${item.name}`, buf)
    })
})
const downloadImgs = async () => {
    for (let i = 0; i < res.length; i += 1) {
        await delay(2000)
        writeImg(res[i])
    }
}

const replaceImgPath = () => {

    let md = fs.readFileSync('./README.md', 'utf-8')

    md = md.replace(imgReg, (content) => {
        const start = content.indexOf('h')
        const end = content.indexOf('.png') + 4
        const cur = content.slice(start, end)
        const name = cur.split('/').pop()
        return content.replace(cur, `./imgs/${name}`)
    })

    md = md.replace(cReg, (content) => {
        const start = content.indexOf('h')
        const end = content.lastIndexOf(')')
        const cur = content.slice(start, end)
        const name = cur.split('/').pop()
        return content.replace(cur, `./imgs/${name}`)
    })

    fs.writeFileSync('./README.md', md)
}

