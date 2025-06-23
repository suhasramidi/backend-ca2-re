const express = require('express');

const app = express();
const port = 3000;


const users = [
    { username: 'alice', name: 'Alice Smith', age: 25 },
    { username: 'bob', name: 'Bob Johnson', age: 30 },
    { username: 'charlie', name: 'Charlie Brown', age: 28 }
];


app.get('/user', (req, res) => {
    const userParam = req.query.user;

    if (!userParam || userParam.trim() === '') {
        return res.status(400).json({ success: false, message: 'User parameter cannot be empty' });
    }

    const user = users.find(u => u.username === userParam);

    if (user) {
        return res.json({ success: true, message: 'User found', data: user });
    } else {
        return res.status(404).json({ success: false, message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});