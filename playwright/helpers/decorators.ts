import {Page} from "@playwright/test";

const decorateSocket = async(page: Page) => {
  await page.evaluate((id) => {
    const WebSocketProxy = new Proxy(window.WebSocket, {
      construct(target, _args) {
        const ws = new target(`ws://localhost:4000?user_id=${id}`);

        const originalListener = ws.addEventListener;
        Object.defineProperty(ws, 'addEventListener', {
          value: function(...args: [eventName: string, eventHandler: (event: Event) => unknown]) {
            const onMessageCallBackProxy = function(event: Event) {
              console.log('SOCKET HAS DATA');
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              console.log(event.data);
              // Object.defineProperty(event, 'data', {
              //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //   // @ts-ignore
              //   value: JSON.stringify({ role: 'app', data: event.data, id }),
              //   configurable: true,
              // });
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              args[1].call(this, event);
            };
            if (args[0] === 'message') {
              return originalListener.apply(this, ['message', onMessageCallBackProxy, false]);
            }
            return originalListener.apply(this, args);
          },
          configurable: true,
        });

        const originalSend = ws.send;
        Object.defineProperty(ws, 'send', {
          value: function(data: unknown) {
            // eslint-disable-next-line no-console
            console.log('SOCKET is about to send');
            // eslint-disable-next-line no-console
            console.log(data);
            const changedData = JSON.stringify({role: 'app', data: data, id});
            return originalSend.call(this, changedData);
          },
          configurable: true,
        });

        return ws;
      },
    });

    window.WebSocket = WebSocketProxy;
  }, '1');
}
