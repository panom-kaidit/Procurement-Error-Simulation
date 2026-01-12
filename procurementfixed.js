// To start with, we got the element by class and not by id as per the JS rules
// so we should add and ID to the HTML file 
// Procurement Form Validation (FIXED VERSION)

// 1. Select the form by ID
const form = document.getElementById("form-box");

// 2. Select all required inputs and fixed them by giving them the exact name as per the id in my html codes.
const supplierName = document.getElementById("supplier-name");
const supplierContact = document.getElementById("supplier-contact");
const quantity = document.getElementById("quantity");
const unitPrice = document.getElementById("unit-price");
const totalAmount = document.getElementById("total-amount");

// 3. Listen for form submission
form.addEventListener("submit", function (event) {
    // Prevent page reload
    event.preventDefault();

    // 4. Supplier name validation
    if (supplierName.value.trim() === "") {
        alert("Supplier name is required");
        return;
    }

    // 5. Contact number validation
    if (supplierContact.value.length < 10) {
        alert("Phone number must be at least 10 digits");
        return;
    }

    // 6. Quantity validation (convert string to number)
    if (Number(quantity.value) <= 1000) {
        alert("Quantity must be greater than 1000Kgs");
        return;
    }

    // 7. Unit price validation
    if (Number(unitPrice.value) <= 0) {
        alert("Unit price must be greater than zero");
        return;
    }

    // 8. Calculate total amount
    const total = Number(quantity.value) * Number(unitPrice.value);
    totalAmount.value = total.toFixed(2);

    // 9. Validate payment method
    const paymentMethod = document.querySelector("input[name='payment']:checked");

    if (!paymentMethod) {
        alert("Please select a payment method");
        return;
    }

    // 10. Success message
    alert("Procurement submitted successfully!");

    // Optional: submit form after validation
    // form.submit();
});
