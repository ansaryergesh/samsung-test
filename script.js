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
            "Accept": 'application/json',
            'Access-Control-Allow-Origin': "https://foo.example",
            "Access-Control-Max-Age": 86400,
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Request-Method": "POST",
            "Access-Control-Allow-Headers": "Content-Type, Authorization"
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
let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// validation
$("#contact-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      fio: {
        required: true,
        minlength: 5  
        },
      gorod: {
          required: true
      },
      phone: {
          required: true,
          number: true 
      }
      },
    messages: {
      email: {
        required: "Поле email обязательно для заполнения",
        email : "Email неправильно"
      },
      fio: {
        required: "Поле ФИО обязательно для заполнения",
        minlength: jQuery.validator.format("Длина имени должна быть больше 5-ти символов")
      },
      phone: {
        required: "Поле Номер телефона обязательно для заполнения",
        number : "Неправильный номер"
      },
      gorod: {
        required: "Поле Город обязательно для заполнения"
      },

    },
     submitHandler: function() {
       alert("Вы успешно зарегистрировались!");
    }
  });
