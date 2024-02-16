const inputElement=document.getElementsByTagName('input')
const button=document.getElementById('button')
  
  function user(){
  console.log(inputElement[0].value)
  inputElement[0].setAttribute('disabled',"true")
   hackStart()

 
}
function restart(){
  inputElement[0].removeAttribute('disabled')
  hack.innerHTML=""  
   button.style.display='none';
  
}


const hack=document.getElementsByClassName('hack')[0]


  function hackStart(){
   setTimeout(()=>{
     hack.innerHTML="<br>Hack initiated ... <br>"
   },100)
  setTimeout(()=>{
    hack.innerHTML="<br>Connecting  Servers ... <br>"
  },2000)

 setTimeout(()=>{
    hack.innerHTML+=`Hacking ${inputElement[0].value} Username. <br> `
  },3000)

   setTimeout(()=>{
     hack.innerHTML+='Username Found <br>'
   },6000)
   setTimeout(()=>{
      hack.innerHTML+='Accessing the User data...<br>'
    },6800)
   setTimeout(()=>{
      hack.innerHTML+='Accessing Phone Number<br>'
    },7500)
   setTimeout(()=>{
     hack.innerHTML+='Looking for attached Aadhar Card <br>'
   },8200)
   setTimeout(()=>{
     hack.innerHTML+='<br>Aadhar details Found<br>'
   },10500)
   setTimeout(()=>{
     hack.innerHTML+='Looking for linked Bank Account<br>'
   },10900)
   setTimeout(()=>{
     hack.innerHTML+='Bank Account Found<br>'
   },12000)
   setTimeout(()=>{
     hack.innerHTML+='Accessing the Account details<br>'
   },12700)
   setTimeout(()=>{
     hack.innerHTML='<br> Auto Debit Initiated<br>'
   },14200)
   setTimeout(()=>{
     hack.innerHTML+='Money transfered Successfully<br>'
   },16200)
   setTimeout(()=>{
     hack.innerHTML+=' Account Balance : 0 <br>'
   },16900)
   setTimeout(()=>{
     hack.innerHTML+='<br>Have a great day buddy!!<br>'
   },17000)
   setTimeout(()=>{
      button.style.display='block';
   },17100)
  
}