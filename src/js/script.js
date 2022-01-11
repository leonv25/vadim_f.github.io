// require('es6-promise').polyfill();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //test
    let test_func = require('./parts/test_file');
    test_func();

    //working script

    //viewer for img
    let viewer_imgs = require('./parts/viewer');
        viewer_imgs('.gallery', '.cards__background-img_gallery');

    
    
    

});

