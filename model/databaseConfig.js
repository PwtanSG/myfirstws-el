var mysql=require('mysql');

var dbConnect={

    getConnection:function(){
        var conn=mysql.createConnection({
           // host:"furniture.c2cj27untbbn.us-east-1.rds.amazonaws.com",
           host:"rds-mysql-10mintutorial.ckpwduroihfq.us-east-1.rds.amazonaws.com",
            user:"root",
            password:"root1234",
            database:"furniture"

        }

        );

        return conn;

    }
}
module.exports=dbConnect;
