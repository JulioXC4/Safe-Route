Feature: US18: Verificar incidentes reportados por la comunidad
  Como usuario,
  Quiero verificar incidentes reportados por otros usuarios,
  Para aumentar la precisión de la información.

  Scenario: Votar para verificar un reporte
    Dado que el usuario ha visto un incidente reportado
    Cuando selecciona "Verificar reporte"
    Entonces el sistema registra su voto y actualiza la confiabilidad del incidente

  Scenario: Ver resultados de verificación
    Dado que el usuario ha votado en un reporte
    Cuando otros usuarios también verifican el reporte
    Entonces el sistema actualiza el nivel de confiabilidad del incidente y lo muestra en la lista de incidentes verificados
