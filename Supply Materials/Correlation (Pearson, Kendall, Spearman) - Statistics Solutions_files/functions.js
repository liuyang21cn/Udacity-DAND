function submit_template_form(url) {
    // remove error messages and styles
    jQuery('.error-text').html('');
    jQuery('.is-input').removeClass('input-error');

    // serialize the inputs from form into json array
    var inputs = jQuery('#hs-tracking-form').serializeArray();
        // send request to server
        jQuery.post(url, inputs).done(function(data) {

        // write the result to the processing container
        jQuery('#form-processing-container').html(data);
    });
}
