const express = require('express');
const stytch = require('stytch')
const cors = require('cors');
const mysql = require('mysql');

var con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "product"
});

const client = new stytch.Client({
    project_id: "project-test-bacbc679-45c1-4b98-a72c-42e1195d3346",
    secret: "secret-test-7m10NLaX1V_X5hCedvwq8abgjaHp3KjVQb8=",
    env: stytch.envs.test,
});


const app = express();
app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        const resp = await client.passwords.create({
            email,
            password,
            session_duration_minutes: 60
        })

        res.json({
            success: true,
            message: 'User created successfully',
            token: resp.session_token
        })
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err: err
        })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const resp = await client.passwords.authenticate({
            email,
            password,
            session_duration_minutes: 60
        })

        res.json({
            success: true,
            message: 'User logged successfully',
            token: resp.session_token
        })
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err: err
        })
    }
})

app.get('/getAllProduct', async (req, res) => {
    try {

        con.query("SELECT * FROM product", function (err, result, fields) {
            if (err) throw err;
            res.json({
                success: true,
                message: 'User logged successfully',
                result
            })
        });

    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err: err
        })
    }
})



app.post('/authenticate', async (req, res) => {
    const { session_token } = req.body;

    try {
        await client.sessions.authenticate({ session_token })

        res.json({
            success: true,
            message: 'Token is valid',

        })
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err: err
        })
    }
})

app.post('/logout', async (req, res) => {
    const { session_token } = req.body;

    try {
        await client.sessions.revoke({ session_token })

        res.json({
            success: true,
            message: 'Loggged out successfully',

        })
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err: err
        })
    }
})

app.get

const PORT = process.env.PORT | 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
