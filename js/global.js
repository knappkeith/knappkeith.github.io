function getYear() { 
    d = new Date();
    n = d.getFullYear();
    document.getElementById('year').innerHTML = n; 
}

jQuery(document).ready(function() {
    jQuery('.nailthumb-container').nailthumb({imageFromWrappingLink: true,});
});

$(function() {
    $(".detail-header").click(function () {

        $header = $(this);
        //getting the next element
        var $content = $header.next();
        if ($header.text() == 'Show Details') {
            $content.show('drop');
            $header.text('Hide Details');
        } else {
            $content.hide('drop');
            $header.text('Show Details');
        }

    });
});