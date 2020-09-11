const nodeAbi = require('node-abi')
 
//make sure to change version info with your version
console.log("node:"+nodeAbi.getAbi('12.18.2', 'node'));
console.log("electron:"+nodeAbi.getAbi('9.3.0', 'electron'));