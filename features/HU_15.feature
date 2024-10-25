Feature: US15: Ver lista de alertas
  Como usuario,
  Quiero ver una lista de alertas activas en mi área,
  Para estar al tanto de los riesgos actuales.

  Scenario: Listado de alertas activas
    Dado que el usuario está en la sección de alertas
    Cuando selecciona "Ver alertas"
    Entonces el sistema mostrará una lista con las alertas activas en su área geográfica en tiempo real

  Scenario: Acceso a alertas históricas
    Dado que el usuario está revisando las alertas
    Cuando selecciona la opción de "Historial de alertas"
    Entonces el sistema le mostrará las alertas pasadas ordenadas por fecha, con la opción de filtrar por tipo de incidente y ubicación
