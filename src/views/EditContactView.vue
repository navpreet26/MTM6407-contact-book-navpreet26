<template>
  <div :class="$style.container">
    <h2>Edit Contact</h2>
    <form @submit.prevent="updateContact">
      <input v-model="firstName" placeholder="First Name" required />
      <input v-model="lastName" placeholder="Last Name" required />
      <input v-model="email" placeholder="Email" type="email" required />
      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useContactStore } from '../components/useContactStore'
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const { contacts, updateContact } = useContactStore()
    const router = useRouter()
    const route = useRoute()
    const contact = contacts.value.find(contact => contact.id === route.params.id)

    const firstName = ref(contact.firstName)
    const lastName = ref(contact.lastName)
    const email = ref(contact.email)

    const updateContactDetails = () => {
      updateContact(contact.id, { firstName: firstName.value, lastName: lastName.value, email: email.value })
      router.push(`/contact/${contact.id}`)
    }

    return { firstName, lastName, email, updateContact: updateContactDetails }
  }
}
</script>

<style module>
@import './EditContactView.module.css';
</style>
