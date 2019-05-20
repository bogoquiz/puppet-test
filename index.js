const puppeteer = require('puppeteer');

const http = require('http')

const port = process.env.PORT

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end('<h1>Hello, World!</h1>')
  pepper()
})

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
  
})
async function pepper() {
  const browser = await puppeteer.launch({headless:true, sandbox:false, args : [
    '--remote-debugging-port=9222','--disable-setuid-sandbox', '--no-sandbox'
  ]});
  const page = await browser.newPage();
  await page.goto('https://futbol-twit.herokuapp.com/');
  page.on('console', msg => {
  console.log('hola')
  //for (let i = 0; i < msg.args().length; i++) {
  //  console.log(msg.args()[i]);
  //	}
  });
  //await browser.close();
}