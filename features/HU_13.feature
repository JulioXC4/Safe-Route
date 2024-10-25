Feature: US13: Planificar rutas
  Como usuario,
  Quiero planificar una ruta segura,
  Para evitar zonas peligrosas mientras me desplazo.

  Scenario: Búsqueda y sugerencias de rutas
    Dado que el usuario está en la sección de planificación de rutas
    Cuando ingresa su origen y destino
    Entonces el sistema le mostrará varias rutas disponibles con sus niveles de seguridad

  Scenario: Ajuste de ruta por incidentes
    Dado que el usuario ha seleccionado una ruta sugerida
    Cuando se detecta un incidente o alerta en tiempo real durante el recorrido
    Entonces el sistema ofrecerá una nueva ruta alternativa más segura basada en la información actual
