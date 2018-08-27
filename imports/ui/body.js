import { Template } from 'meteor/templating';

import { multiCoin } from './charts.js'
import { singleCoin } from './charts.js'
import { minSingleCoin } from './charts.js'
import { userPortfolio } from './charts.js'

import './body.html';
import './css/body.css';
import './home.html';
import './css/home.css';
import './coinList.html';
import './css/coinList.css';
import './navigation.html';
import './charts.html';
import './css/charts.css';
import './charts.js';

Template.coinList.onRendered(function () {
    //Materialize Initialization
    $('select').material_select();

    const rows = 3; //Number of rows in the list

    //Including Charts
    for (let i = 1; i <= rows; i++) {
        var active = 'minChart';
        active += i;
        minSingleCoin(active);
    }

    //Hide Pop-up Content on Load
    for (let i = 1; i <= rows; i++) {
        var selector = "#pop-up-";
        selector += i;
        $( selector ).hide();
    }

    //Javascript Hyperlink
    /*$( ".row-container" ).click(function() {
        location.assign("/charts");
    });*/

    //Changing selected currency
    $( "select" ).change(function() {
        let active = $('#fiat-selector').val();
        if (active == 1 || active == 2){
            $(".currency").html("&dollar;");
        }
        if (active == 3){
            $(".currency").html("&euro;");
        }
        if (active == 4){
            $(".currency").html("&pound;");
        }
    });

    //Pop-up Content
    var selectedRow;
    var loadPopUp;
    // var clearPopUp;

    $( ".row-container" ).hover(
        function() {
            $(selectedRow).css('opacity', 1).slideUp(400).animate(
                { opacity: 0 },
                { queue: false, duration: 400 }
            );

            $(this).addClass('row-hover');

            selectedRow = "#pop-up-";
            selectedRow += $(this).attr('id');

            loadPopUp = setTimeout(function(){
                            $(selectedRow).css('opacity', 0).slideDown(700).animate(
                                { opacity: 1 },
                                { queue: false, duration: 700 }
                            );
                        }, 700);

        }, function() {

            clearTimeout(loadPopUp);

            setTimeout(function() {
                $(selectedRow).css('opacity', 1).slideUp(450).animate(
                    { opacity: 0 },
                    { queue: false, duration: 450 }
                );
            },300);

            $(this).removeClass('row-hover');
        }
    );
});

Template.charts.onRendered(function () {
    multiCoin();
    singleCoin();
    userPortfolio();
});

Router.route('/', function () {
    this.layout('layout');
    this.render('home');
});
Router.route('/charts', function () {
    this.layout('layout');
    this.render('charts');
});
