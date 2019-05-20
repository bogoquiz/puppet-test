const puppeteer = require('puppeteer');

const http = require('http')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
  puppeteer.launch({headless:true, sandbox:false, args : [
      '--remote-debugging-port=9222','--disable-setuid-sandbox', '--no-sandbox'
  ]}).then(async (result) => {
    const page = await result.newPage()
    console.log('ho')
    await page.goto('https://futbol-twit.herokuapp.com/');
    await page.screenshot({path: 'example.png'});
  }).catch((err) => {
    console.log('error',err)
  });
    //const page = await browser.newPage();
    //await page.goto('https://futbol-twit.herokuapp.com/');
    //await page.screenshot({path: 'example.png'});
    //page.on('console', msg => {
    //for (let i = 0; i < msg.args().length; i++) {
    //  console.log(msg.args()[i]);
    //	}
    //});
    //await browser.close();
  } 
)

server.listen(port, () => {
  console.log(`Server running at port ${port}`) 
})