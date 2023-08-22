

const bgBtn=document.querySelector('#bg-btn')
const forBtn=document.querySelector('#for-btn')
console.log(forBtn)
const myWorker=new Worker("service-worker.js")

forBtn.addEventListener("click",(e)=>{
myWorker.postMessage('Hey')


})

 myWorker.onmessage=function(event){
     alert(event?.data)
     console.log(event)
 }

bgBtn.addEventListener('click',()=>{
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      
        document.body.style.background = bgColor;
})


