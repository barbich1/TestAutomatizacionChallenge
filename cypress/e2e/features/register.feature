Feature: Register page

    Feature Como usuario quiero darme de alta en la tienda.
    Background:
        Given El usuario navega en el sitio web para registrarse
    Scenario: Success Register
        When Un usuario se registra con el nombre de usuario "Barbara", la contraseña "123456789", y hace clic en el botón de registro
        Then El usuario deberia registrarse correctamente 
    