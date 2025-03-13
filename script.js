var _a;
(_a = document.getElementById('billForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // ইনপুট ভ্যালু নেওয়া
    var watt = parseFloat(document.getElementById('watt').value);
    var hours = parseFloat(document.getElementById('hours').value);
    var rate = parseFloat(document.getElementById('rate').value);
    // ক্যালকুলেশন
    var powerConsumed = (watt * hours) / 1000; // kWh
    var dailyBill = powerConsumed * rate;
    var monthlyBill = dailyBill * 30;
    var yearlyBill = dailyBill * 365;
    // রেজাল্ট ডিসপ্লে
    document.getElementById('dailyBill').innerText = dailyBill.toFixed(2);
    document.getElementById('monthlyBill').innerText = monthlyBill.toFixed(2);
    document.getElementById('yearlyBill').innerText = yearlyBill.toFixed(2);
});
