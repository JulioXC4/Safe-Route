Feature: US10: Configuración de notificaciones
  Como usuario,
  Quiero poder configurar mis notificaciones,
  Para recibir sólo los avisos que sean importantes para mí.

  Scenario: Personalización de notificaciones
    Dado que el usuario está en la sección de configuración de notificaciones
    Cuando selecciona las opciones que desea (e.g., alertas en tiempo real, zonas de alto riesgo)
    Entonces el sistema ajustará las notificaciones según sus preferencias

  Scenario: Confirmación de ajustes
    Dado que el usuario ha modificado las configuraciones
    Cuando selecciona "Guardar cambios"
    Entonces el sistema confirmará que sus preferencias de notificación han sido actualizadas
