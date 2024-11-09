<template>
    <div>
      <h2>New Contact</h2>
      <form @submit.prevent="addNewContact">
        <input v-model="firstName" placeholder="First Name" required />
        <input v-model="lastName" placeholder="Last Name" required />
        <input v-model="email" placeholder="Email" type="email" required />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useContactStore } from '../components/useContactStore'
  import { useRouter } from 'vue-router'
  
  export default {
    setup() {
      const { addContact } = useContactStore()
      const router = useRouter()
  
      const firstName = ref('')
      const lastName = ref('')
      const email = ref('')
  
      const addNewContact = () => {
        const newContact = { firstName: firstName.value, lastName: lastName.value, email: email.value }
        addContact(newContact)
        router.push(`/contact/${newContact.id}`)
      }
  
      return { firstName, lastName, email, addNewContact }
    }
  }
  </script>
  