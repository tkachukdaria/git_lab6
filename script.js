// 1. Діалог з користувачем
function dialogWithUser() {
  alert('Ласкаво просимо на сторінку!');
  let name = prompt('Ваше ім’я?', 'Гість');
  if (!name) {
    alert('Ім’я не вказано, вітаю, Гість!');
  } else {
    alert(`Вітаю, ${name}!`);
  }
  let count = +prompt('Скільки улюблених рецептів ви шукаєте?', 3);
  let i = 0;
  while (i < count) {
    alert(`Показую рецепт №${i+1}`);
    i++;
  }
}

// 2. Інформація про розробника
function developerInfo(lastName, firstName, position = 'Developer') {
  alert(`Автор: ${lastName} ${firstName}\nПосада: ${position}`);
}

// 3. Порівняння двох рядків
function compareStrings(a, b) {
  if (a > b)      alert(`"${a}" більший за "${b}".`);
  else if (b > a) alert(`"${b}" більший за "${a}".`);
  else            alert(`"${a}" та "${b}" однакові.`);
}

// 4. Зміна фону на 30 секунд
function changeBackgroundTemporary(color, ms = 30000) {
  const old = document.body.style.backgroundColor;
  document.body.style.backgroundColor = color;
  setTimeout(() => {
    document.body.style.backgroundColor = old;
  }, ms);
}
changeBackgroundTemporary('#faf0e6', 30000);

// 5. Перенаправлення за допомогою location
function redirectToGitHub() {
  if (confirm('Перейти на GitHub-репозиторій?')) {
    location.href = 'https://github.com';
  }
}

// 6. Показ DOM-властивостей
// innerHTML / outerHTML / textContent / nodeValue
const header = document.getElementById('main-header');
console.log('innerHTML:', header.innerHTML);
console.log('outerHTML:', header.outerHTML);
console.log('textContent:', header.textContent);

// 7. Створення/вставка/видалення вузлів
const note = document.createElement('div');
const txt  = document.createTextNode('Створено через createElement & createTextNode');
note.append(txt);
document.body.append(note);

// prepend
const firstPara = document.querySelector('.content p');
firstPara.prepend(document.createTextNode('[Новина] '));

// after
firstPara.after(document.createElement('hr'));

// replaceWith
const footer = document.querySelector('.site-footer p');
footer.replaceWith(document.createTextNode('Цей текст замінено через replaceWith'));

// remove
// вже видалено у внутрішньому скрипті

// 8. document.write (виконується під час парсингу)
document.write('<p style="text-align:center; color: var(--muted);">* document.write()</p>');
