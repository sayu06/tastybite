let cart=[]
let total=0

function addToCart(name, price){
    cart.push({name, price})
    total += price
    document.getElementById("cart-count").innerText = cart.length
    displayCart()
}

function displayCart(){
    let items = ""
    cart.forEach((item, index) => {
        items += `<p>${item.name} - ₹${item.price} 
        <button onclick="removeItem(${index})">X</button></p>`
    })
    document.getElementById("cart-items").innerHTML = items
    document.getElementById("total").innerText = total
}

function removeItem(index){
    total -= cart[index].price
    cart.splice(index,1)
    displayCart()
    document.getElementById("cart-count").innerText = cart.length
}

function toggleCart(){
    let cartBox = document.getElementById("cart")
    if(cartBox.style.right=="0px"){
        cartBox.style.right="-350px"
    } else {
        cartBox.style.right="0px"
    }
}

// SHOW DELIVERY DETAILS INSIDE CART
function showCheckout(){
    if(cart.length == 0){
        alert("Cart is empty")
        return
    }
    document.getElementById("checkout-form").style.display = "block"
}

// PLACE ORDER
function placeOrder(){
    if(cart.length==0){
        alert("Cart is empty")
        return
    }

    let name = document.getElementById("cust-name").value
    let phone = document.getElementById("cust-phone").value
    let address = document.getElementById("cust-address").value

    if(name=="" || phone=="" || address==""){
        alert("Please fill delivery details")
        return
    }

    let payment = document.querySelector('input[name="payment"]:checked')
    if(!payment){
        alert("Please select a payment method")
        return
    }

    alert(`Order Placed Successfully 🍕\nPayment: ${payment.value}`)

    // Clear cart
    cart=[]
    total=0
    displayCart()
    document.getElementById("cart-count").innerText = 0

    // Hide checkout form
    document.getElementById("checkout-form").style.display="none"

    // Clear form
    document.getElementById("cust-name").value=""
    document.getElementById("cust-phone").value=""
    document.getElementById("cust-address").value=""
    let payments = document.querySelectorAll('input[name="payment"]')
    payments.forEach(p=>p.checked=false)

    
}
function placeOrder(){
    if(cart.length==0){
        alert("Cart is empty")
        return
    }

    let name = document.getElementById("cust-name").value
    let phone = document.getElementById("cust-phone").value
    let address = document.getElementById("cust-address").value

    if(name=="" || phone=="" || address==""){
        alert("Please fill delivery details")
        return
    }

    let payment = document.querySelector('input[name="payment"]:checked')
    if(!payment){
        alert("Please select a payment method")
        return
    }

    // Record order in history
    let orderDetails = `
    <p>
    <strong>Name:</strong> ${name} <br>
    <strong>Phone:</strong> ${phone} <br>
    <strong>Address:</strong> ${address} <br>
    <strong>Payment:</strong> ${payment.value} <br>
    <strong>Items:</strong> ${cart.map(i=>i.name+" (₹"+i.price+")").join(", ")} <br>
    <strong>Total:</strong> ₹${total}
    </p>
    <hr>
    `

    document.getElementById("orders").innerHTML += orderDetails

    alert("Order Placed Successfully 🍕")

    // Clear cart
    cart=[]
    total=0
    displayCart()
    document.getElementById("cart-count").innerText = 0

    // Hide checkout form
    document.getElementById("checkout-form").style.display="none"

    // Close cart sidebar
    document.getElementById("cart").style.right="-400px"

    // Clear form
    document.getElementById("cust-name").value=""
    document.getElementById("cust-phone").value=""
    document.getElementById("cust-address").value=""
    let payments = document.querySelectorAll('input[name="payment"]')
    payments.forEach(p=>p.checked=false)
}
const categories = document.querySelectorAll(".category-btn");

categories.forEach(btn => {
  btn.addEventListener("click", () => {
    const container = btn.nextElementSibling; // next div.menu-container
    if(container.style.display === "flex"){
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
  });
});

function toggleCart(){
document.getElementById("cart").classList.toggle("active");
}
function slideLeft(btn){
let container = btn.parentElement.querySelector(".menu-container");
container.scrollBy({left:-300, behavior:"smooth"});
}

function slideRight(btn){
let container = btn.parentElement.querySelector(".menu-container");
container.scrollBy({left:300, behavior:"smooth"});
}