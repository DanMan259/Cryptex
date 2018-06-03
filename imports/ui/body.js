import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Members } from '../api/members';

import './body.html';
import './body.css';
import './members.html';
import './navigation.html';
import './member_info.html';
import './main.html'
import './register.html'
import './login.html'
import './footer.html'
import './adminPanel.html'
import './testing.html'
import './finishCoinbase.html'

AutoForm.setDefaultTemplate('materialize');

function logValue(){
    var profileConfig = ServiceConfiguration.configurations.findOne({service: 'password'});
    var coinConfig = ServiceConfiguration.configurations.findOne({service: 'coinbase'});
    var googleConfig = ServiceConfiguration.configurations.findOne({service: 'google'});
    if (!Meteor.user())
        return 0;
    else if (coinConfig && !profileConfig)
        return 1;
    else if (googleConfig && !profileConfig)
        return 2;
    else
        return 3;
}

window.Members= Members;

Template.body.onCreated(function bodyOnCreated(){
    Meteor.subscribe('members.allmembers');
});

Template.registerHelper('formatDate', function(date){
    return moment(date).format('ll');
});

Template.registerHelper('formatYear', function(){
    return moment(moment()).format('YYYY');
});

Template.finishCoinbase.helpers({
    userProfile() {
        return Meteor.user()
    },
});

Template.members.helpers({
    members(){
        return Members.find({});
    },
});

Template.members_info.helpers({
    member_info(){
        return Members.find({});
    },
});

Template.member_info.helpers({
    makeUniqueID() {
        return this._id;
    },
    returnName(memberID){
        const member = Members.findOne({_id: memberID});
    },
});
//Add to the Mailing List
Template.signUp.events({
    'submit form': function (event, template) {
        event.preventDefault();
        var emailVar = template.find('#mailList-email').value;

        Meteor.call('insertMailingList', ({"email": emailVar}),
            (err) => {
                if (err) {
                    alert(err);
                }
            }
        )
    }
});

//Registering an Account
Template.register.events({
    'submit form': function(event,template){
        event.preventDefault();
        var nameVar = template.find('#name').value;
        var emailVar = template.find('#email').value;
        var passVar = template.find('#password').value;

        Accounts.createUser({
            name:nameVar,
            email:emailVar,
            password:passVar,
        });
    }
});
//Logging into an account
Template.login.events({
    'submit form': function(event,template){
        event.preventDefault();
        var emailVar = template.find('#login_email').value;
        var passVar = template.find('#login_password').value;
        Meteor.loginWithPassword(emailVar,passVar);
    }
});
//add member modal
Template.members.onRendered(function(){
    $('#modal1').modal();
});
//Routing the pages
Router.route('/', function(){
    this.layout('layout');
    this.render('main');
});

Router.route('/register', function(){
    this.layout('layout');
    this.render('register');
});

Router.route('/login', function(){
    this.layout('layout');

    if (logValue()===0)
        this.render('login');
    else{
        if (logValue()===1 || logValue()===2)
            Router.go('/finishRegister')
        else if (logValue()===3)
            Router.go('/')
    }
});

Router.route('/member_info', function(){
    this.layout('layout');
    this.render('members_info');
});

Router.route('/adminPanel', function(){
    this.layout('layout');
    this.render('adminPanel');
});

Router.route('/testing', function(){
    this.layout('layout');
    this.render('testing');
});
Router.route('/finishRegister', function(){
    this.layout('layout');
    if (logValue()===0)
        Router.go('/login');
    else if(logValue()===1)
        this.render('finishCoinbase');
    else if (logValue()===2)
        this.render('finishGoogle');
    else{
        Router.go('/');
    }
});