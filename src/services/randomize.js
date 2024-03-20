function randomize() {

    const stringLen = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const elements = "QWERTYUIOPASLDKFJGHZMXNCBV123456789";
    let randomString = "";
    for (let i = 0; i < stringLen; i++) {
        const randomIndex = Math.floor(Math.random() * elements.length);
        randomString += elements.charAt(randomIndex);
    }
    return randomString;
}

module.exports = randomize;