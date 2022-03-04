let weather = { 
    "apiKey": "9b1f679911ac53cd9b7ab5c58e255fce"
}


const result = fetch ("https://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=9b1f679911ac53cd9b7ab5c58e255fce") 

result.then((response)=>{
    console.log(response)
    return response.json()
})
.then((data)=>{
    console.log(data)
})