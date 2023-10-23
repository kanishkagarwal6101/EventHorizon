// login.js
function renderLogin(error) {
    return `
    <html>
        <head>
            <title>Login</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                .error { color: red; }
                label, input { margin-bottom: 10px; }
                form { max-width: 300px; }
            </style>
        </head>
        <body>
            <h1>Login</h1>
            ${error ? `<div class="error">${error}</div>` : ''}
            <form action="/login" method="post">
                <label for="email">Email:</label>
                <input type="email" name="email" required>
                <br>

                <label for="password">Password:</label>
                <input type="password" name="password" required>
                <br>

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </body>
    </html>
    `;
}

module.exports = renderLogin;
