import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className='home-page'>
            <header className='hero'>
                <h1>Bienvenue dans notre boutique</h1>
                <p>Trouvez les meilleurs produits au meilleur prix</p>
                <Link to="/products" className='cta-button'>
                    Voir les Produits
                </Link>
            </header>

            <section className='features'>
                <h2>Pourquoi nous choisir ?</h2>
                <div className='features-list'>
                    <div className='feature-item'>
                        <h3>Qualité Assurée</h3>
                        <p>Nos produits sont sélectionnés avec soin pour garantir la satisfaction de nos clients</p>
                    </div>
                    <div className='feature-item'>
                        <h3>Livraison Rapide</h3>
                        <p>Recevez vos commandes en un temps record, directement chez vous.</p>
                    </div>
                    <div className='feature-item'>
                        <h3>Prix compétitifs</h3>
                        <p>Profitez de prix attractifs sur une large gamme de produits.</p>
                    </div>
                </div>
            </section>

            <section className='about'>
                <h2>A propos de nous</h2>
                <p>
                    Nous sommes une entreprise dédiée à fournir les meilleurs produits à nos clients. 
                    Notre mission est de rendre votre expérience d'achat agréable et sans stress.
                </p>
                <Link to="/contact" className='cta-link'>
                    Contactez-nous
                </Link>
            </section>
        </div>
    );
};

export default HomePage;