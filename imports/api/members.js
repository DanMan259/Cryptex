import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const Members = new Mongo.Collection('members');


const MemberSchema = new SimpleSchema({
    firstName: {
        type: String,
        label: 'First Name',
    },
    lastName: {
        type: String,
        label: 'Last Name',
    },
    email: {
        type: String,
        regEx: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        label: 'E-Mail',
    },
    createdAt: {
        type: Date,
        autoform: {
            type: 'hidden',
            label: false,
        },
        defaultValue: new Date(),
    },
});

Members.attachSchema(MemberSchema);

var allowAll = function () {
    return true;
};
Members.allow({
    insert: allowAll,
    update: allowAll,
    remove: allowAll
});
