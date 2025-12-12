const historietas = [
    {
        titulo: "Amanecer en San Mateo",
        descripcion: "Luna y un niño descubren que la basura está contaminando San Mateo de Huanchor. Deciden hacer algo al respecto.",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escena1-ZTtbzDRmjlND515hnEr8xrvLtdYYJQ.png"
    },
    {
        titulo: "El Río que Habla",
        descripcion: "Los niños conocen a Rimita, el pez guardián del río, quien explica que está enfermo por la contaminación.",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escena2-jSmrX3dRsThqbZ4Q3DDUIuhGRHgTOq.png"
    },
    {
        titulo: "La Misión Verde",
        descripcion: "Rimita enseña a los niños que separar basura en tachos de colores y no botar basura salvaría el río.",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escena3-sHREOh2rlNkPt40Car7ZRBvG3tGsfW.png"
    },
    {
        titulo: "Unidos por el Cambio",
        descripcion: "Toda la comunidad se une para limpiar las calles y reciclar juntos. Cada pedacito limpio ayuda al planeta.",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escena4-ttZnVsCUjJ69LGR91mkqXqqb8Oqkqc.png"
    },
    {
        titulo: "El Río Vuelve a Sonreír",
        descripcion: "¡Lo logramos! San Mateo vuelve a brillar. El río está limpio y los peces nadan felices. La misión verde fue un éxito.",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Escena5-FseZGnBECwf35tz7WbApjnoM4WUdXc.png"
    },
    {
        titulo: "Mensaje Final",
        descripcion: "Cuidar San Mateo de Huanchor es cuidar nuestra casa. ¡Juntos podemos mantenerla limpia, verde y llena de vida!",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mensajefinal-I2Ye8TVzeVrneurbqjFZC6pK1o0cul.png"
    },
    {
        titulo: "El Silencio del Jr. Chahuallo",
        descripcion: "Un niño no puede respirar por la contaminación del aire. Una niña descubre que nadie se da cuenta del problema. Una llama representa la carga de la contaminación.",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%C3%A1gina1-a8uAizRFUlXLpgM6uglFWJWkZzMvlY.png"
    },
    {
        titulo: "El Río que Hablaba en Susurros",
        descripcion: "Un águila explica que el río ya solo susurra entre la basura. Un niño escucha el llamado del río. Todos somos responsables de su contaminación.",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%C3%A1gina2-BpDfpVawdpj3Kv8ArJw7rboyBw2FVY.png"
    },
    {
        titulo: "La Feria del Ruido y del Olvido",
        descripcion: "En la celebración todos olvidan recoger la basura. Un niño reflexiona que si uno empieza, los demás seguirán. Cuando el suelo sonríe limpio, el corazón también se alegra.",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%C3%A1gina3-tn50AyQCHJII1qOxEX4O56GSinFXyr.png"
    },
    {
        titulo: "El Canto Vuelve a Nacer",
        descripcion: "¡El río vuelve a cantar! El águila inspira con su vuelo. La comunidad celebra juntos al río limpio. Las limpiezas se imponen y todos aprenden el ejemplo.",
        imagen: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/P%C3%A1gina4-NpHu2Ft5H83VfANbejKs9zj4wnHwEE.png"
    }
];

let historiactualIndex = 0;

function abrirHistorieta(index) {
    historiactualIndex = index;
    const modal = document.getElementById("modal-historieta");
    const historieta = historietas[index];
    
    document.getElementById("carousel-image").src = historieta.imagen;
    document.getElementById("historieta-info").innerHTML = `
        <h3>${historieta.titulo}</h3>
        <p>${historieta.descripcion}</p>
    `;
    actualizarContador();
    modal.style.display = "block";
}

function cerrarHistorieta() {
    document.getElementById("modal-historieta").style.display = "none";
}

function actualizarContador() {
    document.getElementById("carousel-counter").textContent = 
        `${historiactualIndex + 1} de ${historietas.length}`;
}

document.getElementById("btn-next").addEventListener("click", () => {
    historiactualIndex = (historiactualIndex + 1) % historietas.length;
    const historieta = historietas[historiactualIndex];
    document.getElementById("carousel-image").src = historieta.imagen;
    document.getElementById("historieta-info").innerHTML = `
        <h3>${historieta.titulo}</h3>
        <p>${historieta.descripcion}</p>
    `;
    actualizarContador();
});

document.getElementById("btn-prev").addEventListener("click", () => {
    historiactualIndex = (historiactualIndex - 1 + historietas.length) % historietas.length;
    const historieta = historietas[historiactualIndex];
    document.getElementById("carousel-image").src = historieta.imagen;
    document.getElementById("historieta-info").innerHTML = `
        <h3>${historieta.titulo}</h3>
        <p>${historieta.descripcion}</p>
    `;
    actualizarContador();
});

window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal-historieta");
    if (event.target == modal) {
        cerrarHistorieta();
    }
});

document.getElementById("contacto-form").addEventListener("submit", (event) => {
    event.preventDefault();
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    event.target.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
