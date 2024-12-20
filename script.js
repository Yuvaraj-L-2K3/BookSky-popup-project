// select button ,overlay,form

var popupbutton=document.querySelector(".poppupButton")
var overlay=document.querySelector(".overlay")
var form=document.querySelector(".form")


popupbutton.addEventListener("click",function(){
    overlay.style.display="block"
    form.style.display="block"
})


var Cancel=document.getElementById("Cancel")

Cancel.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    form.style.display="none"

})


//Container form-title form-author (id:form-Description),Add

var Add=document.getElementById("Add")
var container=document.querySelector(".container")
var formtitle=document.getElementById("form-title")
var formauthor=document.getElementById("form-author")
var formDescription=document.getElementById("form-Description")

Add.addEventListener("click",function(event){
event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","book-sky")
div.innerHTML=`<h2>${formtitle.value}</h2>
<h3>-${formauthor.value}</h3>
<p>${formDescription.value}</p>
<button onclick="Remove(event)">DELETE</button>`
container.append(div)
overlay.style.display="none"
form.style.display="none"


})

function Remove(event){
 event.target.parentElement.remove()
}
