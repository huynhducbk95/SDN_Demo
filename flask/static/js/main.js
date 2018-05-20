'use strict';

// define APIs at here
var SERVER_UUID = 'edb7ea39-310d-4b07-a750-758c944cc940';

var MONITOR_HOST = 'localhost:8000';
var SERVER_INFO_API = MONITOR_HOST + '/pas/server_info?uuid=' + SERVER_UUID;
var SHOW_DATABASE_API = MONITOR_HOST + '/pas/show_database/';

var ajaxQuery = function (url) {
    return new Promise(function (resolve, eject) {
        $.ajax(
            {url: url}
        ).done(function (data) {
            resolve(data);
        }).fail(function (jqXHR, textStatus) {
            eject(textStatus);
        });
    });
};

