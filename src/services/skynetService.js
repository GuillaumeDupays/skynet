import axios from "axios";

const url = "http://localhost:3000";

export default {
    getConversations() {
        return axios.get(`${url}/paroles`);
    },
    ajouterParole(parole) {
        return axios.post(`${this.url}/paroles`, parole)
    }
}