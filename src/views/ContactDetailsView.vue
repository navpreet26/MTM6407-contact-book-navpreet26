<template>
    <div>
      <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
      <p>Email: {{ contact.email }}</p>
  
      <button @click="goToEdit">Edit Contact</button>
      <button @click="deleteContact">Delete Contact</button>
      <router-link to="/">Back to Contacts</router-link>
    </div>
  </template>
  
  <script>
  import { useContactStore } from '../components/useContactStore'
  import { useRouter, useRoute } from 'vue-router'
  
  export default {
    setup() {
      const { contacts, deleteContact } = useContactStore()
      const route = useRoute()
      const router = useRouter()
      const contact = contacts.value.find(contact => contact.id === route.params.id)
  
      const goToEdit = () => {
        router.push(`/edit/${contact.id}`)
      }
  
      const deleteContactAction = () => {
        deleteContact(contact.id)
        router.push('/')
      }
  
      return { contact, goToEdit, deleteContact: deleteContactAction }
    }
  }
  </script>
  