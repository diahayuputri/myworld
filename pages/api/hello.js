// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mysql from 'serverless-mysql'
const db = mysql({
  config : {
    host : 'localhost',
    port : '3306',
    database : 'db_myworld',
    user : 'root'
  }
})
async function exeQuery({qry}){
  try {
    const data = await db.query(qry)
    await db.end()
    return data
  }catch(err){
    console.log(err)
  }
}
export default async(req, res) => {
  try {
    const data = await exeQuery({
      qry : 'select * from tbl_kategori'
    })
    res.status(200).json(data)
  }catch(err){
    console.log(err)
  }
}
