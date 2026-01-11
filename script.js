function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const heightCm = document.getElementById("height").value;

    if (!weight || !heightCm) {
        alert("Masukkan berat dan tinggi badan!");
        return;
    }

    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let status = "";
    let angle = -90;

    if (bmi < 18.5) {
        status = "Kurus";
        angle = -65;
    } else if (bmi < 25) {
        status = "Ideal";
        angle = -20;
    } else if (bmi < 30) {
        status = "Gemuk";
        angle = 30;
    } else {
        status = "Obesitas";
        angle = 70;
    }

    document.getElementById("bmiValue").innerText = "BMI: " + bmi;
    document.getElementById("bmiStatus").innerText = "Status: " + status;
    document.getElementById("needle").style.transform = `rotate(${angle}deg)`;
}
