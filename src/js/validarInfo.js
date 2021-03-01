$(document).ready(function () {
    $("#form").steps({
        headerTag: "h6",
        bodyTag: "section",
        onStepChanging: function (event, currentIndex, newIndex) {
            if (currentIndex > newIndex) {
                return true;
            }

            // se nao estiverem os 5 inputs preenchidos não avança
            if (newIndex === 5) {
                return false;
            }

            var form = $(this);

            if (currentIndex < newIndex) {
                $(".body:eq(" + newIndex + ") label.error", form).remove();
                $(".body:eq(" + newIndex + ") .error", form).removeClass("error");
            }

            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            if (currentIndex === 1) {
                $(this).steps("next");
            }

            if (priorIndex === 2) {
                $(this).steps("previous");
            }
        },
        onFinishing: function (event, currentIndex) {
            var form = $(this);

            // Disable validation on fields that are disabled.
            // At this point it's recommended to do an overall check (mean ignoring only disabled fields)
            form.validate().settings.ignore = ":disabled";

            // Start validation; Prevent form submission if false
            return form.valid();
        },
        onFinished: function (event, currentIndex) {
            var form = $(this);

            // Submit form input
            form.submit();
        }
    }).validate({
        errorPlacement: function (error, element) {
            element.before(error);
        },
        rules: {
            confirm: {
                equalTo: "#password"
            }
        }
    });
});