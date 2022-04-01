Vue.createApp({
    data() {
        return {
            information: {
                name: "Eric Valentin Mogica Carbajal",
            }
        };
    }
}).mount("#Nombre");

Vue.createApp({
    data() {
        return {
            words: ["Museo nacional de antropología", "Palacio de bellas artes", "Angel de la Independencia", "Palacio nacional", "Teotihuacan"]
        };
    }
}).mount("#Pasatiempos");

Vue.createApp({
    data() {
        return {
            picsumImage: "https://www.elsoldemexico.com.mx/doble-via/gllk4u-el-angel-de-la-independencia-en-realidad-no-es-un-angel.jpeg/ALTERNATES/LANDSCAPE_1140/El%20%C3%81ngel%20de%20la%20Independencia%20en%20realidad%20no%20es%20un%20%C3%A1ngel.jpeg"
        };
    }
}).mount("#Imagen");


Vue.createApp({
    data() {
        return {
            counter: 0
        }
    }
}).mount("#ContadorCool")

Vue.createApp({
    data() {
        return {
          message: ''
        }
      }     
}).mount("#Alerts")