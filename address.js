

function billingFunction() {
    if (document.getElementById('same').checked) {
        document.getElementById('FirstName2').value = document.getElementById('FirstName').value;
        document.getElementById('LastName2').value = document.getElementById('LastName').value;
        document.getElementById('EMail2').value = document.getElementById('EMail').value;
        document.getElementById('Address2').value = document.getElementById('Address').value;
        document.getElementById('Postal2').value = document.getElementById('Postal').value;
        document.getElementById('City2').value = document.getElementById('City').value;
    }
    else {
        document.getElementById('FirstName2').value = '';
        document.getElementById('LastName2').value = '';
        document.getElementById('EMail2').value = '';
        document.getElementById('Address2').value = '';
        document.getElementById('Postal2').value = '';
        document.getElementById('City2').value = '';





    }
}
function Register() {
    var fname = document.forms.RegForm.FirstName.value;
    var lname = document.forms.RegForm.LastName.value;
    var email = document.forms.RegForm.EMail.value;

    var zip = document.forms.RegForm.Postal.value;
    var city = document.forms.RegForm.City.value;






    var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;//Javascript reGex for Email Validation.
    var regName = /\d+$/g;								 // Javascript reGex for Name validation
    var letters = /^[A-Za-z]+$/;
    var regnum = /^[0-9]*$/;


    if (fname == "" || regName.test(fname)) {
        window.alert("Please enter your first name properly.");

        return false;
    }
    if (lname == "" || regName.test(lname)) {
        window.alert("Please enter your last name properly.");

        return false;
    }
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");

        return false;
    }
    if (zip.length != 6 || !regnum.test(zip)) {
        window.alert("Postal Code Incorrect")
        return false;
    }
    if (!letters.test(city)) {
        window.alert("City Incorrect")
        return false;

    }


    var fname2 = document.forms.RegForm.FirstName2.value;
    var lname2 = document.forms.RegForm.LastName2.value;
    var email2 = document.forms.RegForm.EMail2.value;

    var zip2 = document.forms.RegForm.Postal2.value;
    var city2 = document.forms.RegForm.City2.value;

    if (fname2 == "" || regName.test(fname2)) {
        window.alert("Please enter your first name properly.");

        return false;
    }
    if (lname2 == "" || regName.test(lname2)) {
        window.alert("Please enter your last name properly.");

        return false;
    }
    if (email2 == "" || !regEmail.test(email2)) {
        window.alert("Please enter a valid e-mail address.");

        return false;
    }
    if (zip2.length != 6 || !regnum.test(zip2)) {
        window.alert("Postal Code Incorrect")
        return false;
    }
    if (!letters.test(city2)) {
        window.alert("City Incorrect")
        return false;

    }





    window.alert("order placed");
    return true;


}
