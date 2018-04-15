let subjectButton = document.getElementById('subjectChosen');
let timeButton = document.getElementById('timeChosen');

subjectButton.onclick = function(element) {
  console.log("clicked");
  chrome.tabs.create({url: "options.html"});
};

timeButton.onclick = function() {
  console.log("clicked");
  chrome.tabs.create({url: "options.html"});
}

var subject;

function chrome.storage.local.get('subject', function () {

})


chrome.storage.local.get('eula', function(result){
        eulaV = result.eula;
        console.log(eulaV);
        });
    });
