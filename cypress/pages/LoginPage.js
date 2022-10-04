class homeSaucePage {
  elements = {
    loginMenuBtn: () => cy.get("#login2"),
    usernameInput: () => cy.get("#loginusername"),
    passwordInput: () => cy.get("#loginpassword"),
    confirmLogin: () => cy.get("#logInModal >").children().children("div.modal-footer").children("button.btn.btn-primary"),
    closeModal:() => cy.get("#logInModal >").children().children("div.modal-header").children("button.close"),
    catLaptops:() => cy.get(".list-group").children("a#itemc.list-group-item").each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      console.log($el);
      console.log(index);
      if (index == 1){
        cy.wrap($el).click();

      }
    }),
    addLaptop:() => cy.get(".hrefch").first(),
    addToCard:() => cy.get("a.btn.btn-success.btn-lg")
  };
  addLaptop() {
    this.elements.addLaptop().click();
    this.elements.addToCard().click();
  }
  clickLogin() {
    this.elements.loginMenuBtn().click();
  }
  clickLaptops() {
    this.elements.catLaptops();
  }
  closeModalLogin() {
    this.elements.closeModal().click();
  }
  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.confirmLogin().click();
  }
}

module.exports = new homeSaucePage();
