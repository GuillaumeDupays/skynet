<template>
    <div>
        <transition-group>
            <div>
                <p>Id : {{ currParole.id }}</p>
                <h3>{{ currParole.affirmation }}</h3>
                <div v-for="reponse in currParole.reponse" :key="reponse">
                    <input type="radio" >{{ reponse }}
                </div>
            </div>
        </transition-group><br>
        <button @click="suivant()" class="btn1">Suivant</button><br> <br>
        <button @click="iLike()" class="btn1">J'aime : {{ likes }}</button>
    </div>
</template>

<script>
import skynetService from "../../services/skynetService"

export default {
    data() {
        return {
            paroles: [],
            currParole: '',
            currParoleIndex: 0,
            reponse: '',
        }
    },
    beforeCreate() {
        console.log("beforeCreate"),
        skynetService.getConversations().then(res => {
            this.paroles = res.data;
            console.log('res.data', res.data)
            this.currParole = this.paroles[0];
        });
    },
    methods: {
        parler() {
            this.$store.commit('PARLER')
        },
        suivant() {
            if (this.currParoleIndex == this.paroles.length -1) {
                this.currParoleIndex = 0;
            }
            else {
                this.currParoleIndex++;
            }
            this.currParole = this.paroles[this.currParoleIndex];
        },
        iLike() {
            this.$store.commit('I_LIKE');
        },
    },
    computed: {
        likes() {
            return this.$store.state.likes; 
        }
    },
}
</script>

<style lang="css" scoped>
    h1 {
        border: 2px solid red;
    }
</style>