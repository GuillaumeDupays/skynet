<template>
    <div>
        <form @submit.prevent="soumettreFormulaire" class="contactForm">
            <div class="form-groupe">
                <label for="prenom">Prénom : </label><br>
                <input 
                    type="text" 
                    id="prenom"
                    placeholder="Prenom"
                    v-model="prenom"
                />
            </div>
            <div class="form-groupe">
                <label for="nom">Nom : </label><br>
                <input 
                    type="text" 
                    id="nom"
                    placeholder="Nom"
                    v-model="nom"
                />
            </div><br>
            <div class="form-groupe">
                <label for="email">Email : </label><br>
                <input 
                    type="text" 
                    id="email"
                    placeholder="Email"
                    v-model="email"
                />
            </div>
            <div class="form-groupe">
                <label for="tel">Tel : </label><br>
                <input 
                    type="text" 
                    id="tel"
                    placeholder="Tel"
                    v-model="tel"
                />
            </div><br>
            <div class="form-groupe">
                <label for="msg-contact">Message :</label><br>
                <textarea 
                    id="msg-contact"
                    placeholder="Message"
                    v-model="msgContact"
                />
            </div><br>
            <div class="form-groupe">
                <button type="submit">Envoyer</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            prenom: "",
            nom: "",
            email: "",
            tel: "",
            msgContact: ""
        };
    },
    methods: {
        soumettreFormulaire() {
            const message = {
                dateCreation: new Date(),
                prenom: this.prenom,
                nom: this.nom,
                email: this.email,
                tel: this.tel,

                msgContact: this.msgContact
            };
            this.$store.dispatch("envoyerMessage", message)
            this.message = "";
        }
    }
};
</script>

<style lang="scss" scoped>

</style>