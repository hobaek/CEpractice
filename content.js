chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.txt == "Hello") {
  selectAndReplace(message.selectedImage, sender, sendResponse);
  }
  });
  function selectAndReplace(message, sender, sendResponse) {
  let imgs = document.querySelectorAll('img');
  
  switch (message) {
  
  case "image1":
  for (imgElt of imgs) {
  let file = 'images/1.png';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image2":
  for (imgElt of imgs) {
  let file = 'images/2.jpeg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  
  case "image3":
  
  for (imgElt of imgs) {
  let file = 'images/3.jpeg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image4":
  for (imgElt of imgs) {
  let file = 'images/4.jpeg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image5":
  for (imgElt of imgs) {
  let file = 'images/5.jpeg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  }
  }