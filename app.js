document.getElementById('player-1').addEventListener('click', function(){
    const player = document.getElementById('name-1');
    const playerName = player.innerText;
    
    const playerAdd = document.getElementById('player-add');
    const li = document.createElement('li');
    li.innerText = playerName;

    playerAdd.appendChild(li);

})

document.getElementById('player-2').addEventListener('click', function(){
    const player = document.getElementById('name-2');
    const playerName = player.innerText;
    
    const playerAdd = document.getElementById('player-add');
    const li = document.createElement('li');
    li.innerText = playerName;

    playerAdd.appendChild(li);

})