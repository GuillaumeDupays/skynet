<template>
    <div>
        <h1>Messages reçus</h1>
        <ul>
            <li v-for="message in messages" :key="message.id">Prénom : {{ message.prenom }} | Message : {{ message.msgContact}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        messages: {
            get() {
                return this.$store.getters.messages; 
            }
        }
    },
}
</script>

<style>

</style>