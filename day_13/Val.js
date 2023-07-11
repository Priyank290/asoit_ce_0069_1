function displayvals() {
    var singleValues = $("#single" ).val();
    //var multipleValues = $("multiple").val() || []; 
    //When using jQuery 3:
    var multipleValues = $("multiple").val(); 
    $(fp).html("<b>Single:</b>" + singlevalues  +
    "<b>Multiple:</b>" + multipleValues.join(","));
    }
    $("select" ).on("change", displayvals);
    displayvals();