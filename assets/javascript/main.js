// 1- 15 = 1 lion per cage
// 16 - 75 = 2 lions per pen
// 76 - 100 = 3 lions per cave

function countLionsInCage(cageCount) {
  let cageNumber = 1;
  let lions = [0, 0, 0];

  while (cageNumber <= cageCount) {
    if (cageNumber < 16) {
      lions[0] += cageNumber;
    } else if (cageNumber > 15 && cageNumber < 75) {
      lions[1] += cageNumber * 2;
    } else if (cageNumber > 75 && cageNumber < 101) {
      lions[2] += cageNumber * 3;
    }
    cageNumber = cageNumber + 1;
  }

  return lions;
}

function displayLionTotals(lions) {
  let cages = document.querySelector("#cages");
  let pens = document.querySelector("#pens");
  let caves = document.querySelector("#caves");
  let totalSpan = document.querySelector("#total");

  let count = 0;
  let total = 0;
  while (count < lions.length) {
    total = total + lions[count];
    count++;
  }

  cages.innerHTML = lions[0];
  pens.innerHTML = lions[1];
  caves.innerHTML = lions[2];
  totalSpan.innerHTML = total;
}

//console.log("100 Cages: ", countLionsInCage(100));
let lions = countLionsInCage(100);

displayLionTotals(lions);
