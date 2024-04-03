function init(){
  var buttonInput = document.getElementById('AlertMebutton');
  function displayText(){
    var textinput = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textinput.value;
    alert("Osaze Osawe: " + textinput.value);
  }
  button.addEventListener('click', displayText);
}  
window.addEventListener('load', init);
