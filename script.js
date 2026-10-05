document.getElementById("rsvpForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.currentTarget;
  const formData = new FormData(form);
  const name = formData.get("name");
  const messageBox = document.getElementById("formMessage");

  messageBox.textContent = `Thank you, ${name}! Your RSVP has been received.`;
  form.reset();
});
