const form2 = document.querySelector('#contact-form'); // Selecciona el segundo formulario por su ID
            const nameInput2 = document.querySelector('#name2'); // Selecciona el campo de nombre del segundo formulario
            const emailInput2 = document.querySelector('#email2'); // Selecciona el campo de correo electrónico del segundo formulario
            const messageInput2 = document.querySelector('#message2'); // Selecciona el campo de mensaje del segundo formulario
        
            // Funciones de validación para el segundo formulario
            function validateName2() {
                const nameRegex = /^[a-zA-Z\s]+$/;
                if (!nameRegex.test(nameInput2.value.trim())) {
                    nameInput2.classList.add('invalid');
                    nameInput2.classList.remove('valid');
                    return false;
                } else {
                    nameInput2.classList.remove('invalid');
                    nameInput2.classList.add('valid');
                    return true;
                }
            }
        
            function validateEmail2() {
                const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                if (!emailRegex.test(emailInput2.value.trim())) {
                    emailInput2.classList.add('invalid');
                    emailInput2.classList.remove('valid');
                    return false;
                } else {
                    emailInput2.classList.remove('invalid');
                    emailInput2.classList.add('valid');
                    return true;
                }
            }
        
            function validateMessage2() {
                if (messageInput2.value.trim() === '') {
                    messageInput2.classList.add('invalid');
                    messageInput2.classList.remove('valid');
                    return false;
                } else {
                    messageInput2.classList.remove('invalid');
                    messageInput2.classList.add('valid');
                    return true;
                }
            }
        
            // Evento submit para el segundo formulario
            form2.addEventListener('submit', function(event) {
                event.preventDefault();
                const isNameValid = validateName2();
                const isEmailValid = validateEmail2();
                const isMessageValid = validateMessage2();
        
                if (isNameValid && isEmailValid && isMessageValid) {
                    alert('¡Formulario enviado con éxito!');
                    form2.submit();
                } else {
                    alert('Por favor, complete el formulario correctamente.');
                }
            });
        
            // Validación en tiempo real para los campos del segundo formulario
            nameInput2.addEventListener('input', validateName2);
            emailInput2.addEventListener('input', validateEmail2);
            messageInput2.addEventListener('input', validateMessage2);
