// let done = document.getElementById('done');
// let not = document.getElementById('not');

// if user clicks start, the start button will dissappear
//while the other two buttons will appear
function showButtons(){
    document.getElementById('start').style.display='none';
    document.getElementById('done').style.display='inline-block';
    document.getElementById('not').style.display='inline-block';
    changeActivity();
}

var act;
//shows the activity of the middle container
function changeActivity(){
    fetch('https://www.boredapi.com/api/activity/')
    .then(
        function (response) {
            console.log(response);

            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

            response.json().then(function(data) {
                act = data.activity;
                document.getElementById('act-text').innerHTML = act;
                }
            );
        }
    )
    .catch(function(err){
        console.log(err+'404');
    }
    );
}

//if user pressed any of the two buttons
function clickedButton(value){
                    
    //if user click 'Done that', adds to the 'already did that' container
    if(value=='1'){
        addToDos(act);
        changeActivity();
    }
    //if user click 'Haven't yet', adds to the 'Haven't done that' container
    if(value=='2'){
        addToDonts(act);
        changeActivity();
    }
}

//adds to the 'already did that' container
function addToDos(data){

    const parentDiv=document.getElementById('done-container');
    const newDiv=document.createElement('div');
    parentDiv.appendChild(newDiv);
    //CLASS NAME for added box if user press buttons
    newDiv.classList.add('newBox');


    const newBox=document.createElement('h5');
    newBox.innerHTML=data;
    newDiv.appendChild(newBox);
}

//adds to the 'Haven't done that' container
function addToDonts(data){

    const parentDiv=document.getElementById('not-container');
    const newDiv=document.createElement('div');
    parentDiv.appendChild(newDiv);
    //CLASS NAME for added box if user press buttons
    newDiv.classList.add('newBox');


    const newBox=document.createElement('h5');
    newBox.innerHTML=data;
    newDiv.appendChild(newBox);
}