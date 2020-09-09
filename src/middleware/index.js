import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const authHeader = req.headers['authorization']
  console.log(req.headers['authorization'])
  //const token = authHeader && authHeader.split(' ')[1]
  //if (token == null) res.sendStatus(401)

  //jwt.verify(token, "qSbgjG48kHEpsLWYD8Ckjj#W+Hhn*5qL@bGaa6t*!-3$LYaVkct4NQE6=n$NJ?mqMzD%vy7LNw_yCfp5?HCk9tbwN*ms=%ahma?SU7MyM=rA73Qsu?2fHVPQeMw9^CUbQcFEw#4V5K?dSz6s@naB^*@zM!#L^B2zPx4KD=XyffPF+3aKjw6m+xNSudD&tx3ebX#Svydp7m8#p7NdE-3bxU&Ww%k6dYhN?pU*wdJf856J48jDuCbJnCfDnYTsH2jw", (err, user) => {
  //  console.log(err)
  //  if (err) res.sendStatus(403);
  //  req.user = user
  //  next()
  //})
}

export default auth;