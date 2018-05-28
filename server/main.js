import { Meteor } from 'meteor/meteor';
import _ from 'lodash';
import faker from 'faker';
import { Members } from '../imports/api/members';

Meteor.startup(() => {

    ServiceConfiguration.configurations.upsert(
        { service: 'coinbase' },
        {
            $set: {
                loginStyle: "redirect",
                clientId: '81111e7e9aa73ea93a8b494519c4918af0e537e4cbc337c74536e41c23d3edbe',
                secret: '5aa3c5dd05451d3ae0d7d22dcd849b3a67e126df2885ded95603f63edb18db03',
            },
        },
    );
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
