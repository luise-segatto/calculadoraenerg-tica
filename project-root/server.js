const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.post('/calculate', (req, res) => {
    const { appliance, hours, power } = req.body;
    const dailyConsumption = (hours * power) / 1000; // Converte W para kWh
    res.json({ dailyConsumption: dailyConsumption.toFixed(2) });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
