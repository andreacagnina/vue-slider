const app = Vue.createApp({
    data() {
        return {
            active_image: 0,
            slides: [
                {
                    id: '0',
                    image: './img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    id: '1',
                    image: './img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    id: '2',
                    image: './img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    id: '3',
                    image: './img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    id: '4',
                    image: './img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    created() {
        this.autoScroll();

    },
    methods: {
        nextImage() {
            (this.active_image == this.slides.length - 1) ? (this.active_image = 0) : (this.active_image++);

        },
        prevImage() {
            (this.active_image == 0) ? (this.active_image = this.slides.length - 1) : (this.active_image--);
        },
        autoScroll() {
            autoScroll = setInterval(() => {
                this.nextImage();
            }, 3000)
        },
        stopAutoScroll() {
            clearInterval(autoScroll);
        },
        activateImage(imageIndex) {
            this.active_image = imageIndex;
        }
    }

})

app.mount('#app')
