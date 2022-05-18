const mMButton = document.querySelector("#mainMenuButton");
const mainNav = document.querySelector("#nav");

const topBar = document.querySelector("#header");
const topHeader = document.querySelector("#nav");
const cont = document.querySelector(".mainMenuButtonC");
const topHeight =
  cont.getBoundingClientRect().bottom - cont.getBoundingClientRect().top;
const logo = document.querySelector("#logo");
const btn = document.querySelector("#submit");
const userInputBefore = document.querySelector("#userInputB");
const userInputAfter = document.querySelector("#userInputA");
const userOutput = document.querySelector("#userOutput");
const userOutputB = document.querySelector("#userOutputB");
const userOutputA = document.querySelector("#userOutputA");
const sideBar = document.querySelector("#mobileSideBar");
const sideBarWidth =
  sideBar.getBoundingClientRect().left - sideBar.getBoundingClientRect().right;
const mobileSideBarButton = document.querySelector("#mobileMenu");
const sideMenuBack = document.querySelector("#sideMenuBack");
const mainMenuSideBar = document.querySelector("#click");
const arrow = document.querySelector("#arrow");
const halfheight = document.querySelector(".h");
const halfHeight =
  halfheight.getBoundingClientRect().bottom -
  halfheight.getBoundingClientRect().top;
const num = document.querySelectorAll(".outputNumber");
const alart = (alartText) => {
  const elm = document.createElement("h6");
  elm.innerHTML = alartText;
  elm.setAttribute(
    "style",
    "right: 48vw;position:fixed;bottom:20vh;background-color: darkgray;padding: .15em;color: black;border-radius: .25em;"
  );
  document.body.appendChild(elm);
  setTimeout(() => {
    elm.remove();
  }, 850);
};

let lastView = window.pageYOffset;
document.addEventListener("scroll", () => {
  let nowView = window.pageYOffset;
  if (lastView > nowView) {
    topBar.style.top = "0px";
    logo.style.marginRight = "0px";
    topHeader.style.backgroundColor = "white";
  } else {
    topBar.style.top = `${-topHeight}px`;
    logo.style.marginRight = "50px";
    topHeader.style.backgroundColor = "#ffffffb3";
  }

  lastView = nowView;
});

btn.addEventListener("click", () => {
  let beforeInput = userInputBefore.value;
  let afterInput = userInputAfter.value;
  let i = 0;
  if (beforeInput !== "" && afterInput !== "") {
    i = "both";
  } else if (beforeInput !== "") {
    i = 0;
  } else if (afterInput !== "") {
    i = 1;
  } else {
    i = "thats wrong";
  }
  console.log(i);
  if (!i) {
    userOutput.innerHTML = (beforeInput * 0.14).toFixed(1);
    userOutputB.innerHTML = beforeInput;
    userOutputA.innerHTML = (beforeInput * 1.14).toFixed(1);
    userInputAfter.value = "";
    userInputBefore.value = "";
  } else if (i === "thats wrong") {
    userOutput.innerHTML = "رجاء قم بادخال احد القيم لسعر المنتج";
    userOutputB.innerHTML = "رجاء قم بادخال احد القيم لسعر المنتج";
    userOutputA.innerHTML = "رجاء قم بادخال احد القيم لسعر المنتج";
  } else if (i === "both") {
    userOutput.innerHTML = "قم بادخال قيمة واحدة فقط";
    userOutputB.innerHTML = "قم بادخال قيمة واحدة فقط";
    userOutputA.innerHTML = "قم بادخال قيمة واحدة فقط";
  } else {
    beforeInput = afterInput / 1.14;
    userOutput.innerHTML = (beforeInput * 0.14).toFixed(1);
    userOutputB.innerHTML = beforeInput.toFixed(1);
    userOutputA.innerHTML = (beforeInput * 1.14).toFixed(1);
    userInputAfter.value = "";
    userInputBefore.value = "";
  }
});
mobileSideBarButton.addEventListener("click", () => {
  sideBar.style.right = `0px`;
});
sideMenuBack.addEventListener("click", () => {
  sideBar.style.right = `${sideBarWidth}px`;
});

let x = 0;

mainMenuSideBar.addEventListener("click", () => {
  if (!x) {
    arrow.style.transform = "rotate(-90deg)";
    x++;
    halfheight.style.top = "-" + halfHeight / 2 + "px";
  } else {
    arrow.style.transform = "";
    x--;
    halfheight.style.top = ``;
  }
});

num.forEach((num, numNum) => {
  num.addEventListener("click", () => {
    navigator.clipboard.writeText(num.innerHTML);
    alart("!!! copied");
  });
});
