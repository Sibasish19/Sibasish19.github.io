// Animate Smooth Scroll
$('#view-work').on('click', function() {
   const images = $('#images').position().top;
   
   $('html, body').animate( {
       scrollTop: images
   },
   900
   );
});
$('#logo').on('click', function() {
    const images = $('#images').position().top;
    
    $('html, body').animate( {
        scrollTop: images
    },
    1200
    );
 });