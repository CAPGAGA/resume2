// transitions for navbar buttons
$(document).ready(function(){
    $("#home-btn").click(function(e){
        e.preventDefault();
        $(".main-wrapper").removeClass("active");
        $(".hero-section-wrapper").toggleClass('active');
    })
    $("#abt-me-btn").click(function(e){
        e.preventDefault();
        $(".main-wrapper").removeClass("active");
        $(".about-me-wrapper").toggleClass('active');
    })
    $("#works-btn").click(function(e){
        e.preventDefault();
        $(".main-wrapper").removeClass("active");
        $(".works-wrapper").toggleClass('active');
    })
    $("#works-btn").click(function(e){
        e.preventDefault();
        $(".main-wrapper").removeClass("active");
        $(".works-wrapper").toggleClass('active');
    })
})

// transitions for about me section
$(document).ready(function(){
//    because of use 2 animations for slide in and out default toggle
//    toggle function wont work, so .click first strip current card of classes
    $('#general').click(function(){
        $(".slide-in").removeClass('slide-in').toggleClass('slide-out');
        $("#general-card").removeClass('slide-out').removeClass('slide-in');
        $("#general-card").toggleClass('slide-in');
    })
    $('#OZON').click(function(){
        $(".slide-in").removeClass('slide-in').toggleClass('slide-out');
        $("#OZON-card").removeClass('slide-in').removeClass('slide-out');
        $("#OZON-card").toggleClass('slide-in');
    })
    $('#U4U').click(function(){
        $(".slide-in").removeClass('slide-in').toggleClass('slide-out');
        $("#U4U-card").removeClass('slide-in').removeClass('slide-out');
        $("#U4U-card").toggleClass('slide-in');
    })
    $('#FREELANCE').click(function(){
        $(".slide-in").removeClass('slide-in').toggleClass('slide-out');
        $("#FREELANCE-card").removeClass('slide-in').removeClass('slide-out');
        $("#FREELANCE-card").toggleClass('slide-in');
    })
})

$(document).ready(function(){
    $('#balance-st-btn').click(function(){
        $(".slide").removeClass("active-slide");
        $("#balance-st").toggleClass("active-slide");
    })

    $('#shatters-btn').click(function(){
        $(".slide").removeClass("active-slide");
        $("#shatters").toggleClass("active-slide");
    })

    $('#your-btn').click(function(){
        $(".slide").removeClass("active-slide");
        $("#your").toggleClass("active-slide");
    })
})

$(document).ready(function(){
    $("#contact-me-card").click(function(e){
        e.preventDefault();
        $(".contact-pop").toggleClass('poped-in');
    })
    $("#con-me-btn").click(function(e){
        e.preventDefault();
        $(".contact-pop").toggleClass('poped-in');
    })
})

$(document).ready(function(){
    $("#mymail").click(function(){
        navigator.clipboard.writeText($(this).value);

    })
})