function goToBMI() {
    const btn = document.querySelector(".start-btn");
    btn.innerText = "Loading...";
    btn.disabled = true;

    setTimeout(() => {
        window.location.href = "BMI.html";
    }, 600);
}
