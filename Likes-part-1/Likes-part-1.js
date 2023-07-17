console.log("javascript is working")

var count = 0
var countElement = document.querySelector("#count")

function addLike() {
    count++;
    countElement.innerText = count + " like(s)"
    console.log(count)
}