let cartdata = [];
let localdata2;
let data2;

products = [
    {
        id: 101,
        image: "images/pizza1.jpg",
        name: "Pizza",
        price: 250
    },
    {
        id: 102,
        image: "images/burger.jpg",
        name: "Burger",
        price: 110
    },
    {
        id: 103,
        image: "images/sandwich.jpg",
        name: "Sandwich",
        price: 110
    },
    {
        id: 104,
        image: "images/french fry.jpg",
        name: "Frenchfries",
        price: 80
    },
    {
        id: 105,
        image: "images/samosa.jpg",
        name: "Samosa",
        price: 40
    },
    {
        id: 106,
        image: "images/momos.jpg",
        name: "Momos",
        price: 130
    }
]

localStorage.setItem('productsdata', JSON.stringify(products));

// let localdata = localStorage.removeItem('productsdata');
// localdata = localStorage.getItem('productsdata');
let localdata = localStorage.getItem('productsdata');
let data = JSON.parse(localdata);
console.log(data);

let displaydata = "";

displaydata += '<nav><div class="left"><a href="../index.html">Home</a><a href="JavaScript:void(0)">About</a><a href="JavaScript:void(0)">Contact Us</a><a href="JavaScript:void(0)">Services</a></div><div class="right"><a href="cart.html"><i class="bi bi-cart-fill" id="carticon"></i></a><div id="cartcount"></div><a href="JavaScript:void(0)"><i class="bi bi-person-circle"></i></a><a href="JavaScript:void(0)"><i class="bi bi-heart-fill"></i></a><a href="javascript:void(0)"><i class="bi bi-shuffle"></i></a></div></nav>';

displaydata += '<section id="container">'

data.map((d) => {
    displaydata += '<div id="product">';
    displaydata += '<img id="img_' + d.id + '" src="' + d.image + '"/>';
    displaydata += '<h1 id="pname_' + d.id + '">' + d.name + '</h1>';
    displaydata += '<h3 id="price_' + d.id + '">' + d.price + ' Rs</h3>';
    displaydata += '<a><button id="addtocart_' + d.id + '" onclick="addtocart(' + d.id + ')">Add to cart</button></a>';  /*href="../cart.html" target="blank"*/
    displaydata += '</div>'
})
displaydata += '</section>';

document.write(displaydata);

function addtocart(id) {

    // localdata2 = localStorage.getItem('cart');
    // data2 = JSON.parse(localdata2);
    // console.log(data2)
    
    let localdata = localStorage.getItem('productsdata');
    let data = JSON.parse(localdata);
    console.log(data)
    // let quantity =1;
    
    data.map((d) => d.id == id);
    
    let image = document.getElementById("img_" + id).getAttribute("src");
    let name = document.getElementById("pname_" + id).innerHTML;
    let price = parseInt(document.getElementById("price_" + id).innerHTML);
    let quantity = 1;
    
    let purchaseitems = { id, image, name, price, quantity };
    
    cartdata.push(purchaseitems);
    console.log(cartdata);
    
    localStorage.setItem('cart', JSON.stringify(cartdata));
    // localStorage.removeItem('cart');
    // let localdata2 = localStorage.getItem('cart');
    // let data2 = JSON.parse(localdata2);
    
    console.log(localdata2);
    console.log(data2);
    
    // document.getElementById("cartcount").innerHTML = data2.reduce((acc, d) => acc + d.quantity, 0);

    // cartdata = data2;
    // let counter =1 ;
    let counter = document.getElementById("cartcount").innerHTML;
    counter++;
    document.getElementById("cartcount").innerHTML = counter;

    // document.getElementById("cartcount").innerHTML =  data2.reduce((acc, d) => acc + d.quantity, 0);

    document.getElementById("addtocart_" + id).disabled = true;

}

window.onload = display();

function display() {

    let localdata2 = localStorage.getItem('cart');
    let data2 = JSON.parse(localdata2);
    console.log(data2)
    document.getElementById("cartcount").innerHTML = data2.reduce((acc, d) => acc + d.quantity, 0);

}