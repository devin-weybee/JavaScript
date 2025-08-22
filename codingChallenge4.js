const bill = 275;
const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(`Bill : ${bill}, tip : ${tip}, Total : ${bill+tip}`)