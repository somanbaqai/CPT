(document).ready(function () {
    console.log("In ready function...");
    
 
    console.log( "http://192.168.0.102/assets/services/services.php");
    $.get("http://192.168.0.102/assets/services/services.php",
        function (data) { }, "json")
        .then(function (data) {
           
            console.log('Response received...');
            
            var i=0;
            $.each(data.result, (index, item) => {
                var htmlStr = ''
                htmlStr +='<div class="card text-center" style="width: 18rem;">';
                htmlStr += '<div class="card-body">';
                htmlStr += '<h5 class="card-title">' + data.head + '</h5>';
                htmlStr += '<p class="card-text">' + data.maintext + '</p>';
                htmlStr +=   '<a href="#" class="btn btn-primary">More Details...</a>';
                htmlStr += '</div>'
                htmlStr += '</div>'

                var oHtml = $.parseHTML(htmlStr);
                $("#events").append(oHtml);
                i++;

            });
           
        }).fail(function (result) {
            console.log("API called failed....");
            console.log(result)
        })

      
        
});