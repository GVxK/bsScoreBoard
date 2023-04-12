let homeScEl = document.getElementById("home-sc-el")
let guestScEl = document.getElementById("guest-sc-el")

let homeValue = 0
let guestValue = 0

function homeAdd1() {
homeValue += 1
homeScEl.textContent = homeValue
}

function homeAdd2() {
    homeValue += 2
    homeScEl.textContent = homeValue
    }

function homeAdd3() {
homeValue += 3
homeScEl.textContent = homeValue
}

function guestAdd1() {
guestValue += 1
guestScEl.textContent = guestValue
}

function guestAdd2() {
guestValue += 2
guestScEl.textContent = guestValue
}

function guestAdd3() {
guestValue += 3
guestScEl.textContent = guestValue
}

function startgame() {
homeValue = 0
guestValue = 0
homeScEl.textContent = homeValue
guestScEl.textContent = guestValue
homeScEl.style.backgroundColor = "#0a100d"
guestScEl.style.backgroundColor = "#0a100d"
}

function highlight() {
    if (homeValue > guestValue) {
        homeScEl.style.backgroundColor = "#d6d5c9"
    }   else if(guestValue > homeValue) {
        guestScEl.style.backgroundColor = "#d6d5c9"
    }   else {
        homeScEl.style.backgroundColor = "#0a100d"
        guestScEl.style.backgroundColor = "#0a100d"
    }
}