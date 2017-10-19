# Feed Reader Testing

## Table of Contents
- Overview
- Instruction
- Test cases
- Jasmine features
- Dependencies
- Resources

## Overview
- This project is a part of FEWD-ND(Front End Web Developer Nano-degree) 's assignment @Udacity.
- This project provides sliding menu with links for feeds.
- Each feed will bring up a list of articles asynchronously.
- The main purpose of this project is not building feed web-site.
- The main purpose is using Jasmine on the web site for unit test.

## Instruction
- All required dependencies have to be located.
- Open index.html file on a web-browser (preferably Google Chrome).
- Scroll down to the bottom.
- You will see all jasmine testing result.
- or You could click on each test to see the result.

## Test cases
- Tests on RSS feeds
  - #1: make sure the variable, allFeeds, is defined.
  - #2: make sure url property of each feed in the allFeeds variable is defined and is not empty
  - #3: make sure name property of each feed in the allFeeds variable is defined and is not empty
- Tests on The menu (sliding menu w/ hamburger icon)
  - #1: make sure the menu is invisable as default (initial page load)
  - #2: make sure that a sequence of click events on hamburger icon changes the menu to appear and disappear
- Tests on Initial Entries
  - #1: make sure ajax function works ok by checking the length of feeds loaded after the ajax.
- Tests on New Feed Selection
  - #1: make sure that contents are replaced with selected feed after ajax fetch.

## Jasmine features
- describe
- it
- expect w/ not, toBe, toBeGreaterThan, toBeDefined, and so on.
- handling asynchronous test w/ done.

## Dependencies
- Jasmine 2.1.2: https://jasmine.github.io
- jQuery: http://jquery.com
- handlebarJs: http://handlebarsjs.com
- google jsapi: http://google.com/jsapi

## Resources
- /js 
  - app running logic including some global variable used in jasmine testing.
- /jasmine/lib
  - jasmine library directory
- /jasmine/spec
  - test cases' specs are defined w/ jasmine.