$(document).ready(function () {

    //Window Scroll
    window.smoothScroll = function (target) {
        var scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);
        var targetY = -300;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop - 18;
        } while (target = target.offsetParent);
        scroll = function (c, a, b, i) {
            i++;
            if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function () {
                scroll(c, a, b, i);
            }, 30);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
    };

    
    $("#submit").on("click", function(event) {
        event.preventDefault();
        
        function processResults() {
        var results = true;
        
            $(".form-control").each(function() {
                if ($(this).val() === "") {
                results = false;
                }
            });
        
            $(".chosen-select").each(function() {
                if ($(this).val() === "") {
                results = false;
                }
            });
            return results;
        }
        
        if (processResults()) {
        
        var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            quote: $("#quote").val(),
            score: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };
        
        $.post("/api/friends", userData, function(data) {
            
            $(".name").text(data.name);
            $("#img").attr("src", data.photo);
            $(".quote").text(data.quote);
            $("#results-modal").modal("toggle");
        });
        } else {
        alert("Please complete the survey!");
        }
    });
});//Document.ready function
