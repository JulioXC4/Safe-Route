Feature: US08: Formularios de registro con información exacta
  Como usuario,
  Quiero completar un formulario de registro con información clara y precisa,
  Para crear mi cuenta de manera sencilla.

  Scenario: Validación de campos obligatorios
    Dado que el usuario está registrando su cuenta
    Cuando introduce su nombre, correo electrónico, contraseña, y otros campos obligatorios
    Entonces el sistema validará que toda la información esté completa y en el formato correcto

  Scenario: Error y correcciones
    Dado que el usuario ingresa datos incorrectos, como un email no válido
    Cuando intenta enviar el formulario
    Entonces el sistema le mostrará mensajes de error y permitirá corregirlos antes de continuar
