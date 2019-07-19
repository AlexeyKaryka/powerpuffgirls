const puppeteer = require('puppeteer');

describe('Powerpuff girls main page', () => {
  let browser;
  let page

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false
    });
    page = await browser.newPage();

    page.emulate({
      viewport: {
      width: 1920,
      height: 1080
      },
      userAgent: ''
    });
  });
  afterEach(async () => {
    browser.close();
  });

  test('Contains episodes list with items', async () => {
    const episodesListSelector = '.episodesList';

    await page.goto('http://localhost:3000/');
    await page.waitForSelector(episodesListSelector);

    // Timer in order to get enough time for episodes fetching from api
    setTimeout(async () => {
      const episodeItems = await page.$eval(episodesListSelector, e => e.getElementsByClassName('episodeItem'));
      expect(episodeItems.length > 0).toBeTruthy();
    }, 3000)
  }, 10000);

  test('Clicking episode link leads to the episode page', async () => {
    const episodeLinkSelector = '.episodeLink'
    const episodeDetailsRoute = 'episode-details';

    await page.goto('http://localhost:3000/');
    await page.waitForSelector(episodeLinkSelector);

    const episodeLink = await page.$(episodeLinkSelector);
    await episodeLink.click();

    const currentHref = await page.evaluate(() => window.location.href);

    expect(currentHref.indexOf(episodeDetailsRoute) > -1).toBeTruthy();
  }, 10000);
});