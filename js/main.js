$("#hPlaca").val(244);
$('#wPlaca').val(122);

$("#btnCalcular").click(function () {
    if ($("#hPlaca").val() == '' || $("#wPlaca").val() == '') {
        $("#error").removeClass("d-none");
        $("#error").html("<strong>ERROR</strong> Introducir las medidas de la placa.");
    } else if ($("#hPieza").val() == '' || $("#wPieza").val() == '') {
        $("#error").removeClass("d-none");
        $("#error").html("<strong>ERROR</strong> Introducir las medidas de la pieza.");
    } else if ($("#precioPlaca").val() == '') {
        $("#error").removeClass("d-none");
        $("#error").html("<strong>ERROR</strong> Introducir el precio de la placa.");
    } else if ($("#pzasFigura").val() == '') {
        $("#error").removeClass("d-none");
        $("#error").html("<strong>ERROR</strong> Introducir el número de piezas por figura.");
    } else {
        $("#error").addClass("d-none");
        $("#results").removeClass("d-none");

        var hPlaca = $("#hPlaca").val(); //altura de la placa
        var wPlaca = $("#wPlaca").val(); //ancho de lap placa
        var aPlaca = hPlaca * wPlaca; //area de la placa
        $("#aPlaca").val(aPlaca); //imprimir área de la placa

        var hPieza = $("#hPieza").val(); //altura de la pieza
        var wPieza = $("#wPieza").val(); //ancho de la pieza
        var aPieza = hPieza * wPieza; //area de la pieza
        $("#aPieza").val(aPieza); //imprimir área de la pieza

        var pzasPlaca = Math.floor(aPlaca / aPieza); //calcular número de piezas por placa
        $("#pzasPlaca").val(pzasPlaca); //imprimir número de piezas por placa

        var precioPlaca = $("#precioPlaca").val(); //precio de la placa
        var precioPieza = precioPlaca / pzasPlaca; //precio de la pieza
        $("#precioPieza").val(round(precioPieza, 2)); //imprimir preico de la pieza

        var pzasFigura = $("#pzasFigura").val(); //piezas por figura
        var precioMaterial = pzasFigura * precioPieza; //precio del material
        $("#precioMaterial").val(round(precioMaterial, 2)); //imprimir precio del material

        var precioFigura = precioMaterial * 2; //precio por figura
        $("#precioFigura").val(round(precioFigura, 2)); //imprimir precio por figura
    }
});

$("#btnBorrar").click(function () {
    $("#hPieza").val("");
    $('#wPieza').val("");
    $('#precioPlaca').val("");
    $('#pzasFigura').val("");
    $("#results").addClass("d-none");
});

const round = (number, decimalPlaces) => {
    const factorOfTen = Math.pow(10, decimalPlaces);
    return Math.round(number * factorOfTen) / factorOfTen;
}

