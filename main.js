const mainChekList = document.querySelector('.cart'),
    closeCheckList = document.querySelector('.nav__top-closeBtn'),
    openCheckList = document.querySelector('.fa-shopping-bag'),
    clearCheckListProduct = document.querySelector('.nav__bottom-clear'),
    checkListTotalPrice = document.querySelector('.checklist__totalPrice'),
    hamburgerBtn = document.querySelector('.hamburger'),
    navMenu = document.querySelector('.nav__menu'),
    navListBtns = document.querySelectorAll('.nav__list-items'),
    headerBtns = document.querySelectorAll('.header__button-btn'),
    menuBtns = document.querySelectorAll('.main__list-items'),
    sizeBtns = document.querySelectorAll('.btns-btn'),
    sezeBtn = document.querySelectorAll('.btns-btn2'),
    veneziPrice = document.querySelector('.veneziaPrice'),
    meatSizeBtn = document.querySelectorAll('.btns-btn3'),
    meatPrice = document.querySelector('.meatPrice'),
    cheeseSizeBtn = document.querySelectorAll('.btns-btn4'),
    cheesePrice = document.querySelector('.cheesePrice'),
    argentinaSizeBtn = document.querySelectorAll('.btns-btn5'),
    argentinaPrice = document.querySelector('.argentinaPrice'),
    mushroomSizeBtn = document.querySelectorAll('.btns-btn6'),
    mushroomsPrice = document.querySelector('.mushroomsPrice'),
    tomatoSizeBtn = document.querySelectorAll('.btns-btn7'),
    tomatoPrice = document.querySelector('.tomatoPrice'),
    italySizeBtn = document.querySelectorAll('.btns-btn8'),
    italyPrice = document.querySelector('.italyPrice'),
    pizzaSizes = document.querySelector('.menu__left-cost'),
    cardOrderBtn = document.querySelectorAll('.manu__card-order'),
    pizzaProductCheckList = document.querySelector('.checklist'),
    pizzaCheckListTotalPrice = document.querySelector('.checklist__totalPrice'),
    openGmail = document.querySelector('.nav__right-logIn'),
    inputForms = document.querySelectorAll('.nav__userBox-block'),
    form = document.querySelector('.nav__right-logIn form'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    error = document.getElementById('error'),
    printCheckList = document.querySelector('.print__body'),
    printTotalSum = document.querySelector('.print__footer'),
    printCheck = document.querySelector('.nav__bottom-order');

printCheck.addEventListener('click', function () {
    printCheckList.innerHTML = '';
    for (const key in product) {
        const { name, totalSum, amount } = product[key]
        if (amount) {
            printCheckList.innerHTML +=
                `
                <div class="print__item">
                <p class="print__item-naem">
                    <span class="name">${name}</span>
                    <span class="count">${amount}</span>
                    <p class="print__item-total">${totalSum.toLocaleString()}</p>
                </p>
            </div>
         `
        }
    }
    printTotalSum.innerHTML = totalPriceCheckList()
    window.print()
});


form.addEventListener('submit', (e) => {
    let messages = [];
    if (email.value === '' || email.value == null) {
        messages.push('Something went wrong!')
        for (let a = 0; a < inputForms.length; a++) {
            inputForms[a].classList.add('active');

        }
    }

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
    }

    if (messages.length > 0) {
        e.preventDefault()
        error.innerText = messages.join(', ')
    }
})

