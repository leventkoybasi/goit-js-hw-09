document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const activeTab = urlParams.get('tab');

  if (activeTab === 'gallery') {
    document.getElementById('gallery-tab').classList.add('active');
  } else if (activeTab === 'form') {
    document.getElementById('form-tab').classList.add('active');
  }
});
