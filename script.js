    const imageContainer = document.getElementById("imageContainer");
      const randomImage = document.getElementById("randomImage");
      const imageCaption = document.getElementById("imageCaption");
      const imageBtn = document.getElementById("imageBtn");
      randomImage.classList.remove("active");
      imageCaption.innerText = "Haz clic para obtener tu carta del día";

      const cartasDelTarot = [
        {
          nombre: "El Mago",
          imagen: "img/mago.jpg",
          descripcion:
            "Hoy es un día para demostrar tus habilidades y poder. Te enfrentarás a desafíos con determinación y manifestarás tus objetivos con éxito.",
        },
        {
          nombre: "La Sacerdotisa",
          imagen: "img/sacerdotisa.jpg",
          descripcion:
            "Confía en tu intuición hoy. Habrá misterios a tu alrededor, pero tu conexión con lo divino te guiará por el camino correcto.",
        },
        {
          nombre: "La Emperatriz",
          imagen: "img/emperatriz.jpg",
          descripcion:
            "La abundancia y el amor maternal estarán presentes en tu día. Siembra la fertilidad y disfruta de la belleza que te rodea.",
        },
        {
          nombre: "El Emperador",
          imagen: "img/emperador.jpg",
          descripcion:
            "Hoy ejerce tu autoridad con estabilidad. Tu liderazgo firme guiará a otros hacia el éxito y la realización.",
        },
        {
          nombre: "El Hierofante",
          imagen: "img/hierofante.jpg",
          descripcion:
            "La enseñanza y la conexión espiritual serán fundamentales. Sigue tradiciones y comparte tus conocimientos con generosidad.",
        },
        {
          nombre: "Los Enamorados",
          imagen: "img/enamorados.jpg",
          descripcion:
            "Hoy enfrentarás elecciones importantes. Cultiva relaciones armoniosas y toma decisiones desde el corazón.",
        },
        {
          nombre: "El Carro",
          imagen: "img/carro.jpg",
          descripcion:
            "Triunfa con determinación y avanza decididamente hacia tus metas. El control sobre las situaciones estará a tu favor.",
        },
        {
          nombre: "El Ermitaño",
          imagen: "img/hermitano.jpg",
          descripcion:
            "Hoy es un día de introspección y sabiduría. Busca la verdad en tu interior y reflexiona sobre tu camino.",
        },
        {
          nombre: "La Rueda de la Fortuna",
          imagen: "img/rueda.jpg",
          descripcion:
            "Experimentarás cambios y ciclos en tu día. Confía en el destino y acepta las transformaciones con optimismo.",
        },
        {
          nombre: "La Fuerza",
          imagen: "img/fuerza.jpg",
          descripcion:
            "Demuestra valentía y control sobre tu bestia interior. La compasión guiará tus acciones y te conducirá al éxito.",
        },
        {
          nombre: "El Colgado",
          imagen: "img/colgado.jpg",
          descripcion:
            "Hoy experimentarás sacrificios y una perspectiva diferente. Acepta la rendición y encuentra lecciones valiosas en ello.",
        },
        {
          nombre: "La Muerte",
          imagen: "img/muerte.jpg",
          descripcion:
            "La transformación y el renacimiento serán el tema central. Abraza los cambios con valentía y mira hacia un nuevo comienzo.",
        },
        {
          nombre: "La Templanza",
          imagen: "img/templanza.jpg",
          descripcion:
            "Hoy busca la armonía y el equilibrio en todo. Fusiona opuestos y encuentra la paz en el centro de las situaciones.",
        },
        {
          nombre: "El Diablo",
          imagen: "img/diablo.jpg",
          descripcion:
            "Enfrenta las tentaciones con cautela y evita la indulgencia. La dualidad estará presente, elige el camino de la virtud.",
        },
        {
          nombre: "La Torre",
          imagen: "img/torre.jpg",
          descripcion:
            "Hoy enfrentarás cambios repentinos y destrucción. Prepárate para revelaciones y mantén la calma en medio de la tormenta.",
        },
        {
          nombre: "La Estrella",
          imagen: "img/estrella.jpg",
          descripcion:
            "Encuentra esperanza e inspiración en tu día. Conéctate cósmicamente y permite que la luz guíe tu camino.",
        },
        {
          nombre: "La Luna",
          imagen: "img/luna.jpg",
          descripcion:
            "Hoy se revelarán misterios y magia. Explora tus sueños y déjate llevar por la intuición en este día misterioso.",
        },
        {
          nombre: "El Sol",
          imagen: "img/sol.jpg",
          descripcion:
            "El alegría, la vitalidad y el éxito te acompañarán. Disfruta de la luz radiante que ilumina tu día.",
        },
        {
          nombre: "La Justicia",
          imagen: "img/justicia.jpg",
          descripcion:
            "Experimenta un renacimiento y claridad. Responde al llamado espiritual y avanza hacia una nueva fase en tu vida.",
        },
        {
          nombre: "El Mundo",
          imagen: "img/mundo.jpg",
          descripcion:
            "Hoy lograrás realizaciones y comprensión universal. Celebra tus éxitos y reconoce tu conexión con el mundo que te rodea.",
        },
        {
          nombre: "El Loco",
          imagen: "img/loco.jpg",
          descripcion:
            "La libertad y la espontaneidad marcarán el inicio de un nuevo viaje. Abraza la aventura y confía en el camino que se presenta ante ti.",
        },
      ];

      imageBtn.addEventListener("click", mostrarCarta);

      function mostrarCarta() {
        if (!randomImage.classList.contains("active")) {
          randomImage.classList.add("active");
          imageCaption.innerText = "";
        }

        const index = Math.floor(Math.random() * cartasDelTarot.length);
        const carta = cartasDelTarot[index];

        randomImage.style.opacity = 0;
        setTimeout(() => {
          randomImage.src = carta.imagen;
          imageCaption.innerText = carta.descripcion;
          randomImage.style.opacity = 1;
        }, 300);
        randomImage.style.display = "block";
      }