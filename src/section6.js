function fibo() {
  const length = document.getElementById('fibo_lenght').value;

  if (length <= 0 || length > 100) {
    return; // do nothing
  }

  const numbers = [];

  while (numbers.length < length) {
    for (let i = 0; i < length; i++) {
      if (i === 0 || i === 1) {
        // first and second number will be 1
        numbers.push(1);
      } else {
        // after third number will be sum of number before one and before one
        numbers.push(numbers[i - 1] + numbers[i - 2]);
      }
    }
  }

  if (numbers.length > 0) {
    const wrapper = document.getElementById('fibo_result');
    numbers.forEach(number => {
      wrapper.append(makeBadge(number));
    })
  }
}

function makeBadge(number) {
  // `<h6><span class="badge badge-pill badge-info">${number}</span></h6>`
  const badge = document.createElement('h5');
  badge.className = 'badge_inline'
  const span = document.createElement('span');
  span.className = 'badge badge-pill badge-info';
  span.textContent = number;
  badge.appendChild(span)
  return badge;
}