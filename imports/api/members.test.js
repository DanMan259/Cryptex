import { Meteor } from 'meteor/meteor';
import faker from 'faker';
import { Members } from "./members";

if (Meteor.isServer){
    describe('Add member', () => {
        it('can add a new member', () => {
            const firstName = faker.name.firstName();
            const lastName = faker.name.lastName();
            const email = faker.internet.email();

            Members.insert({
                firstName,
                lastName,
                email,
                createdAt: new Date()
            });
        });
    });
}