// デフォルトでフォーカスを当てる
const nameInput = document.querySelector('#name');
nameInput.focus();

// ①otherが押されたら、other job roleを表示
const otherJobRole = document.getElementById('other-job-role');
const jobOptions = document.getElementById('title');

// ②
const designs = document.getElementById('design');
const colors = document.getElementById('color');
colors.disabled = true;

// ③
const activities = document.getElementById('activities');
let sum = 0;

// ④
const paymentMethods = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin= document.getElementById('bitcoin');





// ①option達の親要素である、selectをidで取得して、changeで監視しchangeされたら、displayイベントを追加
jobOptions.addEventListener('change', ()=>{
  if(jobOptions.value === 'other'){
    otherJobRole.style.display = 'block';
  }else{
    otherJobRole.style.display = 'none';
  }
});

// カラーoptionをforeachで取り出して
// それぞれのdata-themをifで判別
designs.addEventListener('change', (e)=>{
  const selectedTee = e.target.value;
  colors.disabled = false;
  for(let i = 0; i < colors.length; i++){
    const color = colors[i].getAttribute('data-theme');
    if(color === selectedTee){
      colors[i].style.display = 'block';
    }else{
      colors[i].style.display = 'none';
    }
  }
});

// コース選択で合計金額が計算される
activities.addEventListener('change', (e)=>{
  const checkedActivity = e.target;
  const isChecked = checkedActivity.checked;
  const price = checkedActivity.getAttribute('data-cost');
  const totalCost = document.getElementById('activities-cost');
  if(isChecked){
    sum += parseInt(price);
  }else{
    sum -= parseInt(price);
  }
  totalCost.innerHTML = `Total: $${sum}`;
});


// 支払い方法の選択で表示項目を変える
paymentMethods.addEventListener('change', ()=>{
  switch(paymentMethods.value){
    case 'credit-card':
      creditCard.style.display = 'block';
      paypal.style.display = 'none';
      bitcoin.style.display = 'none';
      break;
    case 'paypal':
      creditCard.style.display = 'none';
      paypal.style.display = 'block';
      bitcoin.style.display = 'none';
      break;
    case 'bitcoin':
      creditCard.style.display = 'none';
      paypal.style.display = 'none';
      bitcoin.style.display = 'block';
      break;
    default:
      creditCard.style.display = 'block';
      paypal.style.display = 'none';
      bitcoin.style.display = 'none';
  }
});
