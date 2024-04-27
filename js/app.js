let array = [];

let form = document.getElementsByTagName("form")[0];

var tableBody = document.getElementsByTagName("tbody")[0];

const searchBox = document.querySelector(".input");

form.addEventListener("submit", (e) => {
  if (
    e.target.age.value == "" ||
    e.target.age.value > 2024 ||
    e.target.age.value < 1800
  ) {
    e.target.age.classList.add("border-red");
  } else {
    e.target.age.classList.remove("border-red");
  }
  if (e.target.productName.value == "") {
    e.target.productName.classList.add("border-red");
  } else {
    e.target.productName.classList.remove("border-red");
  }
  if (e.target.exist.value != "yes" && e.target.exist.value != "no") {
    e.target.exist.classList.add("border-red");
  } else {
    e.target.exist.classList.remove("border-red");
  }
  if (
    e.target.productName.value == "" ||
    e.target.age.value == "" ||
    e.target.age.value > 2024 ||
    e.target.age.value < 1800
  ) {
    alert("Please fill out a form true");
  } else {
    var productList = [
      e.target.productName.value,
      e.target.exist.value,
      e.target.age.value,
    ];
    array.push(productList);
    console.log(array);
    e.target.productName.value = "";
    e.target.age.value = "";
    e.target.exist.value = "";
    tableBody.innerHTML = "";
    array.forEach((item) => {
      let tr = document.createElement("tr");
      tableBody.append(tr);
      tr.innerHTML = `<td>${item[0]}</td> <td>${item[1]}</td> <td>${item[2]}</td>`;
    });
  }

  e.preventDefault();
});
searchBox.addEventListener("input", (e) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i][0]);
    let result = [array[i][0]].filter((...args) => {
      console.log(args[0]);
      return e.target.value == args[0];
    });
    if (result.length > 0) {
      results.push(result[0]);
    }
  }
  console.log(results);
});

let productName = document.querySelector("#input1");

let exist = document.querySelector("#input2");

let age = document.querySelector("#input3");

productName.addEventListener("blur", (e) => {
  if (e.target.value == "") {
    e.target.classList.add("border-red");
  } else {
    e.target.classList.remove("border-red");
  }
});

age.addEventListener("blur", (e) => {
  if (e.target.value == "" || e.target.value > 2024 || e.target.value < 1800) {
    e.target.classList.add("border-red");
  } else {
    e.target.classList.remove("border-red");
  }
});

exist.addEventListener("blur", (e) => {
  if (e.target.value != "yes" && e.target.value != "no") {
    e.target.classList.add("border-red");
  } else {
    e.target.classList.remove("border-red");
  }
});
