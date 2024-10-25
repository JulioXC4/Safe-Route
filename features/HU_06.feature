Feature: US06: Envío de correos
  Como usuario,
  Quiero recibir correos de confirmación y alertas,
  Para estar informado sobre cambios en mi cuenta y notificaciones de seguridad.

  Scenario: Confirmación de registro
    Dado que el usuario ha completado el formulario de registro
    Cuando finaliza su registro
    Entonces el sistema enviará un correo de confirmación a su email registrado

  Scenario: Envío de alertas
    Dado que el usuario ha activado las notificaciones por correo
    Cuando ocurre un incidente relevante
    Entonces el sistema enviará una alerta por correo con la información del incidente
