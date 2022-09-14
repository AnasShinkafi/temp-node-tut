const os = require('os')

//infor about the current user
const user = os.userInfo()
console.log(user);
//method return the system uptime in seconds
console.log(`The system Uptime ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);
