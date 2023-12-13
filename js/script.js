const { createApp } = Vue;

createApp({
    data() {
        return {
            todolist: [
                {
                    todo: "Scendere il cane",
                    done: false
                },
                {
                    todo: "Pisciare il cane",
                    done: false
                },
            ]
        }
    },

    methods: {

    }
}).mount('#app');