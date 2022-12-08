// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500 //.5s to 5s delay 
//     if (delay > 4000) {
//         failure("You have lost connection")
//     }
//     else {
//         success(`Connection to ${url} successful`)
//     }
// }

//using the callback

// fakeRequestCallback('google.com',
//     function (response) { //this is the success argument method
//         console.log("It worked");
//         console.log(response); //this will print out the declarative statement

//         //if succeeded, make a second request using another callback as a chain
//         fakeRequestCallback('google.com/page2',
//             function (response) {
//                 console.log("Second request worked");
//                 console.log(response);
//                 //if the second succeeded, make a third request
//                 fakeRequestCallback('google.com/page3',
//                     function (response) {
//                         console.log("Third request worked");
//                         console.log(response);
//                     },
//                     //third req in chain fails
//                     function (rejection) {
//                         console.log("Third request didn't work")
//                         console.log(rejection);
//                     })
//             },
//             //second req in chain fails
//             function (rejection) {
//                 console.log("Second request didn't work")
//                 console.log(rejection);
//             })
//     },
//     function (rejection) { //this is the failure argument method
//         console.log("It didn't work");
//         console.log(rejection);//prints out declarative statement
//     })
const fakeRequestPromise = (url) => {
    return new Promise((resolve,reject) => {
        const delay = Math.floor(Math.random()*(4500)) +500;
        setTimeout(() => {
            if (delay>4000){
                reject('Connection Timeout:(');
            }
            else{
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay)
    })
}

const yelpRequest = fakeRequestPromise('yelp.com/api/coffee');
yelpRequest.then(() => {
    console.log("It worked");
})