$(document).ready(() => {

    $('input[type="button"]').click(() => {
        console.log("button presses");
        var username=$('#username').val();
        // alert(username);
        var password=$('#password').val();
        // alert(password);
        var messages=$("#messages");

        if (username == "" && password == "") {

            $('#message').css({
                'display' : 'block'
            });
            $("div#message").html("Please enter the username and password");
            // alert("Username or Password not entered")
        }
        
        else if (username == "" || password == "") {
            if(username == "") {
                $('#message').css({
                    'display' : 'block'
                });
                $("div#message").html("Please enter the username");
            }
            else if(password == ""){
                $('#message').css({
                    'display' : 'block'
                });
                $("div#message").html("Please enter the password");
            }
        }

        else {
        $.ajax({
            url: "http://localhost:3000/employees",
            method: "GET",
            dataType: 'json',

            success: function(data){
                console.table([data]);
                $.each(data, function(key, value) {
                    // console.log(value.username);
                    if(value.username != "" && value.password != "") {
                        if(value.username == username && value.password == password)
                        {
                            alert("Welcome "+ value.username)
                            window.location="http://127.0.0.1:5500/html/registration.html"
                            return true;
                        }
                        
                    }
                    
                })
            },

            error: (x)=> {
                alert("Wrong credentials");
                window.location="http://127.0.0.1:5500/html/login.html"
            }
        })
    }
    })
});