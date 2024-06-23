class SubmitButton extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <input class='input-form' name="submit-button" type="submit" value="Submit">
        `
    }
}

customElements.define('submit-button', SubmitButton)
