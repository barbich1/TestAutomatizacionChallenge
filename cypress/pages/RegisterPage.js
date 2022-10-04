class homeSaucePage {
  elements = {
    signBtn: () => cy.get("#signin2"),
    usernameInput: () => cy.get("#sign-username"),
    passwordInput: () => cy.get("#sign-password"),
    confirmSignUp: () => cy.get("#signInModal >").children().children("div.modal-footer").children("button.btn.btn-primary"),
    closeModal:() => cy.get("#signInModal >").children().children("div.modal-header").children("button.close")
  };
  clickSign() {
    this.elements.signBtn().click();
  }
  closeModalRegister() {
    this.elements.closeModal().click();
  }
  submitSigin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.confirmSignUp().click();

  }
}

module.exports = new homeSaucePage();
