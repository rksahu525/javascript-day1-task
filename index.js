// Import stylesheets
import './style.css';

// Write Javascript code!
const colors=['red',"yellow","blue",'green','darkcyan'];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");
const box=document.getElementById("box");
btn.addEventListener("click",function(){
  const radom=getRandomNumber()
  box.style.backgroundColor=colors[radom]
  color.textContent=colors[radom]
  
  
})
function getRandomNumber(){
  return Math.floor(Math.random()*colors.length)
}
