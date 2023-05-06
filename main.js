const selectElementFloor = document.getElementById("floor");

for (let i = 3; i <= 27; i++) {
  const optionElement = document.createElement("option");
  optionElement.value = i;
  optionElement.textContent = i;
  selectElementFloor.appendChild(optionElement);
}

const selectElementRoom = document.getElementById("room");

for (let i = 1; i <= 10; i++) {
  const optionElement2 = document.createElement("option2");
  optionElement2.value = i;
  optionElement2.textContent = i;
  selectElementRoom.appendChild(optionElement2);
}

document.getElementById("clear").onclick = function(e) {
    console.log('clear');
    document.getElementById("comment").value = "";
    document.getElementById("time-start").value = "";
    document.getElementById("time-end").value = "";
    document.getElementById("date").value = "";
    document.getElementById("room").value = "Выберите комнату:";
    document.getElementById("floor").value = "Выберите этаж:";
    document.getElementById("tower").value = "Выберите башню:";
  }


document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault(); // отмена поведения формы по умолчанию
  var form = event.target;
  if ((form.querySelector('#tower').value) == "Выберите башню:"  ||  (form.querySelector('#floor').value) == "Выберите этаж:" ||
   (form.querySelector('#room').value) == "Выберите комнату:") {
    alert('Поверьте, все ли данные введены')
  }
  else{
    var data = {
        tower: form.querySelector('#tower').value,
        floor: form.querySelector('#floor').value,
        room: form.querySelector('#room').value,
        date: form.querySelector('#date').value,
        timeStart: form.querySelector('#time-start').value,
        timeEnd: form.querySelector('#time-end').value,
        comment: form.querySelector('#comment').value
      };
      console.log(JSON.stringify(data)); // вывод объекта в консоль в виде JSON
  }
});