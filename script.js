const inputs = document.querySelectorAll(".code");
const verifyButton = document.getElementById("verify-btn");
const message = document.getElementById("message");

// Auto-focus next input on typing and move back on backspace
inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        if (e.inputType === "deleteContentBackward") {
            if (index > 0) inputs[index - 1].focus();
        } else {
            if (index < inputs.length - 1 && input.value !== "") {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && input.value === "") {
            if (index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = "";
            }
        }
    });
});

// Verify OTP button functionality
verifyButton.addEventListener("click", () => {
    const otp = Array.from(inputs).map(input => input.value).join("");

    if (otp.length === 6) {
        message.innerText = "✅ OTP Verified Successfully!";
        message.style.color = "green";
    } else {
        message.innerText = "❌ Please enter a valid 6-digit OTP.";
        message.style.color = "red";
    }
});
