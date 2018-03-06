function myFunction() {
  if (document.forms["form"].name.value.length > 0 &&
      document.forms["form"].booking.value.length > 0 &&
      document.forms["form"].email.value.length > 0 &&
      document.forms["form"].phone.value.length > 0 &&
      document.forms["form"].comment.value.length > 0
    ) {
      document.getElementById("nextButtonSection-paragraph").style.display = "block";
    }
    return false;
}
