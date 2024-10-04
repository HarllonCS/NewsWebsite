const register = document.getElementById('create_acc')
const login =  document.getElementById('login')
const reg_p = document.getElementById('regP')
const log_p = document.getElementById('loginP')

reg_p.addEventListener('click', () => {
    register.style.display = 'none'
    login.style.display = 'block'
})

log_p.addEventListener('click', () => {
    register.style.display = 'block'
    login.style.display = 'none'
})