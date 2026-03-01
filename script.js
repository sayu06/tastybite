let cart = [];
let totalPrice = 0;

function addToCart(name, price){
    cart.push({name, price});
    totalPrice += price;
    updateCart();
}

function updateCart(){
    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total-price").innerText = totalPrice;

    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach((item,index)=>{
        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - ₹${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });
}

function removeItem(index){
    totalPrice -= cart[index].price;
    cart.splice(index,1);
    updateCart();
}

function toggleCart(){
    document.getElementById("cart-sidebar").classList.toggle("active");
}

function showAddressForm(){
    if(cart.length === 0){
        alert("Cart is empty!");
        return;
    }
    document.getElementById("address-form").style.display="block";
}

function placeOrder(){

    let name = document.getElementById("cust-name").value;
    let phone = document.getElementById("cust-phone").value;
    let address = document.getElementById("cust-address").value;

    if(name==="" || phone==="" || address===""){
        alert("Please fill all details!");
        return;
    }

    let orderHTML=`
        <div class="order-card">
            <h3>Order by: ${name}</h3>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <ul>
                ${cart.map(item=>`<li>${item.name} - ₹${item.price}</li>`).join("")}
            </ul>
            <p><strong>Total:</strong> ₹${totalPrice}</p>
            <p>Status: Ordered ✅</p>
        </div>
    `;

    document.getElementById("order-history-list").innerHTML += orderHTML;

    alert("Order Placed Successfully 🎉");

    cart=[];
    totalPrice=0;
    updateCart();

    document.getElementById("address-form").style.display="none";
    document.getElementById("cust-name").value="";
    document.getElementById("cust-phone").value="";
    document.getElementById("cust-address").value="";
}