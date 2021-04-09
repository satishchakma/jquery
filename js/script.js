$ (document).ready(function(){

    $( "#draggable" ).draggable();


    $( "#sortable" ).sortable({
      revert: true
    });

    $( "#draggable2" ).draggable({
      connectToSortable: "#sortable",
      helper: "clone",
      revert: "invalid"
    });

    $( "ul, li" ).disableSelection();


    $( "#datepicker" ).datepicker();



    $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();






});