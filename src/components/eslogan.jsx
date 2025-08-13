import React, { useState, useEffect } from "react";


function Eslogan() {
    const imagenes = [
        "https://www.javiergosende.com/wp-content/uploads/2023/08/slogans-tienda-de-ropa-portada.jpg",
        "https://i.pinimg.com/736x/b4/40/e2/b440e2e4e28632af683d7aea7e72a2fc.jpg",
        "https://i.pinimg.com/1200x/66/c3/3c/66c33c2536d65104aea4f407d4c56474.jpg",
    ];

    const [indice, setIndice] = useState(0);

    // Cambia de imagen automáticamente cada 3 segundos
    useEffect(() => {
        const intervalo = setInterval(() => {
        setIndice((prev) => (prev + 1) % imagenes.length);
        }, 3000);
        return () => clearInterval(intervalo);
    }, [imagenes.length]);

    // Cambiar manualmente
    const siguiente = () => setIndice((prev) => (prev + 1) % imagenes.length);
    const anterior = () =>
        setIndice((prev) => (prev - 1 + imagenes.length) % imagenes.length);

    return (
        <>
        <div id="esloganText">
            <h1>Bienvenido a KeyStore,Explora nuestros Productos. <br /> 🤑🤑🤑</h1>
        </div>
        <div className="carrusel">
        <button className="btn" onClick={anterior}>❮</button>
        <img src={imagenes[indice]} alt={`Slide ${indice + 1}`} />
        <button className="btn" onClick={siguiente}>❯</button>
        </div>
        </>
    );
}

export default Eslogan;
