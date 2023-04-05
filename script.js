let money = 0;
let partner = 0;
let income = 1;
let autoClicker = false;
let upgrades = [
  { level: 1, cost: 100, incomeIncrease: 1 },
  { level: 2, cost: 150, incomeIncrease: 2 },
  { level: 3, cost: 200, incomeIncrease: 3 }
];

const moneyElem = document.querySelector('.uangVal');
const partnerElem = document.querySelector('.partnerVal');

const btnAuto = document.querySelector('.btnAuto');
const btnPartner = document.querySelector('.btnPartner');
const btnUpgrade = document.querySelectorAll('.btnUpgrade');
const imgTahu = document.querySelector('.gambarTahu');

function generateMoney() {
  money += income;
  moneyElem.textContent = `Rp ${money}`;
}

function buyAutoClicker() {
  if (money >= 80 && !autoClicker) {
    autoClicker = true;
    money -= 80;
    moneyElem.textContent = `Rp ${money}`;
    setInterval(generateMoney, 1000);
  }
  else {
    alert('Kamu tidak punya cukup uang untuk membeli ini');
  }
}

function buyPartner() {
  if (money >= 100) {
    partner++;
    money -= 100;
    moneyElem.textContent = `Rp ${money}`;
    partnerElem.textContent = `${partner}`;
  }
  else {
    alert('Kamu tidak punya cukup uang untuk membeli ini');
  }
}

imgTahu.addEventListener('click', function () {
  generateMoney();
});

btnAuto.addEventListener('click', function () {
  buyAutoClicker();
});

btnPartner.addEventListener('click', function () {
  buyPartner();
});

for (let i = 0; i < btnUpgrade.length; i++) {
  btnUpgrade[i].addEventListener('click', function (event) {
    upgradeIncome(event);
  });
}

function openModal() {
  document.getElementById("upgradeTokoModal").style.display = "block";
}

function closeModal() {
  document.getElementById("upgradeTokoModal").style.display = "none";
}

function upgradeIncome(event) {
  const selectedUpgrade = upgrades[event.target.dataset.index];
  if (money >= selectedUpgrade.cost) {
    income += selectedUpgrade.incomeIncrease;
    money -= selectedUpgrade.cost;
    incomeElem.textContent = `Rp ${income}`;
    moneyElem.textContent = `Rp ${money}`;
    closeModal();
  }
}

// Update income display
const incomeElem = document.getElementById('income');
incomeElem.textContent = `Uang Saku = Rp ${income}`;;
