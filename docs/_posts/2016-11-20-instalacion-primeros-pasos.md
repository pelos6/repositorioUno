---
layout: post
title:  "Instalación y primeros pasos!"
date:   2016-11-20 00:32:14 +0200
categories: post
---
<!-- MDTOC maxdepth:6 firsth1:1 numbering:0 flatten:0 bullets:1 updateOnSave:1 -->

- [Proposito](#proposito)   
- [inicio](#inicio)   

<!-- /MDTOC -->

# Proposito
* tener una plantilla para proyectos publicos y  una documentación pública en gitHubPages
* la documentación del proyecto en el directorio /docs
      + de esta forma se tienen en el mismo repositorio el proyecto y la documentación.
* que se pueda editar online

# inicio
* se puede hacer un fork desde otra cuenta con lo que tienes una copia del repositorio
![captura]({{ "/img/forkRepositorioUno.png" | prepend: site.baseurl }})

* se puede cambiar el nombre en settings
* activar gitHubPages
![captura]({{ "/img/activarGitHubPages.png" | prepend: site.baseurl }})

* es importante cambiar en `_config.yml`  

      baseurl: "/repositorioUno" # the subpath of your site, e.g. /blog  

* baseurl sirve para que encuentre las css
![captura]({{ "/img/sitioPublicado.png" | prepend: site.baseurl }})
* en ese mismo archivo se puede configurar parte del entorno
* el archivo `plantilas.md` muestra como se crean las entradas en el menú y como se ordenan  

          ---
          menu: plantillas
          orden: 10
          title: plantillas
          author: javier
          ---
