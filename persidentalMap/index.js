let stateArray = [ 'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware', 'Washington_DC', 'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','NewHampshire','NewJersey','NewMexico','NewYork','NorthCarolina','NorthDakota','Ohio','Oklahoma','Oregon','Pennsylvania','RhodeIsland','SouthCarolina','SouthDakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','WestVirginia','Wisconsin','Wyoming' ];
 
let results2016 = [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0];
 
let results2012 = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0];
 
let results2008 = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0];
 
let results2004 = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0];
 
let results2000 = [0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0];
 
let results1996 = [0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0];
 
function get1996Results(){
    changeColors(results1996);
}
 
function get2000Results(){
    changeColors(results2000);
}
 
function get2004Results(){
    changeColors(results2004);
}
 
function get2008Results(){
    changeColors(results2008);
}
 
function get2012Results(){
    changeColors(results2012);
}
 
function get2016Results(){
    changeColors(results2016);
}
 
function changeColors(arrayYear){
    for(i = 0; i < stateArray.length; i++){
        let stateElement = document.getElementById(stateArray[i]);
        for(j = 0; j < stateElement.childElementCount; j++){
            if(arrayYear[i]){
                stateElement.children[j].setAttribute('style', 'fill: #367DCF');
            } else {
                stateElement.children[j].setAttribute('style', 'fill: #A92B17');
            }
        }
    }
}