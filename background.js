var totalTimes;
var redTimes;
var blackTimes;
var greenTimes;

document.onreadystatechange = function(){
    if(document.readyState === "complete"){
        totalTimes = 0;
        redTimes = 0;
        blackTimes = 0;
        greenTimes = 0;
        console.log("Total,red,black,green,redPercent,blackPercent,greenPercent,prevNum");
        setInterval(function(){
            if(document.getElementsByClassName('stat')[0].innerHTML.substr(0,2) == 10){
                stats();
            }
        },1000);
    }
};

function getNumber(){
    return document.getElementsByClassName('roulette-slider')[0].style.backgroundPositionX ;
}

function stats(){
    var prevNum = document.getElementsByClassName('previous-numbers-wrap')[0].childNodes[1].innerHTML ;
    totalTimes += 1 ;
    if(prevNum == 0){
        greenTimes += 1;
    }
    else if(prevNum >= 8){
        blackTimes += 1;
    }
    else{
        redTimes += 1;
    }
    var redPrecent = redTimes/totalTimes ;
    redPrecent = redPrecent * 100 ;
    redPrecent = redPrecent.toFixed(1);
    var blackPrecent = blackTimes/totalTimes ;
    blackPrecent = blackPrecent * 100 ;
    blackPrecent = blackPrecent.toFixed(1);
    var greenPrecent = greenTimes/totalTimes ;
    greenPrecent = greenPrecent * 100 ;
    greenPrecent = greenPrecent.toFixed(3);
    var text = "";
    text += totalTimes ;
    text += "," ;
    text += redTimes ;
    text += "," ;
    text += blackTimes ;
    text += "," ;
    text += greenTimes ;
    text += "," ;
    text += redPrecent ;
    text += "," ;
    text += blackPrecent ;
    text += "," ;
    text += greenPrecent ;
    text += "," ;
    text += prevNum ;
    console.log(text) ;
}