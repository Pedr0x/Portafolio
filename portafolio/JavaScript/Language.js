

const change = document.querySelectorAll(".change");
const visible = document.querySelectorAll(".visible");

const flag = document.querySelector(".header-flag");

const title = document.querySelector(".title");
const  item1 = document.querySelector(".item1");
const item1Title = document.querySelector(".item1-title");
const item1Text = document.querySelector("#item1-text");

const item2 = document.querySelector(".item2");
const item2Title = document.querySelector(".item2-title")
const item2Text = document.querySelector(".item2-text");
const item2Link = document.querySelector(".item2-styleguide");

const item3= document.querySelector(".item3");
const item3Title = document.querySelector(".item3-title");
const item3Text = document.querySelector(".item3-text");

const item4Title = document.querySelector(".item4-title");
const item4Text = document.querySelector(".item4-text");

/*
const item_more = document.querySelector(".item_more");
const item_moreTitle = document.querySelector(".item_more-title");*/

const aboutText = document.querySelector(".about-text-desc");


const itemP = document.querySelectorAll(".item-paragraph");
const itemTitle = document.querySelectorAll(".item-title");


const backgroundButton = document.querySelector(".background-button");

const langIndicator = document.querySelector(".lang-indicator");
const backgroundIndicator = document.querySelector(".background-indicator");


//myself
const myself =  document.querySelector(".myself");
const myName = document.querySelector(".my-name");
const whatIDo = document.querySelector(".what-i-do");

//form
const formContainer = document.querySelector(".form-container");

const formTitle = document.querySelector(".form-title");

const formSubEmail = document.querySelector(".form-subtitle_email");
const input_Email = document.querySelector(".input_email");


const formSubName = document.querySelector(".form-subtitle_name");
const input_Name = document.querySelector(".input_name");

const formSubMessage = document.querySelector(".form-subtitle_message");
const input_Message =  document.querySelector(".input_message");


const input =  document.querySelectorAll(".input");

const formSubtitle =  document.querySelectorAll(".form-Subtitle");


const texts = {
    
     SP: {
    
    
    title: "Mi Portafolio",
    header: {
        langIndicator:"Change language",
        backgroundIndicator:"Cambiar fondo"
    },
         
    item1 : {
    itemTitle: "Pokedex SP",
    itemText:"Pokédex desarrollado con JavaScript Asícrono y PokéAPI. Diseñado siguiendo bases del Skeuomorphic Design"
    
},
    item2 : {
    itemTitle: "Agencia de desarrollo web",
    itemText:" Creación de una marca e identidad visual para una agencia de desarrollo web utilizando arquitectura basada en componentes reusables. Desarrollada con SCSS, emmet y Figma. Diseñada usando las bases del Diseño Material de Google.",
        itemLink:"Guía de estilos disponible aquí"
    
},
    item3: {
    itemTitle: "IDLES",
    itemText:"Concepto de página de banda de rock.  Desarrollado con Materialize y  SCSS siguiendo las bases del diseño plano"
    
},
         item4 :{
         itemTitle: "Open Sans",
         itemText:"Página web minimalista para Open Sans, una familia de fuentes tipográficas Open Source diseñada por Steve Matteson"
     },
    
  item_more:{
itemTitle: "Más Pronto",

},
         myself:{
             MyName: "Mi nombre es Pedro Joel Rodríguez",
             WhatIDo:"Hago Sitios web"
         },
         
         form:{
             formTitle:"Contacto",
             formSubEmail:"Tu correo",
             input_Email:"ejemplo@gmail.com",
             
             formSubName:"Tu Nombre",
            input_Name:"Tu nombre aquí",
             
            formSubMessage:"Tu Mensaje",
            input_Message:"Ingresa tu mensaje",


             
         },
         
    
 aboutText:   "Gracias por tomarte el tiempo de revisar mi trabajo."
    
},
    
     EN :{
    

    title: "My Portfolio",
    header: {
        langIndicator:"Cambiar Idioma",
        backgroundIndicator:"Change background"
    },
    item1 : {
    itemTitle: "Pokedex",
    itemText:"Pokédex developed with asynchronous JavaScript and PokéAPI following the Skeuomorphic Design "
    
},
    item2 : {
    itemTitle: "Web development Studio",
    itemText:" Concept website and visual branding for a web development studio. Developed with SCSS,  and Figma. Designed using the Material Design guidelines by Google ",
     itemLink:"Styleguide available here"
    
},
    item3: {
    itemTitle: "IDLES concept website",
    itemText:" Concept website for the the Punk band IDLES. Developed with Materialize & SCSS following the flat design guidelines"
    
},
     item4 :{
         itemTitle: "Open Sans",
         itemText:"Minimalist website for Open Sans, a sans-serif typographic family designed by Steve Matteson."
     },
        
  item_more:{
itemTitle: "More Soon",

},
         
             myself:{
             MyName: "My name is Pedro Joel Rodríguez",
             WhatIDo:"I make websites"
         },
         
         form:{
             formTitle:"Contact",
             formSubEmail:"Your email",
             input_Email:"example@mail.com",
             
             formSubName:"Your name",
             input_Email:"Your name goes here",
             
            formSubMessage:"Message",
            input_Message:"Write your message here",


             
         },
         
     aboutText:   "I truly appreciate that you took the time to see my work."

    
    
}
};


