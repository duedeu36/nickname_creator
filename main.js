$(document).ready(function () {

    var nameValue;

$('#sendName').click(function (word) {
        nameValue = $('#enterNames').val();
        console.log(nameValue);
        var createTr = $('<tr>');
        createTr.addClass('tr-nick');
        var createTd = $('<td>');
        createTd.addClass('td-nick');

        $('#nicknameTable').append(createTr);
        $(createTr).append(createTd);
        $(createTd).append(nameValue);

        //create all combinations of the name(s)
        
    });

});