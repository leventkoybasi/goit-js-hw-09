const formItem = document.querySelector('.feedback-form');

formItem.addEventListener('submit', e => {
  e.preventDefault();
  const mailInputValue = document.querySelector(
    '#exampleFormControlInput1'
  ).value;
  const messageInputValue = document.querySelector(
    '#exampleFormControlTextarea1'
  ).value;

  if (mailInputValue && messageInputValue) {
    const formData = {
      email: mailInputValue,
      message: messageInputValue,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    formItem.reset();
  } else {
    alert('Lutfen Gerekli Alanlari Doldurunuz...');
  }
});
