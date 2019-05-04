#!/usr/bin/env node

const mongoose = require('mongoose');
const argv = require('yargs').argv


const uri = argv.uri;
let delay = 15000;
if (argv.t || argv.time) {
    delay = argv.t*1000;
}

console.log("will try to connect to " + uri);
function tryToConnect() {
    mongoose.connect(uri,{useNewUrlParser: true}, function(error) {
        if (error) {
            console.error('Failed to connect, will try again in '+argv.t+' seconds.');
            setTimeout(()=> {
                tryToConnect();
            }, delay);
        } else {
            console.log("mongodb is UP!");
            mongoose.disconnect();
        }
    });
}
tryToConnect();