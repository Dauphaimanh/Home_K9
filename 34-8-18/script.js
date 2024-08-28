// JS

var fileEl = document.querySelector('.file');
var menuEl = document.querySelector('.dropdown-menu');;
var newBtn = document.querySelector('.new');
var txtBtn = document.querySelector('.txt');
var pdfBtn = document.querySelector('.pdf');
var inputEl = document.querySelector('.input')

var boldBtn = document.querySelector('.bold');
var underlineBtn = document.querySelector('.underline');
var italicBtn = document.querySelector('.italic');
var colorBtn = document.querySelector('.color-btn');

var contentEl = document.querySelector('.content');
var lengthChar = document.querySelector('.length-char');
var numberChar = document.querySelector('.number-char');

newBtn.addEventListener('click', function () {
  contentEl.innerText = "";
  updateCount();
});

fileEl.addEventListener('click', function () {
  fileEl.classList.toggle('active');
});

txtBtn.addEventListener('click', function () {
  var save = document.createElement('save');
  var blobEv = new Blob([contentEl.innerText]);
  var dataUrl = URL.createObjectURL(blobEv);
  save.href = dataUrl;
  save.download = inputEl.value + '.txt';
  save.click();
});

boldBtn.addEventListener('click', function () {
  document.execCommand('bold');
});

underlineBtn.addEventListener('click', function () {
  document.execCommand('underline');
});

italicBtn.addEventListener('click', function () {
  document.execCommand('italic');
});

colorBtn.addEventListener('click', function (e) {
  document.execCommand('forecolor', false, e.target.value);
});

pdfBtn.addEventListener('click', function () {
  html2pdf().from(contentEl.innerHTML).toPdf().save(inputEl.value)
  inputEl.value = "";
});
contentEl.addEventListener('keyup', updateCount);

function updateCount () {
  var count = 0;
  var numberValue = contentEl.innerText.trim();
  lengthChar.innerText = numberValue.length;
  console.log(numberValue.split(/\s+/));

  var Array = numberValue.split(/\s+/).filter(function (item) {
    return item.trim() !== "";
  });

  var count = Array.length;
  wordsNumberEl.innerText = count;
}