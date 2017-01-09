$('#compartir').click(function() {
var person = $('#personas').val();

	if(!person){
    	swal("introduce cantidad de personas");
			
    }if ($('input[name="group1"]').is(':checked')){
    } else {//Se verifica si alguno de los radios esta seleccionado
        swal('Debe seleccionar un transporte');
    }return;
});