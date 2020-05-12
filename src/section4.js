function sumSeq() {
  const initialNum = parseInt(document.getElementById('initial_num').value)
  const lastNum = parseInt(document.getElementById('last_num').value)

  const length = (lastNum - initialNum + 1);
  const sum = length * ((initialNum + lastNum) / 2);

  document.getElementById('seq_res').style = 'display: block;'
  if (!sum) {
    document.getElementById('seq_sum').textContent = 'Please input propper numbers!';
    document.getElementById('seq_sum').className = 'text-warning';
  } else {
    document.getElementById('seq_sum').textContent = sum;
    document.getElementById('seq_sum').className = 'text-info';
  }
}