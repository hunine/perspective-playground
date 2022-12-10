const app = Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        };
    },
    methods: {
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        copy() {
            const ext = `transform: ${this.box.transform};`;
            navigator.clipboard.writeText(ext);

            alert('CSS Copied to Clipboard!, 2000');
        },
    },
    computed: {
        box() {
            return {
                transform: `
                    perspective(${this.perspective}px)
                    rotateX(${this.rotateX}deg)
                    rotateY(${this.rotateY}deg)
                    rotateZ(${this.rotateZ}deg)
                `,
            };
        },
    },
}).mount('#app');
