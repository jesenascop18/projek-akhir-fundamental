class TitleBar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <h1>Notes App</h1>
        `
    }
}

customElements.define('title-bar', TitleBar)
