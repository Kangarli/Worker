function buyFood() {
    if (parseInt(myMoney.innerHTML) >= 15) {
        mymoney = parseInt(myMoney.innerHTML) - 15
        myFood.innerHTML++
        score.innerHTML++
        myMoney.innerHTML = mymoney
        info.innerHTML = "Erzaq alindi !"
        info.style.backgroundColor = '#007013'
    } else {
        info.innerHTML = "Yetersiz pul !"
        info.style.backgroundColor = 'rgb(78, 1, 1)'
    }
}

function buyMoreFood5() {
    if (parseInt(myMoney.innerHTML) >= 75) {
        mymoney = parseInt(myMoney.innerHTML) - 75
        food = parseInt(myFood.innerHTML) + 5
        score.innerHTML++
        myMoney.innerHTML = mymoney
        myFood.innerHTML = food
        info.innerHTML = "Erzaq alindi !"
        info.style.backgroundColor = '#007013'
    } else {
        info.innerHTML = "Yetersiz pul !"
        info.style.backgroundColor = 'rgb(78, 1, 1)'
    }
}

function buyMoreFood10() {
    if (parseInt(myMoney.innerHTML) >= 150) {
        mymoney = parseInt(myMoney.innerHTML) - 150
        food = parseInt(myFood.innerHTML) + 10
        score.innerHTML++
        myMoney.innerHTML = mymoney
        myFood.innerHTML = food
        info.innerHTML = "Erzaq alindi !"
        info.style.backgroundColor = '#007013'
    } else {
        info.innerHTML = "Yetersiz pul !"
        info.style.backgroundColor = 'rgb(78, 1, 1)'
    }
}

function buyMoreFood50() {
    if (parseInt(myMoney.innerHTML) >= 750) {
        mymoney = parseInt(myMoney.innerHTML) - 750
        food = parseInt(myFood.innerHTML) + 50
        score.innerHTML++
        myMoney.innerHTML = mymoney
        myFood.innerHTML = food
        info.innerHTML = "Erzaq alindi !"
        info.style.backgroundColor = '#007013'
    } else {
        info.innerHTML = "Yetersiz pul !"
        info.style.backgroundColor = 'rgb(78, 1, 1)'
    }
}