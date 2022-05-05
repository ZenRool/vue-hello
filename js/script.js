Vue.config.devtools = true;
const app = new Vue( {
    el: "#root",
    data: ( {
        title: "Titolo",
        pic: ""
    }),
    methods: {
        getImage() {
            alert("Cliccato");

        }
    }
});