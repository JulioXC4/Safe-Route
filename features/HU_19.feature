Feature: US19: Acceso a SafeRoute en diferentes ciudades
  Como usuario,
  Quiero utilizar SafeRoute en varias ciudades,
  Para planificar rutas seguras cuando viajo.

  Scenario: Selección de ciudad
    Dado que el usuario está viajando a una nueva ciudad
    Cuando accede a la configuración de ubicación
    Entonces el sistema le permite seleccionar la nueva ciudad para ver las zonas de riesgo

  Scenario: Ajuste automático de ciudad
    Dado que el usuario está en una ciudad diferente
    Cuando el sistema detecta su ubicación automáticamente
    Entonces SafeRoute ajusta el mapa de riesgos según la ciudad actual
