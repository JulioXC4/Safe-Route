Feature: US04: Planificación de rutas seguras
  Como usuario,
  Quiero planificar una ruta segura,
  Para evitar zonas peligrosas mientras llego a mi destino.

  Scenario: Selección de origen y destino
    Dado que el usuario está en la pantalla de planificación de rutas
    Cuando selecciona un origen y un destino
    Entonces el sistema muestra la ruta más segura disponible

  Scenario: Ajustes de la ruta
    Dado que el usuario ha generado una ruta
    Cuando el sistema detecta un cambio en el nivel de riesgo en tiempo real
    Entonces la aplicación ajusta la ruta para evitar nuevas zonas peligrosas
