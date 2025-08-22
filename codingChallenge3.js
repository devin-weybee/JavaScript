const dolphinFirstGame = 122;
const dolphinSecondGame = 112;
const dolphinThirdGame = 81;

const koalasFirstGame = 109;
const koalasSecondGame = 95;
const koalasThirdGame = 86;

const avgDolphinScore = (dolphinFirstGame + dolphinSecondGame + dolphinThirdGame) / 3;
const avgKoalasScore = (koalasFirstGame + koalasSecondGame + koalasThirdGame) / 3;

console.log("Team Dolphin Score : ",avgDolphinScore.toFixed(2))
console.log("Team Koalas Score : ",avgKoalasScore.toFixed(2))

if ( avgDolphinScore == avgKoalasScore && avgDolphinScore >= 100 && avgKoalasScore >= 100 ) {
  console.log("Draw !!");
} else if ( avgDolphinScore > avgKoalasScore && avgDolphinScore >= 100 ) {
  console.log("Team Dolphin wins !!");
} else if ( avgDolphinScore < avgKoalasScore && avgKoalasScore >= 100 ){
  console.log("Team Koalas wins !!");
} else {
    console.log("No winner !!")
}
