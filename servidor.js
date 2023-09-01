const http = require('http');
const host = 'localhost';
const port = 8000;
const chalk = require('chalk');


const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);

    const response = {
        name: "Cesar Trujillo",
        menssage: "Hola estoy respondiendo desde un servidor en formato JSON"
    };

    res.end(JSON.stringify(response));
});

server.listen(port, host, chalk, () => {
    console.log(chalk.green("Servidor http://" + host + ":" + port));
});