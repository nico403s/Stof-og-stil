let documentHeight = window.document.body.scrollHeight;
let currentPosition = window.scrollY;
let windowHeight = window.innerHeight;

let maxPosition = documentHeight - windowHeight;

document.getElementById("progressBar").value = 0;
document.getElementById("progressBar").max = maxPosition;

document.addEventListener("scroll",function(){
    //set the current value of progress
    document.getElementById("progressBar").value = window.scrollY;
    
})


let weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday"]


for (let i = 0; i < weekdays.length; i++) {
    let nextIndex = i + 1;
    console.log("the next day after " + weekdays[i] + " is " + weekdays[nextIndex]);
}




//while loop
let index = 0;
while (index < weekdays.length){
    console.log(weekdays[index]);
    index++;
}



let imageList = [];
imageList[0] = "image0.jpg";
imageList[1] = "image1.jpg";
imageList[2] = "image2.jpg";
imageList[3] = "image3.jpg";
imageList[4] = "image4.jpg";

document.getElementById(buttonNext).addEventListener("click", function() {
    console.log("I have click the next")
})