
//import { checkForPiece } from './helper_functions/profile.js';


//GLOBALS
var windowPosition = $(window).scrollTop();
var winMiddle = ($(window).height() / 4);
var navBar = $("nav");
var links = $("nav > .linkWrap> a");
var linkWrap = $(".linkWrap");
var loggedIn;

function setModals() {
    var btnID;

    $("body nav span a").click(function(e){
        btnID = this.id;
        console.log(this.id);

        //show login modal click function

        if (btnID == "login"){
            $(".loginModal").fadeIn(400).css("visibility","visible");
        }

        //show register modal click function

        if (btnID == "register"){
            $(".registerModal").fadeIn(400).css("visibility","visible");
        }

        //show contact modal click function

        if (btnID == "contact"){
            $(".contactModal").fadeIn(400).css("visibility","visible");
        }

        //show profile modal click function

        if (btnID == "profile"){
            $(".profileModal").fadeIn(400).css("visibility","visible");

            //console.log("The Profile is showing");
            //checkForPiece()
        }

        //show forgot username/password modal click function

    });




    $(".loginForm .forgotButton").click(function(e){
        e.preventDefault();
        $(".loginModal").fadeOut(300);
        setTimeout(function () {
            $(".forgotModal").fadeIn(400).css("visibility","visible");
            $(".errDiv").html("");
            $(".forInput").css("border","1px solid gray");
        },300)
    });


    //close function for login modal 'X'
    $(".loginForm .liClose").click(function(e){
        $(".loginModal").fadeOut(300);
    });

    //close function for register modal 'X'
    $(".registerForm .regClose").click(function(e){
        $(".registerModal").fadeOut(300);
    });

    //close function for contact modal 'X'
    $(".contactForm .conClose").click(function(e){
        $(".contactModal").fadeOut(300);
    });

    //close function for profile modal 'X'
    $(".profileForm .proClose").click(function(e){
        $(".profileModal").fadeOut(300);
    });

    //close function for forgot username/password modal 'X'
    $(".forgotForm .forgotClose").click(function(e){
        $(".forgotModal").fadeOut(300);
    });

    //sets close function for background object on all modals
    $(".bg").click(function(e){
        $(".loginModal").fadeOut(300);
        $(".registerModal").fadeOut(300);
        $(".contactModal").fadeOut(300);
        $(".profileModal").fadeOut(300);
        $(".forgotModal").fadeOut(300);
    });
}

function setScroll(){

    //scroll to location clicked
    $("nav .linkWrap a").click(function(e){

        var _btnID = this.id;

        $('html, body').animate({
            scrollTop:$("#" + _btnID + "Section").offset().top
        },2000);
    });

    //scroll back to the top
    $(".scrollTop").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
}

$(document).ready(function(){
    setModals();
    setScroll();
});
