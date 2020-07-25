const h3Txt = document.querySelector("h3")
const barCatNode = document.querySelector(".j-bar-cat");
const barDogNode = document.querySelector(".j-bar-dog");
const barParrotNode = document.querySelector(".j-bar-prt");
const aryBar = [barCatNode, barDogNode, barParrotNode];
// Привязка названий на сервере к русским названиям
const objTxtRu = { "cats": "Кошка", "dogs": "Собака", "parrots": "Попугай"};

// Требуется для доступа к внешнему серверу
const myHeaders = new Headers({
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
});

const urlVotingResults = new URL("https://sf-pyw.mosyag.in/sse/vote/stats");

// Соединение для получения данных
const esVotingResults = new EventSource(urlVotingResults, myHeaders);

esVotingResults.onerror = error => {
    esVotingResults.readyState ? h3Txt.textContent = "⛔ Some error" : null;
}

// Обработчик данных, полученных с сервера
esVotingResults.onmessage = message => {
    objVoting = JSON.parse(message.data);
    sumVoting = Object.values(objVoting).reduce((s, v) => s + v);//общее количество проголосовавших
    anyKeysVoting = Object.keys(objVoting);
    anyKeysVoting.forEach(eltKeysVoting => {
        aryBar.forEach(eltBar=>{
            if (eltBar.id === eltKeysVoting){
                data = objVoting[eltKeysVoting];
                percent = data * 100 / sumVoting
                eltBar.textContent = `${objTxtRu[eltKeysVoting]}:${data}`;
                eltBar.setAttribute('style', `width: ${percent}%`);
            };
        });
    });
};
