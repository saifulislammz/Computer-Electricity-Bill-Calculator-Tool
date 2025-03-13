document.getElementById('billForm')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    // ইনপুট ভ্যালু নেওয়া
    const watt: number = parseFloat((document.getElementById('watt') as HTMLInputElement).value);
    const hours: number = parseFloat((document.getElementById('hours') as HTMLInputElement).value);
    const rate: number = parseFloat((document.getElementById('rate') as HTMLInputElement).value);

    // ক্যালকুলেশন
    const powerConsumed: number = (watt * hours) / 1000; // kWh
    const dailyBill: number = powerConsumed * rate;
    const monthlyBill: number = dailyBill * 30;
    const yearlyBill: number = dailyBill * 365;

    // রেজাল্ট ডিসপ্লে
    document.getElementById('dailyBill')!.innerText = dailyBill.toFixed(2);
    document.getElementById('monthlyBill')!.innerText = monthlyBill.toFixed(2);
    document.getElementById('yearlyBill')!.innerText = yearlyBill.toFixed(2);
});