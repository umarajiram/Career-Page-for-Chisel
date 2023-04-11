// const operationsHead = document.querySelector(".operationsHead");
// const franchiseeManager = document.querySelector(".franchiseeManager");
// const marcomManager = document.querySelector(".marcomManager");
// const procurementManager = document.querySelector(".procurementManager");
// const storeManager = document.querySelector(".storeManager");
// const trainers = document.querySelector(".trainers");
// const therapist = document.querySelector(".therapist");
// const housekeepSupervisor = document.querySelector(".housekeepSupervisor");
// const janitor = document.querySelector(".janitor");
// const ofinanceManager = document.querySelector(".financeManager");
// const hrManager = document.querySelector(".hrManager");
// const itExecutive = document.querySelector(".itExecutive");
// const techhead = document.querySelector(".techhead");
// const ceo = document.querySelector(".ceo");
// const asstCategoryManager = document.querySelector(".asstCategoryManager");
// const catalougeExecutive = document.querySelector(".catalougeExecutive");
// const orderProcessExecutive = document.querySelector(".orderProcessExecutive");
// const vandlManager = document.querySelector(".vandlManager");
// const btnsOpenModal = document.querySelectorAll(".show-modal");

// const openModal = function () {
//   operationsHead.classList.remove("hidden");
//   franchiseeManager.classList.remove("hidden");
//   document.querySelector("button").style.backgroundColor = "#000000";
//   document.querySelector("button").style.color = "#ffffff";
// };
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

// Hide all pages except the default one
var pages = document.querySelectorAll(".page");
for (var i = 1; i < pages.length; i++) {
  pages[i].style.display = "none";
}

// Add click event listeners to the buttons
document.getElementById("button1").addEventListener("click", function () {
  showPage(0);
});

document.getElementById("button2").addEventListener("click", function () {
  showPage(1);
});

document.getElementById("button3").addEventListener("click", function () {
  showPage(2);
});

document.getElementById("button4").addEventListener("click", function () {
  showPage(3);
});

document.getElementById("button5").addEventListener("click", function () {
  showPage(4);
});

document.getElementById("button6").addEventListener("click", function () {
  showPage(5);
});

document.getElementById("button7").addEventListener("click", function () {
  showPage(6);
});

document.getElementById("button8").addEventListener("click", function () {
  showPage(7);
});

document.getElementById("button9").addEventListener("click", function () {
  showPage(8);
});

document.getElementById("button10").addEventListener("click", function () {
  showPage(9);
});

document.getElementById("button11").addEventListener("click", function () {
  showPage(10);
});

document.getElementById("button12").addEventListener("click", function () {
  showPage(11);
});

document.getElementById("button13").addEventListener("click", function () {
  showPage(12);
});

document.getElementById("button14").addEventListener("click", function () {
  showPage(13);
});

document.getElementById("button15").addEventListener("click", function () {
  showPage(14);
});

document.getElementById("button16").addEventListener("click", function () {
  showPage(15);
});

document.getElementById("button17").addEventListener("click", function () {
  showPage(16);
});

document.getElementById("button18").addEventListener("click", function () {
  showPage(17);
});

// Function to show/hide pages
function showPage(pageIndex) {
  for (var i = 0; i < pages.length; i++) {
    if (i === pageIndex) {
      pages[i].style.display = "block";
    } else {
      pages[i].style.display = "none";
    }
  }
}

// document.getElementById('pages[i]').style.backgroundColor = '#60b347';
