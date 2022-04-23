var input = document.getElementById('txt');
document.querySelector('#button').onclick = function(){
    
    if(document.querySelector('#todo input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#todo input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        input.value = '';
        input.addEventListener('keypress', function(event){
            if(input.value.length > 0 && event.keyCode === 13){
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(input.value)); 
            tasks.appendChild(li); 
            input.value = ''; 
            }
            
        })
 
    }
}
