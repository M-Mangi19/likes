console.log("Java script is working")

var count = [0,0,0]
var countElement=[
    document.querySelector(".counter1"),
    document.querySelector(".counter2"),
    document.querySelector(".counter3"),
]

function addLike(id) {
    count[id] ++;
    countElement[id].innerText = count[id];
    console.log(count)
}

