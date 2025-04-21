/*document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    const fields = ["name", "email", "message"];

    fields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        const errorMessage = field.nextElementSibling;

        if (!field.value.trim()) {
            errorMessage.classList.remove("invisible");
            field.classList.add("error-form");
            isValid = false;
        } else {
            errorMessage.classList.add("invisible"); 
            field.classList.remove("error-form");

            if (fieldId ==="email" && !isValidEmail(field.value.trim())) {
                errorMessage.classList.remove("invisible");
                field.classList.add("error-form");
                isValid = false;
            } else if (fieldId === "email") {
                field.classList.remove("error-form");
            }
        }
    });
});*/

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    const fields = ["name", "email", "message"];

    fields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        const errorMessage = field.nextElementSibling;

        if (!field.value.trim()) {
            errorMessage.classList.remove("invisible");
            field.classList.add("error-form");
            isValid = false;
        } else {
            errorMessage.classList.add("invisible");
            field.classList.remove("error-form");

            if (fieldId == "email" && !isValidEmail(field.value.trim())) {
                errorMessage.classList.remove("invisible");
                field.classList.add("error-form");
                isValid = false;
            } else if (fieldId === "email") {
                field.classList.remove("error-form");
            }
        }
    });
});