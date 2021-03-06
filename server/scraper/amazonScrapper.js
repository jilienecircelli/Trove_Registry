const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const db = require('../models');


function amazonScraper(url){
    return(async () => {
    let item = {}
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto(url);

    let html = await page.content();
    const $ = cheerio.load(html);
    console.log($.html())
    let title = $('#productTitle').text().trim();
    let price = $('#priceblock_ourprice').text();
    let description = $('#feature-bullets > ul > li > span.a-list-item').first().text().trim()
    let imgSource = $('[data-a-image-name=landingImage]').attr('src')
    console.log('=========================')
    console.log(title)
    console.log(price)
    console.log(description)
    console.log(imgSource)
    browser.close()
    item ={
        'url': url,
        'title': title,
        'price': price,
        'description': description,
        'imgsrc': imgSource
    }
    db.Items.findOneAndUpdate({url: item.url}, item, {new: true, upsert: true}).then((response) => console.log(response))
})
}
