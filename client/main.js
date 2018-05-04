import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//Test again

function Upload() {
    var fileUpload = document.getElementById("fileUpload");
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.onload = function (e) {
                var table = document.createElement("table");
                var rows = e.target.result.split("\n");
                for (var i = 0; i < rows.length; i++) {
                    var row = table.insertRow(-1);
                    var cells = rows[i].split(",");
                    for (var j = 0; j < cells.length; j++) {
                        var cell = row.insertCell(-1);
                        cell.innerHTML = cells[j];
                    }
                }
                var dvCSV = document.getElementById("dvCSV");
                dvCSV.innerHTML = "";
                dvCSV.appendChild(table);
            }
            reader.readAsText(fileUpload.files[0]);
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid CSV file.");
    }
}


$.getJSON('https://api.quadrigacx.com/v2/ticker?book=all', function(data) {
    console.log(data.btc_usd.volume);
    Upload();

    Template.hello.onCreated(function helloOnCreated() {
        // counter starts at 0
        this.counter = new ReactiveVar(0);
    });

    Template.hello.helpers({
        counter() {
            return Template.instance().counter.get();
        },
    });

    Template.hello.events({
        'click button'(event, instance) {
            // increment the counter when button is clicked
            instance.counter.set(instance.counter.get() + 1);

        },
    });
});