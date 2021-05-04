function getChapters() {
  const ch = document.body.getElementsByTagName("input");
  let arr = [...ch];
  let res = [];
  for (let i = 0; i < ch.length; i++) {
    if (arr[i].checked == true) {
      console.log(arr[i].value);
      res.push(arr[i].value);
    }
  }
  localStorage.setItem("c9sci", JSON.stringify(res));
  return false;
}
