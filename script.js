function submitForm() {
  const form = document.getElementById("surveyForm");
  if (form.checkValidity()) {
    const mobileInput = document.getElementById("mobile");
    const mobileValue = mobileInput.value;

    if (!/^\d{10}$/.test(mobileValue)) {
      window.alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const formData = new FormData(form);
    let popupContent = "<ul>";
    formData.forEach((value, key) => {
      popupContent += `<li><strong>${key}:</strong> ${value}</li>`;
    });
    popupContent += "</ul>";
    const popup = document.getElementById("popup");
    popup.innerHTML = popupContent;
    popup.style.display = "block";
    setTimeout(resetForm, 5000);
    window.alert("Form submitted successfully!");
  } else {
    form.reportValidity();
  }
}

function resetForm() {
  const form = document.getElementById("surveyForm");
  form.reset();
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}
