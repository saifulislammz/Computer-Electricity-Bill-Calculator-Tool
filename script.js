document.getElementById('deviceType').addEventListener('change', function (event) {
    var deviceType = event.target.value;
    var monitorWattField = document.getElementById('monitorWattField');

    if (deviceType === 'desktop') {
        monitorWattField.classList.remove('hidden');
    } else {
        monitorWattField.classList.add('hidden');
    }
});

document.getElementById('billForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values
    var deviceType = document.getElementById('deviceType').value;
    var watt = parseFloat(document.getElementById('watt').value);
    var hours = parseFloat(document.getElementById('hours').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var monitorWatt = deviceType === 'desktop' ? parseFloat(document.getElementById('monitorWatt').value) : 0;

    // Calculate total wattage
    var totalWatt = deviceType === 'desktop' ? watt + monitorWatt : watt;

    // Calculate power consumption
    var powerConsumed = (totalWatt * hours) / 1000; // kWh
    var dailyBill = powerConsumed * rate;
    var monthlyBill = dailyBill * 30;
    var yearlyBill = dailyBill * 365;

    // Display results
    document.getElementById('dailyBill').innerText = `${dailyBill.toFixed(2)} Taka`;
    document.getElementById('monthlyBill').innerText = `${monthlyBill.toFixed(2)} Taka`;
    document.getElementById('yearlyBill').innerText = `${yearlyBill.toFixed(2)} Taka`;
});