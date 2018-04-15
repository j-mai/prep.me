let subjectButton = document.getElementById('subjectChosen');
let timeButton = document.getElementById('timeChosen');
let onOffButton = document.getElementById('onOff');

window.onload = function() {
  console.log("onload");
  chrome.storage.sync.get('subject', function(result) {
    console.log(result.subject);
    subjectButton.innerHTML = result.subject;
  });

  chrome.storage.sync.get('status', function(result) {
    console.log(result);
    onOffButton.innerHTML = result.status;
  });

};

subjectButton.onclick = function(element) {
  console.log("clicked");
  chrome.tabs.create({url: "options.html"});
};

timeButton.onclick = function() {
  console.log("clicked");
  chrome.tabs.create({url: "options.html"});
};
