document.getElementById('contact-form').addEventListener('submit', addPost);

function addPost(event) {
    event.preventDefault();
    
    let gorod = document.getElementById('gorod').value;
    let fio = document.getElementById('fio').value;
    let email = document.getElementById('email').value;
    const myPost = {
        fio: fio,
        email: email,
        gorod: gorod
    };
    fetch('https://murmuring-plateau-95298.herokuapp.com/registrations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(myPost)
    })
    .then((res) => {
        if (res.ok) {
            return res.json() 
        } else {
            return Promise.reject({ status: res.status, statusText: res.statusText });
        }   
        
    })
    .then((data) => console.log(data))
    .catch(err => console.log('Error message:', err.statusText));
}