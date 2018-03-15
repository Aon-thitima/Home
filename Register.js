var ArralyRegister = [];
function myFunction() {
    document.getElementById("aa").style.display = "none";
    document.getElementById("bb").style.display = "block";
    let Register = { "Name": null, "Username": null, "Password": null };

    Register.Name = document.getElementById("Name").value;
    Register.Username = document.getElementById("Username").value;
    Register.Password = document.getElementById("Password").value;

    ArralyRegister.push(Register);
    console.log(ArralyRegister);

    Name.value = "";
    Username.value = "";
    Password.value = "";

    
}

var checkUser;
var checkEmail;
var checkPass;

function clicklogin() {
    var a = document.getElementById('email').value;
    var b = document.getElementById('pass').value;

    for (i = 0; i < ArralyRegister.length; i++) {
        for (var prop in ArralyRegister[i]) {
            if (prop == "Username") {

                if (a == ArralyRegister[i].Username) {
                    checkUser = i
                    checkEmail =1;
                }else{
                    checkEmail =0;
                }
            }

        }
    }

    if (checkUser == undefined) {
        
        checkPass = 0;
    }else{
      if(b == ArralyRegister[checkUser].Password){
          
          checkPass = 1;
      }else{checkPass = 0;}
      
    }

    if(checkEmail == 1){
        if(checkPass == 1){alert("OK")}else{alert("Password ผิด")}
    }else{alert("Email ผิด")}

}
