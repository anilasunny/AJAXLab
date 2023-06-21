$(document).ready(function() {
    $('#calculate').click(function() {
      const num1 = $('#num1').val();
      const num2 = $('#num2').val();
      console.log(num1,'hehehe')
      $.ajax({
        url: '/add',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ num1, num2 }),
        success: function(response) {
          $('#result').text('Result: ' + response.result);
          $('body').css('background-color', response.color);
        }
      });
    });
  });