import React from "react";

function Header() {
    return (
        <header className="header">
        <div className="header-inner">
            <h1 className="brand">KeyStore</h1>
            <nav>
            <ul className="nav-list">
                <li><a href="#productos">Productos</a></li>
                <li><a href="#ofertas">Ofertas</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
            </nav>
        </div>
        </header>
    );
}

export default Header;
