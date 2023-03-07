var buttons = document.getElementsByTagName('button');
var panels = document.getElementsByClassName('panel');

var value = 0;

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener('click', function() {

    var target = this.getAttribute('data-next');
    var dvalue = this.getAttribute('value-change');
    var bid_value = parseInt(document.getElementById('bid').value);

    value += parseInt(dvalue);
    console.log(value);
    document.getElementById('value1').innerHTML = value;
    document.getElementById('value2').innerHTML = value;
    document.getElementById('value3').innerHTML = value;
    document.getElementById('bid_value').innerHTML = bid_value;

    for (var j = 0; j < panels.length; j++) {
      var panel = panels[j];
      if (panel.id == target) {
        panel.classList.add('show');
      } else if (panel.classList.contains('show')) {
        panel.classList.remove('show');
      }
    }

  });
}