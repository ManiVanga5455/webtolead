function submitHandler(){
let inputdate = document.querySelector(".inputdate")
let outputdate = document.querySelector(".outputdate")
//console.log(inputdate.value)
let formatteddate = new Date(inputdate.value).toLocaleDateString("fr-FR")
outputdate.value = formatteddate}
