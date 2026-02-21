function calculateNDS() {
    let amount = parseFloat(document.getElementById("amount").value);
    let type = document.getElementById("ndsType").value;
    let resultElement = document.getElementById("result");

    if (isNaN(amount) || amount <= 0) {
        resultElement.innerText = "Введите корректную сумму!";
        return;
    }

    let result;

    if (type === "add") {
        result = amount * 1.12;
        resultElement.innerText = "С НДС: " + result.toFixed(2) + " ₸";
    } else {
        result = amount / 1.12;
        resultElement.innerText = "Без НДС: " + result.toFixed(2) + " ₸";
    }
}
