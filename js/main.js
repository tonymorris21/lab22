var addBtn = document.getElementById('addBtn');
var colourArray = [];
var noteIndex = null;
const numbers = /^[0-9]+$/;
displayAllContacts();
addBtn.addEventListener('click',function(e){
  const errorText = document.getElementById('error');
  let errors = [];
  if(!localStorage.getItem('textValues')){
      var textArray =[];
  }else{
      textArray =  JSON.parse(localStorage.getItem('textValues'));
  }
    var valuesToPush = new Array();
    let contactName = document.getElementById('contactName');
    let contactMobile = document.getElementById('contactMobile');
    let contactEmail = document.getElementById('contactEmail');



      if(contactName.value === '' || contactName.value == null){
        errors.push('Name is required');
    }
    if(contactName.value.length >= 20){
      errors.push('Name must be less than or equal to 20 characters ');
  }
      if(contactMobile.value === '' || contactMobile.value == null){
        errors.push('Mobile is required');
      }
      if(contactMobile.value.length < 10){
        errors.push('Mobile must be 10 characters in length ');
    }
    if(!contactMobile.value.match(numbers)){
      errors.push('Mobile must only contain numbers ');
  }
      if(contactEmail.value === ''|| contactEmail.value == null){
        errors.push('Email is required');
      }
      if(contactEmail.value.length > 40){
        errors.push('Email must be less than 40 characters');
      }
if(errors.length > 0){
  errorText.innerText = errors.join(', ')
}
  if(errors.length <1){
    valuesToPush[0] = contactName.value;
    valuesToPush[1] = contactMobile.value;
    valuesToPush[2] = contactEmail.value;

    textArray.push(valuesToPush);
    localStorage.setItem('textValues', JSON.stringify(textArray));
    displayAllContacts()
    console.log(textArray[0][0])
    document.getElementById('error').innerText = '';
      document.getElementById('contactName').value = '';
        document.getElementById('contactMobile').value = '';
          document.getElementById('contactEmail').value = '';
}
});

function searchByMobile() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("summaryTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function displayAllContacts() {
    let textArray =  JSON.parse(localStorage.getItem('textValues'));
    let html = '';
    for (let i = 0; i < textArray.length; i++) {
        html += `
					<tr>
            <td>${textArray[i][0]}</td>
            <td>${textArray[i][1]}</td>
            <td>${textArray[i][2]}</td>
					</tr>
			`;
    }
    let noteElement = document.getElementById('tableBody');
    noteElement.innerHTML = html;

}
