const emailAdress = document.getElementById('email-inp')
const confirmation_info = document.getElementById('confirm-sub')
const invalid_msg = document.getElementById('invalid')

function email_validation(){
     /*email validation (got that from w3resource)*/
    emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (emailAdress.value.match(emailFormat)){
       emailAdress.style.borderColor = "rgba(13, 147, 0, 0.458)"
       emailAdress.style.backgroundColor = "rgba(13, 147, 0, 0.08)"
       
        setTimeout(function(){/*after the confimation is true, it shows the confirmation screen*/
            const mainScreen = document.getElementById('subscription_main_screen')
            const confirmationScreen = document.getElementById('confirmation_screen')
            const email_index = document.getElementById('email_span')

            email_index.innerHTML = emailAdress.value
            mainScreen.style.display = 'none'
            confirmationScreen.style.display = 'block'
        }, 1000)
    }
    else{
        console.log("nada aconteceu")
        invalid_msg.style.opacity = "1"
        emailAdress.style.color = "rgba(255, 0, 0, 0.491)"
        emailAdress.style.borderColor = "rgba(255, 0, 0, 0.491)"
        emailAdress.style.backgroundColor = "rgba(255, 156, 156, 0.157)"
    }
        
}

/*if you confirm the email and its wrong, this code bellow will remove the red color
 when you try to write a new email*/
emailAdress.addEventListener('input', function(){
    invalid_msg.style.opacity = "0"
    emailAdress.style.color = "black"
    emailAdress.style.borderColor = "black"
    emailAdress.style.backgroundColor = "transparent"
})