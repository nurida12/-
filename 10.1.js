let form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: document.getElementById('title').value,
            body: document.getElementById('body').value
        })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').textContent =
            'Жауап: ' + JSON.stringify(data);
    })
    .catch(error => console.log('error:', error));
});