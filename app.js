var btntranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-text");
var outputDv = document.querySelector(".output");
btntranslate.addEventListener("click",clickEventHandler);

var serverURL = "https://api.funtranslations.com/translate/groot.json";

function createURL(text)
{
return serverURL+"?"+"text="+text;
}

function errorHandler(error){
    console.log("There's an error: ",error);
    alert("Server is busy, Try later!");
}

function clickEventHandler(){
    var userEnteredText = inputText.value;

    fetch(createURL(userEnteredText))
    .then(response=>response.json())
    .then(json=>{
        var translatedText = json.contents.translated;
        outputDv.innerHTML = translatedText;
    })
    .catch(errorHandler);

}