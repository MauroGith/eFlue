$('.menu-button').click(() => {
    $('.mobile-menu nav').slideToggle()
    $('.menu-button').toggleClass('fa-xmark')
    $('.menu-button').toggleClass('fa-bars')
})

$('.user-options').click(() => {
    $('.toggle-items ul').slideToggle()
})

$('.p-icon').click((event) => {
    event.preventDefault()
    $('.payments-menu').slideToggle()
})