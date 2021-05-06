
// Personal API Key for OpenWeatherMap API
const apiKey= ',us&units=metric&appid=a6c12a726d87a5f9655e4bb758c98800';
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
let temp = '';
// Event listener to add function to existing HTML DOM element
let generate = document.getElementById ('generate');
generate.addEventListener("click",function(){
    let zip = document.getElementById("zip");
    let feel = document.getElementById("feelings").value;
    if (zip= ""){
        alert ("please enter your Zip code");
    }else{
        getData()
        .then((data) => {
        postData("/addData", {temp: data.main.temp,date: newDate,feelings: feel})
        }).then(() => updateUI())
}});


/* Function to GET Web API Data*/
const getData = async () => {
    url ='https://api.openweathermap.org/data/2.5/weather?zip='+zip.value+apiKey
    try{
        let req = await fetch(url);
        let res = await req.json();
        console.log(res.main.temp);
        temp = res.main.temp;
        return res;
        return temp;
    }catch (error){console.log ('error' , error)}
    };
     
/* Function to POST data */
const postData = async (url="", data = {})=>{
    const response = await fetch(url,{
        method: "POST",
        credentials: "same-origin",
        headers: {"Content-Type": "application/json"},
        body:  JSON.stringify(data)
        }) ;
    try{
        const newData = await response.json();
        console.log(newData);
        return newData;
    }catch (error){console.log ('error' , error)}     
};
/* Function to GET Project Data */
const updateUI = async () => {
    const request = await fetch('/all');
    try {
        // Transform into JSON
        const allData = await request.json()
        console.log(allData)
        // Write updated data to DOM elements
        document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
        document.getElementById('content').innerHTML = allData.userResponse;
        document.getElementById("date").innerHTML =allData.date;
        }
        catch(error) {
          console.log("error", error);
          // appropriately handle the error
        }
}  


 
 