Feature: Login page

    Feature Como usuario ingreso en la tienda para poder comprar productos.
    Background:
        Given El usuario navega en el sitio web para iniciar su interaccion 
    Scenario: Success Login
        When Un usuario ingresa el nombre de usuario "Barbara", la contraseña "123456789", y hace clic en el botón de registro
        Then El usuario deberia iniciar sesion correctamente 
    Scenario: Incorrect Username Login
        When Un usuario proporciona credenciales incorrectas y hace clic en el botón de inicio de sesión
            | username | password     |
            | testName | secret_sauce |
        Then The error message Epic sadface: Username and password do not match any user in this service is displayed
    Scenario: Incorrect Password Login
        When Un usuario proporciona credenciales incorrectas y hace clic en el botón de inicio de sesión
            | username      | password     |
            | standard_user | testPassword |
        Then The error message Epic sadface: Username and password do not match any user in this service is displayed 
    Scenario: Add Cart Sucess 
    When El usuario da clic en boton Laptop que esta adentro de la categoria
        Then El usuario registro un item al carrito 