const product = {
    italian: {
        id: 'italian',
        amount: 0,
        name: 'Italian',
        img: "../Pizzashop/img/menu__italian.png",
        ingradients: "flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella",
        iprice22: { price: 6.75 },
        iprice28: { price: 8.35 },
        iprice33: { price: 10 },
        get totalSum() {
            return this.iprice28.price * this.amount;
        }
    },
    venecia: {
        id: 'venecia',
        amount: 0,
        name: 'Venecia',
        img: "../Pizzashop/img/menu__venecia.png",
        ingradients: "flour, water, salt, fresh yeast and canola oil, tomato",
        iprice22: { price: 6.20 },
        iprice28: { price: 7.35 },
        iprice33: { price: 9.75 },
        get totalSum() {
            return this.iprice28.price * this.amount;
        }
    },
    meat: {
        id: 'meat',
        amount: 0,
        name: 'Meat',
        img: "../Pizzashop/img/menu__meat.png",
        ingradients: "savory sausage, all purpose flour, slices bacon, cooked and chopped",
        iprice22: { price: 7.20 },
        iprice28: { price: 9.35 },
        iprice33: { price: 10.15 },
        get totalSum() {
            return this.iprice28.price * this.amount;
        }
    },
    cheese: {
        id: 'cheese',
        amount: 0,
        name: 'Cheese',
        img: "../Pizzashop/img/menu__cheese.png",
        ingradients: "An exceptional pizza dough, low-moisture mozzarella, tomato sauce",
        iprice22: { price: 6.75 },
        iprice28: { price: 8.35 },
        iprice33: { price: 10 },
        get totalSum() {
            return this.iprice28.price * this.amount;
        }
    },
    argentina: {
        id: 'argentina',
        amount: 0,
        name: 'Argentina',
        img: "../Pizzashop/img/menu__argentina.png",
        ingradients: "flour, water, yeast, sugar, salt, and oil, crust, sauce, and toppings",
        iprice22: { price: 5.80 },
        iprice28: { price: 7.35 },
        iprice33: { price: 9.45 },
        get totalSum() {
            return this.iprice28.price * this.amount;
        }
    },
    mushrooms: {
        id: 'mushrooms',
        amount: 0,
        name: 'Gribnaya',
        img: "../Pizzashop/img/menu__gribnaya.png",
        ingradients: "sautéed mushrooms, onions and garlic, slivers of lacinato kale",
        iprice22: { price: 5.10 },
        iprice28: { price: 6.35 },
        iprice33: { price: 8.60 },
        get totalSum() {
            return this.iprice28.price * this.amount;
        }
    },
    tomato: {
        id: 'tomato',
        amount: 0,
        name: 'Tomato',
        img: "../Pizzashop/img/menu__tomato.png",
        ingradients: "Tinned Chopped Tomatoes, pizza sauce, tomato puree, garlic cloves",
        iprice22: { price: 7.20 },
        iprice28: { price: 9.35 },
        iprice33: { price: 10.15 },
        get totalSum() {
            return this.iprice28.price * this.amount;
        }
    },
    italy: {
        id: 'italy',
        amount: 0,
        name: 'Italian x2',
        img: "../Pizzashop/img/menu__italian2x.png",
        ingradients: "Oregano, tomato, olives, mozzarella, anchovies, mushrooms",
        iprice22: { price: 6.75 },
        iprice28: { price: 8.35 },
        iprice33: { price: 10 },
        get totalSum() {
            return this.iprice28.price * this.amount;
        }
    }
}

cardOrderBtn.forEach((btn) => {
    btn.addEventListener('click', function () {
        addAmount(this);
    })
});

function addAmount(all) {
    let parent = all.closest('.main__cards-card');
    let id = parent.getAttribute('id');
    product[id].amount++;
    checklist()
}

function checklist() {
    const pizzaArray = [];
    for (const key in product) {
        let pizza = product[key];
        let productPizza = document.querySelector(`#${key}`);
        let pizzaCardInd = productPizza.querySelector('.main__card-indecator');


        if (pizza.amount > 0) {
            pizzaArray.push(pizza);
            pizzaCardInd.classList.add('active');
            pizzaCardInd.innerHTML = pizza.amount
        } else {
            pizzaCardInd.classList.remove('active')
            pizzaCardInd.innerHTML = '';
        }
    }

    pizzaProductCheckList.innerHTML = '';
    pizzaArray.forEach((item) => {
        pizzaProductCheckList.innerHTML += createPizzaSlice(item)
    });
    pizzaCheckListTotalPrice.innerHTML = totalPriceCheckList();

}

clearCheckListProduct.onclick = () => (pizzaProductCheckList.innerHTML = '', pizzaCheckListTotalPrice.innerHTML = 0);
document.querySelector('.nav__content-right .fa-search').onclick = () => (document.querySelector('.search').classList.toggle('active'), openGmail.classList.remove('active'), mainChekList.classList.remove('active'), navMenu.classList.remove('active'));

document.body.addEventListener('click', function (event) {

    if (!event.target.closest('.fa-search') && !event.target.closest('.search')) {
        document.querySelector('.search').classList.remove('active');
    }
});

const searchInput = document.getElementById('search-input'),
    productNames = document.querySelectorAll('.title2'),
    originalProductNames = Array.from(productNames).map(name => name.textContent);

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.trim().toLowerCase();
    productNames.forEach((name, index) => {
        const originalName = originalProductNames[index];
        const productName = originalName.toLowerCase();
        let markedName = '';
        let currentIndex = 0;

        for (let i = 0; i < productName.length; i++) {
            if (searchTerm[currentIndex] === productName[i]) {
                markedName += `<span class="highlight">${originalName[i]}</span>`;
                currentIndex++;
            } else {
                markedName += originalName[i];
            }
        }

        name.innerHTML = markedName;

        if (searchTerm && currentIndex === searchTerm.length) {
            name.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else if (!searchTerm) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    });
});

