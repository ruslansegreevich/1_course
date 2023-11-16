const deposit = 12000;
const percent = 7 / 100;
const house = 13500;

const finalDeposit = deposit * (1 + (percent / 12)) ** 24;

if (finalDeposit >= house) {
    console.log(`Вы можете купить дом и у Вас останется: ${finalDeposit - house} $`);
}
else {
    console.log(`Вы не можете купить дом, у Вас : ${finalDeposit} $`);
}