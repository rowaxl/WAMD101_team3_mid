function calcDay() {
  const birthYear = parseInt(document.getElementById('birth_year').value);

  const startDate = new Date();
  startDate.setFullYear(birthYear);
  const endDate = new Date();

  const days = Math.floor((endDate - startDate) / (3600 * 1000 * 24));

  const livedDays = document.getElementById('lived_days');
  livedDays.textContent = days;
}