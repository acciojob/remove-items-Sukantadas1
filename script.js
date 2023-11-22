//your JS code here. If required.
 function removeSelectedColor() {
      // Get the dropdown element
      var dropdown = document.getElementById("colorSelect");

      // Get the selected index
      var selectedIndex = dropdown.selectedIndex;

      // Remove the selected option
      if (selectedIndex !== -1) {
        dropdown.remove(selectedIndex);
      }
    }