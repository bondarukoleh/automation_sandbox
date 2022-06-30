To start:
```shell
./node_modules/.bin/cypress open
```

Place for imports by default - `support/index.js` \
Here we can add libraries, event listeners, changes to cy default behaviour, hooks, etc.

### Winston
Have a few levels:
```json
{
  "error": 0,
  "warn": 1,
  "info": 2,
  "http": 3,
  "verbose": 4,
  "debug": 5,
  "silly": 6
}
```
