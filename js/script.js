
//Bootstrap slider
$("#carousel-example-generic").carousel({
    interval : false
});
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
});