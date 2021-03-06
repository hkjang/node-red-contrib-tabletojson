node-red-contrib-tabletojson
================

Node-RED node for tabletojson

Wrapper **tabletojson** - https://www.npmjs.com/package/tabletojson

## Install

To install the stable version use the `Menu - Manage palette - Install`
option and search for node-red-contrib-tabletojson, or run the following
command in your Node-RED user directory, typically `~/.node-red`

    npm install node-red-contrib-tabletojson

## Sample node-red flow
```json
[{"id":"ee409beda2ec5e96","type":"tabletojson","z":"4ed881e301dc08ea","name":"","api":"convert","x":630,"y":600,"wires":[["62bbd51cf9dadb54"]]},{"id":"80a400d33264af36","type":"inject","z":"4ed881e301dc08ea","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payloadType":"date","x":260,"y":600,"wires":[["c8a5edb535416944"]]},{"id":"c8a5edb535416944","type":"function","z":"4ed881e301dc08ea","name":"set html","func":"msg.payload = '<p /><table data-layout=\"default\" ac:local-id=\"012731d9-dc45-47e8-8374-d9932ed9a19c\"><colgroup><col style=\"width: 226.67px;\" /><col style=\"width: 226.67px;\" /><col style=\"width: 226.67px;\" /></colgroup><tbody><tr><th><p><strong>a</strong></p></th><th><p><strong>b</strong></p></th><th><p><strong>c</strong></p></th></tr><tr><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td></tr><tr><td><p>4</p></td><td><p>5</p></td><td><p>6</p></td></tr></tbody></table><p />'\nreturn msg;\n","outputs":1,"noerr":0,"initialize":"","finalize":"","libs":[],"x":440,"y":600,"wires":[["ee409beda2ec5e96"]]},{"id":"62bbd51cf9dadb54","type":"debug","z":"4ed881e301dc08ea","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","targetType":"msg","x":830,"y":600,"wires":[]}]
```

## Sample request html 
```javascript
msg.payload = '<p /><table data-layout="default" ac:local-id="012731d9-dc45-47e8-8374-d9932ed9a19c"><colgroup><col style="width: 226.67px;" /><col style="width: 226.67px;" /><col style="width: 226.67px;" /></colgroup><tbody><tr><th><p><strong>a</strong></p></th><th><p><strong>b</strong></p></th><th><p><strong>c</strong></p></th></tr><tr><td><p>1</p></td><td><p>2</p></td><td><p>3</p></td></tr><tr><td><p>4</p></td><td><p>5</p></td><td><p>6</p></td></tr></tbody></table><p />'
```

## Sample results
```json
[[{"a":"1","b":"2","c":"3"},{"a":"4","b":"5","c":"6"}]]
```
