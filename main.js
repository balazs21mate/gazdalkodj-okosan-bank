var account = document.querySelector(".bank-account")

function getAccount(params) {
    if (localStorage.getItem("new_account")){
        account.textContent = localStorage.getItem("new_account") + " Ft"
    }else{
        account.textContent = "3000000 Ft"
    }
}

var input = document.querySelector("#input")
var error = document.querySelector('#error')

var add = document.querySelector("#add")
var subtraction = document.querySelector("#subtraction")
var seven_percent = document.querySelector("#seven-percent")
var fifteen_percent = document.querySelector("#fifteen-percent")
var add_half_million = document.querySelector("#add-half-million")
var add_million = document.querySelector("#add-million")

var prize = document.querySelector('#prize')
var prize_change = false

var home_insurance = document.querySelector('#home-insurance')
var child_insurance = document.querySelector('#child-insurance')
var pension_insurance = document.querySelector('#pension-insurance')
var casco_insurance = document.querySelector('#casco-insurance')

var buy_home = {
    'home_insurance_change': true,
    'child_insurance_change': true,
    'pension_insurance_change': true,
    'casco_insurance_change': true
}

var car = document.querySelector('#car')
var buy_car = {'car_change': true}

var home = document.querySelector('#home')
var buy_house = {'home_change': true}

var price_list = []
var name_list = []
var change_list = []

var kitchen = document.querySelector('#kitchen')
var room_furniture = document.querySelector('#room-furniture')
var refrigerator = document.querySelector('#refrigerator')
var oven = document.querySelector('#oven')
var tv = document.querySelector('#tv')
var washing_machine = document.querySelector('#washing-machine')

var furnitures= {
    'kitchen_change': true,
    'room_furniture_change': true,
    'refrigerator_change': true,
    'oven_change': true,
    'tv_change': true,
    'washing_machine_change': true,
}

var burn = document.querySelector('#burn')

var in_house = document.querySelector('.furniture')

var insurances_bool = false
var insurances_prices = []
var insurances_price = 0

var home_credit = document.querySelector('#home-credit')
var car_credit = document.querySelector('#car-credit')

var home_remaining = document.querySelector('#home-remaining')
var home_paid = document.querySelector('#home-paid')
var car_remaining = document.querySelector('#car-remaining')
var car_paid = document.querySelector('#car-paid')

var credits= {
    'home_credit_change': true,
    'car_credit_change': true,
}

var home_credit_repay = document.querySelector('#home-credit-repay')
var home_credit_repay_button = document.querySelector('#home-credit-repay-button')

//Vissza

var back = document.querySelector('#back')

back.addEventListener("click", function () {
    account.innerText = localStorage.getItem("account") + " Ft"
    localStorage.setItem("new_account", parseInt(account.textContent))
})

//Új játék

var new_game = document.querySelector('#new-game')

new_game.addEventListener("click", function () {
    location.reload();
    account.innerText = "3000000 Ft"
    localStorage.setItem("account", 3000000)
    localStorage.setItem("new_account", 3000000)
})

//Kiíratás

function write_text(text, color){
    error.style.visibility = 'visible'
    error.innerText = text
    error.style.color = color
}

function hidden_error(){
    error.style.visibility = 'hidden'
}

function buy(buy_item, name, change, price, text, boolen){
    if(buy_item[change] === true && (parseInt(account.textContent)  - price) >= 0){
        const result = parseInt(account.textContent) - price
        account.innerText = `${result} Ft`
        name.style.backgroundColor = "green"
        name.style.color = "white"
        name.style.boxShadow = "none"
        name.style.border = "none"
        name.disabled = true

        buy_item[change] = !change
        write_text(text, 'green')
        setTimeout(hidden_error, 5000)

        prize_change = false
        prize.style.backgroundColor = "white"
        prize.style.color = "#D3290E"
        prize.style.boxShadow = "2px 2px 2px #D3290E"
        prize.style.border = "1px solid #D3290E"

        if(boolen){
            if(change === 'home_credit_change'){
                insurances_prices.push(90000)
            }else if(change === 'car_credit_change'){
                insurances_prices.push(156250)
            }else{
                insurances_prices.push(price)
            }
        }

    }else{
        write_text('Nincs elegendő pénz a számláján!', 'red')
        setTimeout(hidden_error, 5000)

        prize_change = false
        prize.style.backgroundColor = "white"
        prize.style.color = "#D3290E"
        prize.style.boxShadow = "2px 2px 2px #D3290E"
        prize.style.border = "1px solid #D3290E"
    }
}

