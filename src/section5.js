function checkPrime() {
  const number = parseInt(document.getElementById('target_num').value);


  if (!number) {
    document.getElementById('prime_error').style = 'display: block;'
    return;
  } else {
    document.getElementById('prime_error').style = 'display: none;'
  }

  document.getElementById('prime_res').style = 'display: block;'
  document.getElementById('prime_target').textContent = number;


  if (isPrime(number)) {
    document.getElementById('prime_result').textContent = 'Prime';
  } else {
    document.getElementById('prime_result').textContent = 'Not prime';
  }
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}