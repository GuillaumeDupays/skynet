<template>
    <form @submit.prevent="ajouterParole">
        <h1>Ajouter des paroles de SkyNet</h1>
        <div class="form-group">
            <label for="id"></label>
            <input 
                type="number" 
                class="form-control"
                id="id"
                placeholder="Identifiant unique"
                v-model="parole.id"
            />
        </div><br>
        <div class="form-group">
            <label for="affirmation"></label>
            <input 
                type="text" 
                class="form-control"
                id="affirmation"
                placeholder="Affirmation de SkyNet au joueur"
                v-model="parole.affirmation"
            />
        </div><br>
        <div class="form-group">
            <label for="positive"></label>
            <input 
                type="text" 
                class="form-control"
                id="positive"
                placeholder="Réponse positive du joueur"
                v-model="parole.reponse.positive"
            />
        </div><br>
        <div class="form-group">
            <label for="interrogative"></label>
            <input 
                type="text" 
                class="form-control"
                id="interrogative"
                placeholder="Réponse interrogative du joueur"
                v-model="parole.reponse.interrogative"
            />
        </div><br>
        <div class="form-group">
            <label for="negative"></label>
            <input 
                type="text" 
                class="form-control"
                id="negative"
                placeholder="Réponse négative du joueur"
                v-model="parole.reponse.negative"
            />
        </div><br>
        <button type="submit">Enregistrer</button>    
    </form>
</template>

<script>
export default {
    data() {
        return {
            parole: {
                id: "",
                affirmation: "",
                reponse: {
                    positive: "",
                    interrogative: "",
                    negative: ""
                }
            }
        }
    },
    methods: {
        ajouterParole() {
            console.log("Skynet est un peu plus locace...", this.parole);
            this.$store.dispatch("Parole ajoutée", this.parole);
            this.parole= "";
        }
    },
}
</script>
