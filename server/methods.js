import { Meteor } from 'meteor/meteor';
import { Members } from "../imports/api/members";
import { MailingList } from "../imports/api/mailingList";

Meteor.methods({
    insertMember: (member) => {
        Members.insert(member)
    },
    insertMailingList: (emailAdd) => {
        MailingList.insert(emailAdd)
    },
    updateMember: (member) => {
        const {firstName, lastName, email} = room.modifier.$set;
        Members.update(member._id,{$set: {firstName, lastName, email}});
    },
    /**/
});