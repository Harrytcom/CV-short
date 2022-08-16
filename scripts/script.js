const searchInput = document.querySelector('#search-input-js');
const searchBtn = document.querySelector('.search-bar__search-btn');
const searchErr = document.querySelector('#search-input__error-js');

function getInputValues(evt) {
  evt.preventDefault();

  if (searchInput.value.includes('!','@','#','$','%','^','&','*','(',')')) {
    console.log('Недопустимый символ');
    searchErr.textContent = 'Недопустимый символ';
  } else {
    console.log('okay');
  }
}
// Search input
// min symbols 4, max symbols 12
searchBtn.addEventListener('click', getInputValues);