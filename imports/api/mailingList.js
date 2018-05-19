import {Mongo} from "meteor/mongo";
import {Members} from "./members";

export const MailingList = new Mongo.Collection('mailingList');

MailingList.allow({
    insert() { return false; },
    update() { return false; },
    remove() { return false; },
});

MailingList.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});
