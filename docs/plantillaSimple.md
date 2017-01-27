---
title: plantilla simple
author: javier
---
[inicio](index.html) / [programacion](programacion.html) / {{page.title}}

<!-- MDTOC maxdepth:6 firsth1:1 numbering:1 flatten:0 bullets:0 updateOnSave:1 -->

1. [proposito](#proposito)   
2. [titulo](#titulo)   
3. [menu](#menu)   
4. [miga de pan](#miga-de-pan)   
5. [parrafos y saltos de linea](#parrafos-y-saltos-de-linea)   
6. [cabeceras](#cabeceras)   
7. [simulando un H1  para cabeceras grandes](#simulando-un-h1-para-cabeceras-grandes)   
&emsp;7.1. [simulando un H2](#simulando-un-h2)   
&emsp;&emsp;7.1.1. [simulando un H3](#simulando-un-h3)   
&emsp;&emsp;&emsp;7.1.1.1. [simulando un H4](#simulando-un-h4)   
&emsp;&emsp;&emsp;&emsp;7.1.1.1.1. [simulando un H5](#simulando-un-h5)   
&emsp;&emsp;&emsp;&emsp;7.1.1.1.2. [otro simulando un H5](#otro-simulando-un-h5)   
&emsp;&emsp;&emsp;&emsp;7.1.1.1.3. [mas simulando un H5](#mas-simulando-un-h5)   
&emsp;&emsp;&emsp;&emsp;7.1.1.1.4. [otro mas simulando un H5](#otro-mas-simulando-un-h5)   
&emsp;&emsp;&emsp;&emsp;7.1.1.1.5. [y aun otro mas simulando un H5](#y-aun-otro-mas-simulando-un-h5)   
&emsp;&emsp;&emsp;&emsp;&emsp;7.1.1.1.5.1. [simulando un H6](#simulando-un-h6)   
8. [imagenes](#imagenes)   
9. [codigo](#codigo)   
10. [enlaces](#enlaces)   

<!-- /MDTOC -->


# proposito
- tener la plantilla de todos los documentos para que sean coherentes
- poner en este documento todas los elementos que se pueden usar

# titulo
- es una variable propia de front matter llamada title

# menu
- si queremos que salga en el menu se usa la variable menu de front matter

#  miga de pan
- indica el orden lógico de los archivos
- el titulo de la página el final lo que indica en que página estamos.

# parrafos y saltos de linea
Para crear párrafos se deja una línea en blanco.

Para crear un salto de línea dentro de un párrafo,   
ademas del salto es necesario poner dos  
espacios al final de la última palabra de esa línea  

# cabeceras
simulan los tags h de html

# simulando un H1  para cabeceras grandes

## simulando un H2  

### simulando un H3   

#### simulando un H4   

##### simulando un H5  

##### otro simulando un H5  

##### mas simulando un H5  

##### otro mas simulando un H5  

##### y aun otro mas simulando un H5  

###### simulando un H6     

# imagenes
![payaso con titulo](img/payaso.jpg "payaso")

# codigo
- bower install me da este error  
```
bower install
"appbower" no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable.
```

- otra forma  

                {
                  "_aerobatic": {  
                    "router": [  
                      {  
                        "module": "basic-auth",   
                        "options": {  
                          "username": "$BASIC_AUTH_USERNAME",  
                          "password": "$BASIC_AUTH_PASSWORD"  
                        }  
                      },  
                      {  
                        "module": "webpage"  
                      }  
                    ],  
                   "build": {  
                      "engine": "jekyll"  
                    }  
                  }  
                }  

# enlaces
[chuleta de Markdown](markdownCheleta.html)
