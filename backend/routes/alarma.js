const express = require('express');
const alarma = express.Router();
const mysqlConnection = require('../db/database');



alarma.get('/alarma', (req, res) => {
  mysqlConnection.query('SELECT * FROM alarma ', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});



alarma.post('/nueva-alarma', (req, res) => {
  const { idAlarma, cuidado, fecha, hora, cadaCuando } = req.body;
  let alarmaN = [idAlarma, cuidado, fecha, hora, cadaCuando];
  let nuevaAlarma = `INSERT INTO alarma (idAlarma, cuidado, fecha, hora, cadaCuando)
                  VALUES(?,?,?,?,?)`;
  mysqlConnection.query(nuevaAlarma, alarmaN, (err, results, fields) => {
    if (err) {
      return console.error(err.message);
    }
    res.json({ message: `Nueva Alarma`, })
  });
});


alarma.put('/alarma/:id', (req, res) => {
  const { cuidado, fecha, hora, cada_cuando, id_planta } = req.body;
  const { id_alarma } = req.params;
  mysqlConnection.query(`UPDATE alarma SET cuidado = ?, fecha = ?, hora = ?, cada_cuando = ?, id_planta = ?`,
    [cuidado, fecha, hora, cada_cuando, id_planta], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Alarma actualizada' });
      } else {
        console.log(err);
      }
    });
});



alarma.delete('/alarma/:id_alarma', (req, res) => {
  const { id_alarma } = req.params;
  mysqlConnection.query('DELETE FROM alarma WHERE id_alarma = ?',
    [id_alarma], (err, rows, fields) => {
      if (!err) {
        res.json({ status: 'Alarma eliminada' });
      } else {
        console.log(err);
      }
    });
});





module.exports = alarma;