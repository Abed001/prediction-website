window.onload = () => {
const url="https://dog.ceo/api/breeds/image/random";
const dog=document.getElementById("img");
const para = document.getElementById("para-sub");
const btndog = document.getElementById("button");
const btnsub = document.getElementById("button-sub");
let inputid = document.getElementById("inputId");

//btndog.addEventListener('click',getRandomDog);


    function getGender(){
        const textinput=inputid.value.trim();
            const response= fetch( `https://api.genderize.io?name=${textinput}`).
            then(response=>response.json())
            .then(data=>{
                para.innerHTML=`<p>${data.gender}</p>`;
            })
            
            //console.log(data);
            }
    
function getRandomDog(){
    fetch(url).
    then(res=>res.json())
    .then(data=>{
        dog.innerHTML=`<img src="${data.message}"/>`
    })
}
// getGender()
getRandomDog()
btnsub.addEventListener('click',getGender);

}
        


