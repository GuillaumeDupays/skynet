<template>
    <div>
        <form @submit.prevent="soumettreFormulaire">
            <div class="form-groupe">
                <label for="prenom">Prénom : </label><br><br>
                <input 
                    type="text" 
                    id="prenom"
                    placeholder="Prenom"
                    v-model="prenom"
                />
            </div><br>
            <div class="form-groupe">
                <label for="nom">Nom : </label><br><br>
                <input 
                    type="text" 
                    id="nom"
                    placeholder="Nom"
                    v-model="nom"
                />
            </div><br>
            <div class="form-groupe">
                <label for="email">Email : </label><br><br>
                <input 
                    type="text" 
                    id="email"
                    placeholder="Email"
                    v-model="email"
                />
            </div><br>
            <div class="form-groupe">
                <label for="tel">Tel : </label><br><br>
                <input 
                    type="text" 
                    id="tel"
                    placeholder="Tel"
                    v-model="tel"
                />
            </div><br>
            <div class="form-groupe">
                <label for="adresse">Adresse : </label><br><br>
                <input 
                    type="text" 
                    id="adresse"
                    placeholder="Adresse"
                    v-model="adresse"
                />
            </div><br>
            <div class="form-groupe">
                <label for="msg-contact">Message :</label><br><br>
                <textarea 
                    id="msg-contact"
                    placeholder="Message"
                    v-model="msgContact"
                />
            </div><br>
            <button type="submit">Envoyer</button>
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
            adresse: "",
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
                adresse: this.adresse,
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