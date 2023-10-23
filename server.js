const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const User = require('./user.js');
const renderLogin = require('./login.js');
const renderSignup = require('./signup.js');

const app = express();

// MongoDB connection
mongoose.connect('mongodb://localhost/movieTickets', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));

app.get('/', (req, res) => {
    if (req.session.user) {
        res.send('Welcome ' + req.session.user.email);
    } else {
        res.redirect('/login');
    }
});

app.get('/login', (req, res) => {
    const error = req.session.error || '';
    req.session.error = null;
    res.send(renderLogin(error));
});

app.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
        req.session.user = user;
        res.redirect('/');
    } else {
        req.session.error = 'Invalid credentials';
        res.redirect('/login');
    }
});

app.get('/signup', (req, res) => {
    const error = req.session.error || '';
    req.session.error = null;
    res.send(renderSignup(error));
});

app.post('/signup', async (req, res) => {
    const { email, password, confirmPassword, age, phoneNumber } = req.body;

    if (password !== confirmPassword) {
        req.session.error = 'Passwords do not match';
        return res.redirect('/signup');
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({
        email,
        password: hashedPassword,
        age,
        phoneNumber,
    });

    try {
        await user.save();
        res.redirect('/login');
    } catch (err) {
        req.session.error = 'Error occurred. Possibly email already exists.';
        res.redirect('/signup');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
