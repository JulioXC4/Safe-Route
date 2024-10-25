Feature: US01: Registro de nuevos usuarios
  Como ciudadano,
  Quiero registrarme en SafeRoute,
  Para utilizar las funcionalidades de planificación de rutas seguras.

  Scenario: Acceder al registro
    Dado que el visitante está en la página de inicio de SafeRoute
    Cuando el visitante selecciona "Registrarse"
    Entonces el sistema le presenta el formulario de registro solicitando nombre, correo y contraseña

  Scenario: Confirmación del registro
    Dado que el visitante ha ingresado su nombre, correo válido y contraseña en el formulario de registro
    Y ha aceptado los términos y condiciones
    Cuando el visitante hace clic en "Confirmar registro"
    Entonces el sistema crea la cuenta del usuario
    Y envía un correo de confirmación a la dirección de correo proporcionada
