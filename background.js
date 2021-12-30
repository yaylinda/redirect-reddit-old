chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {
        redirectUrl: details.url.replace("old.reddit.com", "reddit.com")
    }
  },
  {
    urls: ["*://old.reddit.com/*"],
    types: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other",
    ],
  },
  ["blocking"]
);
