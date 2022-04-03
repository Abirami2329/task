var registerData = {};
let selectedRow = null
function validateName() {
    const letters = /^[A-Za-z]+$/;
    if (document.getElementById('name').value !== "" && document.getElementById('name').value.match(letters)) {
           registerData["name"] = document.getElementById('name').value;
           return true;
    } else {
      alert("Please Enter Valid Name");
      return false;
    }
}
function validateDob() {
  if (document.getElementById('dob').value !== "") {
   registerData["dob"] = document.getElementById('dob').value;
    return true;
  } else {
    alert("Please select Date of Birth");
    return false;
  }
}
function validateGender() {
  if(document. getElementById('male'). checked) {
		registerData["gender"]=document. getElementById('male'). value;
        return true;
	} else if (document. getElementById('female'). checked) {
		registerData["gender"]=document. getElementById('female'). value;
      return true;
	} else {
      alert("Please Select Gender");
      return false;
    }
}
function validatePhoneNumber() {
  const validPhone = /^\d{10}$/;
  if (document.getElementById('phonenumber').value !== "" && validPhone.test(document.getElementById("phonenumber").value)) {
    registerData["phonenumber"]  = document.getElementById('phonenumber').value;
    return true;
  } else {
    alert("Please Enter Valid PhoneNumber");
    return false;
  }
}
function validateEmail() {
   const validMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (document.getElementById('email').value !== "" && validMail.test(document.getElementById("email").value)) {
     registerData["email"] = document.getElementById('email').value; 
    return true;
  } else {
    alert("Please Enter Valid Email");
    return false;
  }
}
function validateHobby() {
   registerData.hobby = [];
   if(document.getElementById('valueOne').checked) {
		registerData["hobby"].push(document.getElementById('valueOne').value);
       		return true;
	}else if (document.getElementById('valueTwo').checked) {
		registerData["hobby"].push(document.getElementById('valueTwo').value);
       		return true;
	}else if (document.getElementById('valueThree').checked) {
		registerData["hobby"].push(document.getElementById('valueThree').value);
        return true;
	} else {
      alert("Please Select Hobby");
      return false;
    }
}
function validateAddress() {
  if(document.getElementById('address').value !== "") {
     	registerData["address"]  = document.getElementById('address').value; 
        return true;
     } else {
       alert("Please Enter Address");
       return false;
     }
}

function insertNewRecord(data) {
    var table = document.getElementById("registrationList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.dob;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phonenumber;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;
    let cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.hobby;
    let cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.address;
    let cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                       <button onClick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("dob").value = "";
    if(document. getElementById('male'). checked) {
		document. getElementById('male'). checked = false;
    }
    else if (document. getElementById("female"). checked) {
	document. getElementById("female"). checked = false;
    }
    if (document. getElementById("valueOne"). checked) {
	document.getElementById("valueOne").checked = false;
    }
    if (document. getElementById("valueTwo"). checked) {
	document.getElementById("valueTwo").checked = false;
    }
    if (document. getElementById("valueThree"). checked) {
	document.getElementById("valueThree").checked = false;
    }
    document.getElementById("phonenumber").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[1].innerHTML;
    document.getElementById("phonenumber").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
    document.getElementById("address").value = selectedRow.cells[6].innerHTML;
     if(selectedRow.cells[2].innerHTML === "male") {
		document. getElementById('male'). checked = true;
    }
    else if (selectedRow.cells[2].innerHTML === "female") {
	document. getElementById("female"). checked = true;
    }
    let hobby = selectedRow.cells[5].innerHTML.split(",");
    if (hobby[0] === "Drawing") {
	document.getElementById("valueOne").checked =true;
    }
    if (hobby[1] === "Dancing") {
	document.getElementById("valueTwo").checked = true;
    }
    if (hobby[2] === "Singing") {
	document.getElementById("valueThree").checked = true;
    }
}
function updateRecord() {
    selectedRow.cells[0].innerHTML = registerData.name;
    selectedRow.cells[1].innerHTML = registerData.dob;
    selectedRow.cells[2].innerHTML = registerData.gender;
    selectedRow.cells[3].innerHTML = registerData.phonenumber;
    selectedRow.cells[4].innerHTML = registerData.email;
    selectedRow.cells[5].innerHTML = registerData.hobby;
    selectedRow.cells[6].innerHTML = registerData.address;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        let row = td.parentElement.parentElement;
        document.getElementById("registrationList").deleteRow(row.rowIndex);
        resetForm();
    }
}  
function onFormSubmit() {
  if (validateName() && validateDob() && validateGender() && validatePhoneNumber() && validateEmail() && validateHobby() && validateAddress()) {
        if (selectedRow == null) {
            insertNewRecord(registerData);
	} else {
            updateRecord(registerData);
	}
        resetForm();
  }
}
