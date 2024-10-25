Feature: US07: Personalizar alertas de seguridad
  Como usuario,
  Quiero configurar el tipo de alertas que recibo,
  Para ajustar las notificaciones según mi nivel de preocupación.

  Scenario: Configurar alertas
    Dado que el usuario ha accedido a la configuración de su perfil
    Cuando selecciona el tipo de alertas y el nivel de riesgo deseado
    Entonces el sistema ajusta las notificaciones para enviar solo las de la categoría seleccionada

  Scenario: Cambio de alertas
    Dado que el usuario ha cambiado sus preferencias de alertas
    Cuando guarda los cambios
    Entonces el sistema confirma que se ha actualizado su configuración de alertas con éxito
