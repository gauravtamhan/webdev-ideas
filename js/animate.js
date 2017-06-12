 $(document).ready(function() {
 	$(".button-collapse").sideNav();
 	$('.parallax').parallax();
 	$('.carousel').carousel();
 	$('.modal').modal({
 		dismissible: true, // Modal can be dismissed by clicking outside of the modal
 		startingTop: '10%', // Starting top style attribute
      	endingTop: '10%' // Ending top style attribute
 	});

 	var options = [
    {selector: '#mylist', offset: 300, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } }
  ];

  Materialize.scrollFire(options);
 })
 