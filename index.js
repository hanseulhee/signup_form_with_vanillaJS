const form = document.querySelector(".form");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const password2 = document.querySelector(".password2");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkPassword(password, 1, 6);
  loadName();
  checkEmail(email);
  checkPassword2(password, password2);
});

function errorRed(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function greenlight(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function setDefault(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control";
}

function checkPassword() {
  if (password.value.length >= 6) {
    // 글자가 여섯글자가 넘으면
    greenlight(password);
  } else {
    // 글자가 여섯글자 미만일 경우
    errorRed(password, `Password must be at least 6 characters`);
  }
}

function checkPassword2() {
  const input1 = password.value;
  const input2 = password2.value;

  if (password2.value.length === 0) {
    errorRed(password2, `Password2 is required`);
  } else if (input1 === input2) {
    // 비밀번호가 이전이랑 똑같다면
    greenlight(password2);
  } else {
    // 비밀번호가 이전이랑 다르다면
    errorRed(password2, `Passwords do not match`);
  }
}

function checkEmail() {
  const rule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (rule.test(email.value.trim())) {
    // 이메일 주소쓸 때 있어야 할 것들
    greenlight(email);
  } else {
    // 조건 충족 안했을 때
    errorRed(email, ` Email is not valid`);
  }
}

function loadName() {
  if (name.value.length === 0) {
    errorRed(name, `Your username must be at least 3 characters`);
  } else if (name.value.length >= 3) {
    // 글자가 세글자가 넘으면
    greenlight(name);
  } else {
    // 글자가 세글자 미만일 경우
    errorRed(name, `Your username must be at least ${3} characters`);
  }

  console.log(name.value.length);
}

function init() {
  name.addEventListener("input", loadName);
  email.addEventListener("input", checkEmail);
  password.addEventListener("input", checkPassword);
  password2.addEventListener("input", checkPassword2);
}

init();
