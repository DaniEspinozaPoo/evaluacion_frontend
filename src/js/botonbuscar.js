$(document).ready(function(){ 
$( '#search').click(function() {

		var start = $('#start').val();
		var end = $('#end').val();
		if(!start || !end){
			swal("Las direcciones de origen y destino son obligatorias");
			return;
		} 
		 $('#select_transporte' ).show( "slow" );
	


 
});
});

