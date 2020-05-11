function eateFood() {
    if (parseInt(myWorker.innerHTML) <= parseInt(myFood.innerHTML)) {
        food = parseInt(myFood.innerHTML) - parseInt(myWorker.innerHTML)
        myFood.innerHTML = food
    } else {
        myWorker.innerHTML = 0
    }
}

setInterval('eateFood()', 15000);


function workFlow() {
    if (parseInt(myCrop.innerHTML) >= 1 && parseInt(myWorker.innerHTML) >= 1) {
        if (parseInt(myCrop.innerHTML) >= parseInt(myWorker.innerHTML)) {
            crop = parseInt(myCrop.innerHTML) - parseInt(myWorker.innerHTML)
            soldCrop = parseInt(myCrop.innerHTML) - parseInt(crop)
            money = parseInt(soldCrop) * 8

            myCrop.innerHTML = crop
            myMoney.innerHTML = parseInt(myMoney.innerHTML) + parseInt(money)

        } else {
            myMoney.innerHTML = parseInt(myMoney.innerHTML) + parseInt(myCrop.innerHTML)
            myCrop.innerHTML = 0
        }
    }
}
setInterval('workFlow()', 5000);

function buyWorker() {
    if (parseInt(myMoney.innerHTML) >= 20) {
        if (parseInt(myWorker.innerHTML) < parseInt(myFood.innerHTML)) {
            if (parseInt(myEnergy.innerHTML) >= 10) {
                mymoney = parseInt(myMoney.innerHTML) - 20
                myenergy = parseInt(myEnergy.innerHTML) - 10
                myWorker.innerHTML++
                score.innerHTML++
                myMoney.innerHTML = mymoney
                myEnergy.innerHTML = myenergy
                info.innerHTML = "Yeni bi isci alindi !"
                info.style.backgroundColor = '#007013'
            } else {
                info.innerHTML = "Yetersiz enerji !"
                info.style.backgroundColor = 'rgb(78, 1, 1)'
            }
        } else {
            info.innerHTML = "Yetersiz erzaq !"
            info.style.backgroundColor = 'rgb(78, 1, 1)'
        }
    } else {
        info.innerHTML = "Yetersiz pul !"
        info.style.backgroundColor = 'rgb(78, 1, 1)'
    }
}