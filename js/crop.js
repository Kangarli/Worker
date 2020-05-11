function buyCrop() {
    if (parseInt(myMoney.innerHTML) >= 5) {
        mymoney = parseInt(myMoney.innerHTML) - 5
        myCrop.innerHTML++
        score.innerHTML++
        myMoney.innerHTML = mymoney
        info.innerHTML = "Yeni islenmemis mallar geldi !"
        info.style.backgroundColor = '#007013'
    } else {
        info.innerHTML = "Yetersiz pul !"
        info.style.backgroundColor = 'rgb(78, 1, 1)'
    }
}


function buyMoreCrop5() {
    if (parseInt(myMoney.innerHTML) >= 25) {
        mymoney = parseInt(myMoney.innerHTML) - 25
        crop = parseInt(myCrop.innerHTML) + 5
        score.innerHTML++
        myMoney.innerHTML = mymoney
        myCrop.innerHTML = crop
        info.innerHTML = "Yeni islenmemis mallar geldi !"
        info.style.backgroundColor = '#007013'
    } else {
        info.innerHTML = "Yetersiz pul !"
        info.style.backgroundColor = 'rgb(78, 1, 1)'
    }
}

function buyMoreCrop10() {
    if (parseInt(myMoney.innerHTML) >= 50) {
        mymoney = parseInt(myMoney.innerHTML) - 50
        crop = parseInt(myCrop.innerHTML) + 10
        score.innerHTML++
        myMoney.innerHTML = mymoney
        myCrop.innerHTML = crop
        info.innerHTML = "Yeni islenmemis mallar geldi !"
        info.style.backgroundColor = '#007013'
    } else {
        info.innerHTML = "Yetersiz pul !"
        info.style.backgroundColor = 'rgb(78, 1, 1)'
    }
}

function buyMoreCrop50() {
    if (parseInt(myMoney.innerHTML) >= 250) {
        mymoney = parseInt(myMoney.innerHTML) - 250
        crop = parseInt(myCrop.innerHTML) + 50
        score.innerHTML++
        myMoney.innerHTML = mymoney
        myCrop.innerHTML = crop
        info.innerHTML = "Yeni islenmemis mallar geldi !"
        info.style.backgroundColor = '#007013'
    } else {
        info.innerHTML = "Yetersiz pul !"
        info.style.backgroundColor = 'rgb(78, 1, 1)'
    }
}