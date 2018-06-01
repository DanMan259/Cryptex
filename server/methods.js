import { Meteor } from 'meteor/meteor';
import { Members } from "../imports/api/members";
import { MailingList } from "../imports/api/mailingList";

//Use Methods to make calls to the backend

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
    //fix this
    deleteUser: () => {
        db.users.remove({_id:this.userId});
    }
});