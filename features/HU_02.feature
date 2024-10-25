Feature: US02: Personalización del perfil
  Como usuario registrado,
  Quiero personalizar mi perfil en SafeRoute,
  Para recibir recomendaciones más precisas basadas en mis preferencias.

  Scenario: Acceder al perfil para edición
    Dado que el usuario ha iniciado sesión en SafeRoute
    Cuando el usuario selecciona "Editar perfil"
    Entonces el sistema muestra la página de edición del perfil donde puede modificar sus preferencias y datos personales

  Scenario: Guardar cambios en el perfil
    Dado que el usuario está en la página de edición de perfil
    Cuando el usuario ha actualizado sus preferencias y selecciona "Guardar cambios"
    Entonces el sistema actualiza su perfil con las nuevas preferencias
    Y muestra un mensaje de confirmación de los cambios guardados
