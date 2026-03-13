import Contact from "../models/Contact.js";

  export const createContact = async (req, res) => {
  try {
    const { name,number, email, message } = req.body;
    if (!name || !number || !email || !message) {
      return res.status(400).json({ message: "All fields required" });
    }
    const contact = await Contact.create({ name,number, email, message });
    return res.status(201).json(contact);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error creating contact" });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error fetching contacts" });
  }
};