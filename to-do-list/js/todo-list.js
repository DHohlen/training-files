$(document).ready(
    function () {
        $('#toDoList__addButton').click(
            function () {
                var toAdd = $('input[name=toDoList__Item]').val();
                $('ol').append('<li>' + toAdd + '</li>');
            });

        $('#toDoList__showDeletedButton').click(
            function () {
                $(this).toggleClass('toDoList--showsDeleted');
                if ($(this).hasClass('toDoList--showsDeleted')) {
                    $(this).html('Hide Deleted');
                    $('.strike').removeClass('isInvisible').addClass('isVisible')
                } else {
                    $(this).html('Show Deleted');
                    $('.strike').removeClass('isVisible').addClass('isInvisible')
                }
            });

        //Pressing Enter on keyboard works as if clicked on addButton
        $("input[name=toDoList__Item]").keyup(function (event) {
            if (event.keyCode == 13) {
                $("#toDoList__addButton").click();
            }
        });

        //doubleclicking on ListItem erases that item
        $(document).on('dblclick', 'li', function () {
            $(this).addClass('strike').delay(1000).queue(function(next){
                $(this).addClass('isInvisible');
                next();
            });
        });


        //empty textfield when clicked
        $('input').focus(function () {
            $(this).val('');
        });

        //makes list sortable
        $('ol').sortable();

    }
);