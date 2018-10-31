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

    // Capture the form inputs
    $("#submit").on("click", function(event) {
        event.preventDefault();
        
        function validateForm() {
        var isValid = true;
        
            $(".form-control").each(function() {
                if ($(this).val() === "") {
                isValid = false;
                }
            });
        
            $(".chosen-select").each(function() {
                if ($(this).val() === "") {
                isValid = false;
                }
            });
            return isValid;
        }
        // If all required fields are filled
        if (validateForm()) {
        // Create an object for the user"s data
        var userData = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            quote: $("#quote").val(),
            scores: [
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
        // AJAX post the data to the friends API.
        $.post("/api/friends", userData, function(data) {
            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);
            $("#matchQuote").text(data.quote);

            // Show the modal with the best match
            $("#results-modal").modal("toggle");
        });
        } else {
        alert("Plese ");
        }
    });
});//Document.ready function
