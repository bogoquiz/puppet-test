const puppeteer = require('puppeteer');

(async () => {
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
})();
