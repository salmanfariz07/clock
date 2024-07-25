function timer(){
    let date= new Date()
    hours=date.getHours()
    hr=hours%12==0?12:hours%12
    ampm=hours<12?"AM":"PM"
    document.getElementById("timer").textContent=`${putZero(hr)}-${putZero(date.getMinutes())}-${putZero(date.getSeconds())} ${ampm}`
    document.getElementById("dates").textContent=`${putZero(date.getDay())}-${putZero(date.getMonth())}-${putZero(date.getFullYear())}`
   
    displayBg(hours)
    setTimeout(()=>{
        timer()
    },1000)

}

timer()



function displayBg(hours){
    document.getElementById("bg").style.backgroundRepeat="no-repeat"
    document.getElementById("bg").style.backgroundSize="cover"
    document.getElementById("bg").style.objectFit="cover"
    

    if(hours>=6 && hours<=19){
            document.getElementById("bg").style.backgroundImage="url('../images/sun2.jpg')"
          
    }
    else{
        
            document.getElementById("bg").style.backgroundImage="url('../images/F.jpg')"
            document.getElementById("bg").style.color="white"   

    }

}

function putZero(time){
    return time<10?"0"+time:time

}