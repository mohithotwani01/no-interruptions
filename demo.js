// listens for content scripts to request the cookie 
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        // Respond with the value of the cookie 
        if (message === 'get-cookie') {
            chrome.cookies.get({"url": "http://www.example.com", "name": "cookie_example"}, function(cookie) {
                // prints the correct value
                console.log(cookie.value);
                // will send the correct value in due time
                sendResponse(cookie.value);
                });
             }
      });

     
     return true; // CRUCIAL! indicates that an asynchronous response is being processed

     /* anything here will be ignored */

   }
});