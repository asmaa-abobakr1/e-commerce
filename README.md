🛒 E-commerce Front-End Web Application

A modern front-end e-commerce web application built using HTML, CSS, and JavaScript, integrated with the DummyJSON API to dynamically fetch and display products.

🚀 Live Features
📦 Display products from API
📄 Pagination (6 products per page)
🔍 Product details page (dynamic routing)
💰 Sort products (Low → High / High → Low)
🛒 Shopping cart using localStorage
➕ Add / Remove from cart
📊 Cart total calculation
🎨 Modern dark UI with hover animations
📱 Responsive design (desktop-friendly)
🧠 Tech Stack
HTML5
CSS3 (Flexbox + Grid + Animations)
JavaScript (Vanilla JS)
DummyJSON API
🔌 API Used

https://dummyjson.com/products

📂 Project Structure
project/
│── index.html        # Products page
│── product.html      # Product details page
│── cart.html         # Shopping cart page
│── style.css         # Styling
│── main.js           # Main logic (API, cart, pagination)
⚙️ How It Works
1. Fetch Products

Products are fetched from DummyJSON API and stored in a local variable.

2. Pagination

Products are displayed 6 per page using array slicing.

3. Cart System

Cart is stored in localStorage so data remains after refresh.

4. Product Details

Each product redirects to a dynamic details page using its ID.

🛒 Cart Features
Add products to cart
Remove products from cart
Persistent storage using localStorage
Total price calculation
📸 UI Preview

(Add screenshots here if available)

💡 Future Improvements
Search functionality 🔍
Category filtering 📂
Authentication system 🔐
Backend integration 🚀
Checkout page 💳
👩‍💻 Author

Asmaa Ahmed
Front-End Developer (Learning Journey 🚀)

📌 Note

This project was built for learning purposes to practice:

API integration
DOM manipulation
State management using localStorage
