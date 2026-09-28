const form=document.querySelector('#form'), list=document.querySelector('#list');
let applications=JSON.parse(localStorage.getItem('applications')||'[]');
function render(){list.innerHTML=applications.map((a,i)=>`<tr><td>${a.company}</td><td>${a.role}</td><td>${a.status}</td><td><button onclick="removeApp(${i})">Delete</button></td></tr>`).join('');}
function removeApp(i){applications.splice(i,1);localStorage.setItem('applications',JSON.stringify(applications));render();}
form.addEventListener('submit',e=>{e.preventDefault();applications.push({company:company.value,role:role.value,status:status.value});localStorage.setItem('applications',JSON.stringify(applications));form.reset();render();});render();