function createPizzaSlice(dataPizza) {
    const { name, img, totalSum: price, amount, ingradients, id } = dataPizza;

    return `
    <div class="checklist__product">
    <div class="checklist__product-left">
        <img src="${img}" alt="">

        <div class="checklist__left-block">
            <h3 class="checklist__center-name">${name}</h3>
            <p class="checklist__center-ingradients">${ingradients}</p>
        </div>
    </div>

    <p class="checklist__product-price">$ <span>${price.toLocaleString()}</span></p>

    <div class="checklist__product-right" id="${id.toLowerCase()}__pizza">
         <button class="checklist__right-btn" data-symbol="-">-</button>
         <output class="checklist__right-output">${amount}</output>
         <button class="checklist__right-btn" data-symbol="+">+</button>
    </div>
</div>
    `
}

function totalPriceCheckList() {
    let count = 6;
    for (const key in product) count += product[key].totalSum;

    if (count == 6) {
        count = 0;
    }
    return count.toLocaleString();
}

window.addEventListener('click', function (event) {
    const btnz = event.target;
    if (btnz.classList.contains('checklist__right-btn')) {
        const attribute = btnz.getAttribute('data-symbol');
        let parentPizza = btnz.closest('.checklist__product-right');

        if (parentPizza) {
            const idPizza = parentPizza.getAttribute('id').split('__')[0];

            if (attribute == '-') {
                product[idPizza].amount--
            } else if (attribute == '+') {
                product[idPizza].amount++
            }

            checklist()
        }
    }
})

document.querySelectorAll('.main__cards-card .fa-heart').forEach(heart => {
    heart.addEventListener('click', () => heart.classList.toggle('active'));
});

for (let i = 0; i < sizeBtns.length; i++) {
    sizeBtns[i].addEventListener('click', () => {
        let value = sizeBtns[i].getAttribute('value');
        let price = product.italian[value].price;
        pizzaSizes.textContent = price;
        for (let r = 0; r < sizeBtns.length; r++) {
            sizeBtns[r].classList.remove('active')
        }
        sizeBtns[i].classList.add('active')
    })
}
for (let i = 0; i < sezeBtn.length; i++) {
    sezeBtn[i].addEventListener('click', () => {
        let value = sizeBtns[i].getAttribute('value');
        let price = product.venecia[value].price;
        veneziPrice.textContent = price;
        for (let r = 0; r < sezeBtn.length; r++) {
            sezeBtn[r].classList.remove('active')
        }
        sezeBtn[i].classList.add('active')
    })
}
for (let i = 0; i < meatSizeBtn.length; i++) {
    meatSizeBtn[i].addEventListener('click', () => {
        let value = sizeBtns[i].getAttribute('value');
        let price = product.meat[value].price;
        meatPrice.textContent = price;
        for (let r = 0; r < meatSizeBtn.length; r++) {
            meatSizeBtn[r].classList.remove('active')
        }
        meatSizeBtn[i].classList.add('active')
    })
}
for (let i = 0; i < cheeseSizeBtn.length; i++) {
    cheeseSizeBtn[i].addEventListener('click', () => {
        let value = sizeBtns[i].getAttribute('value');
        let price = product.cheese[value].price;
        cheesePrice.textContent = price;
        for (let r = 0; r < cheeseSizeBtn.length; r++) {
            cheeseSizeBtn[r].classList.remove('active')
        }
        cheeseSizeBtn[i].classList.add('active')
    })
}
for (let i = 0; i < argentinaSizeBtn.length; i++) {
    argentinaSizeBtn[i].addEventListener('click', () => {
        let value = sizeBtns[i].getAttribute('value');
        let price = product.argentina[value].price;
        argentinaPrice.textContent = price;
        for (let r = 0; r < argentinaSizeBtn.length; r++) {
            argentinaSizeBtn[r].classList.remove('active')
        }
        argentinaSizeBtn[i].classList.add('active')
    })
}
for (let i = 0; i < mushroomSizeBtn.length; i++) {
    mushroomSizeBtn[i].addEventListener('click', () => {
        let value = sizeBtns[i].getAttribute('value');
        let price = product.mushrooms[value].price;
        mushroomsPrice.textContent = price;
        for (let r = 0; r < mushroomSizeBtn.length; r++) {
            mushroomSizeBtn[r].classList.remove('active')
        }
        mushroomSizeBtn[i].classList.add('active')
    })
}
for (let i = 0; i < tomatoSizeBtn.length; i++) {
    tomatoSizeBtn[i].addEventListener('click', () => {
        let value = sizeBtns[i].getAttribute('value');
        let price = product.tomato[value].price;
        tomatoPrice.textContent = price;
        for (let r = 0; r < tomatoSizeBtn.length; r++) {
            tomatoSizeBtn[r].classList.remove('active')
        }
        tomatoSizeBtn[i].classList.add('active')
    })
}
for (let i = 0; i < italySizeBtn.length; i++) {
    italySizeBtn[i].addEventListener('click', () => {
        let value = sizeBtns[i].getAttribute('value');
        let price = product.italy[value].price;
        italyPrice.textContent = price;
        for (let r = 0; r < italySizeBtn.length; r++) {
            italySizeBtn[r].classList.remove('active')
        }
        italySizeBtn[i].classList.add('active')
    })
}
openCheckList.addEventListener('click', () => {
    mainChekList.classList.toggle('active');
    navMenu.classList.remove('active');
    hamburgerBtn.classList.remove('active');
    openGmail.classList.remove('active');
});
document.querySelector('.header__left-button button').onclick = () => mainChekList.classList.toggle('active');
closeCheckList.addEventListener('click', () => mainChekList.classList.remove('active'));
hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mainChekList.classList.remove('active');
    openGmail.classList.remove('active');
});
hamburgerBtn.addEventListener('click', () => hamburgerBtn.classList.toggle('active'));
document.querySelector('.nav__right-link').onclick = () => (openGmail.classList.toggle('active'), mainChekList.classList.remove('active'), navMenu.classList.remove('active'));


