const redis = require("redis");
const randomize = require("./randomize");

const client = redis.createClient();
client.on('error', err => console.log('Redis Client Error', err));
client.connect();

async function shorten(url){
    try{
        const randomCode = randomize();
        await client.set(randomCode, url,{
            EX: process.env.EXPIRE_IN_SEC,
          });
        return randomCode;
    } catch (error){
        console.error("Erro ao armazenar no redis " + error);
    }
}


async function getUrlByShorten(shorten){
    const url = await client.get(shorten);
    if (url == null) throw new Error("No URL match");
    return url;
}

module.exports = {
    shorten,
    getUrlByShorten
};