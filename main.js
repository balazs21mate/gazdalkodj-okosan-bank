var account = document.querySelector(".bank-account");

var input = document.querySelector("#input");
var error = document.querySelector('#error');

var add = document.querySelector("#add");
var subtraction = document.querySelector("#subtraction");
var seven_percent = document.querySelector("#seven-percent");
var fifteen_percent = document.querySelector("#fifteen-percent");

function buy(name, change, price){
    if(buy_home[change] === true){
        const result = parseInt(account.textContent) - price;
        account.innerText = `${result}`;
        name.style.backgroundColor = "green";
        name.disabled = true;
        console.log(buy_home[change]);


        buy_home[change] = !change;

        console.log(buy_home[change]);
    }
}

//BANKSZÁMLA MANIPULÁCIÓ

add.addEventListener('click', function(){

    if(parseInt(input.value)){
        const result = parseInt(account.textContent) + parseInt(input.value);
        account.innerText = `${result}`;
    }else if(typeof input.value === 'string' && input.value !== ''){
        error.style.visibility = 'visible';
    }
})

subtraction.addEventListener('click', function(){

    if(parseInt(input.value)){
        const result = parseInt(account.textContent) - parseInt(input.value);
        account.innerText = `${result}`;
    }else if(typeof input.value === 'string' && input.value !== ''){
        error.style.visibility = 'visible';
    }
})

seven_percent.addEventListener('click', function(){

    if(parseInt(account.textContent) > 0){
        const result = parseInt(account.textContent)*0.07+parseInt(account.textContent);
        account.innerText = `${result}`;
    }
})

fifteen_percent.addEventListener('click', function(){

    if(parseInt(account.textContent) > 0){
        const result = parseInt(account.textContent)*0.15+parseInt(account.textContent);
        account.innerText = `${result}`;
    }
})

// LAKÁSBÍZTOSÍTÁS VÁSÁRLÁSA

var home_insurance = document.querySelector('#home-insurance');

var buy_home = {'home_insurance_change': true}

home_insurance.addEventListener('click', function(){
    buy(home_insurance,'home_insurance_change', 30000);
})

// AUTÓ VÁSÁRLÁS

var car = document.querySelector('#car');
var car_change = true;

car.addEventListener('click', function(){
    buy(car, car_change, 7500000);
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

        home_change = !home_change;
    }else{
        const result = parseInt(account.textContent) + 9500000;
        account.innerText = `${result}`;
        home.style.backgroundColor = "#fafafa";
        furniture.style.visibility = 'hidden';
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
        burn.style.backgroundColor = "#fafafa";
    }
    
    setTimeout(burn_color, 1000);

    let price_count = 0;

    if(buy_home['home_insurance_change'] === false){
        for(let i of price_list){

            price_count += i;
        }

        let result = parseInt(account.textContent) + price_count;

        account.innerText = `${result}`;

        console.log(name_list);
        console.log(change_list);

        price_list = [];

        for( let i of name_list){
            i.style.backgroundColor = "#fafafa";
            i.style.color = "black";
            i.disabled = false;

        }

        for( let i of change_list){
            furnitures[i] = true;
        }
    }else{
        for( let i of name_list){
            i.style.backgroundColor = "#fafafa";
            i.style.color = "black";
            i.disabled = false;

        }

        for( let i of change_list){
            furnitures[i] = true;
        }
    }


})