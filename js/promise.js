const mypromise1 = new Promise((resolve, reject)=> {
    setTimeout(resolve, 100, "Queen");
})

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Queen");
});

Promise.any([mypromise1, myPromise2]).then((x)=>{
    myDisplay(x);
})

function myDisplay(some) {
    document.getElementById("promise").innerHTML += some;
}