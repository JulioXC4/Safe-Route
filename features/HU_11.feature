Feature: US11: Ver resumen de notificaciones y alertas
  Como usuario,
  Quiero ver un resumen de mis notificaciones y alertas,
  Para estar al tanto de la seguridad en mi entorno.

  Scenario: Listado de alertas recientes
    Dado que el usuario accede a la sección de notificaciones
    Cuando selecciona "Ver resumen"
    Entonces el sistema le mostrará un listado con las alertas y notificaciones recientes

  Scenario: Filtros en las notificaciones
    Dado que el usuario tiene varias notificaciones
    Cuando selecciona un filtro (e.g., solo alertas activas, solo incidentes resueltos)
    Entonces el sistema mostrará solo las notificaciones que cumplan con ese criterio
