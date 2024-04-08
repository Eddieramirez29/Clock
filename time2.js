// Obtener la fecha actual
let fecha = new Date();

// Obtener el día de la semana (0 para Domingo, 1 para Lunes, ..., 6 para Sábado)
let diaSemana = fecha.getDay();

// Array con los nombres de los días de la semana

let nombresDias = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let nombreDia = nombresDias[diaSemana];

// Obtener el número de la semana
let numSemana = getWeekNumber(fecha);

// Obtener el número del día del año
let numDiaAnio = getDayOfYear(fecha);

// Función para obtener el número de la semana
function getWeekNumber(date) {
  let d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  let yearStart = new Date(d.getFullYear(), 0, 1);
  let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return weekNo;
}

// Función para obtener el número del día del año
function getDayOfYear(date) {
  let start = new Date(date.getFullYear(), 0, 0);
  let diff = date - start;
  let oneDay = 1000 * 60 * 60 * 24;
  let day = Math.floor(diff / oneDay);
  return day;
}


document.getElementById('day-of').textContent = numDiaAnio;
document.getElementById('day-of-the').textContent = nombreDia;
document.getElementById('week').textContent = numSemana;


