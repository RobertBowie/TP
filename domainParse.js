const Test = require('./test');
/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
*/

function domainName(str) {

};

// Test
Test.expect(domainName("http://github.com/carbonfive/raygun") == "github", 'It should deal with http://domainName addresses')
Test.expect(domainName("http://www.zombie-bites.com") == "zombie-bites", 'It should deal with http://www.domainName addresses')
Test.expect(domainName("https://www.cnet.com") == "cnet", 'It should deal with https://www.domainName addresses')
Test.assertEquals(domainName("http://google.com"), "google", "http://google.com");
Test.assertEquals(domainName("http://google.co.jp"), "google", "http://google.co.jp");
Test.assertEquals(domainName("www.xakep.ru"), "xakep", "www.xakep.ru");
Test.assertEquals(domainName("https://youtube.com"), "youtube", "https://youtube.com");
