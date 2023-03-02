// デフォルトでフォーカスを当てる
const nameInput = document.querySelector('#name');
nameInput.focus();

// otherが押されたら、other job roleを表示
const otherJobRole = document.getElementById('other-job-role');
const jobOptions = document.getElementById('title');




// option達の親要素である、selectをidで取得して、changeで監視しchangeされたら、displayイベントを追加
jobOptions.addEventListener('change', ()=>{
  if(jobOptions.value === 'other'){
    otherJobRole.style.display = 'block';
  }else{
    otherJobRole.style.display = 'none';
  }
});
