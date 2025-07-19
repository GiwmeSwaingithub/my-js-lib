// Enhanced security measures
document.addEventListener('DOMContentLoaded', function() {
  // Disable right-click context menu
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Right-click is disabled on this page.');
    return false;
  });
  
  // Disable keyboard shortcuts for saving, copying, etc.
  document.addEventListener('keydown', function(e) {
    // Disable Ctrl+S, Ctrl+Shift+S, Cmd+S
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
      e.preventDefault();
      alert('Saving is disabled on this page.');
      return false;
    }
    // Disable Ctrl+C, Cmd+C
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
      e.preventDefault();
      alert('Copying is disabled on this page.');
      return false;
    }
    // Disable Print Screen
    if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 'p')) {
      e.preventDefault();
      alert('Screenshots/printing are disabled on this page.');
      return false;
    }
    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Cmd+Opt+I, Cmd+Opt+J, Cmd+Opt+C
    if (e.key === 'F12' || 
        ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase()))) {
      e.preventDefault();
      alert('Developer tools are disabled on this page.');
      return false;
    }
  });
  
  // Prevent drag and drop of images and text
  document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
  });
  
  // Prevent text selection
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
  });
  
  // Add protection against iframe embedding
  if (window.location !== window.parent.location) {
    window.top.location = window.location;
  }
  
  // Add watermark to all images
  document.querySelectorAll('img').forEach(img => {
    img.style.pointerEvents = 'none';
    img.setAttribute('draggable', 'false');
  });
    
  // Disable view source
  document.onkeydown = function(e) {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74))) {
      return false;
    }
  };
});