//BANKSZÁMLA MANIPULÁCIÓ


add.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    if(parseInt(input.value) && parseInt(account.textContent) >= 0){
        const result = parseInt(account.textContent) + parseInt(input.value)
        localStorage.setItem("new_account", result)
        account.innerText = `${result} Ft`
        write_text(`Az összeget: ${parseInt(input.value)} Ft hozzáadtuk a számlájához!`, 'green')
        setTimeout(hidden_error, 5000)
        input.value = ""
    }else if(typeof input.value === 'string' && input.value !== ''){
        write_text('Kérem számot írjon be!', 'red')

        setTimeout(hidden_error, 5000)

        input.value = ""
    }
})

subtraction.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    if(parseInt(input.value) ){
        const result = parseInt(account.textContent) - parseInt(input.value)
        if(result >= 0){
            localStorage.setItem("new_account", result)
            account.innerText = `${result} Ft`
            write_text(`Az összeget: ${parseInt(input.value)} Ft levontuk a számlájáról!`, 'green')
            setTimeout(hidden_error, 5000)
            input.value = ""
        }else{
            write_text('Nincs elegendő pénz a számláján!', 'red')
            setTimeout(hidden_error, 5000)
            input.value = ""
        }
    }else if(typeof input.value === 'string' && input.value !== ''){
        write_text('Kérem számot írjon be!', 'red')

        setTimeout(hidden_error, 5000)

        input.value = ""
    }
})

seven_percent.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    if(parseInt(account.textContent) > 0){
        const result = parseInt(parseInt(account.textContent)*0.07)+parseInt(account.textContent)
        write_text(`Az összeget: ${parseInt(parseInt(account.textContent)*0.07)} Ft hozzáadtuk a számlájához!`, 'green')
        setTimeout(hidden_error, 5000)
        account.innerText = `${result} Ft`
        localStorage.setItem("new_account", result)
    }
})

fifteen_percent.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    if(parseInt(account.textContent) > 0){
        const result = parseInt(parseInt(account.textContent)*0.15)+parseInt(account.textContent)
        write_text(`Az összeget: ${parseInt(parseInt(account.textContent)*0.15)} Ft hozzáadtuk a számlájához!`, 'green')
        setTimeout(hidden_error, 5000)
        account.innerText = `${result} Ft`
        localStorage.setItem("new_account", result)
    }
})

add_half_million.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    if(insurances_bool === true){
        for(let i of insurances_prices){
            insurances_price += i
        }
        const result = parseInt(account.textContent)+500000-insurances_price
        localStorage.setItem("new_account", result)
        if (result >=0) {
            write_text(`Az összeget: ${500000-insurances_price} Ft hozzáadtuk a számlájához!`, 'green')
            setTimeout(hidden_error, 5000)
            account.innerText = `${result} Ft`
            insurances_price = 0
    
            if(credits['home_credit_change'] === false && parseInt(home_remaining.textContent) > 0){
                home_remaining_price = parseInt(home_remaining.textContent) - 90000
                home_remaining.innerText = `${home_remaining_price} Ft`
        
                if(home_remaining_price === 0){
                    insurances_prices.pop(90000)
                }
        
                home_paid_price = parseInt(home_paid.textContent) + 90000
                home_paid.innerText = `${home_paid_price} Ft`
            }
        
            if(credits['car_credit_change'] === false && parseInt(car_remaining.textContent) > 0){
                car_remaining_price = parseInt(car_remaining.textContent) - 156250
                car_remaining.innerText = `${car_remaining_price} Ft`
        
                if(car_remaining_price === 0){
                    insurances_prices.pop(156250)
                }
        
                car_paid_price = parseInt(car_paid.textContent) + 156250
                car_paid.innerText = `${car_paid_price} Ft`
            }
        }else{
            write_text('Nincs elegendő pénz a számláján!', 'red')
            setTimeout(hidden_error, 5000)
        }
    }else{
        const result = parseInt(account.textContent)+500000
        write_text(`Az összeget: ${500000} Ft hozzáadtuk a számlájához!`, 'green')
        setTimeout(hidden_error, 5000)
        account.innerText = `${result} Ft`
        localStorage.setItem("new_account", result)
    }

})

