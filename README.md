# websocket-example

## Simple examples

The example codes are in [./tools](https://github.com/diescake/websocket-example/tree/master/tools)

### Launch WebSocket server

```sh
$ yarn ws-server
```

### Launch WebSocket client

```sh
$ yarn ws-client
```

Then, open http://localhost:8080 on your browser.

## Use useEffect in a global component

### Launch WebSocket server

```sh
$ yarn ws-server
```

### Launch WebSocket client

The example code is [AppController/index.tsx](http://github.com/diescake/websocket-example/blob/master/src/app/components/AppController/index.tsx)

```sh
$ yarn start
```

Then, you can see that new todo is added at a specific interval.

## Integrated with redux-saga

T.B.D.

Probably, use [eventChannel](https://github.com/redux-saga/redux-saga/blob/master/docs/advanced/Channels.md#using-the-eventchannel-factory-to-connect-to-external-events) in redux-saga.
