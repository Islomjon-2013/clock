


function watch(){
    let data =new Date();
  
    document.querySelector(`.hour`).innerHTML = data.getHours();
    document.querySelector(`.minute`).innerHTML=data.getMinutes();
    document.querySelector(`.second`).innerHTML=data.getSeconds();
}
watch()
setInterval(watch, 1000)