/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

$(function() {
  /*
    Tests on RSS feeds
    - #1('are defined')
      : make sure the variable, allFeeds, is defined.
    - #2('have non-empty URLs')
      : make sure url property of each feed in the allFeeds variable
        is defined and is not empty
    - #3('have non-empty name')
      : make sure name property of each feed in the allFeeds variable
        is defined and is not empty
  */
  describe('RSS Feeds', function() {
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('have non-empty URLs', function() {
      allFeeds.forEach(function(feed){
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      });
    });

    it('have non-empty name', function() {
      allFeeds.forEach(function(feed){
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      });
    });
  });

  /*
    Tests on The menu (sliding menu w/ hamburger icon)
    - #1('hidden as default')
      : make sure the menu is invisable as default (initial page load)
    - #2('changes visibility when the menu icon is clicked')
      : make sure that a sequence of click events on hamburger icon
        changes the menu to appear and disappear
  */
  describe('The menu', function(){
    beforeEach(function(){
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    it('hidden as default', function() {});

    it('changes visibility when the menu icon is clicked', function() {
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBeFalsy();

      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBeTruthy();
    });
  });

  /*
    Tests on Initial Entries
    - #1('ensures at least a single .entry element within the .feed container after loadFeed() is called')
      : make sure ajax function works ok
        by checking the length of feeds loaded after the ajax.
  */
  describe('Initial Entries', function(){
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    it('ensures at least a single .entry element within the .feed container after loadFeed() is called', function(done){
      expect($('.feed .entry').length).toBeGreaterThan(0);
      done();
    });
  });

  /*
    Tests on New Feed Selection
    - #1('ensures when a new feed is loaded by the loadFeed() that the content actually changes')
      : make sure that contents are replaced with selected feed
  */
  describe('New Feed Selection', function() {
    let beforeContents;
    let afterContents;

    // loadFeed with id#1, after loadFeed with id#2 is completed.
    beforeEach(function(done) {
      loadFeed(0, function() {
        beforeContents = $('.feed').html();
        afterContents = $('.feed').html();

        expect(beforeContents).toBe(afterContents);
        loadFeed(1, done);
      });
    });

    it('ensures when a new feed is loaded by the loadFeed() that the content actually changes', function(done) {
      afterContents = $('.feed').html();
      expect(beforeContents).not.toBe(afterContents);
      done();
    });
  });
}());
