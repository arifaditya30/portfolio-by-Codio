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
    console.log(detail)
    $(detail).slideToggle()

   

    }

function onFormSubmit(e){
    e.preventDefault()

    let email = ($("#inp_email"))
    let subject = ($("#inp_subject"))
    let message = ($("#inp_message"))

    if(!$(email).val()){
        return alert("Email is Required")
    } else  if(!$(subject).val()){
        return alert("Subject is Required")
    } if(!$(message).val()){
        return alert("Message is Required")
    }else{
         alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")

    }
    


    // console.log($(subject).val())
}
 
    
    
    
