let root = new Vue({
    el: "#root",

    data: {
        images : [
            
            {
                source: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/5802fab5-fdce-468a-a830-43e8001f5a72/Derivates/c00dc34a-e73d-42f0-a86e-e2fd967d33fe.jpg",
                alt: "pizza1",
            },

            {
                source: "https://primochef.it/wp-content/uploads/2019/07/SH_pizza_napoletana-640x350.jpg.webp",
                alt: "pizza2",
            },

            {
                source: "https://www.saporinostri.it/wp-content/uploads/2020/10/le-origini-della-pizza-napoletana-e1601990439881.jpg",
                alt: "pizza3",
            },

            {
                source: "https://pizzagarage.it/images/pizza-page-1.jpg",
                alt: "pizza4",
            },

            {
                source: "https://www.scattidigusto.it/wp-content/uploads/2020/11/pizza-tre-pomodori-ricetta.jpg",
                alt: "pizza5",
            },
        ],

        imageIndex : 0,

    },
    
    methods : {
        leftSlider: function(){
            this.imageIndex--;
            if(this.imageIndex < 0){
                this.imageIndex = this.images.length - 1;
            }
        },

        rightSlider: function(){
            this.imageIndex++;
            if(this.imageIndex >= this.images.length){
                this.imageIndex = 0;
            }
        },

        goToImage: function(indice){
            this.imageIndex = indice;
        }
    },
});
