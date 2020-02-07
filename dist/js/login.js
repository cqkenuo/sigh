let baseUrl = "https://ios.app88.xin";
let sendCodeUrl = baseUrl + "/email/send_code";

$("#sendCode").on("click", function() {
    let email = $("input[name=email]").val();
    $.get(sendCodeUrl, {email: email, type: 2});
})