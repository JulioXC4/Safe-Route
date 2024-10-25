Feature: US14: Ver niveles de seguridad y recomendaciones en rutas
  Como usuario,
  Quiero ver los niveles de seguridad de las rutas y recomendaciones,
  Para tomar la ruta más segura disponible.

  Scenario: Información detallada de seguridad de la ruta
    Dado que el usuario ha solicitado una ruta
    Cuando el sistema muestra las rutas disponibles
    Entonces cada ruta debe estar acompañada de su nivel de seguridad (bajo, moderado, alto) y recomendaciones para evitar zonas peligrosas

  Scenario: Advertencias en tiempo real
    Dado que el usuario está siguiendo una ruta planificada
    Cuando se detecta un nuevo incidente en el camino (e.g., robo o accidente)
    Entonces el sistema enviará una advertencia al usuario, sugiriendo un cambio de ruta o medidas de precaución
