'use strict';

$('#client-tab').on('click', function () {
    $('#content-header-text').text('CLIENT');
    $('.server-tab-content').css('display', 'none');
    $('.client-tab-content').css('display', '');

});