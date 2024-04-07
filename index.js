const http = require('http')
const os = require('os')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    const serverIP = req.socket.localAddress
    const serverHostname = os.hostname()
    const appVersion = process.env.APP_VERSION || 'N/A'
    const message = 'Adres IP serwera: ' + serverIP + '\nNazwa serwera: ' + serverHostname + '\nWersja aplikacji: ' + appVersion
    res.end(message)
})

server.listen(8000, () => {
    console.log("Serwer uruchomiony na porcie 8080")
})