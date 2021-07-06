// BASIC VALIDATIONS AND GREETING
let greet = document.getElementById('greeting')
let T_date = new Date();
if(T_date.getHours() >= 0 && T_date.getHours() <= 11){
  greet.innerHTML =  `Oh! It's a bright morning`
}else if(T_date.getHours() >= 12 && T_date.getHours() <= 4){
  greet.innerHTML =  `What a sunny afternoon`
}else {
  greet.innerHTML = `Hey, hope you've done all the tasks`
}




let variables = {
  greetings: document.getElementById('greetings'),
  start: document.getElementById('todo-date-start'),
  task: document.getElementById('todo-item'),
  complete: document.getElementById('todo-date-end'),
  addBtn: document.getElementById('add-todo'),
  error: document.getElementById('null-value')
}

 function addTodo(){
   let schedule = [];
   let schedule2 = window.localStorage.getItem('mySchedule')
   if(variables.start.value && variables.task.value && variables.complete.value){
     if(schedule2){
       let proto_schedule = JSON.parse(schedule2);
       let task = {
         start : variables.start.value,
         task : variables.task.value,
         end : variables.complete.value
        };
        proto_schedule.push(task);
        window.localStorage.setItem('mySchedule', JSON.stringify(proto_schedule))
      }else {
        let task = {
              start : variables.start.value,
              task : variables.task.value,
              end : variables.complete.value
            };
       schedule.push(task);
          window.localStorage.setItem('mySchedule', JSON.stringify(schedule));
          }
        } else {
        variables.error.innerHTML = 'Fill in the appropriate values to plan your day'
        return false;
      }
};



//SCHEDULE SECTION 
schedule_variables = {
  table: document.getElementById('table'),
  t_body: document.getElementById('tbody'),
 }

let g_schedule = JSON.parse(window.localStorage.getItem('mySchedule'));
if(window.localStorage.getItem('mySchedule')){
  let schedule_table = g_schedule.map(g => {
   return `<input type="checkbox" id= "key"><tr><td>${g.start}</td><td>${g.task}</td><td>${g.end}</td></tr>`
  }).join('');
schedule_variables.t_body.innerHTML = schedule_table
};



































// for(i = 0; i = g_schedule.length; i++){
//   let object = g_schedule[i];
//   object.start = schedule_variables.t_start.innerHTML;
//   object.task = schedule_variables.t_task.innerHTML;
//   object.end = schedule_variables.t_end.innerHTML;
//  }