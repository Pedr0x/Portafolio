var items = Array.from(document.querySelectorAll(".item"));
//var items = document.querySelectorAll(".item");


function itemGrow () {
    items.forEach((element,index) => { 

    items[index].classList.remove("item_active");
    }
                 
                 )
   /* if( event.target !== this ) {
       return;
}
    event.stopPropagation
    let target = event.target;*/
    
    this.classList.toggle("item_active");
         console.log(1)
  
    
};

items.forEach( panel => panel.addEventListener("click",itemGrow))