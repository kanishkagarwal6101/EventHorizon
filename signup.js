// signup.js
function renderSignup(error) {
    return `
    <html>
        <head>
            <title>Signup</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                .error { color: red; }
                label, input { margin-bottom: 10px; }
                form { max-width: 300px; }
            </style>
        </head>
        <body>
            <h1>Signup</h1>
            ${error ? `<div class="error">${error}</div>` : ''}
            <form action="/signup" method="post">
                <label for="email">Email:</label>
                <input type="email" name="email" required>
                <br>

                <label for="password">Password:</label>
                <input type="password" name="password" required>
                <br>

                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" name="confirmPassword" required>
                <br>

                <label for="age">Age:</label>
                <input type="number" name="age" required>
                <br>

                <label for="phoneNumber">Phone Number:</label>
                <input type="tel" name="phoneNumber" required>
                <br>

                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <a href="/login">Login</a></p>
        </body>
    </html>
    `;
}

module.exports = renderSignup;