let subjectButton = document.getElementById('subjectChosen');
let timeButton = document.getElementById('timeChosen');
let testButton = document.getElementById('test');
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
