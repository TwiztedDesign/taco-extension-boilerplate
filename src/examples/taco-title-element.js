export default class TacoTitle extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render(this.text);
    }


    disconnectedCallback() {

    }

    render(text){
        this.innerHTML = "<h2>🌮 " + text + " 🌮</h2>";
    }

    get text() {
        return this.getAttribute("text");
    }
    set text(value) {
        this.render(value);
    }
}

window.taco.define("taco-title", TacoTitle);

