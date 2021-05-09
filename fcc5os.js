const os = require('os')
console.log(os.cpus)

//info of the user
const user=os.userInfo()
//console.log(user)

//cpu
//console.log(os.cpus())

//system uptime
console.log(`the system uptime is :=${os.uptime() } minutes`)