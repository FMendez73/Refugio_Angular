const config = require('../dbconfig.js');

async function query(sql) {
  const conection = await mysql.createConection(config.db);
  const [results,] = await conection.execute(sql);

  if (!results) {
    return [];
  }
  return results;
}

module.exports={

  query

};
