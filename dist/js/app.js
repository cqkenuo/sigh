$(document).ready(function() {
    
    $('.user .ivu-dropdown').hover(function() {
        $('.user .ivu-select-dropdown').show();
    }, function() {
        $('.user .ivu-select-dropdown').hide();
    })

    $('.s-icon-modify').parent().on("click", function() {
        window.location.href = "./settings.html";
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

        var uploader = WebUploader.create({

            auto: true,

            server: 'http://webuploader.duapp.com/server/fileupload.php',

            pick: '#sideMenuUploadApp'
        });

        uploader.on( 'uploadProgress', function( file, percentage ) {
            $('.ivu-modal-mask').hide();
            $('.ivu-modal-wrap').addClass("ivu-modal-hidden");
            $('.ivu-modal').hide();

            $('#postAppStep2 .ivu-modal-mask').show();
            $('#postAppStep2 .ivu-modal-wrap').removeClass("ivu-modal-hidden");
            $('#postAppStep2 .ivu-modal').show();

            setInterval(function(){
                let fileSize = Math.round(file.size / 1024 / 1024 * 10) / 10;
                let uploadedSize = Math.round(fileSize * percentage / 100 * 10) / 10;

                $('.ivu-progress-bg').css("width", percentage + "%");
                $('.add-app-item.app-size > p:eq(1)').html(percentage + "% " + uploadedSize + "M/" + fileSize + "M");
            }, 500);
        });
    });

    $('#postAppStep2 .s-btn-primary').on("click", function() {
        $('.ivu-modal-mask').hide();
        $('.ivu-modal-wrap').addClass("ivu-modal-hidden");
        $('.ivu-modal').hide();

        $('#postAppStep3 .ivu-modal-mask').show();
        $('#postAppStep3 .ivu-modal-wrap').removeClass("ivu-modal-hidden");
        $('#postAppStep3 .ivu-modal').show();
    });

    // dashbaord.html

    $('.mini-card').on("click", function() {
        window.location.href = "./settings.html";
    })

    // settings.html
    $(".setting-item:eq(0)").on("click", function() {
        window.location.href = "./profile.html";
    })

    $(".setting-item:eq(1)").on("click", function() {
        window.location.href = "./email.html";
    })

    $(".setting-item:eq(2)").on("click", function() {
        window.location.href = "./avatar.html";
    })

    $(".setting-item:eq(3)").on("click", function() {
        window.location.href = "./password.html";
    })

    //downloadlog.html
    $(".app-list .ivu-select-selection").on("click", function() {
        $(".app-list .ivu-select-dropdown").toggle();
    })
});