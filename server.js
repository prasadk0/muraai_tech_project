const express = require('express')
const mongoose = require('mongoose')
const bwipjs = require('bwip-js');
// const ShortUrl = require('./models/shortUrl')
// const mongoose = require('mongoose')
const shortId = require('shortid')

const shortUrlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortId.generate
  },

})

ShortUrl= mongoose.model('ShortUrl', shortUrlSchema)

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
});
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls })
})
app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })
  res.redirect('/')
})
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)
  shortUrl.clicks++
  shortUrl.save()
    res.redirect(shortUrl.full)
})




app.get('/generateBarcode/:link', (req, res) => {
  const link = req.params.link;


  bwipjs.toBuffer(
    {
      bcid: 'qrcode', 
      text: link,
      scale: 5, 
      height: 37, 
    },
    (err, png) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
  
        res.set('Content-Type', 'image/png');
  
        res.send(png);
      }
    }
  );
});




app.listen(process.env.PORT || 5000);