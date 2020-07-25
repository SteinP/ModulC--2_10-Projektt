const btnCatNode = document.querySelector(".j-btn-cat");
const btnDogNode = document.querySelector(".j-btn-dog");
const btnParrotNode = document.querySelector(".j-btn-prt");

// Отключение/включение кнопок
const disableButtons = (val) => {
    btnCatNode.disabled = val;
    btnDogNode.disabled = val;
    btnParrotNode.disabled = val;
};

// Требуется для доступа к внешнему серверу
const myHeaders = new Headers({
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
});


const myInit = {
    method: "POST",
    header: myHeaders,
};

const urlServer = new URL("https://sf-pyw.mosyag.in");
const urlChoice = val => new URL(`sse/vote/${val}`, urlServer);

const myRequest = val => new Request(urlChoice(val), myInit);

const butnClick = val => {
    disableButtons(true);
    fetch(myRequest(val))
    .then((response)=>{
        console.log(response);
        if (!response.ok) {
            throw new Error("⛔ Some error");
            disableButtons(false);
        }
        else {
            window.location.href ="voting_results.html";
        }
    });
};

btnCatNode.addEventListener("click", () => { butnClick("cats")});
btnDogNode.addEventListener("click", () => { butnClick("dogs")});
btnParrotNode.addEventListener("click", () => { butnClick("parrots")});
