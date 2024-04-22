const express = require('express')
const app = express()
const port = 8081
const https = require('https')
const fs = require("fs")
const path = require("path");
const bodyParser = require(`body-parser`)
const ejs = require(`ejs`)
const {config, Init} = require("./config/init");

Init.init(app)
config.APP.set('views', `${require('path').resolve('./')}\\views\\`);

app.get('*', (req, res) => {
    res.render('panel/tools/page/skeleton.ejs',{
        sections: [{url:'index.ejs'}],
    })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
