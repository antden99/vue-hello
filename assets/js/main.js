console.log("Tutto ok");



const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Ciao Antonio, benvenuto!',
            percorso:"./assets/img/01.jpg",
        }
    }
}).mount('#start_Vue')


