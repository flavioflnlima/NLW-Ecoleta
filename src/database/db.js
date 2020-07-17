//importar a dependencia do SQLite3
const sqllite3 = require("sqlite3").verbose();

//cria objeto que faz operações no BD
const db = new sqllite3.Database("./src/database/database.db");

module.exports = db;

//utilizar o objeto de banco de dados, para as operações
// db.serialize(() => {
//   db.run(`
//         CREATE TABLE IF NOT EXISTS places(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `);

//   const query = `INSERT INTO places(
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items

//         ) 
//         VALUES(
//             ?,?,?,?,?,?,?
//         )`;

//   const values = [
//     "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1101&q=80",
//     "Paperside",
//     "Guilherme",
//     "Número 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Papeis e papelao",
//   ];

//   function afterInsertDate(err) {
//     if (err) {
//       return console.log(err);
//     }

//     console.log("Cadastradado com sucesso");
//     console.log(this);
//   }

//     db.run(query, values, afterInsertDate);
    
//     // db.all(`SELECT * FROM places`, function (err, rows) {
//     //     if (err) {
//     //         return console.log(err)
//     //     }
//     //     console.log(rows);
//     // })

//     // //delete
    // db.run(` DELETE FROM places WHERE id = ? `, [2], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }
    //     console.log("deletado com sucesso")
    // })


// });
