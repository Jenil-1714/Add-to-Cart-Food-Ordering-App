var quantity = 0;
var amount = 0;

    let localdata2 = localStorage.getItem('cart');
    let data2 = JSON.parse(localdata2);
    console.log(data2);


    let displaydata = "";

    displaydata += '<nav><div class="left"><a href="../index.html">Home</a><a href="JavaScript:void(0)">About</a><a href="JavaScript:void(0)">Contact Us</a><a href="JavaScript:void(0)">Services</a></div><div class="right"><a href="cart.html"><i class="bi bi-cart-fill" id="carticon"></i></a><div id="cartcount"></div><a href="JavaScript:void(0)"><i class="bi bi-person-circle"></i></a><a href="JavaScript:void(0)"><i class="bi bi-heart-fill"></i></a><a href="JavaScript:void(0)"><i class="bi bi-shuffle"></i></a></div></nav>';

    displaydata += '<section id="container">'

    data2.map((j) => {
        displaydata += '<div id="product-1">';
        displaydata += '<div id="product">';
        displaydata += '<img id="img" src="' + j.image + '"/>';
        displaydata += '<h1 id="pname">' + j.name + '</h1>';
        displaydata += '<h3 id="price_' + j.id + '">' + j.price + '</h3>';
        displaydata += '</div>';
        displaydata += '<div id="amt">';
        displaydata += '<div id="addminus">';
        displaydata += '<button id="minus" onclick="remove(' + j.id + ')">-</button>';
        displaydata += '<input id="quantity_' + j.id + '" type="text"  value="' + j.quantity + '"/>';
        displaydata += '<button id="plus" onclick="add(' + j.id + ')">+</button>';
        displaydata += '</div>';
        displaydata += '<h1>Amount:<spna id="total_' + j.id + '">' + (j.price * j.quantity) + ' Rs</span></h1>';
        displaydata += '</div>';
        displaydata += '</div>';
        displaydata += '<hr>';
        // console.log(j);
    })

    displaydata += '<div id="total">';
    displaydata += '<h1>Total Amount</h1>';
    displaydata += '<span id="totalamt">' + data2.reduce((acc, v) => acc + (v.price * v.quantity), 0) + '</span>';
    displaydata += '</div>';
    displaydata += '<a href="../payment.html"><button id="cobtn">Check Out</button></a>';
    displaydata += '</section>';

    document.write(displaydata);

    document.getElementById("cartcount").innerHTML = data2.reduce((acc, d) => acc + d.quantity, 0);
    // document.getElementById("cartcount").innerHTML
    // document.getElementById("totalamt").innerHTML

// document.getElementById("plus").addEventListener("click", add);



function add(id) {


    let localdata2 = localStorage.getItem('cart');
    let data2 = JSON.parse(localdata2);
    console.log(data2)
    
    let counter = document.getElementById("quantity_" + id).value;
    counter++;
    document.getElementById("quantity_" + id).value = counter;
    
    data2.filter((d) => d.id == id).filter((d) => d.quantity = parseInt(document.getElementById("quantity_" + id).value))
    // console.log(data2);
    
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(data2));
    localdata2 = localStorage.getItem('cart', JSON.stringify(data2));
    data2 = JSON.parse(localdata2);

    if (counter > 49) {
        document.getElementById("plus").disabled = true;
    }

    let value1 = document.getElementById("quantity_" + id).value * parseInt(document.getElementById("price_" + id).innerHTML);
    document.getElementById("total_" + id).innerHTML = value1;

    // quantity++;
    document.getElementById("cartcount").innerHTML = data2.reduce((acc, d) => acc + d.quantity, 0);

    amount = parseInt(document.getElementById("totalamt").innerHTML) + parseInt(document.getElementById("price_" + id).innerHTML);
    document.getElementById("totalamt").innerHTML = amount;
    // let localdata2 = localStorage.getItem('cart');
    // let data2 = JSON.parse(localdata2); 
    // console.log(data2);

}

// document.getElementById("minus").addEventListener("click", remove);

function remove(id) {

    let localdata2 = localStorage.getItem('cart');
    let data2 = JSON.parse(localdata2);
    console.log(data2);
    
    let counter = document.getElementById("quantity_" + id).value;
    
    if (counter > 0) {
        counter--;
        document.getElementById("quantity_" + id).value = counter;
        
        data2.filter((d) => d.id == id).filter((d) => d.quantity = parseInt(document.getElementById("quantity_" + id).value))
        
        localStorage.removeItem('cart');
        localStorage.setItem('cart', JSON.stringify(data2));
        localdata2 = localStorage.getItem('cart', JSON.stringify(data2));
        data2 = JSON.parse(localdata2);

        amount = parseInt(document.getElementById("totalamt").innerHTML) - parseInt(document.getElementById("price_" + id).innerHTML);
        document.getElementById("totalamt").innerHTML = amount;

        let value1 = document.getElementById("quantity_" + id).value * parseInt(document.getElementById("price_" + id).innerHTML);
        document.getElementById("total_" + id).innerHTML = value1;

        // quantity--;
        document.getElementById("cartcount").innerHTML = data2.reduce((acc, d) => acc + d.quantity, 0);
    }

    document.getElementById("plus").disabled = false;

}

// window.onload = display();

// function display() {

//     let localdata = localStorage.getItem('productsdata');
//     let data = JSON.parse(localdata);
//     console.log(data);

//     let localdata2 = localStorage.getItem('cart');
//     let data2 = JSON.parse(localdata2);
//     console.log(data2)
//     document.getElementById("cartcount").innerHTML = data2.reduce((acc, d) => acc + d.quantity, 0);

// }