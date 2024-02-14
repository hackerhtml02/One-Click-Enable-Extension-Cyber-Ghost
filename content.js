// Extension ID of the extension you want to enable
var extensionId = "your_extension_id";

// Enable the extension with the given extensionId
chrome.management.setEnabled(extensionId, true, function() {
  if (chrome.runtime.lastError) {
    console.error("Error enabling extension: " + chrome.runtime.lastError.message);
  } else {
    console.log("Extension enabled successfully");
  }
});