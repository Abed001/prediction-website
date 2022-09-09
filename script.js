window.onload = () => {
const url="https://dog.ceo/api/breeds/image/random";
const dog=document.getElementById("img");
const btndog = document.getElementById("button");
const ref = document.getElementById("refresh");
//btndog.addEventListener('click',getRandomDog);
  
function getRandomDog(){
    fetch(url).
    then(res=>res.json())
    .then(data=>{
        dog.innerHTML=`<img src="${data.message}"/>`
    })
}

getRandomDog()
}
