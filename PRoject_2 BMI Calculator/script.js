const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const Height= parseInt(document.querySelector('#Height').value);
  const Weight = parseInt(document.querySelector('#Weight').value);
  const results = document.querySelector('.results');

  if (Height === '' || Height < 0 || isNaN(Height)) {
    results.innerHTML = `Please give a valid height ${Height}`;
  } else if (Weight === '' || Weight < 0 || isNaN(Weight)) {
    results.innerHTML = `Please give a valid weight ${Weight}`;
  } else {
    const bmi = (Weight / ((Height * Height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (Weight < 18.6) {
       results.innerHTML(`${bmi}`)
        
        
    }
  }
});

