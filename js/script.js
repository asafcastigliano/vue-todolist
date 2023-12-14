const { createApp } = Vue;

createApp({
    data() {
        return {
            inputText: '',
            todolist: [
                {
                    todo: "Scendere il cane",
                    done: false
                },
                {
                    todo: "Pisciare il cane",
                    done: true
                },
            ]
        }
    },

    methods: {
        remove(index){
            this.todolist.splice(index, 1);
        },

        done(index){
            this.todolist[index].done = true;
        },

        addTodo() {
            if (this.inputText.trim() !== '') {
                this.todolist.push({ todo: this.inputText, done: false });
                this.inputText = '';
              }
        }

    }
}).mount('#app');