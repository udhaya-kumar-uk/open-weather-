const container=document.getElementById("container")
const search=document.getElementById("search")
let countries=[]
function handle(target){
//console.log(target.value)
const value=target.value.toLowerCase()
const searchmatch=countries.filter((e,i)=> {
    const name=e.name.common.toLowerCase()
    return name.includes(value)
})
//console.log(searchmatch)
renderdata(searchmatch)
}

// console.log(countries)

const url=('https://restcountries.com/v3.1/all')

async function fetchdata(){
const responce=await fetch(url)
const data=await responce.json()
if(data.length>0){
countries=[...data]
renderdata(countries)
}
}
fetchdata()

 function renderdata(data=[]){
    let cards=[]
    for(let i=0;i<=data.length;i++) {
        cards.push(createcard(data[i]))
        console.log(data)
    }
    container.innerHTML=""
    container.append(...cards)
}

 function createcard(data={}){
const card=document.createElement("div")
const title=document.createElement("p")
const image=document.createElement("img")

const country=document.createElement("p")
const sub=document.createElement("p")
const para=document.createElement("p")
const para1=document.createElement("p")
const button=document.createElement("button")
button.setAttribute("class","btn btn-outline-secondary")

button.innerText="open weather"
card.setAttribute("class","card")
const{name="",population="",capital="",latlng="",}=data
title.innerText="country name:"+name["common"]
sub.innerText="capital:"+capital

button.setAttribute("onclick",`demo('${capital}')`)


//picture.innerText=flags.png
image.setAttribute("src",data?.flags?.png)
image.setAttribute("class","picture")
para.innerText="population:"+population
para1.innerText="lating:"+latlng
card.append(title,para,sub,para1,button,image)
return card
}

async function demo(city){

const app_key="eb3898f59648758ae03f6eb59ba99c59";

let baseurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app_key}`;
    let data=await fetch(baseurl);
    let format=await data.json();
    alert(('weather:'+format.weather[0].main)+" "+
    ('country id:'+format.weather[0].id)+" "+
    ('weather:'+format.weather[0].description)+" "+
    ('icon:'+format.weather[0].icon)+" "+("degree:"+format.wind.deg)
    )
    
  console.log(format)
}
// git remote add origin https://github.com/udhaya-kumar-uk/open-weather-.git