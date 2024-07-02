
<script>
  /* JavaScript Functions */
  function showPopup() {
    document.getElementById('popupOverlay').style.opacity = '1';
    document.getElementById('popupOverlay').style.pointerEvents = 'auto';
  }

  function closePopup() {
    document.getElementById('popupOverlay').style.opacity = '0';
    document.getElementById('popupOverlay').style.pointerEvents = 'none';
  }

  document.addEventListener('DOMContentLoaded', function() {
    showPopup();  // Directly call for testing
  });

  document.getElementById('popupOverlay').addEventListener('click', function(event) {
    if (event.target === this) {
      closePopup();
    }
  });
</script>