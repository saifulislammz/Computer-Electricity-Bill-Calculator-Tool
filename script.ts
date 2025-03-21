document.getElementById('deviceType')?.addEventListener('change', function(event: Event) {
    const deviceType = (event.target as HTMLSelectElement).value;
    const monitorWattField = document.getElementById('monitorWattField') as HTMLDivElement;

    if (deviceType === 'desktop') {
        monitorWattField.classList.remove('hidden');
    } else {
        monitorWattField.classList.add('hidden');
    }
});

document.getElementById('billForm')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    // Get input values
    const deviceType = (document.getElementById('deviceType') as HTMLSelectElement).value;
    const watt: number = parseFloat((document.getElementById('watt') as HTMLInputElement).value);
    const hours: number = parseFloat((document.getElementById('hours') as HTMLInputElement).value);
    const rate: number = parseFloat((document.getElementById('rate') as HTMLInputElement).value);
    const monitorWatt: number = deviceType === 'desktop' ? parseFloat((document.getElementById('monitorWatt') as HTMLInputElement).value) : 0;

    // Calculate total wattage
    const totalWatt: number = deviceType === 'desktop' ? watt + monitorWatt : watt;

    // Calculate power consumption
    const powerConsumed: number = (totalWatt * hours) / 1000; // kWh
    const dailyBill: number = powerConsumed * rate;
    const monthlyBill: number = dailyBill * 30;
    const yearlyBill: number = dailyBill * 365;

    // Display results
    document.getElementById('dailyBill')!.innerText = `${dailyBill.toFixed(2)} Taka`;
    document.getElementById('monthlyBill')!.innerText = `${monthlyBill.toFixed(2)} Taka`;
    document.getElementById('yearlyBill')!.innerText = `${yearlyBill.toFixed(2)} Taka`;
});