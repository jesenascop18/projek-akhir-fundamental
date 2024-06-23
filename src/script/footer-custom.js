class footerCustom extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">    
            <p> Notes App Jeasen </p>
        </div>`
    }
}

customElements.define('footer-custom', footerCustom)
