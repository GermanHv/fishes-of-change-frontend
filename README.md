# Hackathon - Hack the Ocean  🐳
## Equipo Fishes of change 
Hackathon de LaunchX  by <a href="https://www.instagram.com/innovaccionvirtual/?hl=es" target="_blank">Innovacción Virtual</a>

Este es un clone del repositorio que se envio al hackathon el original lo puedes encontrar <a href="https://github.com/Beto-cpu/fishes-of-change-frontend" target="_blank"> Repositorio Hackathon LaunchX </a>

<img src="/assets/logo.png" alt="Fishes of change logo"/>

## Integrantes 👨‍💻

- 👻 <a href="https://github.com/Beto-cpu" target="_blank"> Alberto Munguía </a>-->  Frontend
- 🙂 <a href="https://github.com/Buwar88" target="_blank"> Irving Jaramillo </a> ----> Frontend
- 🦅 <a href="https://github.com/JavierPortada" target="_blank"> Juan Javier </a> ---------> Backend
- 😎 <a href="https://github.com/jorgeAngelus" target="_blank">Jorge Maldonado </a> -> Backend
- 😸 <a href="https://github.com/GermanHv" target="_blank">Germán Horta </a>     --> Documentación

## Problema a resolver 🧩
Concientizar a las personas y empresas del problema que afectan las industrias petroleras contaminando los océanos y degradando la
flora y fauna marítima.

## Solución 🔍

Se realiza una página web informativa de educación ambiental a través de un juego tipo clicker en donde el usuario jugará como la 
planta de extracción de petróleo, visualizandose la flora y fauna maritíma en pantalla, mientras más avance el juego se irá cambiando
el escenario de manera dinámica y apareciendo información de derrames de petróleo, impactos en la naturaleza por las industrias y vida 
maritíma. El final del juego tiene por objetivo demostrar que los peces se fueron de la zona en donde nos saldrá una última ventana
emergente informátiva que nos dirá una forma de apoyar a los océanos dirigiendonos a <a href="https://oceana.org/" target="_blank">OCEANA</a>
al regresar al juego nos agradecerá por haber jugado y el escenario cambió, en lugar de la planta petrolera aparece unas hélices de energía eólica
y los peces regresando a la pantalla.


- <a href="https://blue-river-00f073910.1.azurestaticapps.net" target="_blank">Link de despliegue de la aplicación</a>
- <a href="https://vm.tiktok.com/ZMLcvpybs/?k=1" target="_blank">Video de TikTok </a>
## Video 🎞
![VideoWeb](/assets/VideoWeb.gif)


![Videocel](/assets/Videocel.gif)

## Dependencias 📦
- React
- Next.JS
- PostCSS
- Prettier
- Tailwindcss
- Typescript

## Documentación 📄
- [Requerimientos](/docs/Requerimientos.pdf)
- [Buyer persona](/docs/Buyer-Persona-Carolina-Ramírez-Abogada.pdf)
- [Target Audience](/docs/Target-Audience-Template.pdf)

### UI wireframe 📲
<img src="/docs/UIwireframe.png" alt="UI wireframe"/>

### Vista prototipo 🧷
<img src="/docs/vistaprototipo.png" alt="Vista prototipo"/>

### Diagrama de flujo 📝
<img src="/docs/Flow-diagram-Oil-Fish.drawio.png" alt="Diagrama Oil Fish"/>

### Diagrama Backend

<img src="/assets/Imgbackend.png" alt="Diagrama Backend"/>

[Repositorio de backend](https://github.com/Beto-cpu/OIL-FISH)

### Funcionamiento de la aplicación 💻
La aplicación cuenta con 4 páginas principales: Click the oil, Voluntarios y Acerca de nosotros. A continuación se explicará el funcionamiento general de cada uno:

#### Click the oil 
Esta es la página principal del proyecto. Consiste en una interfaz interactiva muy parecida a lo que encontraríamos en un juego 'clicker'. Esta pantalla cuenta con un elemento al que se le puede accionar para conseguir petroleo con el que se pueden comprar diferentes articulos en una tienda, tanto para mejorar la productividad como para cuidar el oceano de posibles derrames.
Para su funcionamiento Click the Oil utiliza diferentes estados y acciones que se llevan a cabo según difernetes probabilidades.
Los principales elementos en los que se basa el juego son los litros de petroleo actuales y la cantidad de peces en el oceano. Estos números son los que regirán el avance del juego, sirviendo el petróleo como moneda principal y teniendo que cuidar el ecosistema de los peces para evitar que su número llegue a cero, momento en el que el juego acaba.
Además se tienen diferentes parámetros que servirán para que la aplicación determine si algún evento debe ser ejecutado. Los parámetros anteriormente mencionados son: sanidad del agua, litros de petróleo obtenidos por click, límite a partir del cual hay riesgo de derrame, probabilidad de derrame y probabilidad de recuperación.
Todos estos parámetros pueden ser afectados directa o indirectamente mediante acciones que se adquieren en una tienda. Las acciones son: Tratar agua, mantenimiento mensual, mantenimiento anual, mejora del excarvador 1, mejora del excarvador 2, mejora del excarvador 3.
Por último y según como se juegue, diferentes eventos pueden tomar lugar en el juego. Los principales son: Derrame de petroleo, disminución de los especimenes, recuperación del hábitat.

#### Voluntarios
Esta es la página de contacto con la cual los internautas se pueden poner en comunicación para participar en posibles eventos de apoyo al ambiente organizados por el equipo o por alguna asociación. Además, se tiene un botón con el cuál se puede dirigir a una página perteneciente a OCEANA, una asociación sin fines de lucro que ayuda a preservar y cuidar los mares.

#### Acerca de nosotros
Esta página contiene información de nuestra visión y misión, así como de los participantes que formamos Fishes of Change.

### Escalabilidad 📈
Actualmente, la aplicación solo permite jugar como la planta donde el objetivo es el evitar un final malo, sin embargo, a futuro se planea agregar una nueva modalidad de juego donde se juegue desde el punto de vista de los peces. En esta modalida los cuadros de información cambian hablando de vida maritíma y ahora la finalidad es juntar peces para que la planta poco a poco se vaya destruyendo hasta que la planta petrolera sea destruida y sea remplazada por generadores de energía eólica, una alternativa sustentable al petróleo.
