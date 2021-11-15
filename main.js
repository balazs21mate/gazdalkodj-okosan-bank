var account = document.querySelector(".bank-account");

var input = document.querySelector("#input");
var error = document.querySelector('#error');

var add = document.querySelector("#add");
var subtraction = document.querySelector("#subtraction");
var seven_percent = document.querySelector("#seven-percent");
var fifteen_percent = document.querySelector("#fifteen-percent");
var add_half_million = document.querySelector("#add-half-million");
var add_million = document.querySelector("#add-million");

//Kiíratás

function write_text(text, color){
    error.style.visibility = 'visible';
    error.innerText = text;
    error.style.color = color;
}

function hidden_error(){
    error.style.visibility = 'hidden';
}

//BANKSZÁMLA MANIPULÁCIÓ


add.addEventListener('click', function(){

    if(parseInt(input.value)){
        const result = parseInt(account.textContent) + parseInt(input.value);
        account.innerText = `${result} Ft`;
        write_text(`Az összeget: ${parseInt(input.value)} Ft hozzáadtuk a számlájához!`, 'green')
        setTimeout(hidden_error, 3000);
        input.value = "";
    }else if(typeof input.value === 'string' && input.value !== ''){
        write_text('Kérem számot írjon be!', 'red')

        setTimeout(hidden_error, 2000);

        input.value = "";
    }
})

subtraction.addEventListener('click', function(){

    if(parseInt(input.value)){
        const result = parseInt(account.textContent) - parseInt(input.value);
        account.innerText = `${result} Ft`;
        write_text(`Az összeget: ${parseInt(input.value)} Ft levontuk a számlájáról!`, 'green')
        setTimeout(hidden_error, 3000);
        input.value = "";
    }else if(typeof input.value === 'string' && input.value !== ''){
        error.style.visibility = 'visible';
        input.value = "";
    }
})

seven_percent.addEventListener('click', function(){

    if(parseInt(account.textContent) > 0){
        const result = parseInt(parseInt(account.textContent)*0.07)+parseInt(account.textContent);
        write_text(`Az összeget: ${parseInt(parseInt(account.textContent)*0.07)} Ft hozzáadtuk a számlájához!`, 'green')
        setTimeout(hidden_error, 3000);
        account.innerText = `${result} Ft`;
    }
})

fifteen_percent.addEventListener('click', function(){

    if(parseInt(account.textContent) > 0){
        const result = parseInt(parseInt(account.textContent)*0.15)+parseInt(account.textContent);
        write_text(`Az összeget: ${parseInt(parseInt(account.textContent)*0.15)} Ft hozzáadtuk a számlájához!`, 'green')
        setTimeout(hidden_error, 3000);
        account.innerText = `${result} Ft`;
    }
})

add_half_million.addEventListener('click', function(){

        const result = parseInt(account.textContent)+500000;
        write_text(`Az összeget: ${500000} Ft hozzáadtuk a számlájához!`, 'green')
        setTimeout(hidden_error, 3000);
        account.innerText = `${result} Ft`;
})

add_million.addEventListener('click', function(){

    const result = parseInt(account.textContent)+1000000;
    write_text(`Az összeget: ${1000000} Ft hozzáadtuk a számlájához!`, 'green')
    setTimeout(hidden_error, 3000);
    account.innerText = `${result} Ft`;
})

//BIZTOSÍTÁSOK

var home_insurance = document.querySelector('#home-insurance');
var child_insurance = document.querySelector('#child-insurance');
var pension_insurance = document.querySelector('#pension-insurance');
var casco_insurance = document.querySelector('#casco-insurance');

function buy(buy_item, name, change, price){
    if(buy_item[change] === true){
        const result = parseInt(account.textContent) - price;
        account.innerText = `${result}`;
        name.style.backgroundColor = "green";
        name.disabled = true;

        buy_item[change] = !change;
    }
}


var buy_home = {
    'home_insurance_change': true,
    'child_insurance_change': true,
    'pension_insurance_change': true,
    'casco_insurance_change': true
}

// Lakás biztosítás

home_insurance.addEventListener('click', function(){
    buy(buy_home, home_insurance,'home_insurance_change', 30000);
    write_text(`Az összeget: ${30000} Ft levontuk a számlájáról!`, 'green')
    setTimeout(hidden_error, 3000);
})

//Gyermekjövő biztosítás

child_insurance.addEventListener('click', function(){
    buy(buy_home, child_insurance,'child_insurance_change', 180000);
    write_text(`Az összeget: ${180000} Ft levontuk a számlájáról!`, 'green')
    setTimeout(hidden_error, 3000);
})

