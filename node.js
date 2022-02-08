const tabletojson = require("tabletojson").Tabletojson;
module.exports = function (RED) {
    function FunctionNode(n) {
        RED.nodes.createNode(this, n);
        var node = this;
        this.name = n.name;

        for (var key in n) {
            node[key] = n[key] || "";
        }
        this.on('input', function (msg) {
            for (var i in msg) {
                if (i !== 'req' | i !== 'res' | i !== 'payload' | i !== 'send' | i !== '_msgid') {
                    node[i] = node[i] || msg[i];
                }
            }
            msg.payload = tabletojson[node.api](msg.payload);
            node.send(msg);
        });
    }
    RED.nodes.registerType("tabletojson", FunctionNode);
};
