<template>
    <div class="contact">
        <contact-form></contact-form>
        <messages-contacts></messages-contacts>
    </div>
</template>

<script>
import ContactForm from "../components/ContactForm"
import MessagesContacts from "../components/MessagesContacts"

export default {
    components: {
        MessagesContacts,
        ContactForm
    }
}
</script>
