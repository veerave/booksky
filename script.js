    var popupoverlay = document.querySelector(".popupoverlay")

    var popupalertbox = document.querySelector(".popup-alert-box")
    
    var addbtn = document.getElementById("add-poppup-button")
   

    addbtn.addEventListener("click",function(event)
{
    event.preventDefault()
    popupoverlay.style.display="block"
    popupalertbox.style.display="block"
})

// CANCEL BUTTON //

var cancelbtn = document.getElementById("cancel")

cancelbtn.addEventListener("click",function(event){

    event.preventDefault()
    popupoverlay.style.display="none"
    popupalertbox.style.display="none"
})

//select conatainer,Addbook,booktittle,bookauthorinput,book-discription,

var container = document.querySelector(".container")

var addbook = document.querySelector("add-booksbtn")

var booktittle = document.getElementById("book-tittle-input")

var bookauthor = document.getElementById("book-author-input")

var bookdiscription = document.getElementById("book-discription-input")



//  addbook=addEventListener("click",function(event){
//     event.preventDefault()
//    var div = document.createElement("div")
//    div.setAttribute("class","books-container")

//    div.innerHTML= `<h1>${booktittle.value}</h1>`  
//    container.append(div)

//    functio add for exampel//


   function btnadd (event){
    event.preventDefault()

    var div = document.createElement("div")
    div.setAttribute("class","books-container")


    div.innerHTML = `<h2>${booktittle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdiscription.value}</p>
            <button onclick="bookDelete(event)">delete</button>`
    container.append(div) 
    
    //   div.style.color="#fd5659"
    //   h5.style.color="#ffffff"

    //popup box none for add finished//
    popupoverlay.style.display="none"
    popupalertbox.style.display="none"
   
   
   }
   //close for popup button//
   function bookDelete(event) {
    event.target.parentElement.remove();
}

   

   


    

