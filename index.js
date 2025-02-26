let button = document.getElementById('button');
let form = document.getElementById('form');
let message = document.getElementById('message');
let link = document.getElementById('link');

const secretNumber = Math.floor(Math.random() * 100);
let attempts = 10 ;

button.onclick = function (){
    const input = document.getElementById("input");
    if (input.value != ""){

if(input.value < secretNumber){
    message.innerText = 'Le nombre est plus grand que ' + input.value + '';
    message.style.color = "#999"

}else if (input.value > secretNumber){
    message.innerText = 'Le nombre est plus petit  que ' + input.value + '';
    message.style.color = "#999"
}
    if(attempts == 0){
        message.innerText = 'Vous avez perdu, il fallait trouvé ' + secretNumber + '!';
        message.style.color = "red"
        form.style.display = 'none';
        link.style.display = 'flex';
    }
    attempts--;
    if(input.value == secretNumber){
        message.innerText = 'Bravo, vous avez trouvé le nombre qui est ' + secretNumber + '!';
        message.style.color = "green"
        form.style.display = 'none';
        link.style.display = 'flex';
    }
}else{
        message.innerText = "Le champ est vide !";
        message.style.color = "red";
    }
}