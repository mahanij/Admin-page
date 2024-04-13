let array = [];

let form = document.getElementsByTagName("form")[0];

let div1 = document.querySelector(".div1");

let div2 = document.querySelector(".div2");

let div3 = document.querySelector(".div3");

let proudactName = document.querySelector("#input1");

let exist = document.querySelector("#input2");

let age = document.querySelector("#input3");

form.addEventListener("submit", (e) => {
  if (
    e.target.proudactName.value == "" ||
    e.target.age.value == "" ||
    e.target.exist.value == ""
  ) {
    alert("plase fill out the form");
  } else {
    let object = {
      name: e.target.proudactName.value,
      exist: e.target.exist.value,
      age: e.target.age.value,
    };
    console.log(object.name);
    array.unshift(object);
  }
  e.preventDefault();
});

proudactName.addEventListener("blur", (e) => {
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
