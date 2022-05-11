"use strict";

// Tabbed component
const tabs = document.querySelectorAll(".platform__tab");
const tabsContainer = document.querySelector(".platform__tab-container");
const tabsContent = document.querySelectorAll(".platform__content");

// tabs.forEach((t) => t.addEventListener("click", () => console.log("TAB")));

tabsContainer.addEventListener("click", function (e) {
  // setTimeout(() => {   }, 2000);
  const clicked = e.target.closest(".platform__tab");
  console.log(clicked);

  if (!clicked) {
    return;
  }

  tabs.forEach((t) => t.classList.remove("platform__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("platform__content--active"));

  clicked.classList.add("platform__tab--active");

  document
    .querySelector(`.platform__content--${clicked.dataset.tab}`)
    .classList.add("platform__content--active");
});

///////////////Smooth scrolling/////////

const btnScrollToA = document.querySelector(".btnScrollA");
const section1 = document.querySelector(".section--1");

btnScrollToA.addEventListener("click", function (e) {
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();

  window.scrollTo({
    left: s1coords.left + window.scrollX,
    top: s1coords.top + window.scrollY,
    behavior: "smooth",
  });
});

const btnScrollToB = document.querySelector(".btnScrollB");
const section2 = document.querySelector(".section--2");

btnScrollToB.addEventListener("click", function (e) {
  e.preventDefault();
  const s2coords = section2.getBoundingClientRect();

  window.scrollTo({
    left: s2coords.left + window.scrollX,
    top: s2coords.top + window.scrollY,
    behavior: "smooth",
  });
});

const btnScrollToC = document.querySelector(".btnScrollC");
const section3 = document.querySelector(".section--3");

btnScrollToC.addEventListener("click", function (e) {
  e.preventDefault();
  const s3coords = section3.getBoundingClientRect();

  window.scrollTo({
    left: s3coords.left + window.scrollX,
    top: s3coords.top + window.scrollY,
    behavior: "smooth",
  });
});

const btnScrollToD = document.querySelector(".btnScrollD");
const section4 = document.querySelector(".section--4");

btnScrollToD.addEventListener("click", function (e) {
  e.preventDefault();
  // const s4coords = section4.getBoundingClientRect();

  // window.scrollTo({
  //   left: s4coords.left + window.scrollX,
  //   top: s4coords.top + window.scrollY,
  //   behavior: "smooth",
  // });
  section4.scrollIntoView({ behavior: "smooth" });
});
