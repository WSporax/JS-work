const Bgbutton = document.querySelector('#bgbutton');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3s = document.querySelectorAll('h3');
const buttons = document.querySelectorAll('.changer'); //THIS DOES NOT GRAB THE BUTTONS <- THE ISSUE
const buttons2 = document.querySelectorAll('.usingthis'); //THIS DOES NOT GRAB THE BUTTONS <- THE ISSUE
const btn261 = document.querySelector('#ex261btn');
const keyInput = document.querySelector('#ex261input');
const form262 = document.querySelector('#shelterForm');
const input263 = document.querySelector('#catName');
const list263 = document.querySelector('#ex263cats');
const form264 = document.querySelector('#tweetform')
const ul264 = document.querySelector('#tweets');
const input265 = document.querySelector('#ex265input');
const h4265 = document.querySelector('#ex265h4');
const div266 = document.querySelector('#ex266div');
const btn266 = document.querySelector('#ex266btn');
const li267 = document.querySelector('.ex264li')

Bgbutton.addEventListener('click', function () {
    const newColor = makeRandBgColor()
    document.body.style.backgroundColor = newColor;
    h2.innerHTML = `The color is ${newColor}`;
})

for (let button of buttons) {
    button.addEventListener('click', () => {
        const newColor = makeRandColor();
        button.style.backgroundColor = newColor;
        button.innerText = `Color: ${newColor}`
    })
}

//using colorator function
for (let button2 of buttons2) {
    button2.addEventListener('click', colorator)
}

btn261.addEventListener('click', (evt) => {
    console.log(evt);
})

keyInput.addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(e.code);

})

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!")
            break;
        case 'ArrowDown':
            console.log("DOWN!")
            break;
        case 'ArrowLeft':
            console.log("LEFT!")
            break;
        case 'ArrowRight':
            console.log("RIGHT!")
            break;
    }
})

form262.addEventListener('submit', (e)=>{
    e.preventDefault();
    //console.log("SUBMITTED THE FORM");
    const catName = input263.value; //extracted the value from the input
    const newLi = document.createElement('li'); //create a new li
    newLi.innerText = catName; //set the innertext of newli to input value
    console.log(newLi); //prints the li so we can see it
    list263.append(newLi); //before we append it to the list263 js object
    input263.value = ""; //sets the input value to an empty string,clearing the input field.
})

form264.addEventListener('submit', (e)=>{
    //same method as before, on ex 262
    // const usernameInput = document.querySelector('#ex264username');
    // const tweetInput = document.querySelector('#ex264tweet');
    
    //directly accessing through the form JS object, elements is a property of a form, then it can access the name attributes that I have used
    // console.log(form264.elements.username.value);
    // console.log(form264.elements.tweet.value);
    // console.log(usernameInput.value, tweetInput.value);
    const username = form264.elements.username;
    const tweet = form264.elements.tweet;

    addTweet(username.value, tweet.value);

    //breaks the page, if using username.value above
    username.value = '';
    tweet.value = '';

    e.preventDefault();
})

input265.addEventListener('change', (e)=>{
    console.log("Changed") //changed only prints whenever you "focus and blur" as in change the text field, and then click away
})
input265.addEventListener('input', (e)=>{
    console.log("INPUTTED") //Input prints whenever anything happens
    h4265.innerText =  input265.value;
    
})

btn266.addEventListener('click', function(e){
    div266.style.backgroundColor = makeRandColor();
    e.stopPropagation(); //stops this event click from bubbling up to the div, which would then trigger the click function for div266.
})

div266.addEventListener('click', function(){
    div266.classList.toggle('hide');
    
})

//for ex 267, using the element property "target" which will value to the thing that was clicked.
ul264.addEventListener('click', function(e){
    (e.target.nodeName === 'LI' || e.target.nodeName === 'B') && e.target.remove();
    console.log(e);
    //this is weird, the && will evaluate since JS doesn't evaluate to a boolean, it executes the expression first, so e.target.remove() is run
})

const addTweet = (username, tweet) =>{

    const newTweet = document.createElement('li');
    newTweet.classList.add('ex264li'); //added to give a class to the li's for a later exercise (ex267)
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    ul264.append(newTweet);
}
const makeRandBgColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    if (r + g + b <= 100) {
        h2.style.color = "white"
        h1.style.color = "white"
    }
    return `rgb(${r}, ${g}, ${b})`;
}
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}
function colorator() {
    const newColor = makeRandColor();
    this.style.backgroundColor = newColor;
    this.innerText = `color: ${newColor}`;
}
