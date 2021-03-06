$(function(){
  bg_url = ''
  $('.deletePhoto').hide();
  $('.upload').click(function(){
    $('.photoPreview').trigger('click');
  })

  if ($('.profilePhoto').length){
    $('.photoPreview').hide()
  }

  $('.profilePhoto').click(function(){
    $('.profilePhoto').hide();
    $('.photoPreview').show().trigger('click');
  })
    $('.photoPreview').click(function(){
      $(this).attr('disabled', 'true');
      $('#uploadAvatar').trigger('click');
      $("#uploadAvatar").change(function(){
          $('.photoPreview').removeAttr('disabled');
          readURL(this);
      });
  })

  function readURL(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
              bg_url = e.target.result
              $('.photoPreview').css('background', 'url(' + bg_url + ')');
              $('.photoUpload, #uploadClick').hide();
              $('#rotate').show();
          }
          $('.deletePhoto').show();
          reader.readAsDataURL(input.files[0]);
      }
  }

  // $('#rotate').click(function(){
  //   $('.photoPreview').toggleClass('transform')
  // });

  window.rotation = 0;

  jQuery.fn.rotate = function(degrees) {
    $('.photoPreview').css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
      return $('photoPreview');
  };

  $('#rotate').click(function() {
      rotation += 90;
      $(this).rotate(rotation);
  });

  $('.deletePhoto').click(function() {
    $('.deletePhoto').hide();
        $('#uploadAvatar').val('');
        $('.photoPreview').css('background', '');
        if ($('.profilePhoto').length){
          $('.profilePhoto').show();
          $('.photoPreview').hide()
        }else{
          $('.photoUpload, #uploadClick').show();
        }
  });

  $("#btnSave").click(function() { 
          html2canvas($("div.layer"), {
              onrendered: function(canvas) {
                  theCanvas = canvas;
                  document.body.appendChild(canvas);

                  // Convert and download as image 
                  // Canvas2Image.saveAsPNG(canvas);
                  // $("#img-out").append(canvas);
                  $("#picture").val(canvas.toDataURL("image/png"));
                  $("#pic_form").submit();
                  // Clean up 
                  //document.body.removeChild(canvas);
              }
          });
      });

})