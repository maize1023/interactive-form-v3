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
