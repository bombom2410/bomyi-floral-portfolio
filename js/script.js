$(document).ready(function () {
  $('.gallery img').on('click', function () {
    const alt = $(this).attr('alt');
    alert(`This is ${alt}`);
  });
});
