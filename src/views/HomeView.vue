<template>
  <div :class="$style.container">
    <div :class="$style.logo">Contact Book</div>
    <input
      v-model="searchQuery"
      placeholder="Search contacts by name"
      :class="$style.searchInput"
    />
    <ul :class="$style.contactList">
      <li
        v-for="contact in filteredContacts"
        :key="contact.id"
        :class="$style.contactItem"
      >
        <router-link :to="`/contact/${contact.id}`">
          {{ contact.lastName }}, {{ contact.firstName }}
        </router-link>
      </li>
    </ul>
    <router-link to="/new" :class="$style.addContactLink">Add New Contact</router-link>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useContactStore } from '../components/useContactStore'

export default {
  name: "HomeView",
  setup() {
    const { contacts } = useContactStore()
    const searchQuery = ref('')

    const filteredContacts = computed(() => {
      return contacts.value
        .filter(contact =>
          `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchQuery.value.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
    })

    return { searchQuery, filteredContacts }
  }
}
</script>

<style module>
@import './HomeView.module.css';
</style>
