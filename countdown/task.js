const timer = document.getElementById("timer");
timer.textContent = "00:00:" + timer.textContent

const countdown = new Promise(resolve => { 
    const counter = setInterval(() => {
        if (timer.textContent == "00:00:00") {
            window.location.href = "https://www.7-zip.org/a/7z2201-x64.exe";
            clearInterval(counter);
            resolve("Вы победили в конкурсе! Бесплатный архиватор ваш!");
            return
        };
        timer.textContent = timer.textContent.substring(timer.textContent.length - 2); 
        timer.textContent -= 1;
        if (timer.textContent.length == 2) {
            timer.textContent = "00:00:" + timer.textContent
        }
        if (timer.textContent.length == 1) {
            timer.textContent = "00:00:0" + timer.textContent
        } 
    }, 50)
})

countdown.then(alert);




// function alertWin () {
//     alert("Вы победили в конкурсе! Бесплатный архиватор ваш!");
// }

// const countdown = (alert) => {
//     const counter = setInterval(() => {
//         if (timer.textContent === "00:00:00") {
//             window.location.href = "https://www.7-zip.org/a/7z2201-x64.exe";
//             clearInterval(counter);
//             alert();
//             return;
//         };
//         timer.textContent = timer.textContent.substring(timer.textContent.length - 2);
//         timer.textContent -=1;
//         if (timer.textContent.length == 2) {
//             timer.textContent = "00:00:" + timer.textContent
//         }
//         if (timer.textContent.length == 1) {
//             timer.textContent = "00:00:0" + timer.textContent
//         }        
//     }, 50)
// }

// countdown(alertWin);