item1Titlex = {
    0:"Pokedex",
    1:"PokedexSP"
};



   function toEnglish () {
                
 for (let i = 0; i < visible.length; i++) {
        visible[i].classList.add("invisible");
    }
       let last = visible[visible.length - 1];
       if (last.style.opacity == 0) {
       title.innerHTML = `${texts.EN.title}`;
          langIndicator.innerHTML=`${texts.EN.header.langIndicator}`;
        backgroundIndicator.innerHTML = `${texts.EN.header.backgroundIndicator}`;
     item1Title.innerHTML =  `${texts.EN.item1.itemTitle}`;
       
    item1Text.innerText =  `${texts.EN.item1.itemText}`;

     item2Title.innerHTML =  `${texts.EN.item2.itemTitle}`;
    item2Text.innerText =  `${texts.EN.item2.itemText}`;
           item2Link.innerText = `${texts.EN.item2.itemLink}`;

     item3Title.innerHTML =  `${texts.EN.item3.itemTitle}`;
    item3Text.innerText =  `${texts.EN.item3.itemText}`;
            
        item4Title.innerHTML =  `${texts.EN.item4.itemTitle}`;
    item4Text.innerText =  `${texts.EN.item4.itemText}`;

    //item_moreTitle.innerHTML =  `${texts.EN.item_more.itemTitle}`;
    aboutText.innerHTML = `${texts.EN.aboutText}`;
       
       //myself
       //whatido
        myName.innerText= `${texts.EN.myself.MyName}`;
        whatIDo.innerText= `${texts.EN.myself.WhatIDo}`;

        //form
        formTitle.innerHTML=`${texts.EN.form.formTitle}`;
        
        formSubEmail.innerHTML=`${texts.EN.form.formSubEmail}`;
         input_Email.placeholder=`${texts.EN.form.input_Email}`;
        
        formSubName.innerHTML=`${texts.EN.form.formSubName}`;
        input_Name.placeholder=`${texts.EN.form.input_Name}`;
        input_Name.placeholder =`${texts.EN.form.input_Message}`;
       
        formSubMessage.innerHTML=`${texts.EN.form.formSubMessage}`;
        input_Message.placeholder=`${texts.EN.form.input_Message}`;
       
           setTimeout(function(){

    for (let i = 0; i < visible.length; i++) {
        visible[i].classList.remove("invisible");

    }
        
    
 }, 300); 
       
       }
        

}
 
    function toSpanish() {
            
 for (let i = 0; i < visible.length; i++) {
        visible[i].classList.add("invisible");
    }
               let last = visible[visible.length - 1];

               if (last.style.opacity == 0) {
       title.innerHTML = `${texts.SP.title}`;
        langIndicator.innerHTML=`${texts.SP.header.langIndicator}`;
        backgroundIndicator.innerHTML = `${texts.SP.header.backgroundIndicator}`;

     item1Title.innerHTML = `${texts.SP.item1.itemTitle}`;
     item1Text.innerText = `${texts.SP.item1.itemText}`;
     //item1Text.innerHTMl =  `${texts.SP.item1.itemText}`;

     item2Title.innerHTML = `${texts.SP.item2.itemTitle}`;
     item2Text.innerText = `${texts.SP.item2.itemText}`;
           item2Link.innerText = `${texts.SP.item2.itemLink}`;


     item3Title.innerHTML = `${texts.SP.item3.itemTitle}`;
     item3Text.innerText = `${texts.SP.item3.itemText}`;

    item4Title.innerHTML =  `${texts.SP.item4.itemTitle}`;
    item4Text.innerText =  `${texts.SP.item4.itemText}`;
    // item_moreTitle.innerHTML = `${texts.SP.item_more.itemTitle}`;

        
        //whatido
        myName.innerText= `${texts.SP.myself.MyName}`;
        whatIDo.innerText= `${texts.SP.myself.WhatIDo}`;

        //form
        formTitle.innerHTML=`${texts.SP.form.formTitle}`;
        
        formSubEmail.innerHTML=`${texts.SP.form.formSubEmail}`;
         input_Email.placeholder=`${texts.SP.form.input_Email}`;
        
        formSubName.innerHTML=`${texts.SP.form.formSubName}`;
        input_Name.placeholder=`${texts.SP.form.input_Name}`;
        
        formSubMessage.innerHTML=`${texts.SP.form.formSubMessage}`;
        input_Message.placeholder=`${texts.SP.form.input_Message}`;

  setTimeout(function(){

    for (let i = 0; i < visible.length; i++) {
        visible[i].classList.remove("invisible");

    }
        
    
 }, 300); 
       
       }

    
        //about
     aboutText.innerHTML = `${texts.SP.aboutText}`;
        
 setTimeout(function(){

    for (let i = 0; i < visible.length; i++) {
        visible[i].classList.remove("invisible");

    }
        
    
 }, 300); 
     }

    

