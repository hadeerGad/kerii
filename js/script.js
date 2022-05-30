////////// nav bar /////////
let aboutOffset=$("#about-me").offset().top;

$(window).scroll(function(){
    let theScroll=$(window).scrollTop();
    if(theScroll>aboutOffset-50)
    {
        $(".nav-bar").css("backgroundColor","rgba(0,0,0,0.5)" )
    //   $(".up-icon").css("display","block" )
        // $(".up-icon").fadeIn(3000);
        $(".up-icon").fadeIn(1000)
    }
    else{
        $(".nav-bar").css("backgroundColor","transparent")
        // $(".up-icon").css("display","none" )
        // $(".up-icon").fadeOut(3000);
        $(".up-icon").fadeOut(1000)

    }
})

$(".up-icon").click(function(){
    $("html,body").animate({scrollTop:0} , 2000)
})

$("a").click(function(eventInfo){
    let hRef= $(eventInfo.target).attr("href")
    let sectionOffset= $(hRef).offset().top
    console.log(sectionOffset);
    $("html,body").animate({scrollTop:sectionOffset}, 1000)
})


let colorBox= $("#colorBox").innerWidth()
$("#toggleIcon").click(function(){
   if($("#sideBar").css("left")=="0px"){
    $("#sideBar").animate({left:`-${colorBox}`}, 1000)
   }
   else{
    $("#sideBar").animate({left:`0px`}, 1000) 
   }
   
})

$(".color-box").eq(0).css("backgroundColor","teal")
$(".color-box").eq(1).css("backgroundColor","tomato")
$(".color-box").eq(2).css("backgroundColor","green")
$(".color-box").eq(3).css("backgroundColor","aqua")
$(".color-box").eq(4).css("backgroundColor","brown")
$(".color-box").eq(5).css("backgroundColor","#e65f78")


$(".color-box").click(function(eventInfo){
    let color= $(eventInfo.target).css("backgroundColor")
    $(".change").css("color",`${color}`)
})