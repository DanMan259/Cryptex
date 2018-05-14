import '../imports/ui/body';
/*
//Get post Testing

var nonce = Date.now(); // Unix timestamp
var key = 'mNnrmLjbQN'; // My API Key
var client = 4013457; // My Client ID
var secret = '4db0228e9dd2c8052895ce77cc431299'; // My secret



console.log(CryptoJS.HmacSHA256(nonce+key+client, secret).toString());

var request = new XMLHttpRequest();

request.open('GET', 'https://');
request.onload = function(){
    var Data = JSON.parse(request.responseText);
    console.log(Data)
};
request.send();

*/


//import './main.html';



//Test again

/*function Upload() {
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
}*/

/*
// Parsing JSON
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
*/

/*
// Post Request


functionfunction post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}
*/