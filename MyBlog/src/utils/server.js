import axios from "axios";
let portUrl = "http://api.k780.com/?app=weather.today&weaId=1&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json";

const getWeather = () =>{
    let url = portUrl;
    axios.get(url) 
    .then(function (response)
    {
        console.log(response);
    });
}

// }

export {
        getWeather
    }