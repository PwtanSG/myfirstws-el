var mysql=require('mysql');

var dbConnect={

    getConnection:function(){
        var conn=mysql.createConnection({
           // host:"furniture.c2cj27untbbn.us-east-1.rds.amazonaws.com",
           //host:"rds-mysql-10mintutorial.ckpwduroihfq.us-east-1.rds.amazonaws.com",
	    host:"bdd-db.csn6grmspbkl.us-east-1.rds.amazonaws.com",
            user:"admin88",
            password:"12345678",
            database:"spmart"

        }

        );

        return conn;

    }
}
module.exports=dbConnect;