for (let i = 0; i < headerBtns.length; i++) {
    headerBtns[i].addEventListener('click', () => {
        for (let r = 0; r < headerBtns.length; r++) {
            headerBtns[r].classList.remove('active')
        }
        headerBtns[i].classList.add('active')
    });
}
for (let t = 0; t < navListBtns.length; t++) {
    navListBtns[t].onclick = function () { navMenu.classList.remove('active'), hamburgerBtn.classList.remove('active'); }
}
for (let i = 0; i < menuBtns.length; i++) {
    menuBtns[i].addEventListener('click', () => {
        for (let r = 0; r < menuBtns.length; r++) {
            menuBtns[r].classList.remove('active')
        }
        menuBtns[i].classList.add('active')
    })
}
const lenis = new Lenis({
    duration: 2.8,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
};
requestAnimationFrame(raf); ``
gsap.registerPlugin(ScrollTrigger);
let itemsP = gsap.utils.toArray('.main__cards-card img')
itemsP.forEach(pizza => {
    gsap.fromTo(pizza, { x: -150, opacity: 0 }, {
        opacity: 1, x: 0, rotation: 360, duration: 3,
        scrollTrigger: {
            trigger: pizza,
            toggleActions: "restart pause resume none",
            start: '50px 80%',
        }
    })
});
ScrollReveal({
    reset: true,
    distance: '70px',
    duration: 2500,
    delay: 400,
});
ScrollReveal().reveal('.nav__content-title', { duration: 1300, delay: 50, origin: 'left', easing: 'ease', mobile: false });
ScrollReveal().clean('.nav__checklist-top .nav__content-title');
ScrollReveal().reveal('.title', { distance: '0px', duration: 1900, delay: 150, origin: 'top', });
ScrollReveal().reveal('.main__pizza-title', { distance: '0px', duration: 1500, delay: 150, origin: 'top', });
ScrollReveal().reveal('.main__content-title', { distance: '0px', duration: 2700, delay: 100, origin: 'top', });
ScrollReveal().reveal('.header__content-left', { duration: 1300, delay: 50, origin: 'top', easing: 'ease' });
ScrollReveal().reveal('.events__animate', { distance: '60px', duration: 1300, delay: 50, origin: 'top', easing: 'ease' });
ScrollReveal().reveal('.footer__left-number', { duration: 1300, delay: 50, origin: 'right', });
ScrollReveal().reveal('.right__pizza', { distance: '120px', duration: 1300, delay: 50, origin: 'right', easing: 'ease' });
ScrollReveal().reveal('.main__right-pizzaMini', { distance: '120px', duration: 1300, delay: 50, origin: 'right', easing: 'ease' });
ScrollReveal().reveal('.right__fries', { distance: '120px', duration: 1500, delay: 150, origin: 'left', easing: 'ease' });
ScrollReveal().reveal('.main__right-friesMini', { distance: '120px', duration: 1500, delay: 150, origin: 'left', easing: 'ease' });
ScrollReveal().reveal('.right__image', { distance: '160px', duration: 1500, delay: 200, origin: 'bottom', easing: 'ease' });
ScrollReveal().reveal('.main__right-centerImg', { distance: '160px', duration: 1300, delay: 400, origin: 'bottom', easing: 'ease' });
ScrollReveal().reveal('.main__manu-list li', { duration: 900, delay: 200, origin: 'bottom', interval: 90, easing: 'ease' });
ScrollReveal().reveal('.footer__iconss', { duration: 1000, delay: 250, origin: 'top', interval: 100, });
ScrollReveal().reveal('.footer__block-title', { duration: 1000, delay: 250, origin: 'top', interval: 180, easing: 'ease-out' });

