add_million.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    if(insurances_bool === true){
        for(let i of insurances_prices){
            insurances_price += i
        }
        const result = parseInt(account.textContent)+1000000-insurances_price
        write_text(`Az összeget: ${1000000-insurances_price} Ft hozzáadtuk a számlájához!`, 'green')
        setTimeout(hidden_error, 5000)
        account.innerText = `${result} Ft`
        insurances_price = 0
        localStorage.setItem("new_account", result)
    }else{
        const result = parseInt(account.textContent)+1000000
        write_text(`Az összeget: ${1000000} Ft hozzáadtuk a számlájához!`, 'green')
        setTimeout(hidden_error, 5000)
        account.innerText = `${result} Ft`
        localStorage.setItem("new_account", result)
    }

    if(credits['home_credit_change'] === false && parseInt(home_remaining.textContent) > 0){
        home_remaining_price = parseInt(home_remaining.textContent) - 90000
        home_remaining.innerText = `${home_remaining_price} Ft`

        if(home_remaining_price === 0){
            insurances_prices.pop(90000)
        }

        home_paid_price = parseInt(home_paid.textContent) + 90000
        home_paid.innerText = `${home_paid_price} Ft`
    }

    if(credits['car_credit_change'] === false && parseInt(car_remaining.textContent) > 0){
        car_remaining_price = parseInt(car_remaining.textContent) - 156250
        car_remaining.innerText = `${car_remaining_price} Ft`

        if(car_remaining_price === 0){
            insurances_prices.pop(156250)
        }

        car_paid_price = parseInt(car_paid.textContent) + 156250
        car_paid.innerText = `${car_paid_price} Ft`
    }
})

// NYEREMÉNY

prize.addEventListener('click', function(){
    if(prize_change === false){
        prize.style.backgroundColor = "green"
        prize.style.color = "white"
        prize.style.boxShadow = "none"
        prize.style.border = "none"
        prize_change = !prize_change
    }
})

//BIZTOSÍTÁSOK
// Lakás biztosítás

home_insurance.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    insurances_bool = true
    buy(buy_home, home_insurance,'home_insurance_change', 30000, `Az összeget: ${30000} Ft levontuk a számlájáról!`, true)
    localStorage.setItem("new_account", parseInt(account.textContent))
})

//Gyermekjövő biztosítás

child_insurance.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    insurances_bool = true
    buy(buy_home, child_insurance,'child_insurance_change', 180000,`Az összeget: ${180000} Ft levontuk a számlájáról!`, true)
    localStorage.setItem("new_account", parseInt(account.textContent))
})

//Nyugdíjbiztosítás

pension_insurance.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    insurances_bool = true
    buy(buy_home, pension_insurance,'pension_insurance_change', 180000, `Az összeget: ${180000} Ft levontuk a számlájáról!`, true)
    localStorage.setItem("new_account", parseInt(account.textContent))
})

//Casco biztosítás

casco_insurance.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    insurances_bool = true
    buy(buy_home, casco_insurance,'casco_insurance_change', 50000, `Az összeget: ${50000} Ft levontuk a számlájáról!`, true)
    localStorage.setItem("new_account", parseInt(account.textContent))
})

// AUTÓ VÁSÁRLÁS

