const hamburger= document.querySelector(".hamburger");
let menOpen=false
const hoverDiv=document.querySelector(".hover-div");
hamburger.addEventListener("click",() =>{
  if (!menOpen){
    hamburger.classList.add('open');
    menOpen=true;
    hoverDiv.style.display="block";
   }else{
    hamburger.classList.remove('open');
     menOpen=false;
     hoverDiv.style.display="none";
   }
 })

let ltlRect2=document.querySelector(".ltl-rect-2");
let ltlRect1=document.querySelector(".ltl-rect-1");
let ltlRect3=document.querySelector(".ltl-rect-3");
let ltlRect4=document.querySelector(".ltl-rect-4");
const firstImg=document.querySelector(".first-img");
const seaphDesktop=document.querySelector(".seaph-desktop-index");
const federalDesktop=document.querySelector(".federal-desktop")
let bandDesktop=document.querySelector(".bank-desktop")
ltlRect2.addEventListener("click",()=>{
  firstImg.style.display="none";
  seaphDesktop.style.display="block";
  bandDesktop.style.display="none";
  ltlRect2.style.background="#1B1D23";
  ltlRect2.style.color="#fff"
  ltlRect1.style.background="#fff";
  ltlRect1.style.color="#7D828F";
  ltlRect3.style.background="white";
  ltlRect3.style.color="#7D828F";
  federalDesktop.style.display="none";
  ltlRect4.style.background="white";
  ltlRect4.style.color="#7D828F";
})
ltlRect1.addEventListener("click",()=>{
  firstImg.style.display="block";
  seaphDesktop.style.display="none";
  bandDesktop.style.display="none";
  ltlRect2.style.background="white";
  ltlRect2.style.color="#7D828F"
  ltlRect1.style.background="#1B1D23";
  ltlRect1.style.color="white";
  ltlRect3.style.background="white";
  ltlRect3.style.color="#7D828F";
  federalDesktop.style.display="none";
  ltlRect4.style.background="white";
  ltlRect4.style.color="#7D828F";
})
ltlRect3.addEventListener("click",()=>{
  firstImg.style.display="none";
  seaphDesktop.style.display="none";
  federalDesktop.style.display="block";
  bandDesktop.style.display="none";
  ltlRect2.style.background="white";
  ltlRect2.style.color="#7D828F"
  ltlRect1.style.background="white";
  ltlRect1.style.color="#7D828F";
  ltlRect3.style.background="#1B1D23";
  ltlRect3.style.color="white";
  ltlRect4.style.background="white";
  ltlRect4.style.color="#7D828F";
})
ltlRect4.addEventListener("click",()=>{
  firstImg.style.display="none";
  seaphDesktop.style.display="none";
  federalDesktop.style.display="none";
  bandDesktop.style.display="block";
  ltlRect2.style.background="white";
  ltlRect2.style.color="#7D828F"
  ltlRect1.style.background="white";
  ltlRect1.style.color="#7D828F";
  ltlRect3.style.background="white";
  ltlRect3.style.color="#7D828F";
  ltlRect4.style.background="#1B1D23";
  ltlRect4.style.color="white";
})

const email =document.querySelector(".email")
const submitButton=document.querySelector(".ltl-input-rect");

let mailregex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// console.log(error)
function testmail (input){
  if(mailregex.test(input.value)){
    console.log(" your email is send");
    
  }else if(!mailregex.test(input.value)){
    console.log("this is false");
    ema.style.borderColor="red";
  }
}
submitButton.addEventListener('click',(event)=>{
  event.preventDefault()
  testmail(email);
  console.log('clicked');
})