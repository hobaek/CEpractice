chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.txt == "Hello") {
  replace(message.selectedImage, sender, sendResponse);
  }
  });
  function selectAndReplace(message, sender, sendResponse) {
  let imgs = document.querySelectorAll('img');
  
  switch (message) {
  
  case "image1":
  for (imgElt of imgs) {
  let file = 'images/kitten.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image2":
  for (imgElt of imgs) {
  let file = 'images/puppy.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  
  case "image3":
  
  for (imgElt of imgs) {
  let file = 'images/panda.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image4":
  for (imgElt of imgs) {
  let file = 'images/deer.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  case "image5":
  for (imgElt of imgs) {
  let file = 'images/rabbit.jpg';
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  }
  break;
  }
  }