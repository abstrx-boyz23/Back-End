import fs from "fs";

// Create Folder "data" If Not Exist
if (!fs.existsSync("public/data")) {
    fs.mkdirSync("public/data");
}

// Create File "contacts.json" If Not Exist
if (!fs.existsSync("public/data/contacts.json")) {
    fs.writeFileSync("public/data/contacts.json", "[]");
}

export const loadContacts = () => {
    return JSON.parse(fs.readFileSync("public/data/contacts.json", "utf-8"));
}

export const findContact = (name) => {
	const contacts = loadContacts();
	return contacts.find((contact) => contact.name === name);
}

const saveContact = (newContacts) => {
    return fs.writeFileSync("public/data/contacts.json", JSON.stringify(newContacts));
}

export const addContact = (newContact) => {
    const contacts = loadContacts();
    contacts.push(newContact);
    saveContact(contacts);
}

export const deleteContact = (name) => {
    const contacts = loadContacts();
    const filtered = contacts.filter((contact) => contact.name !== name);
    return saveContact(filtered);
}
export const updateContact = (newContact) => {
    const contacts = loadContacts();
    const filtered = contacts.filter((contact) => contact.name !== newContact.oldName);
    delete newContact.oldName;
    filtered.push(newContact);
    saveContact(filtered);
}