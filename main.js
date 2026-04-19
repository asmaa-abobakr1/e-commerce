let allProducts = []
let currentPage = 1
let itemsPerPage = 6

let cart = JSON.parse(localStorage.getItem("cart")) || []
updateCartUI()

fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    allProducts = data.products
    displayProducts()
  })

function displayProducts() {
  let start = (currentPage - 1) * itemsPerPage
  let end = start + itemsPerPage

  let paginated = allProducts.slice(start, end)

  let container = document.getElementById("products")
  container.innerHTML = ""

  paginated.forEach(product => {
    container.innerHTML += `
      <div class="card">
        <img src="${product.thumbnail}" alt="${product.title}">
        <h3>${product.title.slice(0, 25)}...</h3>
        <p>${product.price}$</p>

        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="showDetails(${product.id})">Show Details</button>
      </div>
    `
  })

  document.getElementById("page-number").innerText =
    `Page ${currentPage} / ${Math.ceil(allProducts.length / itemsPerPage)}`
}

function nextPage() {
  let totalPages = Math.ceil(allProducts.length / itemsPerPage)

  if (currentPage < totalPages) {
    currentPage++
    displayProducts()
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--
    displayProducts()
  }
}

function addToCart(id) {
  let product = allProducts.find(p => p.id === id)

  cart.push(product)

  localStorage.setItem("cart", JSON.stringify(cart))

  updateCartUI()
}

function updateCartUI() {
  document.getElementById("cart-count").innerText = cart.length
}

function showDetails(id) {
  window.location.href = `product.html?id=${id}`
}

function sortLow() {
  allProducts.sort((a, b) => a.price - b.price)
  currentPage = 1
  displayProducts()
}

function sortHigh() {
  allProducts.sort((a, b) => b.price - a.price)
  currentPage = 1
  displayProducts()
}
function goToCart() {
  window.location.href = "cart.html"
}
