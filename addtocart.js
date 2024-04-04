const book = [
  {
    id: 0,
    image: "Images/PlantImages/plant01.png",
    title: "Tomatoes",
    price: 120,
  },
  {
    id: 1,
    image: "Images/PlantImages/plant02.png",
    title: "Pea Plant",
    price: 60,
  },
  {
    id: 2,
    image: "Images/PlantImages/plant03.png",
    title: "Cucumber",
    price: 230,
  },
  {
    id: 3,
    image: "Images/PlantImages/plant04.png",
    title: "Kiwi Fruit",
    price: 100,
  },
];
const categories = [
  ...new Set(
    book.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.querySelector(".book-container").innerHTML = categories
  .map((item) => {
    var { image, title, price } = item;
    return (
      //   `<div class='box'>
      //           <div class='img-box'>
      //               <img class='images' src=${image}></img>
      //           </div>
      //       <div class='bottom'>
      //       <p>${title}</p>
      //       <h2>Rs. ${price}.00</h2>` +
      //   "<button onclick='addtocart(" +
      //   i++ +
      //   ")'>Add to cart</button>" +
      //   `</div>
      //       </div>`

      `<div class="sub-container">
                  <div class="book-image">
                      <img src="${image}" alt="${title}">
                  </div>
                  <h2>${title}</h2>
                  <div class="book-price">Rs. ${price}</div>
                  <div class="cart">
                      ` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `
                  </div>
              </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.querySelector(
      ".cart-product-list"
    ).innerHTML = `<div class="emptyCart" style="color:#2f2f2f; font-size: 30px;">
                        Oops! Your cart is empty!
                    </div>`;
    document.querySelector(".totalPrice").innerHTML = "Rs. " + 0 + ".00";
  } else {
    document.querySelector(".cart-product-list").innerHTML = cart
      .map((items) => {
        var { image, title, price } = items;
        total = total + price;
        document.querySelector(".totalPrice").innerHTML =
          "Rs. " + total + ".00";
        return (
          `<div class="cart-product-detail">
            <div class="cartBookImage ">
                <img src="${image}" alt="${title}">
            </div>
            <div class="book-detail productitem">
                <div class="cartBookName">
                    ${title}
                </div>
                <div class="cartBookPrice">
                    <p>Rs. ${price}</p>
                </div>
            </div>
            <div class="remove-from-cart ">` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div></div>"
        );
      })
      .join("");
  }
}
