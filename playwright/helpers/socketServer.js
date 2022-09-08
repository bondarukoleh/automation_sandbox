const WebSocket = require('ws');
const querystring = require('querystring');

const {SOCKET_SERVER_PORT = 4000} = process.env;

/*
 If you connect from test you need to provide user_id=id_value in connection url.
 data that test connection should provide is { role: 'app', data: true, id: user_id }

 If you connect from mocks helper you don't need to provide need to provide user_id in connection url.
 data that mock_server connection should provide is { role: 'mock_helper', data: {}, id: user_id }
*/

// eslint-disable-next-line no-console
console.log(`======= Socket server started, port: ${SOCKET_SERVER_PORT} =======`);

const wss = new WebSocket.Server({port: SOCKET_SERVER_PORT});

const clients = new Map();
const firstConnection = 'first_connection';
const wasConnected = 'was_connected';
const appConnection = 'app';
const mockConnection = 'mock_helper';
const defaultData = {};

wss.on('connection', function connection(socket, req) {
  const id = getConnectionId(req.url);

  handleClientAddition(id, socket);

  socket.on('message', function(data) {
    const dataObj = parseData(data);

    if (dataObj && dataObj.role === appConnection) {
      log(`Server got message from ${appConnection}`, dataObj);

      const client = getClientIfPresent(dataObj.id);
      if (client && client.status === firstConnection) {
        log(`Send message for client ${dataObj.id} for first time`, defaultData);
        client.status = wasConnected;
        client.data = defaultData;
        return sendMessage(client, JSON.stringify(client.data));
      }

      if (client && client.status === wasConnected) {
        log(`Send known data for client ${dataObj.id}`, client.data);
        return sendMessage(client, JSON.stringify(client.data));
      }
    }

    if (dataObj && dataObj.role === mockConnection) {
      log(`Server got message from ${mockConnection}:`, dataObj);

      const client = getClientIfPresent(dataObj.id);

      if (client) {
        client.data = dataObj.data;
        log(`Sending data to a client ${dataObj.id}:`, client.data);
        const result = sendMessage(client, JSON.stringify(client.data));
        return socket.send(String(result))
      } else {
        return socket.send(`No such client with id ${dataObj.id}`)
      }
    }

    return socket.send('This server does not aware of that kind of connection.');
  });
});

function getConnectionId(url) {
  let id = null;
  try {
    const parsed = querystring.parse(url);
    Object.entries(parsed).forEach(([key, value]) => {
      if (key.includes('user_id') && value !== 'undefined') {
        id = value;
      }
    });
  } catch (e) {
    console.log(`Couldn't parse the is value from ${url}`);
  }
  return id;
}

function handleClientAddition(id, socket) {
  const client = clients.get(id);
  if (id !== null && !client) {
    log(`New client connected, id ${id}`);
    clients.set(id, {status: firstConnection, data: null, clientSockets: [socket]});
  } else if (id !== null && client) {
    log(`Known client connected once again, id: ${id}`);
    client.clientSockets.push(socket);
  } else {
    log('Connection without id.');
  }
}

function parseData(data) {
  let dataObj = null;
  try {
    dataObj = JSON.parse(data);
  } catch (e) {
    log(`Couldn't parse the data from message:`, data);
  }
  return dataObj;
}

function getClientIfPresent(id) {
  const client = clients.get(id);
  if (client === undefined) {
    log(`Couldn't get the client with id ${id}`);
  }
  return client;
}

function sendMessage(client, data) {
  client.clientSockets = client.clientSockets.filter((socket) => socket.readyState === WebSocket.OPEN);

  if (!client.clientSockets.length) {
    log(`All sockets for client ${client.id} are closed`)
    return false;
  }

  for (const clientSocket of client.clientSockets) {
    clientSocket.send(data);
  }
  return true;
}

function log(msg, data) {
  console.log('-------------------');
  console.log(msg);
  try {
    data && console.log(JSON.stringify(data));
  } catch (e) {
    data && console.log(data);
  }
}

const example = function() {
  const url = 'ws://localhost:4000?user_id=1'
  const socketFromApp = new WebSocket(`${url}?user_id=1`);

  socketFromApp.addEventListener('open', (event) => {
    socketFromApp.send(JSON.stringify({role: 'app', data: true, id: '1'}));
  });

  socketFromApp.addEventListener('message', (event) => {
    console.log('App got data from mocked server: ', event.data);
  });

  const socketFromMocks = new WebSocket('ws://localhost:4000');

  socketFromMocks.addEventListener('open', (event) => {
    socketFromMocks.send(JSON.stringify({role: 'mock_helper', data: {someData: {}}, id: '1'}));
  });

  socketFromMocks.addEventListener('message', (event) => {
    console.log('Mocked server sends message: ', event.data);
  });
};

