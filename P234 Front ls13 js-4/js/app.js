function calculatePayment() {
  let creditamount = parseFloat(document.getElementById("credit-amount").value);
  let interestrate = parseFloat(document.getElementById("interest-rate").value);
  let creditperiod = parseFloat(document.getElementById("credit-period").value);

  if (isNaN(creditamount) || isNaN(interestrate) || isNaN(creditperiod) || creditamount <= 0 || interestrate <= 0 || creditperiod <= 0) {
    document.getElementById("payment-result").textContent = " Invalid option.";
    return;
  }

  let monthlyinterest = interestrate / 100 / 12;
  let totalpayment = creditamount * (monthlyinterest / (1 - Math.pow(1 + monthlyinterest, -creditperiod)));
  let monthlypayment = totalpayment.toFixed(2);

  document.getElementById("payment-result").textContent = "Aylıq ödəniş: " + monthlypayment + " AZN";
}
