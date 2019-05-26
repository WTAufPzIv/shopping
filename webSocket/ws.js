var fs = require('fs'); 
var http=require('http');
var server=http.createServer(function (req, res) {
    res.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    res.end("This is a WebSockets server!");
});
var qs = require('querystring'); //
var ws=require('ws');
server.listen(80, function listening() {
    console.log('服务器启动成功！');
});
var url = require('url');
var app = require('express')
//验证函数
function ClientVerify(info) {
    var ret = false;//拒绝
    //url参数
    var params = url.parse(info.req.url, true).query;
    return true;
 
}
var wss = new ws.Server( { server: server,verifyClient: ClientVerify } );
 
var mysql = require('mysql');

// 创建数据池
const pool  = mysql.createPool({
    host     : 'localhost',   // 数据库地址
    port     : '3306',
    user     : 'root',    // 数据库用户
    password : 'cxxh19981014',   // 数据库密码
    database : 'bootdo'  ,// 选中数据库
    charset  : 'UTF8MB4'
})
/*接收一个sql语句 以及所需的values
这里接收第二参数values的原因是可以使用mysql的占位符 '?'
比如 query(`select * from my_database where id = ?`, [1])
好像可以直接使用pool.query，暂时不明*/
let query = function(sql,values,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{

            console.log("数据库已连接")
            conn.query(sql,values,function(err,results,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(err,results,fields);
                //connection.release();//用于释放连接，防止因链接资源不足而导致的断开连接
            });
        }
    });
};
module.exports=query;
 
wss.on('connection', function connection(ws) {
    console.log('链接成功！');
    //console.log(ws);
    //查询历史聊天记录 广播给连接的客户端
     var sql='select * from bootdo';
    // console.log('sql语句',sql);
     query(sql,function (err,res,fields) {
         console.log('sql操作返回：', res);
         if(res!=null){
             ws.send(JSON.stringify(res));
         }
     });
    //监听客户端发送得消息
    ws.on('message', function incoming(data) {
        console.log('来自客户端得message:',data);
        //保存客户端发送得消息到数据库
        var sql="insert into bootdo(msg) values(?)";
        //var sqladd = [data.msg,data.name]
        //console.log('sql语句',sql);
        query(sql,data,function (err,res,fields) {
            console.log('sql操作返回：',res);//res.insertId
        });
        var sendData=JSON.stringify([{msg:data}])
        /**
         * 把消息发送到所有的客户端
         * wss.clients获取所有链接的客户端
         */
        wss.clients.forEach(function each(client) {
            client.send(sendData);
        });
    });
});
 

 
 
 
