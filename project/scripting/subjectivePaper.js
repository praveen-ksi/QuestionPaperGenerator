let data = localStorage.getItem("finstr");
console.log(data);
showPaper();
function showPaper() {
  let dataArr = data.split("\n");
  console.log(dataArr);

  /**************************Creating the Test Detail block***************************/
  let testDetail = document.querySelector(".testDetails");
  //Name of Organisation
  let nodeO = document.createElement("p");
  nodeO.innerText = dataArr[0];
  nodeO.style.textAlign = "center";
  nodeO.style.fontSize = "1.5rem";
  console.log(nodeO);
  testDetail.appendChild(nodeO);
  //Name of Examination
  let nodeE = document.createElement("p");
  nodeE.innerText = dataArr[1];
  nodeE.style.textAlign = "center";
  nodeE.style.fontSize = "1.3rem";
  testDetail.appendChild(nodeE);
  //Test Duration
  let nodeD = document.createElement("span");
  nodeD.innerText = "Duration:" + dataArr[2];
  nodeD.style.fontSize = "1.2rem";
  nodeD.style.display = "inline-block";
  nodeD.style.width = "93vw";
  testDetail.appendChild(nodeD);
  //Test Maximum Marks
  let nodeM = document.createElement("span");
  nodeM.innerText = "MM:" + dataArr[3];
  nodeM.style.fontSize = "1.2rem";
  nodeD.style.display = "inline-block";
  testDetail.appendChild(nodeM);

  /********************************Instruction Block********************************/
  let Instruction = document.querySelector(".instructions");
  //Instructions
  Instruction.innerHTML =
    "<p>Instructions:<hr></p><li>Use of calculator is prohibited</li><hr>";
  Instruction.style.fontSize = "1.2rem";
  //Showing Questions

  /**********************************Questions Block**********************************/
  let Questions = document.querySelector(".questions");
  for (let i = 4; i < dataArr.length; i++) {
    let nodeQ = document.createElement("p");
    nodeQ.innerText = dataArr[i];
    Questions.appendChild(nodeQ);
  }
}
