// define variables

let nowTasks = [];
let laterTasks = [];
let doneTasks = [];
let task;


//give value to task and priority variables based on user input

function addTask() {
  
  
//if the input is not empty then run the function
  
  if(document.getElementsByTagName('input')[0].value !== ""){

    
    let task = document.getElementById("inputTask").value;  
    let priority = document.getElementById("inputPriority").value;
  
  
  //place the value of task into the corresponding array
    
    switch (priority) {
    
        case "Do it now.":
          nowTasks.push(task);
          addNow();
        
        break; 
      
        case "Do it later.":
          laterTasks.push(task);
          addLater();
        
        break; 
      
        case "Done it.":
          doneTasks.push(task);
          addDone();
        
        break;
        
        default:
    }
  }
  
  else {
    //nothing will happen if the input remains empty
  }
}


//define variables

let i;
let text;
let len;


//adds the html required to display the new task item within it's requested column

function addNow(){
  for (i=0, len=nowTasks.length, text=""; i<len; i++) {
    text+="<div><p class='task rounded p-1 mb-2'>" + nowTasks[i] + "<img onclick='remove(this)' class='mt-1 float-right' src='images/trash.png' alt='trash bin'></p></div>";
    document.getElementById('now').innerHTML=text;
    document.getElementsByTagName('input')[0].value = "";
  }
}

function addLater(){
  for (i=0, len=laterTasks.length, text=""; i<len; i++) {
    text+="<div><p class='task rounded p-1 mb-2'>" + laterTasks[i] + "<img onclick='remove(this)' class='mt-1 float-right' src='images/trash.png' alt='trash bin'></p></div>";
    document.getElementById('later').innerHTML=text;
    document.getElementsByTagName('input')[0].value = "";
  }
}

function addDone(){
  for (i=0, len=doneTasks.length, text=""; i<len; i++) {
    text+="<div><p class='task rounded p-1 mb-2'>" + doneTasks[i] + "<img onclick='remove(this)' class='mt-1 float-right' src='images/trash.png' alt='trash bin'></p></div>";
    document.getElementById('done').innerHTML=text;
    document.getElementsByTagName('input')[0].value = "";
  }
}

//deletes the selected task from the list

function remove(el) {
  var element = el;
  element.parentNode.remove();
}
