function registerUser() {
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var addressP = document.getElementById("addressP").value;
	var emailId = document.getElementById("emailId").value;
	var phoneNumber = document.getElementById("phone").value;
	var password = document.getElementById("password").value;
	var rePassword = document.getElementById("repassword").value;
	if ((validateName(firstName) && validateAddress(addressP) && validateEmail(emailId) && validatePhoneNumber(phoneNumber) && validatePassword(password, rePassword))) {
		document.getElementById('register').disabled = false;
	}
}

function submitUser() {
	//Appending a new child if all validations pass
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var emailId = document.getElementById("emailId").value;
	var last = document.getElementById("users");
	var span = document.createElement('span');
	var linkText = document.createTextNode(firstName + " " + lastName);
	span.appendChild(linkText);
	span.title = emailId;
	span.className = "userClass"
	last.appendChild(span);
}


function validateName(name) {
	var nm = new String(name);
	return isFull(nm.trim());
}

function validateAddress(address) {
	var adr = new String(address);
	return isFull(adr.trim());
}

function validateEmail(emailId) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
		return true;
	}
	//document.getElementById('emailId').focus();
	return false;
}

function validatePhoneNumber(phone) {
	var phoneno = /^\d{10}$/;
	if (phone.match(phoneno)) {
		return true;
	}
	//document.getElementById('phone').focus();
	return false;
}

function validatePassword(password, rePassword) {
	if (password.length < 8) {
		//	document.getElementById('password').focus();
		return false;
	}
	if (/\s/.test(password)) {
		//document.getElementById('password').focus();
		return false;
	}

	var reg = /(?=.*\d)(?=.*[A-Z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&].{8,}/;
	if (!password.match(reg)) {
		//document.getElementById('password').focus();
		return false;
	}
	if (password !== rePassword) {
		//	document.getElementById('repassword').focus();
		return false;
	}
	return true;
}

function isFull(text) {
	if (text === "" || text.length == 0) {
		return false;
	}
	return true;
}

function checkAddress(checkbox) {
	if (document.getElementById("copy").checked) {
		var addressC = document.getElementById("addressC");
		addressC.value = document.getElementById("addressP").value;
		document.getElementById('addressC').readOnly = true;
	} else {
		document.getElementById('addressC').readOnly = false;
	}
}

function resetFields() {
	document.getElementById("copy").checked = false;
	document.getElementById("firstName").value = "";
	document.getElementById("lastName").value = "";
	document.getElementById("addressP").value = "";
	document.getElementById("addressC").value = "";
	document.getElementById("emailId").value = "";
	document.getElementById("phone").value = "";
	document.getElementById("password").value = "";
	document.getElementById("repassword").value = "";
}

function showDropdown() {

}

// var handleDropdownClick = function() {
// 	document.getElementById('AccountDropdown').classList.toggle('show');
// }
// window.onclick = function(event) {
// 	if (!event.target.matches('.dropdown-links')) {

// 		var dropdowns = document.getElementsByClassName('dropdwn-content');
// 		var i;
// 		for (i = 0; i < dropdowns.length; i++) {
// 			var openDropdown = dropdowns[i];
// 			if (openDropdown.classList.contains('show')) {
// 				openDropdown.classList.remove('show');
// 			}
// 		}
// 	}
// }