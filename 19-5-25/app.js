// Fetch Api = Application Programming Interface
// The fetch API provides an interface for fetching (sending/ receving) resources.
// It uses Request and Response Objects

const URL = "https://api.thecatapi.com/v1/images/search";
const factPara = document.querySelector("#fact");
let promise = fetch(URL);

console.log(promise);

const getDogs = async()=>{
    console.log("getting data")
    let response = await fetch(URL);
    console.log(response);// JSON
    let data = await response.json();
    factPara.innerText = data[0].text;

}

getDogs();


// Terms :  AJAX , JSON , json()method
// AJAX = asynchronous JS & XML 
// convert JSON to js object


