const btn = document.querySelector('#v2');
btn.onclick = function() {console.log("You Clicked me!"); console.log("stop clicking me!");}
function scream() {console.log("AAAAAAAAAAAAAHHHHHHH"); console.log("Stop touching me!");}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = function(){
    alert('You clicked the h1');
}
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function(){
    alert("Clicked!");
})
const btntas = document.querySelector('#tas');

//below will only return shout, onclick is a property, just like color!
// btntas.onclick = twist;
// btntas.onclick = shout;

//below will run both functions
btntas.addEventListener('click', twist);
btntas.addEventListener('click', shout);
//runs once, with third parameter being a do only once argument
btntas.addEventListener('click', spit, {once: true});



function twist() {
    console.log("TWIST");
}
function shout() {
    console.log("SHOUT");
}
function spit() {
    console.log("SPIT");
}