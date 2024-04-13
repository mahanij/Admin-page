let array = [];

let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
  if (
    e.target.age.value == "" ||
    e.target.age.value > 2024 ||
    e.target.age.value < 1800
  ) {
    e.target.age.classList.add("border-red");
    div3.classList.add("div-submit");
    div3.innerHTML = "birth year: should be > 2024 & < 1800";
  } else {
    div3.classList.add("div-submit");
    div3.innerHTML = "birth year: ok";
    e.target.age.classList.remove("border-red");
  }
  if (e.target.productName.value == "") {
    e.target.productName.classList.add("border-red");
    div1.innerHTML = "product name: please enter";
    div1.classList.add("div-submit");
  } else {
    div1.classList.add("div-submit");
    div1.innerHTML = "product name: ok";
    e.target.productName.classList.remove("border-red");
  }
  if (e.target.exist.value != "yes" && e.target.exist.value != "no") {
    e.target.exist.classList.add("border-red");
    div2.innerHTML = "exist: yes or no";
    div2.classList.add("div-submit");
  } else {
    div2.classList.add("div-submit");
    div2.innerHTML = "exist: ok";
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
    let objdct = {
      Name: e.target.productName.value,
      Avaailable: e.target.exist.value,
      Age: e.target.age.value,
    };
    array.unshift(objdct);
    div1.classList.add("div-submit");
    div2.classList.add("div-submit");
    div3.classList.add("div-submit");
    div1.innerHTML = "product name:";
    div2.innerHTML = "exist:";
    div3.innerHTML = "birth year:";
    div1.append(objdct.Name);
    div2.append(objdct.Avaailable);
    div3.append(objdct.Age);
    console.log(array);
    e.target.productName.value = "";
    e.target.age.value = "";
    e.target.exist.value = "";
  }

  e.preventDefault();
});

let div1 = document.querySelector(".div1");

let div2 = document.querySelector(".div2");

let div3 = document.querySelector(".div3");

let productName = document.querySelector("#input1");

let exist = document.querySelector("#input2");

let age = document.querySelector("#input3");

productName.addEventListener("blur", (e) => {
  if (e.target.value == "") {
    e.target.classList.add("border-red");
    div1.innerHTML = "product name: please enter";
    div1.classList.add("div-submit");
  } else {
    div1.classList.add("div-submit");
    div1.innerHTML = "product name: ok";
    e.target.classList.remove("border-red");
  }
});

exist.addEventListener("blur", (e) => {
  if (e.target.value != "yes" && e.target.value != "no") {
    e.target.classList.add("border-red");
    div2.innerHTML = "exist: yes or no";
    div2.classList.add("div-submit");
  } else {
    div2.classList.add("div-submit");
    div2.innerHTML = "exist: ok";
    e.target.classList.remove("border-red");
  }
});

age.addEventListener("blur", (e) => {
  if (e.target.value == "" || e.target.value > 2024 || e.target.value < 1800) {
    e.target.classList.add("border-red");
    div3.classList.add("div-submit");
    div3.innerHTML = "birth year: should be > 2024 & < 1800";
  } else {
    div3.classList.add("div-submit");
    div3.innerHTML = "birth year: ok";
    e.target.classList.remove("border-red");
  }
});
