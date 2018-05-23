import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import faker from 'faker';
import { Members } from '../imports/api/members';

Meteor.startup(() => {
  // code to run on server at startup
    Meteor.publish('members.allmembers',()=>{
        return Members.find();
    });

    const numberMembers = Members.find({}).count();
    console.log(numberMembers);

    if (!numberMembers) {
        _.times(40, () => {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();
            const email = faker.internet.email();

            Meteor.call('insertMember', {
                firstName,
                lastName,
                email,
                createdAt: new Date()
            });
        });
    }
});
