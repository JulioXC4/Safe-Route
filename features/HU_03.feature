Feature: US03: Recuperación de contraseña
  Como usuario registrado,
  Quiero poder recuperar mi contraseña,
  Para restablecer el acceso a mi cuenta en caso de olvidarla.

  Scenario: Recuperación por correo electrónico
    Dado que el usuario olvidó su contraseña
    Cuando selecciona "¿Olvidaste tu contraseña?" en la pantalla de inicio de sesión
    Entonces el sistema enviará un correo electrónico con un enlace para restablecerla

  Scenario: Confirmación de restablecimiento
    Dado que el usuario ha solicitado recuperar su contraseña
    Cuando selecciona el enlace recibido por correo
    Entonces el sistema le permitirá crear una nueva contraseña y confirmar el cambio
