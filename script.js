document.addEventListener( "DOMContentLoaded", function () {
    const form = document.getElementById( "registration-form" );
    const feedbackDiv = document.getElementById( "form-feedback" );
    form.addEventListener( "submit", ( event ) => {
        event.preventDefault();
        const username = document.getElementById( "username" ).value.trim();
        const email = document.getElementById( "email" ).value.trim();
        const password = document.getElementById( "password" ).value.trim();

        let isValid = true;
        let messages = [];
        // Username Validation
        if ( username.length < 3 ) {
            isValid = false;
            messages.push( "Username Must be 3 or more letters!" );
        }
        // Email Validation
        if ( !email.includes( '@' ) && !email.includes( '.' ) ) {
            isValid = false;
            messages.push( "Email must include '@' and '.' !" );
        }
        // Password Validation
        if ( password.length < 8 ) {
            isValid = false;
            messages.push( "Password must be atleast 8 characters long!" );
        }
        feedbackDiv.style.display = 'block';
        if ( isValid ) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = '#28a745';
        } else {
            feedbackDiv.innerHTML = `
                    ${messages.join('<br>')}
                `;
            feedbackDiv.style.color = '#dc3545';
        }
    })
})