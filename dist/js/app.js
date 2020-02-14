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

    $('.ivu-poptip-popper').hover(function() {
        $(this).addClass("hover");
    }, function() {
        $(this).removeClass("hover").hide();
    })

    $('.ivu-poptip').hover(function() {
        $(this).find('.ivu-poptip-popper').css({top: "inherit", left: "inherit"}).show();
    }, function() {
        if (!$(this).find('.ivu-poptip-popper').hasClass("hover")) {
            $(this).find('.ivu-poptip-popper').hide();
        }
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

    $('.z-setting').on("click", function() {
        window.location.href = "./settings.html";
    })

    //downloadlog.html
    $(".app-list .ivu-select-selection").on("click", function() {
        $(".app-list .ivu-select-dropdown").toggle();
    })

    //statistics.html
    $(".ivu-date-picker-rel").flatpickr({
        mode: "range",
        dateFormat: "Y-m-d",
        defaultDate: ["2016-10-10", "2016-10-20"]
    });

    var myChart1 = echarts.init(document.querySelector('.s-report-main-chart'));

    var option = {
        tooltip : {
            trigger: 'axis'
        },

        xAxis : [
            {
                axisLabel:{
                    rotate: 30,
                    interval:0
                },
                axisLine:{
                  lineStyle :{
                      color: '#CECECE'
                  }
                },
                type : 'category',
                boundaryGap : false,
                data : function (){
                    var list = [];
                    for (var i = 10; i <= 18; i++) {
                        if(i<= 12){
                            list.push('2016-'+i + '-01');
                        }else{
                            list.push('2017-'+(i-12) + '-01');
                        }
                    }
                    return list;
                }()
            }
        ],
        yAxis : [
            {

                type : 'value',
                axisLine:{
                    lineStyle :{
                        color: '#CECECE'
                    }
                }
            }
        ],
        series : [
            {
                name:'PV',
                type:'line',
                symbol:'none',
                smooth: 0.2,
                color:['rgb(255, 187, 68)'],
                data:[1, 3, 1, 2, 2, 2, 1, 0]
            },
            {
                name:'UV',
                type:'line',
                symbol:'none',
                smooth: 0.2,
                color:['rgb(235, 77, 68)'],
                data:[0, 0, 0, 0, 1, 0, 1, 0]
            }
        ]
    };

    myChart1.setOption(option);

    var myChart2 = echarts.init(document.querySelector('.EChartsMap .charts.echarts-bar'));
 
    option = {
        tooltip : {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data:['iphone']
        },
        visualMap: {
            min: 0,
            max: 200,
            left: 'left',
            top: 'bottom',
            text:['高','低'],           // 文本，默认为数值文本
            calculable : true
        },
        toolbox: {
            show: true,
            orient : 'vertical',
            left: 'right',
            top: 'center',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series : [
            {
                name: '新用户下载量',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                data:[
                    {name: '北京',value: Math.round(Math.random()*1000)},
                    {name: '天津',value: Math.round(Math.random()*1000)},
                    {name: '上海',value: Math.round(Math.random()*1000)},
                    {name: '重庆',value: Math.round(Math.random()*1000)},
                    {name: '河北',value: Math.round(Math.random()*1000)},
                    {name: '河南',value: Math.round(Math.random()*1000)},
                    {name: '云南',value: Math.round(Math.random()*1000)},
                    {name: '辽宁',value: Math.round(Math.random()*1000)},
                    {name: '黑龙江',value: Math.round(Math.random()*1000)},
                    {name: '湖南',value: Math.round(Math.random()*1000)},
                    {name: '安徽',value: Math.round(Math.random()*1000)},
                    {name: '山东',value: Math.round(Math.random()*1000)},
                    {name: '新疆',value: Math.round(Math.random()*1000)},
                    {name: '江苏',value: Math.round(Math.random()*1000)},
                    {name: '浙江',value: Math.round(Math.random()*1000)},
                    {name: '江西',value: Math.round(Math.random()*1000)},
                    {name: '湖北',value: Math.round(Math.random()*1000)},
                    {name: '广西',value: Math.round(Math.random()*1000)},
                    {name: '甘肃',value: Math.round(Math.random()*1000)},
                    {name: '山西',value: Math.round(Math.random()*1000)},
                    {name: '内蒙古',value: Math.round(Math.random()*1000)},
                    {name: '陕西',value: Math.round(Math.random()*1000)},
                    {name: '吉林',value: Math.round(Math.random()*1000)},
                    {name: '福建',value: Math.round(Math.random()*1000)},
                    {name: '贵州',value: Math.round(Math.random()*1000)},
                    {name: '广东',value: Math.round(Math.random()*1000)},
                    {name: '青海',value: Math.round(Math.random()*1000)},
                    {name: '西藏',value: Math.round(Math.random()*1000)},
                    {name: '四川',value: Math.round(Math.random()*1000)},
                    {name: '宁夏',value: Math.round(Math.random()*1000)},
                    {name: '海南',value: Math.round(Math.random()*1000)},
                    {name: '台湾',value: Math.round(Math.random()*1000)},
                    {name: '香港',value: Math.round(Math.random()*1000)},
                    {name: '澳门',value: Math.round(Math.random()*1000)}
                ]
            }
        ]
    };

    myChart2.setOption(option);
});

// updateApp.html
$('#updateIpaTab').on("click", function() {
    $('#updateApkTab').removeClass("ivu-tabs-tab-active ivu-tabs-tab-focused");
    $('#updateIpaTab').addClass("ivu-tabs-tab-active ivu-tabs-tab-focused");
    $('#updateApkForm').hide();
    $('#updateIpaForm').show();
})

$('#updateApkTab').on("click", function() {
    $('#updateIpaTab').removeClass("ivu-tabs-tab-active ivu-tabs-tab-focused");
    $('#updateApkTab').addClass("ivu-tabs-tab-active ivu-tabs-tab-focused");
    $('#updateIpaForm').hide();
    $('#updateApkForm').show();
})

//email.html
let baseUrl = "https://ios.app88.xin";
let sendCodeUrl = baseUrl + "/email/send_code";

$("#sendCode").on("click", function() {
    let email = $("input[name=email]").val();
    $.get(sendCodeUrl, {email: email, type: 2});
})

//avatar.html
$('.ivu-upload-drag:not(input)').on('click', function() {
    $("input.ivu-upload-input").click();
})

$("input.ivu-upload-input").on('change', function() {
    $("form").submit();
});