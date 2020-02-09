$(document).ready(function() {
    $('.ivu-dropdown').hover(function() {
        $('.ivu-select-dropdown').show();
    }, function() {
        $('.ivu-select-dropdown').hide();
    })

    $('.ivu-modal-close').on("click", function() {
        $('.ivu-modal-mask').hide();
        $('.ivu-modal-wrap').addClass("ivu-modal-hidden");
        $('.ivu-modal').hide();
    })

    $('#postApp').on("click", function() {
        $('.ivu-modal-mask').hide();
        $('.ivu-modal-wrap').addClass("ivu-modal-hidden");
        $('.ivu-modal').hide();

        $('#postAppStep0 .ivu-modal-mask').show();
        $('#postAppStep0 .ivu-modal-wrap').removeClass("ivu-modal-hidden");
        $('#postAppStep0 .ivu-modal').show();
    })

    $('#postAppStep0 .s-btn-default').on("click", function() {
        $('.ivu-modal-mask').hide();
        $('.ivu-modal-wrap').addClass("ivu-modal-hidden");
        $('.ivu-modal').hide();
    });

    $('#postAppStep0 .s-btn-primary').on("click", function() {
        $('.ivu-modal-mask').hide();
        $('.ivu-modal-wrap').addClass("ivu-modal-hidden");
        $('.ivu-modal').hide();

        $('#postAppStep1 .ivu-modal-mask').show();
        $('#postAppStep1 .ivu-modal-wrap').removeClass("ivu-modal-hidden");
        $('#postAppStep1 .ivu-modal').show();
    });

    $('#sideMenuUploadApp').on("click", function() {
        $('.ivu-modal-mask').hide();
        $('.ivu-modal-wrap').addClass("ivu-modal-hidden");
        $('.ivu-modal').hide();

        $('#postAppStep2 .ivu-modal-mask').show();
        $('#postAppStep2 .ivu-modal-wrap').removeClass("ivu-modal-hidden");
        $('#postAppStep2 .ivu-modal').show();
    })

    $('#postAppStep2 .s-btn-primary').on("click", function() {
        $('.ivu-modal-mask').hide();
        $('.ivu-modal-wrap').addClass("ivu-modal-hidden");
        $('.ivu-modal').hide();

        $('#postAppStep3 .ivu-modal-mask').show();
        $('#postAppStep3 .ivu-modal-wrap').removeClass("ivu-modal-hidden");
        $('#postAppStep3 .ivu-modal').show();
    });
});