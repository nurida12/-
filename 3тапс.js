let form = document.getElementById('myForm')

form.addEventListener('submit', function(event) {

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value

    if (name == '' || email == '') {
        alert('Өрістерді толтырыңыз!')
        event.preventDefault()
    }

})