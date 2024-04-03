function init(){
  var buttonInput = document.getElementById('entrybutton');
  function displayText(){
    var textinput = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textinput.value;
    alert("Osaze Osawe: " + textinput.value);
  }
  buttonInput.addEventListener('click', displayText);
}  
window.addEventListener('load', init);
