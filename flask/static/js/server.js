
$('#server-tab').on('click', function () {

    $('#content-header-text').text('SERVER');
    $('.server-tab-content').css('display', '');
    $('.client-tab-content').css('display', 'none');

    $('#btn-show-database').on('click', function () {
        let server_info_api = SERVER_INFO_API;
        let get_server_info = ajaxQuery(server_info_api);
        get_server_info.then(
            function (data) {
                console.log(data);
            },
            function (error) {
                console.log(error)
            }
        )
    });
});
