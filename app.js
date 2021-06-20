const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "copy_garbage",
    password: "11qqaa"
});

conn.connect((err) => {
    if(err){
        console.log(err);
        return err;
    } else {
        console.log('DB connected');
    }
});

let query = "SELECT * FROM users";

conn.query(query,(err, res) => {
    if(err) console.log(err)
    console.log(res);
})

conn.end((err) => {
    if(err){
        console.log(err);
        return err;
    } else {
        console.log('DB disconnected');
    }
});
