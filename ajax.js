$(document).on("submit", "#contact-form", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  formData.append("send_email_message", true);

  $.ajax({
    type: "POST",
    url: "message-submit.php",
    data: formData,
    processData: false,
    contentType: false,
    success: function (response) {
      console.log(response);
    },
  });
});
