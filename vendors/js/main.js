$(document).ready(function(){

    // sticky menu section

    $(".js--service-section").waypoint(function(direction){
        if(direction == "down")
        {
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky");
        }

    });

    // active link

    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });

    $("nav a img.logo").click(function(){
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });



    // mixituo (portfolio section)
    var mixer = mixitup('.mix-container');
    

    $("a").on('click', function(event){

        if(this.hash !== ""){
    
            envent.preventDefault();
            var hash = this.hash;
    
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
    
        }
    });
     

});

// mobile menu icon
// open nav
function openNav(){
    document.getElementById("show-nav").style.width = "60%";
}
// close nav

function closeNav(){
    document.getElementById("show-nav").style.width = "0%";
}

/*-----------------------------------------------------
        scroll behavior browser support
-----------------------------------------------------*/
