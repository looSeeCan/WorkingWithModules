import getSessions, {sessionTemplate, sessionUrl} from "./sessionsRepository.js";//sessionTemplate is from template.js, but, I exported in the sessionsRepository to be able to use this syntax
// import {sessionTemplate, errorMessage} from "./template.js";//Named Imports. The imports here are not being exported by default
//they have to be surrounded and named exactly the way they are when they are being exported. I can say {sessionTemplate as blah blah}
// import * as blahblah from "./template.js";

// console.group("import * as blahblah");
//     console.log(sessionUrl);
//     console.log(blahblah);
//     console.log(blahblah.errorMessage);
//     console.log(blahblah.sessionTemplate);
// console.groupEnd();

function render() {
    var list = document.querySelector("#sessions");
    if (!list) return;
    list.innerHTML = sessionTemplate(data.listItems);
}

var data = {
    listItems: [],
};

// const it = getSessions.getSessions();
// console.log(it);

getSessions()
    .then((sessions) => {
    console.log("promises!");
    data.listItems = sessions;
    render();
});
