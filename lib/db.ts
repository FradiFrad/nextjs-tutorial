const pgp = require('pg-promise')();

// Get the values for these variables from configuration

export const Db = pgp(`postgres://${process.env.user}:${process.env.password}@${process.env.host}:${process.env.port}/${process.env.database}`)

// Then you can await on it in an async function:
// const plant = await Db.one('SELECT * FROM myapp.posts WHERE id=$1', id);

