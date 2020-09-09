import express from 'express';
const ftp = require('basic-ftp')
const router = express.Router();

router.post('/', async (req, res, next) => {
  const client = new ftp.Client()
  client.ftp.verbose = true
    try {
      await client.access({
        host: req.body.host,
        user: req.body.username,
        password: req.body.password,
        secure: true
      })
      res.json({data: await client.list('-a')});
      console.log(client)
    }
    catch(err) {
      res.json({err: err});
    }
});

export default router;
