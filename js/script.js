let register = document.querySelector('#create_acc')
let login =  document.querySelector('#login')
let reg_p = document.querySelector('#regP')
let log_p = document.querySelector('#loginP')

reg_p.addEventListener('click', () => {
    register.style.display = 'none'
    login.style.display = 'block'
})

log_p.addEventListener('click', () => {
    register.style.display = 'block'
    login.style.display = 'none'
})

function changeLang(value, file) {location.assign(`../${value}/${file}.html`)}