//Nyugdíjbiztosítás

pension_insurance.addEventListener('click', function(){
    buy(buy_home, pension_insurance,'pension_insurance_change', 180000);
    write_text(`Az összeget: ${180000} Ft levontuk a számlájáról!`, 'green')
    setTimeout(hidden_error, 3000);
})

//Casco biztosítás

casco_insurance.addEventListener('click', function(){
    buy(buy_home, casco_insurance,'casco_insurance_change', 50000);
    write_text(`Az összeget: ${50000} Ft levontuk a számlájáról!`, 'green')
    setTimeout(hidden_error, 3000);
})

// AUTÓ VÁSÁRLÁS

var car = document.querySelector('#car');
var buy_car = {'car_change': true}

car.addEventListener('click', function(){
    buy(buy_car,car, 'car_change', 7500000);
    write_text(`Az összeget: ${7500000} Ft levontuk a számlájáról!`, 'green')
    setTimeout(hidden_error, 3000);
})

//HÁZ VÁSÁRLÁS

var home = document.querySelector('#home');
var furniture = document.querySelector('.in-house')
var home_change = true;

home.addEventListener('click', function(){

    if(home_change === true){
        const result = parseInt(account.textContent) - 9500000;
        account.innerText = `${result}`;
        home.style.backgroundColor = "green";
        home.disabled = true;
        furniture.style.visibility = 'visible';
        write_text(`Az összeget: ${9500000} Ft levontuk a számlájáról!`, 'green')
        setTimeout(hidden_error, 3000);

        home_change = !home_change;
    }
})

//BÚTOR VÁSÁRLÁS

var price_list = [];
var name_list = [];
var change_list = [];

var kitchen = document.querySelector('#kitchen');
var room_furniture = document.querySelector('#room-furniture');
var refrigerator = document.querySelector('#refrigerator');
var oven = document.querySelector('#oven');
var tv = document.querySelector('#tv');
var washing_machine = document.querySelector('#washing-machine');

var furnitures= {
    'kitchen_change': true,
    'room_furniture_change': true,
    'refrigerator_change': true,
    'oven_change': true,
    'tv_change': true,
    'washing_machine_change': true,
}

function buy_furniture(name, change, price){
    if(furnitures[change] === true){
        const result = parseInt(account.textContent) - price;
        account.innerText = `${result}`;
        name.style.backgroundColor = "green";
        name.disabled = true;
        furnitures[change] = !change;
        price_list.push(price);
        name_list.push(name);
        change_list.push(change);
        write_text(`Az összeget: ${price} Ft levontuk a számlájáról!`, 'green')
        setTimeout(hidden_error, 3000);
    }
}

kitchen.addEventListener('click', function(){

    buy_furniture(kitchen,'kitchen_change',300000);
})

room_furniture.addEventListener('click', function(){

    buy_furniture(room_furniture,'room_furniture_change',900000);
})

refrigerator.addEventListener('click', function(){

    buy_furniture(refrigerator,'refrigerator_change', 80000);
})

oven.addEventListener('click', function(){

    buy_furniture(oven,'oven_change', 70000);
})

tv.addEventListener('click', function(){

    buy_furniture(tv,'tv_change', 70000);
})

washing_machine.addEventListener('click', function(){

    buy_furniture(washing_machine,'washing_machine_change', 90000);
})

// LEÉGETT HÁZ DEFINIÁLÁSA

var burn = document.querySelector('#burn');

var in_house = document.querySelector('.furniture');

burn.addEventListener('click', function(){

    burn.style.backgroundColor = "red";

    function burn_color(){
        burn.style.backgroundColor = "#D3290E";
    }
    
    setTimeout(burn_color, 1000);

    let price_count = 0;

    write_text('A lakása leégett!\nHa volt lakásbiztosítása a leégett bútorok árát hozzáadjuk a számlájához!', 'red')
    setTimeout(hidden_error, 10000);

    if(buy_home['home_insurance_change'] === false){
        for(let i of price_list){

            price_count += i;
        }

        let result = parseInt(account.textContent) + price_count;

        account.innerText = `${result}`;

        price_list = [];

        for( let i of name_list){
            i.style.backgroundColor = "#D3290E";
            i.style.color = "white";
            i.disabled = false;

        }

        for( let i of change_list){
            furnitures[i] = true;
        }
    }else{
        for( let i of name_list){
            i.style.backgroundColor = "#D3290E";
            i.style.color = "white";
            i.disabled = false;

        }

        for( let i of change_list){
            furnitures[i] = true;
        }
    }


})

