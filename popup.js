let subjectButton = document.getElementById('subjectChosen');
let timeButton = document.getElementById('timeChosen');
let testButton = document.getElementById('test');
let onOffButton = document.getElementById('onOff');

//upon the popup window loading, let the user know which subject is chosen and whether the
//extension is on or off
window.onload = function() {
  console.log("onload");
  chrome.storage.sync.get('subject', function(result) {
    console.log(result.subject);
    subjectButton.innerHTML = result.subject;
  });

  chrome.storage.sync.get('status', function(result) {
    console.log(result.status);
    if (result.status) {
      onOffButton.innerHTML = "ON";
    } else {
      onOffButton.innerHTML = "OFF";
    }
  });

};

//navigate to options page if subject button is clicked
subjectButton.onclick = function(element) {
  console.log("subject Button clicked");
  chrome.tabs.create({url: "options.html"});
};

//navigate to options page if time button is clicked
timeButton.onclick = function() {
  console.log("time button clicked");
  chrome.tabs.create({url: "options.html"});
};

//turn on/off extension if on/off button is clicked
onOffButton.onclick = function() {
  console.log("on/off button clicked");
  chrome.storage.sync.get('status', function(result) {
    var status = !result.status;
    chrome.storage.sync.set({'status': status}, function() {
      if (status) {
        onOffButton.innerHTML = "ON";
      } else {
        onOffButton.innerHTML = "OFF";
      }
    });
  });
}

//test function for testing connection to quizlet
testButton.onclick = function() {
  console.log("clicked time");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var questionArray = JSON.parse(this.responseText);
      var randomQuestion = Math.floor(Math.random() * questionArray.length);

      document.getElementById("test-text").innerHTML = questionArray[randomQuestion]['definition'];
      document.getElementById("answer").innerHTML = questionArray[randomQuestion]['term'];
    }
  };
  xhttp.open("GET", "https://cors-anywhere.herokuapp.com/https://api.quizlet.com/2.0/sets/185053801/terms?client_id=YNGAZgyNUf", true);
  xhttp.send();
};
