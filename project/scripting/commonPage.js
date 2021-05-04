"use strict";
let data = [];
function loadChapters() {
  let ChapterName = JSON.parse(localStorage.getItem("c9sci"));
  //console.log(ChapterName);
  return ChapterName;
}
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}
function createNode(nthMarks, data, qs) {
  let txt = document.createTextNode(data);
  let node = document.createElement("input");
  node.type = "checkbox";
  node.name = qs;
  node.value = qs;
  node.id = qs;
  let label = document.createElement("label");
  label.htmlFor = qs;
  label.appendChild(txt);
  nthMarks.appendChild(node);
  nthMarks.appendChild(label);
  nthMarks.appendChild(document.createElement("br"));
}
function showQuestions(data) {
  //console.log(data);
  let oneMarks = document.getElementById("oneMarker");
  let twoMarks = document.getElementById("twoMarker");
  let threeMarks = document.getElementById("threeMarker");
  let fourMarks = document.getElementById("fourMarker");
  for (let i in data) {
    //console.log(data[i]);
    for (let j in data[i]) {
      //console.log(j);
      if (j == 0) {
        for (let qs in data[i][j]) {
          //console.log(data[i][j][qs]);
          createNode(oneMarks, " " + data[i][j][qs], qs);
        }
      } else if (j == 1) {
        for (let qs in data[i][j]) {
          createNode(twoMarks, " " + data[i][j][qs], qs);
        }
      } else if (j == 2) {
        for (let qs in data[i][j]) {
          createNode(threeMarks, " " + data[i][j][qs], qs);
        }
      } else if (j == 3) {
        for (let qs in data[i][j]) {
          createNode(fourMarks, " " + data[i][j][qs], qs);
        }
      }
    }
  }
}
function getData() {
  let chapterNames = loadChapters();
  for (let chapter in chapterNames) {
    chapterNames[chapter] = "jsondata/" + chapterNames[chapter];
  }
  //console.log(chapterNames);
  for (let chapter of chapterNames) {
    readTextFile(chapter, function (text) {
      data.push(JSON.parse(text));
    });
  }
  setTimeout(showQuestions, 100, data);
}
function createFile() {
  const ch = document.getElementsByTagName("input");
  let arr = [...ch];
  let res = [];
  let finstr = "";
  for (let i = 0; i < ch.length; i++) {
    if (ch[i].type == "checkbox" && arr[i].checked == true) {
      let qry = 'label[for="' + arr[i].id + '"]';
      const lbl = document.querySelector(qry);
      res.push(lbl.innerText);
    } else if (ch[i].type == "text") {
      finstr += ch[i].value + "\n";
    }
  }
  let count = 0;
  for (let i = 0; i < res.length; i++) {
    count++;
    finstr += count + ".)" + res[i] + "\n";
  }
  console.log(finstr);
  localStorage.setItem("finstr", finstr);
  return false;
}
