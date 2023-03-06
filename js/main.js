$('.menu-button').click(() => {
    $('.mobile-menu nav').slideToggle()
    $('.menu-button').toggleClass('fa-xmark')
    $('.menu-button').toggleClass('fa-bars')
})

$('.p-icon').click((event) => {
    event.preventDefault()
    $('.payments-menu').slideToggle()
})