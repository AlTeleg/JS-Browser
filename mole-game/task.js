getHole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById("dead")
const lost = document.getElementById("lost")

const score = () => {
    for (let i=1; i<=9; i++) {
        getHole(i).onclick = () => {
            if (getHole(i).className.includes( 'hole_has-mole' )) {
                dead.textContent = Number(dead.textContent) + 1;
                check()
            }
            else {
                lost.textContent = Number(lost.textContent) + 1;
                check()
            }
        }
    }
}

const renew = () => {
    dead.textContent = 0;
    lost.textContent = 0;
}

const check = () => {
    if (Number(lost.textContent) === 5) {
        alert("Поражение ;(")
        renew()
    }
    if (Number(dead.textContent) === 10) {
        alert("Победа!")
        renew()
    } 
}


score()
