let http = require('http')
let users = [
  {
    id: 001,
    name: '海亮'
  },
  {
    id: 011,
    name: '虚竹'
  },
  {
    id: 022,
    name: '乔峰'
  }
]
let server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  if (req.url === '/api/users') {
    res.end(JSON.stringify(users))
  } else {
    res.end("Not Fond")
  }
})
server.listen(3001, function () {
  console.log("服务端api已经在3001端口启动，可供调用");

})