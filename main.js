// function toogleDetail(e){
//     let target = $(e.target).parents(".about-exp-item")
//     // let target = $(e.target)

//     $(target).html("less Info")
 
//     // console.log($(target).parents(".about-exp-item"))
//     detail = $(target).children(".about-exp-item-detail")
//     $(detail).slideToggle()
//     console.log(detail)
    
// }


function toogleDetail(e){
    let target = $(e.target)

    if ($(target).hasClass("active")){
        $(target).html("More Info").removeClass("active")
    }
    else {
        $(target).html("Less Info").addClass("active")
    }

    

    let item = $(target).parents(".about-exp-item")
    let detail = $(item).children(".about-exp-item-detail")
    $(detail).slideToggle()

   

    }
 
    
    
    
