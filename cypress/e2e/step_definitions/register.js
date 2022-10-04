import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
const registerPage = require("../../pages/RegisterPage");

Given("El usuario navega en el sitio web para registrarse", () => {
  cy.visit("/");
});

When("Un usuario se registra con el nombre de usuario {string}, la contraseña {string}, y hace clic en el botón de registro", (username,password) => {
  registerPage.clickSign();
  registerPage.submitSigin(username,password);
});

Then("El usuario deberia registrarse correctamente", () => {
  registerPage.closeModalRegister();
});
