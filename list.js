function func(){
 let a=(document.getElementById("input1").value);
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
edit.onclick=function(){
     

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
