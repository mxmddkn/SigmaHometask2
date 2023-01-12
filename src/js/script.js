const burger = document.querySelector('.burger'),
      panel = document.querySelector('.panel'),
      closeElem = document.querySelector('.panel__close');

burger.addEventListener('click', () => {
    panel.classList.add('active');
});

closeElem.addEventListener('click', () => {
    panel.classList.remove('active');
});


