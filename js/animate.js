 $(document).ready(function() {
 	$('.parallax').parallax();
 	$('.carousel').carousel();

 	var options = [
    {selector: '#mylist', offset: 300, callback: function(el) {
      Materialize.showStaggeredList($(el));
    } }
  ];

  Materialize.scrollFire(options);
 })
 