car.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    if(prize_change === false){
        buy(buy_car,car, 'car_change', 7500000, `Az összeget: ${7500000} Ft levontuk a számlájáról!`)
        localStorage.setItem("new_account", parseInt(account.textContent))
    }else{
        buy(buy_car,car, 'car_change', 0, `Az összeget: ${0} Ft levontuk a számlájáról!`)
    }

    if (!buy_car['car_change']) {
        car_credit.disabled = true
    }
})

//HÁZ VÁSÁRLÁS

home.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))

    buy(buy_house,home, 'home_change', 9500000, `Az összeget: ${9500000} Ft levontuk a számlájáról!`)
    localStorage.setItem("new_account", parseInt(account.textContent))
    if (!buy_house['home_change']) {
        home_credit.disabled = true
    }
})

//BÚTOR VÁSÁRLÁS

function buy_furniture(name, change, price){
    localStorage.setItem("account", parseInt(account.textContent))
    if(furnitures[change] === true && (parseInt(account.textContent)-price) >= 0){
        const result = parseInt(account.textContent) - price
        account.innerText = `${result} Ft`
        localStorage.setItem("new_account", result)
        name.style.backgroundColor = "green"
        name.style.color = "white"
        name.style.boxShadow = "none"
        name.style.border = "none"
        name.disabled = true
        furnitures[change] = !change
        price_list.push(price)
        name_list.push(name)
        change_list.push(change)
        write_text(`Az összeget: ${price} Ft levontuk a számlájáról!`, 'green')
        setTimeout(hidden_error, 5000)

        prize_change = false
        prize.style.backgroundColor = "white"
        prize.style.color = "#D3290E"
        prize.style.boxShadow = "2px 2px 2px #D3290E"
        prize.style.border = "1px solid #D3290E"
    }else{
        write_text('Nincs elegendő pénz a számláján!', 'red')
        setTimeout(hidden_error, 5000)

        prize_change = false
        prize.style.backgroundColor = "white"
        prize.style.color = "#D3290E"
        prize.style.boxShadow = "2px 2px 2px #D3290E"
        prize.style.border = "1px solid #D3290E"
    }
}

kitchen.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    if(!buy_house['home_change'] || !credits['home_credit_change']){
        buy_furniture(kitchen,'kitchen_change',300000)
        localStorage.setItem("new_account", parseInt(account.textContent))
    }
})

room_furniture.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    
    if(!buy_house['home_change'] || !credits['home_credit_change']){
        if(prize_change){
            buy_furniture(room_furniture,'room_furniture_change',0)
        }else{
            buy_furniture(room_furniture,'room_furniture_change',900000)
            localStorage.setItem("new_account", parseInt(account.textContent))
        }
    }else if(prize_change){
        buy_furniture(room_furniture,'room_furniture_change',0)
    }
})

refrigerator.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))

    if(!buy_house['home_change'] || !credits['home_credit_change']){
        if(prize_change){
            buy_furniture(refrigerator,'refrigerator_change', 0)
        }else{
            buy_furniture(refrigerator,'refrigerator_change', 80000)
            localStorage.setItem("new_account", parseInt(account.textContent))
        }
    }else if(prize_change){
        buy_furniture(refrigerator,'refrigerator_change', 0)
    }
})

oven.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    if(!buy_house['home_change'] || !credits['home_credit_change']){
        buy_furniture(oven,'oven_change', 70000)
        localStorage.setItem("new_account", parseInt(account.textContent))
    }
})

tv.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    if(!buy_house['home_change'] || !credits['home_credit_change']){
        buy_furniture(tv,'tv_change', 70000)
        localStorage.setItem("new_account", parseInt(account.textContent))
    }
})

washing_machine.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))

    if(!buy_house['home_change'] || !credits['home_credit_change']){
        if(prize_change){
            buy_furniture(washing_machine,'washing_machine_change', 0)
        }else{
            buy_furniture(washing_machine,'washing_machine_change', 90000)
            localStorage.setItem("new_account", parseInt(account.textContent))
        }
    }else if(prize_change){
        buy_furniture(washing_machine,'washing_machine_change', 0)
    }
})

// LEÉGETT HÁZ DEFINIÁLÁSA

