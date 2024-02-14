
//show name and score on certificate 
async function Showname() {
    var id = window.prompt("Enter your id");
    var certificateName = document.getElementById("certificate-name");
    var certificateScore = document.getElementById("certificate-score");
    var name;
    //get the Json file that has the name and id 
    var data = await fetch('JS/main.json').then(res => res.json());
    console.log(data);

    //loop on json array
    for (var i = 0; i < data.length; i++) {
        if (id === data[i].id) {
            certificateName.textContent = data[i].name;
            certificateScore.textContent = localStorage.getItem("certificateScore" + ' ' + id);
            //print the name and score from local storge 
            console.log(localStorage.getItem("certificateScore" + ' ' + id));
            console.log(certificateName);
            console.log(data[i].Email);
            break;
        }
       
    }
}
//submit quiz function
async function submitQuiz() {
    var score = 0;
    console.log(score);

    var id = document.getElementById("id").value;
    var name;

    var data = await fetch('JS/main.json').then(res => res.json());

    //get the id to calc the score 
    for (var i = 0; i < data.length; i++) {

        if (id === data[i].id) {
            name = data[i].name;
            break;
        }
    }
    //calculate the score from every q

    var q1 = document.getElementById("q1c");
    console.log(q1.value);
    if (q1.checked === true) {
        console.log("true");
        score += 25

    }




    var q2 = document.getElementById("q2b");
    console.log(q2.value);
    if (q2.checked === true) {
        console.log("true");
        score += 25

    }

    var q3 = document.getElementById("q3a");
    console.log(q3.value);
    if (q3.checked === true) {
        console.log("true");
        score += 25

    }

    var q4 = document.getElementById("q4d");
    console.log(q4.value);
    if (q4.checked === true) {
        console.log("true");
        score += 25

    }

    // Store certificate data in localStorage
    localStorage.setItem("certificateName" + ' ' + id, name);
    localStorage.setItem("certificateScore" + ' ' + id, score);
    console.log(localStorage.getItem("certificateScore" + ' ' + id));







}
//register new user function

function saveNewMember() {

    //genrate random number for the id 
    var id = parseInt(Math.random() * 100);
    //get the password and confirm password
    pass1 = document.getElementById("pass").value;
    pass2 = document.getElementById("ConfirmPass").value;
    console.log(pass1);
    console.log(pass2);


    //check if confirm pass equals password
    if (pass1 === pass2) {
        var data = {
            "Email": document.getElementById("mail").value,
            "Fame": document.getElementById("Fname").value,
            "Lname": document.getElementById("Lname").valuem,
            "phone": document.getElementById("Phone").value,
            "pass": document.getElementById("pass").value
        };


        //save the data in local storeg
        localStorage.setItem('newregister' + '' + id, JSON.stringify(data));
        window.alert("your id is " + id);
        //go to login page
        window.location.href = "../Login.html";
    }
    else {
        window.alert("wrong pass")
    }

}
//LOgin with json
async function LOG() {
    //Fetch the json file
    var mail = document.getElementById("id").value;
    var pass = document.getElementById("pass").value;
    var data = await fetch('JS/main.json').then(res => res.json());
    console.log(data);
    //loop on json file 
    for (var i = 0; i < data.length; i++) {
        if (mail === data[i].id && pass === data[i].password) {
            window.location.href = "../Home.html";
            console.log(data[i]);

        }
    }
}
//login with localStorge
function loGNotjson() {
    //get the id and passowrd form the user 
    var id = document.getElementById("id").value;
    var pass2 = document.getElementById("pass").value;
    //convert the json file stored in local storge into var 
    var b = JSON.parse(localStorage.getItem('newregister' + '' + id));
    //check if the password entered === to the password stored in local storge
    if (b.pass === pass2) {

        //send the user to the home page 
        window.location.href = "../Home.html"
    }
    else {
        window.alert("wrong");
    }




}












