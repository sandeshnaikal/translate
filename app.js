var translate=document.querySelector("#translates");
var textinput=document.querySelector("#text-input");
var outputtxt=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorhandler(error){
    alert("something wrong with server! try again later")
}


function clickhandler(){
    var inputtext=textinput.value;
    
    fetch(getTranslationURL(inputtext))
    .then(response => response.json())
    .then(json => {
        var translatedtext=json.contents.translated;
        outputtxt.innerText=translatedtext;
    })
    .catch(errorhandler)
}


translate.addEventListener("click",clickhandler);
