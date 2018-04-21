//ONCLICK JAVASCRIPT STYLE
var image_Counter = 1; // FIRST IMAGE 
var totalImage = 6; // DECLARES NUMBER OF IMAGES
function picture(i) // CREATE A FUNCTION WITH A VARIABLE
{
    var image = document.getElementById('image'); //GETS THE ID NAME IN THE HTML DOCUMENT
    image_Counter = image_Counter + i; // LOOPS THROUGH THE IMAGES FROM START TO END
    if (image_Counter > totalImage) // IF STATEMENT TO PREVENT IMAGE ERROR WHEN FINAL IMAGE HAS BEEN DISPLAYED
    {
        image_Counter = 1; // AFTER FINAL IMAGE, IT STARTS AGAIN
    }
    if (image_Counter < 1) // IF STATEMENT TO PREVENT IMAGE ERROR WHEN FISRT IMAGE HAS BEEN DISPLAYED
    {
        image_Counter = totalImage; //AFTER FIRST IMAGE, IT STARTS AGAIN
    }
    image.src = "img" + image_Counter + ".jpg"; //DIRECTORY OF IMAGE AND EXTENSION
    clearInterval(time); // CLEARS INTERVAL 
}
//ONLOAD JAVASCRIPT STYLE
//CREATING AUTOMATIC LOADING STYLE.
window.setInterval(function picture() {
    var image = document.getElementById('image');
    image_Counter = image_Counter + 1;
    if (image_Counter > totalImage) {
        image_Counter = 1;
    }
    if (image_Counter < 1) {
        image_Counter = totalImage;
    }
    image.src = "img" + image_Counter + ".jpg";
}, 1000); //INTERVALS TO AUTOMATICALLY LOAD IN MILLISECOND
$(document).ready(function () { //DOCUMENT .READY STARTS THE JAVASCRIPT. INITIALIZES THE PROGRAM TO WORK
    //ONMOUSEOVER AND ONMOUSEOUT JAVASCRIPT STYLE
    $(".firstRow").mouseover(function () { //ONMOUSEOVER FUNCTION
        $("#images").attr("src", $(this).attr("src")); //REPLACE THE ONMOUSEOVER PIC WITH THE DEFAULT IMAGE
    });
    //ONMOUSEOVER RETURN THE PIC BACK TO THE DEFAULT IMAGE
    $(".firstRow").mouseout(function () { //ONMOUSEOUT FUNCTION
        $("#images").attr("src", "img5.jpg"); //ONMOUSEOUT RETURN TO THE DEFAULT IMAGE
    });
});
/****************          COOKIES FOR MY FORMS   *****************/
function setCookie() { //function to set cookie 
    var object = {}; // object variable created to store the cookies in
    object.name = document.getElementById("nameCookie").value; // create a cookie of name and stores in object variable
    object.email = document.getElementById("emailCookie").value; // create a cookie of email and stores in object variable
    object.sex = document.getElementById("sexCookie1").value; // create a cookie of sex and stores in object variable
    object.sex = document.getElementById("sexCookie2").value; // create a cookie of sex and stores in object variable
    object.interest = document.getElementById("MensCloth").value;
    object.interest = document.getElementById("WomensCloth").value;
    var jsonString = JSON.stringify(object);
    document.cookie = "cookieWebPage=" + jsonString; //container for the cookies
    alert(document.cookie);
}

function setSecondCookie() { //function to set second cookie 
    var object = {}; // object variable created to store the cookies in
    object.name = document.getElementById("nameCookie2").value; // create a cookie of name and stores in object variable
    object.email = document.getElementById("emailCookie2").value; // create a cookie of email and stores in object variable
    object.message = document.getElementById("messageCookie").value; // create a cookie of email and stores in object variable
    var jsonString = JSON.stringify(object);
    document.cookie = "cookieWebPageSecond=" + jsonString; //container for the cookies
    alert(document.cookie);
}

