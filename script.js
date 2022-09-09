window.onload = () => {
    const url="https://dog.ceo/api/breeds/image/random";
    const gender_url="https://api.genderize.io?name=peter";
    const dog=document.getElementById("img");
    const para = document.getElementById("para-sub");
    const btndog = document.getElementById("button");
    const btnsub = document.getElementById("button-sub");
    const inputid = document.getElementById("InputId");
  
    //btndog.addEventListener('click',getRandomDog);

    // btnsub.addEventListener('click',getGender);

    function getGender(){
        fetch(gender_url)
        .then(response => response.json())
        .then(text =>{
            para.innerHTML=`<p >${text.gender}</p>`
        })
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

          
   

   