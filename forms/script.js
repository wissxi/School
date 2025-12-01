function calculateTotal(event) {
    event.preventDefault();

    const price = Number(document.getElementById("price").value) || 0;
    const quantity = Number(document.getElementById("quantity").value) || 0;
    const discount = Number(document.getElementById("discount").value) || 0;

    if (quantity <= 0 || price < 0 || discount < 0 || discount > 100) {
        document.getElementById("calc-result").textContent =
            "Перевірте введені дані. Кількість має бути більшою за 0, знижка — від 0 до 100%.";
        return;
    }

    const totalWithoutDiscount = price * quantity;
    const discountAmount = (totalWithoutDiscount * discount) / 100;
    const totalWithDiscount = totalWithoutDiscount - discountAmount;

    const resultText =
        "Сума без знижки: " +
        totalWithoutDiscount.toFixed(2) +
        " грн\n" +
        "Розмір знижки: " +
        discountAmount.toFixed(2) +
        " грн\n" +
        "До оплати: " +
        totalWithDiscount.toFixed(2) +
        " грн.";

    document.getElementById("calc-result").textContent = resultText;
}


