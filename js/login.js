$(document).ready(() => {

    $('input[type="button"]').click(() => {
        console.log("button presses");
        var username=$('#username').val();
        var password=$('#password').val();
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
            data:{
                "username":username,
                "password":password,
            },
            success: (x) => {
                alert("Welcome "+username);
                console.log(x);
                window.location="http://127.0.0.1:5500/html/registration.html"
            }
        })
    }
    })
});