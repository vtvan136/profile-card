const show_social = (toggle_card, social_card)=>{
    const toggle = document.getElementById(toggle_card),
          social = document.getElementById(social_card)
    toggle.addEventListener('click',()=>{
        if(social.classList.contains('animation')){
            social.classList.add('down-animation')
            setTimeout(()=>{
                social.classList.remove('down-animation')
            },1000)
        }
        social.classList.toggle('animation')
    })
        }
show_social('card-toggle','card-social')