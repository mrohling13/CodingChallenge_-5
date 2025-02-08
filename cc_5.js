// Task 1: Object Properties
const customer = {
    name: "John Doe", // Customer information
    age: 35,
    email: "john.doe@email.com"
};
console.log(`Name: ${customer.name}, Age: ${customer.age}, Email: ${customer.email}`);

// Task 2: Object Methods
const order = {
    orderID: 12345, // Property name is orderID
    totalAmount: 150,
    status: "Processing", 
    displayOrder() {
        console.log(`Order ID: ${this.orderID}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
};
order.displayOrder();

// Task 3: Array Manipulation
let cartItems = ["Rick Owen shoes", "Balenci Jeans", "Vetements T-shirt"]; // Listing cart items
cartItems.push("Chrome Hearts Hat") // Adding a new product
cartItems.pop(); // Removes the last cart item
cartItems.unshift("Supreme Socks"); // Adds item to the start
cartItems.shift(); // Remove the first item
console.log(cartItems);

