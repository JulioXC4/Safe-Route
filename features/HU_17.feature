Feature: US17: Ver historial de alertas recibidas
  Como usuario,
  Quiero ver el historial de alertas que he recibido,
  Para revisar incidentes pasados que podrían ser relevantes.

  Scenario: Acceder al historial de alertas
    Dado que el usuario está en la pantalla principal
    Cuando selecciona "Historial de alertas"
    Entonces el sistema muestra una lista cronológica de todas las alertas recibidas

  Scenario: Filtrar por tipo de alerta
    Dado que el usuario está viendo el historial
    Cuando selecciona un filtro por tipo de alerta (por ejemplo, robo, accidente)
    Entonces el sistema muestra solo las alertas del tipo seleccionado
