
var cardType = "white";
var div;
var textInput;
var options; // this is an object
document.addEventListener("DOMContentLoaded", function () {
    div = document.getElementById("white-card-div");
    textInput = document.getElementById("white-card-text-input");
    // Always like this
    options = {
        width: div.offsetWidth + 10,
        height: div.offsetHeight + 10,
        x: -5,
        y: -5
    }

});

function download() {
    removeBgFromCard(textInput,cardType)
    html2canvas(div, options).then(function (canvas) {
        var img = canvas.toDataURL();
        downloadURI(img, generateFileName())
        addBgToCard(textInput,cardType)
    }
    );
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    clearDonwloadElement(link)
    //after creating link you should delete dynamic link
    //clearDynamicLink(link); 
}

function changeType() {
    cardType = document.getElementById("card-type-selector").value;
    if(cardType == "white"){
        div = document.getElementById("white-card-div");
        textInput = document.getElementById("white-card-text-input");
        toggleCard(cardType)

    }else{
        div = document.getElementById("black-card-div");
        textInput = document.getElementById("black-card-text-input");
        toggleCard(cardType);
    }
}

function toggleCard(cardType){
    let typeToHide = cardType == 'white' ? 'black' : 'white';
    div.classList.remove("d-none")
    document.getElementById(`${typeToHide}-card-div`).classList.add("d-none")
}

function clearDonwloadElement(element) {
    element.remove();
}

function removeBgFromCard(textArea, cardType) {
    textArea.style.background = cardType == "white" ?  "#FFF" : "#000";
}

function addBgToCard(textArea, cardType) {
    textArea.style.background = cardType == "white" ?  "#eee" : "#3b3b3b";
}

function generateFileName(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let fileName = "";
    for (let i = 0; i < 6; i++) {
        fileName += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return fileName;
}
