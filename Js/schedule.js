//SCHEDULE SECTION 
let clear_btn = document.getElementById('clear-button');
window.onload = function(){
  if(schedule_variables.t_body.value){
    clear_btn.style.display = 'none';
  } else {
    clear_btn.style.display = 'block';
  }
}
schedule_variables = {
  table: document.getElementById('table'),
  t_body: document.getElementById('tbody'),
 }

//Clear function
function clearData(){
 window.localStorage.removeItem('mySchedule');
 window.location.reload()
}
let g_schedule = JSON.parse(window.localStorage.getItem('mySchedule'));
if(window.localStorage.getItem('mySchedule')){
  let schedule_table = g_schedule.map(g => {
   return `<tr><td><input type="checkbox" id= "key">          ${g.start}</td><td>${g.task}</td><td>${g.end}</td></tr>`
  }).join('');
schedule_variables.t_body.innerHTML = schedule_table
};

