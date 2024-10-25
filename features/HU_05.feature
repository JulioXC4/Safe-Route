Feature: US05: Recibir notificaciones de seguridad en tiempo real
  Como usuario,
  Quiero recibir alertas de seguridad cercanas,
  Para evitar áreas peligrosas y estar informado en tiempo real.

  Scenario: Recepción de alerta
    Dado que el usuario está en su zona habitual
    Cuando ocurre un incidente de seguridad cercano
    Entonces el sistema envía una notificación push con detalles del incidente

  Scenario: Ver detalles de la alerta
    Dado que el usuario recibe la alerta
    Cuando abre la notificación
    Entonces el sistema muestra información adicional sobre el incidente y recomendaciones para evitar el área
