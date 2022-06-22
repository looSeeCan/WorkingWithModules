import getSessions from "./sessionsRepository.js";
import sessionTemplate from "./template.js";


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
