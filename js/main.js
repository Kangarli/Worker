function undateScore() {
    score.innerHTML
}



function energyUpgrade() {
    if (parseInt(myEnergy.innerHTML) < 200) {
        myEnergy.innerHTML++
    }
}
setInterval('energyUpgrade()', 20000)


function givePerk() {
    if (myPerk.innerHTML >= 1) {
        if (parseInt(score.innerHTML) > parseInt(requiredPerk.innerHTML)) {
            perkMoney = parseInt(myMoney.innerHTML) + 1000
            myMoney.innerHTML = perkMoney

            newRequiredPerk = parseInt(requiredPerk.innerHTML) * 3
            requiredPerk.innerHTML = newRequiredPerk

            myPerk.innerHTML--
            score.innerHTML++
        }
    } else {
        info.innerHTML = "Butun perkler istifade edilib !"
        info.style.backgroundColor = 'rgb(78, 1, 1)'
    }
}

function lose() {
    document.getElementById('canvas').style.display = 'none'
    document.getElementById('lose').style.display = 'flex'
}

function update() {
    if (parseInt(myWorker.innerHTML) == 0 && parseInt(myMoney.innerHTML) < 20) {
        lose()
        highScore.innerHTML = score.innerHTML
    } else if ((parseInt(myCrop.innerHTML) == 0 && parseInt(myMoney.innerHTML) < 5)) {
        lose()
        highScore.innerHTML = score.innerHTML
    }
}

setInterval('update()', 1000)


$(document).keyup(function (e) {
    if (e.keyCode === 27) $(location.reload()).click();     // esc
    if (e.keyCode === 13) $(location.reload()).click();     // enter
});

function closeInformation() {
    panel.style.display = 'none'
}

function information() {
    panel.style.display = 'flex'
}