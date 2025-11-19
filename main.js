const workers = [
  { id: 1, name: 'Alice Dupont', role: 'Manager', city: 'Paris', salary: 60000, active: true, hireDate: '2023-01-15' },
  { id: 2, name: 'Bob Martin', role: 'Developer', city: 'Lyon', salary: 55000, active: true, hireDate: '2022-06-10' },
  { id: 3, name: 'Claire Bernard', role: 'Designer', city: 'Paris', salary: 48000, active: false, hireDate: '2024-02-01' },
  { id: 4, name: 'David Leroy', role: 'Developer', city: 'Lyon', salary: 52000, active: true, hireDate: '2021-08-20' },
  { id: 5, name: 'Eve Dubois', role: 'Manager', city: 'Marseille', salary: 62000, active: true, hireDate: '2020-03-05' },
  
]
// //chalenge 1 =======================================================================================================
// const worker = workers.length;
const body = document.querySelector("body");
// body.innerHTML=`<p> number of workers is ${worker}</p>`;
// // chalenge 2 =======================================================================================================
// const ul = document.createElement("ul");
// body.appendChild(ul);
// for (work of workers){
// ul.innerHTML=`<li>${work.name}`;
// }
// //chalenge 3 =======================================================================================================
// body.innerHTML+=`<p>Name:${workers[2].name } | Role ${workers[2].role}</p>`
// //chalenge 4 =======================================================================================================
// workers.forEach(work=>{
//     if(work.active== true)
//     {
//         body.innerHTML+=`<p>${work.name}:active</p>`
//     }
//     else{
//         body.innerHTML+=`<p >${work.name}:<span style="color:red">inactive </span></p>`
//     }
// })
// //chalenge 5 =======================================================================================================
// for(let i = 0;i<workers.length;i++)
// {
//     body.innerHTML+=`<button>${workers[i].name}</button>`
// }
// const button= document.querySelectorAll("button");
// button.forEach((btn,index)=>{
//     btn.addEventListener("click", ()=>{
//         alert(`${workers[index].role}`)
//     })
// })
//chalenge 6 =======================================================================================================
// const input = document.createElement("input");
// body.appendChild(input);
// const para = document.createElement("p");
// body.appendChild(para);
// input.addEventListener("input", (e)=>{
//     para.textContent=`${input.value}`
// })
// chalenge 7 =======================================================================================================
// const divs =  document.querySelectorAll(".worker");
// divs.forEach((div ,index)=>{
//     div.textContent=`${workers[index].name}`
//     div.addEventListener("click", ()=>{
//         divs.forEach(ele=>ele.className = "worker");
//         div.className = "addclass";
//     })
    
// })
// chalenge 8 =======================================================================================================
// const button = document.createElement("button");
// body.appendChild(button);
// const div = document.createElement("div")
// body.appendChild(div);
// div.style.width="100px";
// div.style.height="100px";
// div.style.marginTop="20px";
// div.style.border="1px black solid"
// button.style.width="40px";
// button.style.height="30px";
// button.textContent=`click`
// button.addEventListener("click", ()=>{
// div.classList.toggle("addclass2");
// })
//chalenge 9 =======================================================================================================
// const arr = workers.filter(worker=>worker.city =="Paris")
// console.log(arr)
// arr.forEach((ar,index)=>{
//     body.innerHTML+=`<p>${ar.name}</p>`
// })
// chalenge 10 =======================================================================================================
// const para = document.createElement("p");
// body.appendChild(para);
// const button = document.createElement("button");
// body.appendChild(button);
// para.textContent="Title will update after 2 seconds...";
// button.textContent="trigger update";
// button.addEventListener("click", ()=>{
//     para.textContent="Title will update...";
//     setTimeout(() => {
//         para.textContent="✓ Personnel List Updated!"
//     }, 2000);
// })
//chalenge 11 =======================================================================================================
// const arrWithNameSalary = workers.map((worker)=>{
//     let objet = {...{name:worker.name,salary:worker.salary}};
//     return objet;const keys = Object.keys(workers[0])
// console.log(keys);
// });
// arrWithNameSalary.forEach((woker,index)=>{
//     body.innerHTML+=`<p>${woker.name} => ${woker.salary}</p>`
// })
//chalenge 12 =======================================================================================================
// let newArray = workers.filter(worker=>worker.salary>50000)
// console.log(newArray)
// newArray.forEach(element => {
//     body.innerHTML+=`<p>${element.name}=>${element.salary}</p>`
// });

