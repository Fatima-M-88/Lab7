//script.js
document.getElementById('colorForm').addEventListener('submit', function(event){
    event.preventDefault();
    const color = document.getElementById('colorInput').value;
    document.getElementById('headerText').style.color = color;

})