### Playwright

Cool features:
1. Parallelization out of the box (workers and sharding on CI/CD github actions);
2. Conditional skip;
3. Test GENERATOR!!!;
4. You can debug some commands with `playwright` global object in browser's console.
5. It has detailed trace with each test.
6. Super easy setup for different tests set with `projects`, where you can setup as many
    options for your tests as you wish.
7. Interesting possibility to reduce time spend on login between each test with the shared logged
`page` among the tests, depend on test, describe, or worker.


#### Playwright MCP
Model Context Protocol allows plug in to a model (ChatGPT for example) an external tool (Playwright) \
Then Model get the API of the tool. With PW it is able to operate the browser

So you made MCP server from Playwright, and let a Model to be a client.

To start PW as a serer, you can add a file to .vscode folder
```json
{
    "servers": {
        "playwright": {
            "command": "npx",
            "args": [
                "@playwright/mcp@latest"
            ]
        }
    }
}
```

This will start the server.
Then you can open a chat with GitHub Copilot, and with right context you can ask Copilot to explore some resource. It could open a browser and serf in the internet.
