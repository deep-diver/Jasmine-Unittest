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
        expect(feed['url']).toBeDefined();
        expect(feed['url']).not.toBe(' ');
      });
    });

    it('have non-empty name', function() {
      allFeeds.forEach(function(feed){
        expect(feed['name']).toBeDefined();
        expect(feed['name']).not.toBe(' ');
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
    it('hidden as default', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });

    it('changes visibility when the menu icon is clicked', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);

      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);

      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
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
      loadFeed(0, function(){
        done();
      })
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
        after ajax fetch.
    - #2('ensures when a new feed is loaded by the loadFeed() the title at the top equals from the menu')
      : make sure that the title at the top has the same value as in the feed button
  */
  describe('New Feed Selection', function() {
    let beforeContents;
    let testId;

    // initially, feed-id, 0 is selected
    // after saving its contents, change the feed-id to 1
    // then loadFedd on the id, 1.
    beforeEach(function(done) {
      beforeContents = $('.feed');
      testId = 1;

      loadFeed(testId, function() {
        done();
      });
    });

    it('ensures when a new feed is loaded by the loadFeed() that the content actually changes', function(done) {
      const afterContents = $('.feed');
      expect(beforeContents).not.toBe(afterContents);
      done();
    });

    it('ensures when a new feed is loaded by the loadFeed() the title at the top equals from the menu', function(done) {
      const menuTitle = $('.feed-list li a')[testId].text;
      const topTitle = $('.header-title').text();
      expect(menuTitle).toBe(topTitle);
      done();
    });
  });
}());
