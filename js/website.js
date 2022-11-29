// variables
var skip = document.querySelector('.skip')
var image = document.getElementById('medium');
var form = document.getElementById('form');
var git = document.getElementById("github")
var link = document.getElementById("linkedin")
var clifton = document.getElementById("clifton")
var india = document.getElementById("india")
var florida = document.getElementById("florida")
var lsa = document.getElementById("lsa")
var si = document.getElementById("si")
var beach = document.getElementById("beach")

// event listeners 
skip.addEventListener('click', skipContent)
if(skip){
  skip.addEventListener('click', skipContent)
}
if(image){
  image.addEventListener('click', mediumWebsite);
}
if(form){
  form.addEventListener('submit', clickContact);
}
if(git){
  git.addEventListener('click', gitClick);
}
if(link){
  link.addEventListener('click', linkClick);
}
if(clifton){
  clifton.addEventListener('click', cliffClick);
}
if(india){
  india.addEventListener('click', indiaClick);
}
if(florida){
  florida.addEventListener('click', floridaClick);
}
if(lsa){
  lsa.addEventListener('click', lsaClick);
}
if(si){
  si.addEventListener('click', siClick);
}
if(beach){
  beach.addEventListener('click', beachClick);
}

//click functions
function skipContent(){
  var main = document.querySelector('main')
  main.scrollIntoView()
}
function clickContact(){
  alert("Thank you for contacting me. I will be in touch as soon as possible.")
}
function mediumWebsite(){
  window.open("https://medium.com/@megsrinivasa",'_blank')
}

function gitClick(){
  window.open("https://github.com/megsrini",'_blank')
}
function linkClick(){
  window.open("https://www.linkedin.com/in/megsrinivasa504/",'_blank')
}
function cliffClick(){
  window.open("images/clifton_strength_report.pdf",'_blank')
}
function indiaClick(){
  alert("I lived in Bangalore, India, for 2 years when I was a kid.")
}
function floridaClick(){
  alert("I moved to Florida when I was 5 years old, and I have lived in Orlando since then.")
}
function lsaClick(){
  alert("I am majoring in Economics in LSA.")
}
function siClick(){
  alert("I am majoring in Information Analysis in the School of Information.")
}
function beachClick(){
  alert("I like surfing in my free time. This is a photo I took at Clearwater Beach.")
}
