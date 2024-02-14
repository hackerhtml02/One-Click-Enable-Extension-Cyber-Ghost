// Extension ID of the extension you want to enable
var extensionId = "your_extension_id";

// Function to enable the extension
function enableExtension() {
  chrome.management.setEnabled(extensionId, true, function() {
    if (chrome.runtime.lastError) {
      console.error("Error enabling extension: " + chrome.runtime.lastError.message);
    } else {
      console.log("Extension enabled successfully");
    }
  });
}

// Event listener for when a new tab is created
chrome.tabs.onCreated.addListener(function(tab) {
  // Call the function to enable the extension
  enableExtension();
});
