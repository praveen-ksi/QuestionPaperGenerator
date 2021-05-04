"use strict";
function objective() {
  console.log("Clicked Objective");
  document.getElementById("objective").style.display = "block";
  document.getElementById("subjective").style.display = "none";
  document.getElementById("class9").style.display = "none";
  window.scrollBy(0, 300);
}
function subjective() {
  console.log("Clicked Subjective");
  document.getElementById("subjective").style.display = "block";
  document.getElementById("objective").style.display = "none";
  document.getElementById("class9").style.display = "none";
  window.scrollBy(0, 300);
}
function class9subj() {
  console.log("Clicked class9");
  document.getElementById("class9").style.display = "block";
  document.getElementById("objective").style.display = "none";
  document.getElementById("subjective").style.display = "none";
  window.scrollBy(0, 300);
}
