/*when chrome extension runs, get the stored value from storage, and if there is none,
sets the subject arbitrarily to arithmetic
*/
chrome.storage.sync.get('subject', function(result) {
  if (result.subject == null) {
    chrome.storage.sync.set({'subject': 'arithmetic'}, function() {
      console.log("arithmetic set as current subject");
    });
  }
});

chrome.storage.sync.get('status', function(result) {
  if (result.subject == null) {
    chrome.storage.sync.set({'status': false}, function() {
      console.log("status set as off");
    });
  }
})
