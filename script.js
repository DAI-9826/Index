'use strict';
const userNameInput = document.getElementById('inputName');
const dateControl = document.querySelector('input[type="date"]');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');


assessmentButton.addEventListener(
  'click',
  () => {
    const Bday = (dateControl.valueAsNumber);

    const userName = userNameInput.value;
    if (userName.length === 0){
      return;
    } else if (Bday === 1704067200000){
      return;
    }

    resultDivision.innerText = " ";
    
    const headerDivision = document.createElement('div');
    headerDivision.setAttribute('class', 'card-header text-bg-success');
    headerDivision.innerText = '占い結果';

    const bodyDivision = document.createElement('div');
    bodyDivision.setAttribute('class', 'card-body');

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'card-text');
    const result = assessment(userName);
    paragraph.innerText = result;
    bodyDivision.appendChild(paragraph);

    resultDivision.setAttribute('class', 'card');


    resultDivision.appendChild(headerDivision);
    resultDivision.appendChild(bodyDivision);
  }
);

const answers = [
  '###userName###は大吉です。勝負事は何でも勝てちゃうかも！？。',
  '###userName###は大吉です。好きなあの子と進展があるかも！？',
  '###userName###は大吉です。願い事が叶うかも！？',
  '###userName###は吉です。人にやさしくすると運気UP!!',
  '###userName###は吉です。健康に過ごせる予感。',
  '###userName###は吉です。なんでも挑戦してみよう。',
  '###userName###は凶です。勝負事は避けたほうがいいかも。',
  '###userName###は凶です。お家でおとなしくしていよう。',
  '###userName###は凶です。いやなことが降りかかってくるかも。',
]; 

let sumOfCharCode = 0;

function assessment(userName) {
  /**誕生日の年、月、日を足して下に付け加えたい */
  let sumOfCharCode = 0;
  let Bday = Math.floor(dateControl.valueAsNumber/100000000);
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i) + Bday;
  }
  const index = sumOfCharCode % answers.length;
  let result = answers[index];
  
  result = result.replaceAll('###userName###', userName);
  return result;
  
}