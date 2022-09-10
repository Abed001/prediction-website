window.onload = () => {
const url="https://dog.ceo/api/breeds/image/random";
const dog=document.getElementById("img");
const paragender = document.getElementById("para-gender");
const paraage = document.getElementById("para-age");
const paranation = document.getElementById("para-nation");
const btndog = document.getElementById("button");
const btnsub = document.getElementById("button-sub");
let inputid = document.getElementById("inputId");

//btndog.addEventListener('click',getRandomDog);


    function getGender(){
        const textinput=inputid.value.trim();
            const response= fetch( `https://api.genderize.io?name=${textinput}`).
            then(response=>response.json())
            .then(data=>{
                paragender.innerHTML=`<p>${data.gender}</p>`;
            })
            
            //console.log(data);
            }
            
    function getAge(){
        const textinput=inputid.value.trim();
            const response= fetch( ` https://api.agify.io/?name=${textinput}`).
            then(response=>response.json())
            .then(data=>{
                paraage.innerHTML=`<p>${data.age}</p>`;
            })
            
            //console.log(data);
            }

           function getNationality(){
                const textinput=inputid.value.trim();
                    const response= fetch( `https://api.nationalize.io/?name=${textinput}`).
                    then(response=>response.json())
                    .then(data=>{
                       paranation.innerHTML=`<p>${data.country[0].country_id} , ${data.country[1].country_id}</p>`;
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
                btnsub.addEventListener('click',getAge);
                btnsub.addEventListener('click',getNationality);

}
        


