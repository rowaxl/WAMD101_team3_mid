function calcDay() {
  const birthYear = parseInt(document.getElementById('birth_year').value);

  const startDate = new Date();
  startDate.setFullYear(birthYear);
  const endDate = new Date();

  const days = Math.floor((endDate - startDate) / (3600 * 1000 * 24));

  if (!days) {
    document.getElementById('year_error').style = 'display: block;';
    document.getElementById('days_res').style = 'display: none;';
    return;
  }

  console.log(days);

  document.getElementById('year_error').style = 'display: none;';
  document.getElementById('days_res').style = 'display: block;';

  const livedDays = document.getElementById('lived_days');
  livedDays.textContent = days;
}