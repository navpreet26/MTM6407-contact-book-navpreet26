import { ref } from 'vue'

const contacts = ref(JSON.parse(localStorage.getItem('contacts')) || [])

function saveContacts() {
  localStorage.setItem('contacts', JSON.stringify(contacts.value))
}

export function useContactStore() {
  const addContact = (contact) => {
    contact.id = Date.now().toString()
    contacts.value.push(contact)
    saveContacts()
  }

  const updateContact = (id, updatedContact) => {
    const index = contacts.value.findIndex(contact => contact.id === id)
    contacts.value[index] = { ...contacts.value[index], ...updatedContact }
    saveContacts()
  }

  const deleteContact = (id) => {
    contacts.value = contacts.value.filter(contact => contact.id !== id)
    saveContacts()
  }

  return { contacts, addContact, updateContact, deleteContact }
}
