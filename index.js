//n получаем элементы со страницы
const input = document.querySelector(".input");
const generateBtn = document.querySelector(".gen-pass");
const copyBtn = document.querySelector(".copy-pass");

//n убираем стандартное поведение у инпута
input.setAttribute("placeholder", "Result Password");
input.addEventListener("keypress", (e) => {
  e.preventDefault();
});

//n копирование по фокусу на инпут
input.addEventListener("focus", (e) => {
  navigator.clipboard.writeText(input.value);
});

//n кнопка копировать
generateBtn.textContent = "Generate";
generateBtn.addEventListener("click", (e) => {
  input.value = genPass(12);
});

//n кнопка копировать
copyBtn.textContent = "Copy";
copyBtn.addEventListener("click", (e) => {
  input.select();
  navigator.clipboard.writeText(input.value);
  alert("Copy done");
});

//n функция генерации пароля
const genPass = (passLength) => {
  const charNum = "0123456789";
  const charUpper = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  const charLower = "abcdefghijklmnopqrstuvwxyz";
  const charSymbol = "!@#$%^&*()_+{}|:=-";

  const charAll = charLower + charNum + charSymbol + charUpper;

  let resultPassword = "";

  for (let i = 0; i < passLength; i++) {
    const randomPass = Math.floor(Math.random() * charAll.length);
    resultPassword += charAll[randomPass];
  }
  return resultPassword;
};
