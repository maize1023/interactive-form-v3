
// Basic Info
const nameInput = document.querySelector('#name');
nameInput.focus();
const nameElement = document.getElementById('name');
const form = document.querySelector('form');
const email = document.getElementById('email');
const jobOptions = document.getElementById('title');
const otherJobRole = document.getElementById('other-job-role');

// T-Shirt Info
const designs = document.getElementById('design');
const colors = document.getElementById('color');
colors.disabled = true;

// Register for Activities
const activities = document.getElementById('activities');
let sum = 0;
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Payment Info
const paymentMethods = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin= document.getElementById('bitcoin');
const creditCardNum = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');





// show/hide other job role
jobOptions.addEventListener('change', ()=>{
  if(jobOptions.value === 'other'){
    otherJobRole.style.display = 'block';
  }else{
    otherJobRole.style.display = 'none';
  }
});

// show/hide colors
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
  colors.selectedIndex = 0;
});

colors.addEventListener('change', ()=>{
});

// calculate total cost
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

// show/hide payment types
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

// add/remove focus
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('focus', () => {
    checkbox.parentNode.classList.add('focus');
  });

  checkbox.addEventListener('blur', () => {
    const focusedLabel = document.querySelector('.focus');
    if(focusedLabel){
      focusedLabel.classList.remove('focus');
    }
  });
});





// nameValidator
const nameValidator = ()=>{
  const nameValue = nameElement.value;
  const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(nameValue);
  const nameLabel = document.querySelector('label[for="name"]');
  if(!nameIsValid){
    nameLabel.classList.add('not-valid');
    nameLabel.classList.remove('valid');
    nameLabel.lastElementChild.style.display = 'block';
  }else{
    nameLabel.classList.remove('not-valid');
    nameLabel.classList.add('valid');
    nameLabel.lastElementChild.style.display = 'none';
  }
  return nameIsValid;
}

// emailValidator
const emailValidator = ()=>{
  const emailValue = email.value;
  const emailsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailValue);
  const emailLabel = document.querySelector('label[for="email"]');
  if(!emailsValid){
    emailLabel.classList.add('not-valid');
    emailLabel.classList.remove('valid');
    emailLabel.lastElementChild.style.display = 'block';
  }else{
    emailLabel.classList.remove('not-valid');
    emailLabel.classList.add('valid');
    emailLabel.lastElementChild.style.display = 'none';
  }
  return emailsValid;
};

// activitiesValidator
const activitiesValidator = ()=>{
  const activitiesIsValid = sum > 0;
  if(!activitiesIsValid){
    activities.classList.add('not-valid');
    activities.classList.remove('valid');
    activities.lastElementChild.style.display = 'block';
  }else{
    activities.classList.remove('not-valid');
    activities.classList.add('valid');
    activities.lastElementChild.style.display = 'none';
  }
  return activitiesIsValid;
}

// creditCardValidator
const creditCardValidator = ()=>{
  const cardNumValue = creditCardNum.value;
  const zipCodeValue = zipCode.value;
  const cvvValue = cvv.value;
  const cardNumValid = /^\d{13,16}$/.test(cardNumValue);
  const zipCodeValid = /^\d{5}$/.test(zipCodeValue);
  const cvvValid =  /^\d{3}$/.test(cvvValue);
  const creditLabel = document.querySelector('label[for="cc-num"]');
  const zipLabel = document.querySelector('label[for="zip"]');
  const cvvLabel = document.querySelector('label[for="cvv"]');
  let isValid = true;

  if (paymentMethods.value === 'credit-card') {
    if (!cardNumValid) {
      creditLabel.classList.add('not-valid');
      creditLabel.classList.remove('valid');
      creditLabel.lastElementChild.style.display = 'block';
      isValid = false;
    } else {
      creditLabel.classList.remove('not-valid');
      creditLabel.classList.add('valid');
      creditLabel.lastElementChild.style.display = 'none';
    }
    if (!zipCodeValid) {
      zipLabel.classList.add('not-valid');
      zipLabel.classList.remove('valid');
      zipLabel.lastElementChild.style.display = 'block';
      isValid = false;
    } else {
      zipLabel.classList.remove('not-valid');
       zipLabel.classList.add('valid');
       zipLabel.lastElementChild.style.display = 'none';
    }
    if (!cvvValid) {
      cvvLabel.classList.add('not-valid');
      cvvLabel.classList.remove('valid');
      cvvLabel.lastElementChild.style.display = 'block';
      isValid = false;
    } else {
      cvvLabel.classList.remove('not-valid');
      cvvLabel.classList.add('valid');
      cvvLabel.lastElementChild.style.display = 'none';
    }
  }
  return isValid;
};



form.addEventListener('submit', (e)=>{
  nameValidator();
  emailValidator();
  activitiesValidator();
  creditCardValidator();
  if(nameValidator() && emailValidator() & activitiesValidator() & creditCardValidator()){
    console.log('Submit handler is functional!');
  }else
   e.preventDefault();
})
