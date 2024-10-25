Feature: US20: Soporte de múltiples idiomas en la aplicación
  Como usuario,
  Quiero utilizar SafeRoute en mi idioma nativo,
  Para usar la aplicación de manera más cómoda.

  Scenario: Selección de idioma
    Dado que el usuario está en la configuración de la aplicación
    Cuando selecciona el idioma de preferencia
    Entonces la aplicación cambia al idioma seleccionado

  Scenario: Detección automática de idioma
    Dado que el usuario ha instalado la aplicación
    Cuando la aplicación detecta el idioma del dispositivo
    Entonces ajusta el idioma automáticamente al idioma detectado
