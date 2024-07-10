console.log('Linked');

function processText(){
    let inputText = document.getElementById('inputText').value;

    document.getElementById('lowercase').textContent = inputText.toLowerCase();
    document.getElementById('uppercase').textContent = inputText.toUpperCase();
    document.getElementById('trimData').textContent = inputText.trim();
}