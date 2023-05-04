function gateValueById (inputId){
    const player = document.getElementById(inputId);
    const playerName = player.innerText;
    return playerName;

}

document.getElementById('player-1').addEventListener('click', function(){
    const player1 = gateValueById('name-1')

    const playerAdd = document.getElementById('player-add');
    const li = document.createElement('li');
    li.innerText = player1;

    playerAdd.appendChild(li);

})

document.getElementById('player-2').addEventListener('click', function(){
    const player2 = gateValueById('name-2')
    
    const playerAdd = document.getElementById('player-add');
    const li = document.createElement('li');
    li.innerText = player2;

    playerAdd.appendChild(li);

})
document.getElementById('player-3').addEventListener('click', function(){
    const player3 = gateValueById('name-3')
    
    const playerAdd = document.getElementById('player-add');
    const li = document.createElement('li');
    li.innerText = player3;

    playerAdd.appendChild(li);

})
document.getElementById('player-4').addEventListener('click', function(){
    const player4 = gateValueById('name-4')
    
    const playerAdd = document.getElementById('player-add');
    const li = document.createElement('li');
    li.innerText = player4;

    playerAdd.appendChild(li);

})
document.getElementById('player-5').addEventListener('click', function(){
    const player5 = gateValueById('name-5')
    
    const playerAdd = document.getElementById('player-add');
    const li = document.createElement('li');
    li.innerText = player5;

    playerAdd.appendChild(li);

})
document.getElementById('player-6').addEventListener('click', function(){
    const player6 = gateValueById('name-6')
    
    const playerAdd = document.getElementById('player-add');
    const li = document.createElement('li');
    li.innerText = player6;

    playerAdd.appendChild(li);

})