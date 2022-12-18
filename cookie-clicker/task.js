const img = document.getElementById("cookie")
const counter = document.getElementById("clicker__counter")
const speed = document.getElementById("clicker__speed")
var lastClickTime = 0;
img.onclick = () => {
    time = Date.now()
    spentTime = time - lastClickTime;
    lastClickTime = time;
    speed.textContent = (1/(Math.floor(spentTime)/ 1000)).toFixed(2)
    counter.textContent = Number(counter.textContent) + 1;
    if (Number(counter.textContent)%2 === 1) {
        img.width += 10;
        img.height += 10;
    }
    else {
        img.width -= 10;
        img.height -= 10;
    }
}
