# demo-test

Overall : The purpose of this to show test cases along with a framework capabilities. 

Which Framework : Nightwatch (http://nightwatchjs.org)


How do I install : clone git repo & run npm install which will add all dependencies



How do I run Tests : nightwatch -e chrome,safari,iphone,crossbrowser_iPhone,crossbrowser_android

  -Yes it can run test parallely. Any string starting with crossbrowser will run your test in cloud similar like saucelab

 -iPhone profile will test on your local machine using appium

 -All available browsers are defined in nightwatch.json under "test settings"

How I can reuse existing steps:

   Two ways

    1) By calling methods in sample.js (import gotoHomepage in your every test to start homepage)

    2) By using custom commands. Eg. tests/custom_commands/search_item.js

           This file demonstrates how to write reusable comamnds.

           You can use search_item("TV") or search_item("iPhone") to search everytime

I want to see failure/pass reports:

    I have added reports under /reports folder

    You can also view screenshot for failures under /reprots/screenshots

        - Yes one of the screenshot shows the result page was in grid view (possibly some Abacus experiement)

What are basic configuration files made :

     nightwatch.json => manages all configuration for tests, report, screenshot,browser etc.

     package.json => to get started with install & execution

     sample.js => Test Case file

     search_item.js => reuse custom commands

Tradeoff / More Time:

    I was having at places issues with clicking when you try to click cart icon & checkout page. So, get unblocked I used direct deeplink

    I have used pause event which is similar like wait. I can replace with waitForelementPresent method

  If time permitted, I would also have generlized few methods to make test very reusable, less verbose & easy to read.

