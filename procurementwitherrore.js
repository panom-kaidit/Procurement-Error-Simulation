
// 1. Select the form (ERROR: wrong selector)
const form = document.getElementById("form-box");

// 2. Select inputs (some selectors are wrong on purpose)
const supplierName = document.querySelector("#suppliername");
const supplierContact = document.querySelector("#supplier-contact");
const quantity = document.getElementById("quantity");
const unitPrice = document.getElementById("unit-price");
const totalAmount = document.getElementById("total-amount");

// 3. Listen for form submit
form.addEventListener("submit", function () {

    // ERROR: event is not defined
    event.preventDefault();

    // 4. Validate supplier name
    if (supplierName.value == "") {
        alert("Supplier name is required");
    }

    // 5. Validate contact number length (LOGIC ERROR)
    if (supplierContact.value.length < 10) {
        alert("Phone number must be at least 10 digits");
    }

    // 6. Validate quantity (TYPE ERROR)
    if (quantity.value <= "0") {
        alert("Quantity must be greater than zero");
    }

    // 7. Calculate total (BUG: string multiplication issue)
    let total = quantity.value * unitPrice.value;
    totalAmount.value = total;

    // 8. Check payment method (ERROR: wrong name attribute)
    const paymentMethod = document.querySelector("input[name='payment_method']:checked");

    if (paymentMethod == null) {
        alert("Please select a payment method");
    }

    // 9. Final message
    alert("Procurement submitted successfully!");
});
