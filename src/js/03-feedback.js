import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
console.log(feedbackFormEl);
const LOCALSTORAGE_KEY = 'feedback-form-state';
let currentValues = {};

feedbackFormEl.addEventListener('input', throttle(saveCurrentValues, 500));
feedbackFormEl.addEventListener('submit', onSubmitForm);
toFieldsForm();

function saveCurrentValues(evt) {
  currentValues[evt.target.name] = evt.target.value;
  localStorage.setItem('LOCALSTORAGE_KEY', JSON.stringify(currentValues));
}
function onSubmitForm(evt) {
  evt.preventDefault();
  localStorage.removeItem(LOCALSTORAGE_KEY);
  evt.currentTarget.reset();
  currentValues = {};
}
function toFieldsForm() {
  let savedDate = localStorage.getItem(LOCALSTORAGE_KEY);
  let savedParsedDate = JSON.parse(savedDate);
  currentValues = savedParsedDate;
  if (savedParsedDate) {
    if (savedParsedDate.email) {
      feedbackFormEl.elements.email.value = savedParsedDate.email;
    }
    if (savedParsedDate.message) {
      feedbackFormEl.elements.message.value = savedParsedDate.message;
    }
  }
  return savedParsedDate;
}

/* Розбий завдання на декілька підзавдань:
  1--Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
  2--Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
  3--Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
  4--Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle. 
*/
