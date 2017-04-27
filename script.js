document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;

        let start;
        let end;

        let div = document.createElement('div');
        document.body.appendChild(div);
        div.style.height = "100px";
        div.style.width = "150px";
        $(div).append('<form">'+
        'START:<br>'+
        '<input type="text" id="start">'+
        '<br>'+
        'END:<br>'+
        '<input type="text" id="end">'+
        '<br><br>'+
        '<input type="submit" value="Submit" id="submit">'+
        '</form>');
        $("#submit").click(function(){
            start = document.getElementById('start').value;
            end = document.getElementById('end').value;

            // alert(start)
        })

        

    });
});
