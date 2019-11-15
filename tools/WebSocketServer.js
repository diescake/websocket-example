// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8000 })

const DUMMY_DATA = {
  message: '吾輩はポメラニアンである。名前はポメである。',
}

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('received: %s', message)
  })

  wss.on('close', () => {
    console.log('disconnected !!')
  })

  ws.send('connected !!')

  setInterval(() => {
    ws.send(JSON.stringify(DUMMY_DATA))
  }, 3000)
})
