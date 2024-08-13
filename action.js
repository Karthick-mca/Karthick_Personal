 // Function to load content into the content area
 function loadContent(target) {
  fetch(target)
      .then(response => response.text())
      .then(html => {
          document.getElementById('content-area').innerHTML = html;
      });
}

// Load the default content (summary.html) when the page loads
window.onload = function() {
  // Load summary.html by default
  loadContent('home.html');

  // Set the first menu item as active
  document.querySelector('.sidebar ul li a').classList.add('active');
};

// Add event listeners to sidebar menu items
document.querySelectorAll('.sidebar ul li a').forEach(item => {
  item.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove 'active' class from all links
      document.querySelectorAll('.sidebar ul li a').forEach(link => {
          link.classList.remove('active');
      });

      // Add 'active' class to the clicked link
      this.classList.add('active');

      // Load the content
      const target = this.getAttribute('data-target');
      loadContent(target);
  });
});


// download
const downloadButton = document.querySelector('.download-button');

downloadButton.addEventListener('click', async () => {
  const response = await fetch('karthick_developer_fresher.pdf');
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'karthick_developer_fresher.pdf';
  a.click();
});
