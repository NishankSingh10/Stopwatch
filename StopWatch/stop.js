let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");

let hrs=00;
let mins=00;
let sec=00;
let count=00;
// let timer=true;
start.addEventListener("click",()=>{
    console.log("clicked");
    timer=true;
    watch();
});

stop.addEventListener("click",()=>{
    timer=false;
});

reset.addEventListener("click",()=>{
    timer=false;
    hrs=00;
    mins=00;
    sec=00;
    count=00;
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
});

function watch(){
    if(timer){
        count++;
        if(count==100){
            sec++;
            count=00;
        }
        if(sec==60){
            mins++;
            sec=00;
        }
        if(mins==60){
            hrs++;
            mins=00;
            sec=00;
        }
    
        let hrString=hrs;
        let minString=mins;
        let secString=sec;
        let countString=count;
        
        if(hrs<10){
            hrString="0"+ hrString;
        }
        if(mins<10){
            minString="0"+ minString;
        }
        if(sec<10){
            secString="0"+ secString;
        }
        if(count<10){
            countString="0"+ countString;
        }
    
        document.getElementById("hr").innerHTML=hrString;
        document.getElementById("min").innerHTML=minString;
        document.getElementById("sec").innerHTML=secString;
        document.getElementById("count").innerHTML=countString;
        setTimeout(watch,1);
    }
        
}
   