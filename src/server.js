import express from 'express'

const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "./src/view");

app.get('/account', function (req, res) {
  return res.render('account.ejs')
})
app.get('/baithi', function (req, res) {
  return res.render('baithi.ejs')
})
app.get('/ketqua', function (req, res) {
  return res.render('ketqua.ejs')
})
app.get('/thanhvien', function (req, res) {
  return res.render('thanhvien.ejs')
})
app.get('/waiting', function (req, res) {
  return res.render('waitingroom.ejs')
})
app.get('/quiz', function (req, res) {
  return res.render('Quiz.ejs')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 