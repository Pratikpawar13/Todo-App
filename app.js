let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input"); 

// for adding a new task also delete button
btn.addEventListener("click",function(){
    let item =document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");

    if(inp.value === "") {
        alert("Please enter a task");
        return;
    }
    else {
        console.log("Task added: " + inp.value);
        ul.appendChild(item);
        item.appendChild(delBtn);
    }
    inp.value="";
});

ul.addEventListener("click",function (event) {
    if(event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Task deleted");
    }
});

/* for deleting the task which are already in index.html
let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}*/