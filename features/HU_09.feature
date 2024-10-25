Feature: US09: Cambio de contraseña
  Como usuario,
  Quiero poder cambiar mi contraseña desde la configuración,
  Para mejorar la seguridad de mi cuenta.

  Scenario: Cambiar contraseña desde perfil
    Dado que el usuario está en la sección de perfil
    Cuando selecciona "Cambiar contraseña"
    Entonces el sistema solicitará la contraseña actual y la nueva para proceder con el cambio

  Scenario: Confirmación de cambio
    Dado que el usuario ha ingresado la nueva contraseña correctamente
    Cuando selecciona "Guardar cambios"
    Entonces el sistema confirmará que la contraseña ha sido cambiada con éxito
