console.log("Welcome to RentEase");

// -------------------- Product Search --------------------

function searchProduct() {

    let input = document.getElementById("search").value.toLowerCase();

    let cards = document.getElementsByClassName("product-card");

    for (let i = 0; i < cards.length; i++) {

        let name = cards[i]
            .getElementsByClassName("product-name")[0]
            .innerText
            .toLowerCase();

        if (name.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// -------------------- Wishlist --------------------

function addWishlist(name, price) {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push({
        name: name,
        price: price
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert(name + " added to Wishlist ❤️");
}

// -------------------- Logout --------------------

function logout() {

    if (confirm("Are you sure you want to logout?")) {

        localStorage.removeItem("loggedIn");

        alert("Logged Out Successfully!");

        window.location.href = "login.html";
    }

}

// -------------------- Welcome User --------------------

window.onload = function () {

    let user = JSON.parse(localStorage.getItem("user"));

    let welcome = document.getElementById("welcomeUser");

    if (user && welcome) {

        welcome.innerHTML = "👋 Welcome, " + user.name;

    }

};