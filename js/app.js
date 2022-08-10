// ALERT BANNER 
const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML = `<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>`;
// create event to close the alert banner
alertBanner.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

//Messaging Section
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
// ensure user and message fields are filled out
send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user  and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user before sending");
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});
