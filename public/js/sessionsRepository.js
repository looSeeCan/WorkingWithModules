// import { format } from "path";//idk where this came from. I don't see it in the tutorial anywhere

const sessionUrl = "sessions.json"

let sessionList = [];

function getSessions(){
    return new Promise(function(resolve, reject){
        var oReq = new XMLHttpRequest();
        oReq.onload = function (e) {
            sessionList = e.target.response;
            resolve(sessionList);
        };
        oReq.open('GET', sessionUrl, true);
        oReq.responseType = 'json';
        oReq.send();
    })
}

// export getsessons; cant do this
// export {getSessions as blahblah}//rename it whatver you want
//export {getSessions as default};
export {getSessions as default, sessionUrl};// it wants it as a list

//agragating modules
export {sessionTemplate,} from './template.js';//I can export sessonTemplate from this file. I am not importing anything from template
//so this file will not have any access to it
