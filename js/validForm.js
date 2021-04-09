




submit.addEventListener("click", function () {
    let email = document.getElementById("email");
    if (email.invalid) {
        email.setCustomValidity('Електронный адрес введен некорректно, проверьте ещё раз.');
    } else {
        email.setCustomValidity("");
    }
    console.log(email.checkValidity());

    let form = document.getElementById("form");
    if (form.checkValidity() == true) {
        submit.addEventListener('click', () => {
            // showModalBox();
        });

        showModalBox();

        function showModalBox() {
            let modalBox = createModalBox();

            document.body.appendChild(modalBox);
        }

        function createModalBox() {
            let modalBox = document.createElement('div');
            modalBox.classList.add('my-modal-box');

            let inputName = document.createElement('input');
            inputName.classList.add('my-modal-box__input-name');
            inputName.type = "text";
            inputName.name = "name";
            inputName.id = "name";
            inputName.placeholder = "Name";

            let inputSurname = document.createElement('input');
            inputSurname.classList.add('my-modal-box__input-surname');
            inputSurname.type = "text";
            inputSurname.name = "name";
            inputSurname.id = "name";
            inputSurname.placeholder = "Surname";

            let btnSend = document.createElement('button');
            btnSend.classList.add('my-modal-box__btn-send');
            btnSend.innerText = 'Go';
            btnSend.addEventListener('click', () => {
                alert('Thank you, ' + inputName.value + ' ' + inputSurname.value + '!');
                document.body.removeChild(modalBox);
            })

            let btnCancel = document.createElement('button');
            btnCancel.classList.add('my-modal-box__btn-cancel');
            btnCancel.innerText = 'Cancel';
            btnCancel.addEventListener('click', () => {
                document.body.removeChild(modalBox);
            })

            modalBox.appendChild(inputName);
            modalBox.appendChild(inputSurname);
            modalBox.appendChild(btnSend);
            modalBox.appendChild(btnCancel);

            return modalBox;
        }
    }
});

// let btnGoTop = document.getElementsByClassName("btn-modalbox")[0];
let submit = document.getElementById("submit");


// submit.addEventListener('click', function (e) {
//     e.preventDefault();

//     if (form.checkValidity() == true) {
//         alert("form is correct");
//     } else {
//         alert('your form is filled incorrectly. check it one more time')
//     }
// });

