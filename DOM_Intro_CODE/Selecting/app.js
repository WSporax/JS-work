// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }


// const squareImages = document.getElementsByClassName('square');

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }

// const allImages = document.getElementsByTagName('img');

// // for(let img of allImages){
// //     //img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// // }

// const squareimages = document.getElementsByClassName("square");
// for (let img of squareimages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

//queerySelector is a swiss army knife, can do all of them
document.querySelector('p'); //returns the first one in the document
document.querySelector('#banner'); 
document.querySelector('.square'); 
document.querySelector('img:nth-of-type(2)'); //can do css styles inline
document.querySelector('a[title = "Java"]'); 

//querySelectorAll is something that returns ALL of this
document.querySelectorAll('a[title = "Java"]'); 

const links = document.querySelectorAll('p a') // get all a's in p's. These are anchors located within a paragraph
for(let link of links){
    console.log(link.href); //prints out all link hrefs within a paragraph
}