const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.post('/add', (req, res) => {
    const { number1, number2 } = req.body;
    const sum = Number(number1) + Number(number2);
    const color = sum > 10 ? 'green' : 'red';
    res.json({ result: sum, color: color });
  });
  