let lengSelector= false;

function changeLang () {
 

    //let last = visible[visible.length - 1];
    
    
     if (lengSelector == true)
         
{
   toSpanish();
        flag.src="united-states.svg";


} else  {
    toEnglish();
        flag.src="venezuela.svg";
}
   
    //reverse boolean
 lengSelector= !lengSelector;  
            console.log(lengSelector);

}




let superBackground= document.querySelector(".super-container");

//toggle background

let background = 1;

function  toggleDarkMode(){
    toggleBackground();
    toggleText();
    
if (superBackground.classList.contains("super_dark-background")) {
    backgroundButton.innerHTML =  '<i class="material-icons"> wb_sunny</i>';
    
    }
    else{
    backgroundButton.innerHTML =  '<i class="material-icons"> brightness_2</i> ';
    }
   
};


function toggleBackground(){ 
    superBackground.classList.toggle("super_dark-background");
    formContainer.classList.toggle("form-container_dark-mode");
    myself.classList.toggle("myself_dark-mode");
};

function toggleText () {
        for(let i = 0; i < itemP.length; i++){
        itemP[i].classList.toggle("item-paragraph_dark-mode");
    } 
    
        for(let i = 0; i < itemTitle.length; i++){
        itemTitle[i].classList.toggle("item-title_dark-mode");
    }
    title.classList.toggle("title_dark-mode");
    
    for(let i = 0; i <input.length; i++){
        input[i].classList.toggle("input_dark-mode");
    }
    for(let i = 0; i < formSubtitle.length; i++){
        formSubtitle[i].classList.toggle("form-subtitle_dark-mode");
    };
    formTitle.classList.toggle("form-title_dark-mode");
};











