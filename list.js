let currentTask=null;
function func(){
 let a=(document.getElementById("input1").value);
 
 if (currentTask) {      
    currentTask.firstChild.textContent = a;
    currentTask = null;
    document.getElementById("input1").value = "";
    return;
}
 let taskli=document.createElement("li");
 let delt=document.createElement("button");
 let mark=document.createElement("button");
 let edit=document.createElement("button");
edit.innerText="edit";
 delt.innerText="delete"
 taskli.innerText=a;
mark.innerText="Mark as Done"
delt.onclick=function(){
    taskli.remove();
}
mark.onclick=function(){
taskli.classList.toggle("mark");
}
edit.onclick = function () {
     document.getElementById("input1").value = taskli.firstChild.textContent;
    currentTask = taskli;
}
 if(a){
document.getElementById("list").appendChild(taskli);
taskli.appendChild(delt);
taskli.appendChild(mark);
taskli.appendChild(edit);
document.getElementById("input1").value="";
 }
 else{
    alert("please enter a text")
    }
   
 }

