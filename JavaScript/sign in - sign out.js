var hubertUserName = "Black Miles";
var hubertId = "hub567";
var hubertPass = "iamboss";

var victorUserName = "Virus";
var victortId = "vic789";
var victorPass = "imadeu";

function signIn() {
    let userName = document.getElementById('u_name');
    let userId  = document.getElementById('u_id');
    let userPassword = document.getElementById('pass');
    let container = document.querySelector('.container');
    let loader = document.querySelector('.loading');
    let grant  = document.querySelector('.accessGranted');
    let welcome = document.querySelector('.welcome');
    var welText = document.querySelector('.welText');

    if(userName.value === hubertUserName && userId.value === hubertId && userPassword.value === hubertPass){
        //running animations
        container.style.animationPlayState = "running";
        loader.style.display = "block";
        loader.style.animationPlayState = "running";
        grant.style.display = "block";

        //setting timeout
        setTimeout(function() {
            loader.style.display = "none";
            grant.style.display = "none";
            welcome.style.display = "inline"
            welText.innerHTML = welText.innerHTML + ' ' + userName.value;
        },6000);

        //setting timeout for text change
        setTimeout(function () {
        document.querySelector('.welText').innerHTML = "Black Miles" + " 🎧";
    },8000); 
    }
else{
    //denying access
     alert('Access Denied');
     userName.value = "";
     userId.value = "";
     userPassword.value = "";
     container.style.border = "3px solid red"
   }
}

function changeSch() {
    document.getElementById('sch').style.color = "violet";
    document.getElementById('hm').style.color = "black";
    document.getElementById('contact').style.color = "black";
    document.getElementById('help').style.color = "black";
}

function changeHm() {
    document.getElementById('sch').style.color = "black";
    document.getElementById('hm').style.color = "violet";
    document.getElementById('contact').style.color = "black";
    document.getElementById('help').style.color = "black";
}

function changeContact() {
    document.getElementById('sch').style.color = "black";
    document.getElementById('hm').style.color = "black";
    document.getElementById('contact').style.color = "violet";
    document.getElementById('help').style.color = "black";
}

function changeHelp() {
    document.getElementById('sch').style.color = "black";
    document.getElementById('hm').style.color = "black";
    document.getElementById('contact').style.color = "black";
    document.getElementById('help').style.color = "violet";
}

function openBd(){
    document.querySelector('.beatzD').style.display = "block";
}

    function chooseAndClose1() {
        document.querySelector('.beatzD').style.display = 'none';
        document.querySelector('.cat').innerHTML = "Afro beats";
        document.querySelector('.cat').style.left = "40%";
    }

    function chooseAndClose2() {
        document.querySelector('.beatzD').style.display = 'none';
        document.querySelector('.cat').innerHTML = "Trap beats";
    }

    function chooseAndClose3() {
        document.querySelector('.beatzD').style.display = 'none';
        document.querySelector('.cat').innerHTML = "Afro pop";
    }

    function chooseAndClose4() {
        document.querySelector('.beatzD').style.display = "none";
        document.querySelector('.cat').innerHTML = "Drill beats";
    }

    function out() {
        document.querySelector('.container').style.display = "inline-flex";
    }