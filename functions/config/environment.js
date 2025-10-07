let nodeEnv = process.env.nodeEnv || 'default';

try {
  const functions = require('firebase-functions');
  if (functions.config() && functions.config().environment?.node_env) {
    nodeEnv = functions.config().environment.node.env;
  }
} catch (error) {
  //estamos en v2 o local= ignoramos
  console.log("functions.config() no disponible en este entorno, usando NODE_ENV")
}

console.log('nodeEnv', nodeEnv)

let environmentFile;
switch (nodeEnv) {
  case 'prod':
    environmentFile = '.env';
    break;
  case 'dev':
    environmentFile = '.env.dev';
    break;
  case 'test':
    environmentFile = '.env.test';
    break;

  default:
    environmentFile = '.env.test';

    break;
}

//cargar variables desde el archivo correspondiente
require('dotenv').config({ path: environmentFile});