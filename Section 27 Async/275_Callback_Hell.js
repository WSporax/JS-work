// //at 1 second run this
// setTimeout(()=>{
//     document.body.style.backgroundColor = 'red'
// }, 1000)
// //at 2 seconds run this
// setTimeout(()=> {
//     document.body.style.backgroundColor = 'orange'
// }, 2000)
// //kind of have to do math, a bit annoying, nest instead

//nesting structure lets you set intervals
// setTimeout(() =>{
//     document.body.style.backgroundColor= 'red';
//     setTimeout(() =>{
//         document.body.style.backgroundColor= 'orange'
//         setTimeout(()=>{
//             document.body.style.backgroundColor = 'pink';
//         }, 1000)
//     }, 1000)
// }, 1000)

//chucking it in a function
const delayedColorChange= (newColor, delay, doNext) =>{
    setTimeout(()=>{
        document.body.style.backgroundColor = newColor
        doNext && doNext();
    }, delay)
}

//third argument, doNext is a function
// delayedColorChange('red', 2000, ()=> console.log("Inside callback"))

delayedColorChange('blue', 3000, ()=>{
    delayedColorChange('yellow', 3000, ()=>{
        delayedColorChange('red', 3000, ()=> console.log("Inside last callback"))
    })
})

//prototype function for basic callbacks, callbacks if either succeed or fail
searchAnythingAPI('Search Term', () => {
    searchInside(listOfStuff, () =>{
        //if works, run this
    }, ()=>{
        //if does not work, run this
    })
})
//this gets very ugly here, callback functions have lots of nests and this eventually is called callback hell