burn.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))

    burn.style.backgroundColor = "#D3290E"
    burn.style.color = "white"

    function burn_color(){
        burn.style.backgroundColor = "white"
        burn.style.color = "#D3290E"
    }
    
    setTimeout(burn_color, 1000)

    let price_count = 0

    write_text('A lakása leégett!\nHa volt lakásbiztosítása a leégett bútorok árát hozzáadjuk a számlájához!', 'red')
    setTimeout(hidden_error, 10000)

    if(buy_home['home_insurance_change'] === false){
        for(let i of price_list){

            price_count += i
        }

        let result = parseInt(account.textContent) + price_count

        account.innerText = `${result} Ft`
        localStorage.setItem("new_account", result)

        price_list = []

        for( let i of name_list){
            i.style.backgroundColor = "white"
            i.style.color = "#D3290E"
            i.style.boxShadow = "2px 2px 2px #D3290E"
            i.style.border = "1px solid #D3290E"
            i.disabled = false

        }

        for( let i of change_list){
            furnitures[i] = true
        }
    }else{
        for( let i of name_list){
            i.style.backgroundColor = "white"
            i.style.color = "#D3290E"
            i.style.boxShadow = "2px 2px 2px #D3290E"
            i.style.border = "1px solid #D3290E"
            i.disabled = false

        }

        for( let i of change_list){
            furnitures[i] = true
        }
    }


})

// HITELEK
// Lakáshitel

home_credit.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    insurances_bool = true
    buy(credits, home_credit,'home_credit_change', 2000000, `Az összeget: ${2000000} Ft levontuk a számlájáról!`, true)
    localStorage.setItem("new_account", parseInt(account.textContent))
    if (!credits['home_credit_change']) {
        home_remaining.innerText = '9000000 Ft'
        home.disabled = true
        home.style.backgroundColor = "green"
        home.style.color = "white"
    }
})

// Előtőrlesztés

home_credit_repay_button.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    if(parseInt(home_credit_repay.value) && !credits['home_credit_change']){
        const result = parseInt(account.textContent) - parseInt(home_credit_repay.value)
        const result2 = parseInt(home_remaining.textContent) - parseInt(home_credit_repay.value)
        const result3 = parseInt(home_paid.textContent) + parseInt(home_credit_repay.value)

        if(result >= 0 && result2 >= 0){
            account.innerText = `${result} Ft`
            home_remaining.innerText =`${result2}`
            home_paid.innerText= `${result3}`
            write_text(`Az összeget: ${parseInt(home_credit_repay.value)} Ft levontuk a számlájáról!`, 'green')
            localStorage.setItem("new_account", parseInt(account.textContent))
            setTimeout(hidden_error, 5000)
            home_credit_repay.value = ""
        }else if(result2 < 0 ){
            write_text('A tőrlesztésre szánt összeg nagyobb, mint a fentmaradó lakáshitel!', 'red')
            setTimeout(hidden_error, 5000)
            home_credit_repay.value = ""
        }else{
            write_text('Nincs elegendő pénz a számláján!', 'red')
            setTimeout(hidden_error, 5000)
            home_credit_repay.value = ""
        }
    }else if(parseInt(home_credit_repay.value) && credits['home_credit_change']){
        write_text('Nincs meglévő lakáshitele!', 'red')

        setTimeout(hidden_error, 5000)

        home_credit_repay.value = ""
    }else if(home_credit_repay.value !== ''){
        write_text('Kérem számot írjon be!', 'red')

        setTimeout(hidden_error, 5000)

        home_credit_repay.value = ""
    }
})

// Autó hitel

car_credit.addEventListener('click', function(){
    localStorage.setItem("account", parseInt(account.textContent))
    insurances_bool = true
    buy(credits, car_credit,'car_credit_change', 2000000, `Az összeget: ${2000000} Ft levontuk a számlájáról!`, true)
    localStorage.setItem("new_account", parseInt(account.textContent))
    if (!credits['car_credit_change']) {
        car_remaining.innerText = '6250000 Ft'
        car.disabled = true
        car.style.backgroundColor = "green"
        car.style.color = "white"
    }
})