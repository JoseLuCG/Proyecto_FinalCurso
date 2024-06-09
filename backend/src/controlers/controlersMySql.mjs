import { mySqlConn } from "../connection/connection.mjs";

function singUpUser(req, res) {
/* insertUser (
	p_profileName VARCHAR(50), p_userName VARCHAR(50),p_password VARCHAR(50),p_location VARCHAR(50),
    p_age INT,p_description VARCHAR(1000),p_email VARCHAR(50)) */

    const { nameProfile,
        nameUser,
        password,
        location,
        age,
        description,
        email,
        interest
    } = req.body;
    let sql = `CALL insertUser("${nameProfile}", "${nameUser}", "${password}", "${location}", ${age}, "${description}", "${email}")`;
    mySqlConn.query(sql, function (err) {
      if (err) console.log(err);
      else console.log("Correcto");
      res.send();
    });
};

export {
    singUpUser
};