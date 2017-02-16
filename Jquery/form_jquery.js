var isValidName = false,
	isValidAddressP = false,
	isValidAddressC = false,
	isValidEmail = false,
	isValidPhone = false,
	isValidPassword = false,
	isValidRePassword = false;

function validateUser() {
	if ((isValidName && isValidAddressP && isValidAddressC && isValidEmail && isValidPhone && isValidPassword && isValidRePassword)) {
		$('#register').prop('disabled', false);

	} else {
		$('#register').prop('disabled', true);
	}
}

$('#register').click(function() {
	$('#users').append('<span class="userClass" title="' + $('#emailId').val() + '"> ' + $('#firstName').val() + ' ' +
		$('#lastName').val() + '</span>')
});
$('#firstName').blur(function() {
	validateName($('#firstName').val());
});
$('#addressP').blur(function() {
	validateAddressP($('#addressP').val());
});
$('#cop').click(function() {
	if (this.checked) {
		$('#addressC').val($('#addressP').val());
		$('#addressC').prop('readOnly', true);
		isValidAddressC = isValidAddressP;
	} else {
		document.getElementById('addressC').readOnly = false;
	}
});
$('#addressC').blur(function() {
	validateAddressC($(this).val());
});
$('#emailId').blur(function() {
	validateEmail($(this).val());
});
$('#phone').blur(function() {
	validatePhoneNumber($(this).val());
});
$('#password').blur(function() {
	validatePassword($(this).val());
});
$('#repassword').blur(function() {
	validateRePassword($('#password').val(), $(this).val());
});
$('#reset').click(function() {
	$("#cop").prop('checked', false);
	$("#firstName").val("");
	$("#lastName").val("");
	$("#addressP").val("");
	$("#addressC").val("");
	$("#emailId").val("");
	$("#phone").val("");
	$("#password").val("");
	$("#repassword").val("");
});

function validateName(name) {
	var nm = new String(name);
	isValidName = isFull(nm.trim());
	if (!isValidName) {
		alert("First name field");
		return false;
	}
	validateUser();

}

function validateAddressP(address) {
	var adr = new String(address);
	isValidAddressP = isFull(adr.trim());
	if (!isValidAddressP) {
		alert("AddressP field");
		return false;
	}
	validateUser();
}

function validateAddressC(address) {
	var adr = new String(address);
	isValidAddressC = isFull(adr.trim());
	if (!isValidAddressC) {
		alert("AddressC field");
		return false;
	}
	validateUser();
}

function validateEmail(emailId) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)) {
		isValidEmail = true;
	}
	//document.getElementById('emailId').focus();
	else {
		alert("Email id");
		return false;
	}
	validateUser();
}

function validatePhoneNumber(phone) {
	var phoneno = /^\d{10}$/;
	if (phone.match(phoneno)) {
		isValidPhone = true;
	} else {
		alert("Phone number");
		return false;
	}
	//document.getElementById('phone').focus();
	validateUser();
}

function validatePassword(password) {
	var reg = /(?=.*\d)(?=.*[A-Z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&].{8,}/;
	if (password.length < 8) {
		//	document.getElementById('password').focus();
		isValidPassword = false;
		alert("Password length");
		return false;
	} else if (/\s/.test(password)) {
		//document.getElementById('password').focus();
		isValidPassword = false;
		alert("Password has space");
		return false;
	} else if (!password.match(reg)) {
		//document.getElementById('password').focus();
		isValidPassword = false;
		alert("Invalid characters");
		return false;
	} else {
		isValidPassword = true;
		validateUser();
	}
}

function validateRePassword(password, repassword) {
	if (password !== repassword) {
		//	document.getElementById('repassword').focus();
		isValidRePassword = false;
		alert("Password and Re-Password don not match");
		return false;
	} else {
		isValidRePassword = true;
	}
	validateUser();
}

function isFull(text) {
	if (text === "" || text.length == 0) {
		return false;
	}
	return true;
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