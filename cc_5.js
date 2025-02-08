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

// Task 4: Map Method
const prices = [100, 200, 300]; 
const discountedPrices = prices.map(price => price * 0.9); // Applies a 10% discount
console.log(discountedPrices);

// Task 5: Filter Method
const inventory = [5, 0, 12, 8, 0];
const availableProducts = inventory.filter(quantity => quantity > 0); // Removes products with zero stock
console.log(availableProducts);

// Task 6: Reduce Method
const sales = [500, 300, 200, 400];
const totalRevenue = sales.reduce((total , sale) => total + sale, 0); // Calculates Total Revenue
console.log(totalRevenue);

// Task 7: find() Method
const customers = ["Alice", "Bob", "Charlie", "David"];
const foundCustomer = customers.find(customer => customer === "Charlie") // Locate "Charlie"
console.log(foundCustomer);

// Task 8: Function Declaration
function calculateTax(amount, taxRate) {
    const tax = amount * (taxRate / 100); // Calculating tax
    console.log(`Tax: $${tax}`);
    return tax;
}
calculateTax(1000, 15); 

