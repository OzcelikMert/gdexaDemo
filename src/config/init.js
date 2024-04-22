const ejs = require('ejs')
const express = require('express')
const http = require('http')
const https = require('https')

let config = {
    APP: null,
    ROOT_DIR: '',
    PUBLIC_FOLDERS: [
        ["assets", "../public/assets"],
        ["img", "../public/img"],
        ["json", "../public/json"],
        ["maps", "../public/maps"],
        ["sitemap.xml",`app/website/sitemap.xml`],
        ["robots.txt",`app/website/robots.txt`]
    ],
}

class Init{
    static init(app) {
        config.APP = app;
        config.ROOT_DIR = `${require('path').resolve('./')}/src/`;
        Init.view_engine();
        Init.public_folders();
        Init.general();
    }

    static general(){
        http.globalAgent.maxSockets = Infinity;
        https.globalAgent.maxSockets = Infinity;
    }

    static view_engine(){
        config.APP.engine('html', ejs.renderFile);
        config.APP.set('view engine', 'html');
        config.APP.set('views', `${require('path').resolve('./')}\\views\\`);
    }

    static public_folders(){
        config.PUBLIC_FOLDERS.forEach((item,index)=>{
            if(item.length === 1){
                config.APP.use(`/${item}`, express.static(`${config.ROOT_DIR}${item}`));
            }else{
                config.APP.use(`/${item[0]}`, express.static(`${config.ROOT_DIR}${item[1]}`));
            }
        })
    }
}

module.exports.config = config;
module.exports.Init = Init;
