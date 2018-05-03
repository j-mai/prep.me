//after navigating to options page, saves the information to chrome storage when
//user clicks save.

function save_info() {
  var subject = document.querySelector('input[name="subject"]:checked').value;
  chrome.storage.sync.set({'subject': subject}, function()
  {
    var status = document.getElementById('saveStatus');
    status.textContent = 'Options saved.';
    console.log('options saved');
  });
};

document.getElementById('save').addEventListener('click',
    save_info);