//chalenge 13 =======================================================================================================
// workers.forEach(Element=>{
//     body.innerHTML+=`<div style ="color:red" class="div" >${Element.name}</div>`
// })const keys = Object.keys(workers[0])
// console.log(keys);
// const divs = document.querySelectorAll(".div")
// divs.forEach((div,index)=>{
//     div.addEventListener("click", (e)=>{
//         const indexof=workers.indexOf(workers[index])
//     alert(`${workers[index].name} is at index ${indexof}`)
//     })
// })
// chalenge 14 =======================================================================================================
// const sumSalary = workers.reduce((sum, worker) => sum + worker.salary,0);
// console.log(sumSalary);
//chalenge 15 =======================================================================================================
// const button = document.createElement("button");
// body.appendChild(button);
// button.textContent=`click`;
// button.addEventListener("click", (e)=>{
//     const sorting = workers.sort((a,b)=>a.name.localeCompare(b.name))
// sorting.forEach((sort,index)=>body.innerHTML+=`</p>${sort.name}</p>`)
// })
// chalenge 16 =======================================================================================================
// const keys = Object.keys(workers[0])
// console.log(keys);
//another method to get all the workers;
// workers.forEach((worker,index)=>{
//  let key = Object.keys(worker);
//  console.log(key)
// })

//chalenge 17 =======================================================================================================

// const container = document.getElementById("table-container");

// workers.forEach((worker) => {
//   const keys = Object.keys(worker);
//   const values = Object.values(worker);

//   let tableHTML = `<table border="1" style="margin-bottom: 20px;">`;

//   keys.forEach((key, index) => {
//     container.innerHTML += `
//     <table>
//       <tr>
//         <td>${key}:</td>
//         <td>${values[index]}</td>
//       </tr>
//       </table>
//       `;
//   });

// });
//chalenge 18 =======================================================================================================

// const form = document.getElementById("worker-inputs");
// const [inputId,inputNmae,inputRole,inputCity,inputSalary,inputAction,inputDate]=form.children;
// const submit = document.getElementById("submit");
// submit.addEventListener("click", (e)=>{
//   e.preventDefault()
// const newObject ={
//   id:parseInt(inputId.value),
//   name:inputNmae.value,
//   role:inputRole.value,
//   city:inputCity.value,
//   salary:parseInt(inputSalary.value),
//   action:inputAction.value,
//   Date:inputDate.value,
// }
// workers.push(newObject);
// console.log(workers);
// let increaseSalary= workers.map((Worker)=>Worker.salary+Worker.salary*0.1);
// console.log(increaseSalary)

// })
//chalenge  19 =======================================================================================================
// workers.forEach((worker,index)=>{
//   body.innerHTML+=`
//   <div class="d" value="${index}">${worker.name}
//   <button class="delete">Delete</button>
//   </div>
//   `
// })
// const del = document.querySelectorAll(".delete");
// del.forEach((btn,index)=>{
//   btn.addEventListener("click", (e)=>{
//     workers.splice(index)
//     console.log(workers)
//   })
// })

// console.log(workers);
//chalenge 20 =======================================================================================================
// for (let i = 0; i < workers.length; i++) {
//   const newArra =[...workers[i].name];
// console.log(newArra)
  
// }
// chalenge 21 =======================================================================================================

// let increaseSalary= workers.map((Worker)=>Worker.salary+Worker.salary*0.1);
// console.log(increaseSalary)
// chalenge 22 =======================================================================================================
// const Paris=[];
// workers.reduce((sum,nextEl)=>(nextEl.city==="Paris")?Paris.push(nextEl):sum,0);
// console.log(Paris)
// const lyon=[];
// workers.reduce((sum,nextEl)=>(nextEl.city==="Lyon")?lyon.push(nextEl):sum,0);
// console.log(lyon)
// const Marseille=[];
// workers.reduce((sum,nextEl)=>(nextEl.city==="Marseille")?Marseille.push(nextEl):sum,0);
// console.log(Marseille)
// chalenge 23 =======================================================================================================
// const msg = document.getElementById("workers");
// msg.style.backgroundColor="orange"
// workers.some(Worker=>Worker.active?msg.textContent+=" something warning":"nothing");
// chalenge 24 =======================================================================================================
// workers.every(worker=>worker.salary>30000?msg.textContent="all workers earn more than $30000":"some one earn <30000")
// chalenge 25 =======================================================================================================
// let clone = structuredClone(workers);
//  clone.map(worker=>worker.salary+=15000);
// console.log(clone)
// console.log(workers)
// chalenge 26 =======================================================================================================
// function search(){
// let val = document.querySelector(".input").value;

// console.log(val)
// let result =document.querySelector(".search")
// result.textContent = "";
// // workers.filter(worker=>worker.name===val?result.textContent=`${worker.name}`:result.textContent="NO worker with this name");
// const foundWorker = workers.filter(worker=> worker.name == val);
// console.log(foundWorker)
// if (foundWorker) {
//   foundWorker.forEach(Element => {
//       result.textContent += `${Element.name}`;
//   });
// } 
// else {
//   result.textContent = "No matching worker found.";
// }
// }search();
// chalenge 27 =======================================================================================================
