import { Meteor } from 'meteor/meteor';

//fix this
//try to incorporate this delete user if the page is closed
//maybe add login method and a register method in the accounts coinbase package
window.onbeforeunload = function () {
    Meteor.call('deleteUser', (err) => {
    if (err) {
        alert(err);
    }
});

