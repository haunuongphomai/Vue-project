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

app.get('/getAllStaff', async (req, res) => {
    try {

        con.query("SELECT * FROM staff", function (err, result, fields) {
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



app.post('/product', (req, res) => {
    try {
        con.query('INSERT INTO `product` (`id`, `name`, `price`, `amount`) VALUES( NULL, "' + req.body.name + '", "' + req.body.price + '", "' + req.body.amount + '")',
            function (err, result, fields) {
                if (err) throw err;
                res.json({
                    success: true,
                    message: 'Product added successfully',
                    result
                })
            }
        )
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err: err
        })
    }
})

app.get('/product/:id', (req, res) => {
    try {
        con.query('SELECT * FROM `product` WHERE `product`.`id` = ' + req.params.id, function (err, result, fields) {
            if (err) throw err;
            res.json({
                success: true,
                message: 'Product deleted successfully',
                result
            })
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

app.get('/staff/:id', (req, res) => {
    try {
        // "DELETE FROM product WHERE `product`.`id` = 1"
        con.query('SELECT * FROM `staff` WHERE `staff`.`id` = ' + req.params.id, function (err, result, fields) {
            if (err) throw err;
            res.json({
                success: true,
                message: 'Product deleted successfully',
                result
            })
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

app.delete('/product/:id', (req, res) => {
    try {
        con.query('DELETE FROM `product` WHERE `product`.`id` = ' + req.params.id, function (err, result, fields) {
            if (err) throw err;
            res.json({
                success: true,
                message: 'Product deleted successfully',
                result
            })
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

app.post('/staff', (req, res) => {
    try {
        con.query('INSERT INTO `staff` (`id`, `name`, `gender`, `phone`) VALUES( NULL, "' + req.body.name + '", "' + req.body.gender + '", "' + req.body.phone + '")',
            function (err, result, fields) {
                if (err) throw err;
                res.json({
                    success: true,
                    message: 'Staff added successfully',
                    result
                })
            }
        )
    } catch (err) {
        console.log(err);

        res.json({
            success: false,
            message: err.error_message,
            err: err
        })
    }
})

app.delete('/staff/:id', (req, res) => {
    try {
        con.query('DELETE FROM `staff` WHERE `staff`.`id` = ' + req.params.id, function (err, result, fields) {
            if (err) throw err;
            res.json({
                success: true,
                message: 'Staff deleted successfully',
                result
            })
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

app.put('/product/:id', (req, res) => {
    // UPDATE `product` SET `amount` = '23' WHERE `product`.`id` = 4;
    try {
        con.query('UPDATE `product` SET `name` = "' + req.body.name + '", `price` = "' + req.body.price + '", `amount` = "' + req.body.amount + '" WHERE `product`.`id` = ' + req.params.id,
            function (err, result, fields) {
                if (err) throw err;
                res.json({
                    success: true,
                    message: 'Product updated successfully',
                    result
                })
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


app.put('/staff/:id', (req, res) => {
    try {
        con.query('UPDATE `staff` SET `name` = "' + req.body.name + '", `gender` = "' + req.body.gender + '", `phone` = "' + req.body.phone + '" WHERE `staff`.`id` = ' + req.params.id,
            function (err, result, fields) {
                if (err) throw err;
                res.json({
                    success: true,
                    message: 'Staff updated successfully',
                    result
                })
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

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello" });
})

const PORT = process.env.PORT | 3333;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
