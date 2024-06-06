 const form1 = document.querySelector('form'); // Cambiado a form1
     const nameInput1 = document.querySelector('#name');
     const emailInput1 = document.querySelector('#email');
     const numberInput1 = document.querySelector('#number');
     const subjectInput1 = document.querySelector('#subject');
     const messageInput1 = document.querySelector('#message');
 
     // Funciones de validación para el primer formulario
     function validateName1() {
         const nameRegex = /^[a-zA-Z\s]+$/;
         if (!nameRegex.test(nameInput1.value.trim())) {
             nameInput1.classList.add('invalid');
             nameInput1.classList.remove('valid');
             return false;
         } else {
             nameInput1.classList.remove('invalid');
             nameInput1.classList.add('valid');
             return true;
         }
     }
 
     function validateEmail1() {
         const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
         if (!emailRegex.test(emailInput1.value.trim())) {
             emailInput1.classList.add('invalid');
             emailInput1.classList.remove('valid');
             return false;
         } else {
             emailInput1.classList.remove('invalid');
             emailInput1.classList.add('valid');
             return true;
         }
     }
 
     function validateNumber1() {
         const numberRegex = /^[0-9]+$/;
         if (!numberRegex.test(numberInput1.value.trim())) {
             numberInput1.classList.add('invalid');
             numberInput1.classList.remove('valid');
             return false;
         } else {
             numberInput1.classList.remove('invalid');
             numberInput1.classList.add('valid');
             return true;
         }
     }
 
     function validateSubject1() {
         if (subjectInput1.value.trim() === '') {
             subjectInput1.classList.add('invalid');
             subjectInput1.classList.remove('valid');
             return false;
         } else {
             subjectInput1.classList.remove('invalid');
             subjectInput1.classList.add('valid');
             return true;
         }
     }
 
     function validateMessage1() {
         if (messageInput1.value.trim() === '') {
             messageInput1.classList.add('invalid');
             messageInput1.classList.remove('valid');
             return false;
         } else {
             messageInput1.classList.remove('invalid');
             messageInput1.classList.add('valid');
             return true;
         }
     }
 
     // Evento submit para el primer formulario
     form1.addEventListener('submit', (event) => {
         event.preventDefault(); // Evitar el envío del formulario
 
         const isNameValid = validateName1();
         const isEmailValid = validateEmail1();
         const isNumberValid = validateNumber1();
         const isSubjectValid = validateSubject1();
         const isMessageValid = validateMessage1();
 
         if (isNameValid && isEmailValid && isNumberValid && isSubjectValid && isMessageValid) {
             alert('¡Enviado correctamente!');
             form1.reset(); // Restablecer los campos del formulario
         } else {
             alert('Por favor, corrija los campos marcados en rojo.');
         }
     });
