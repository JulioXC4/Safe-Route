Feature: US16: Control sobre la privacidad de los datos
  Como usuario,
  Quiero tener control sobre qué datos comparto,
  Para proteger mi información personal.

  Scenario: Configuración de privacidad
    Dado que el usuario está en la configuración de su perfil
    Cuando selecciona "Privacidad de datos"
    Entonces el sistema le muestra opciones de qué datos compartir o mantener privados

  Scenario: Confirmación de privacidad
    Dado que el usuario ha ajustado su configuración de privacidad
    Cuando guarda los cambios
    Entonces el sistema confirma que los datos del usuario han sido protegidos según su configuración
