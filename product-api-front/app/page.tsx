import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 p-5">
      <header className="text-center bg-gray-100 p-12 rounded-lg mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Bienvenue dans notre boutique</h1>
        <p className="text-lg text-gray-600 mt-4">
          Trouvez les meilleurs produits au meilleur prix
        </p>
        <Link href="/products" className="mt-6 inline-block bg-blue-500 ex-lg hover:bg-blue-600 text-white font-bold py-3 px-6 rounded ttransition duration-200">
            Voir les produits
        </Link>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-center textg-gray-800 mb-6">Pourquoi nous choisir?</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="text-center p-6 border rounded-lg flex-1">
            <h3 className="text-xl font-bold text-blue-500 mb-2">Qualité</h3>
            <p className="text-gray-600 mt-2">Des produits de qualité pour vous
              satisfaire pleinement</p>
          </div>
          <div className="text-center p-6 border rounded-lg flex-1">
            <h3 className="text-xl font-bold text-blue-500 mb-2">Prix</h3>
            <p className="text-gray-600 mt-2">Des produits à des prix compétitifs</p>
          </div>
          <div className="text-center p-6 border rounded-lg flex-1">
            <h3 className="text-xl font-bold text-blue-500 mb-2">Livraison</h3>
            <p className="text-gray-600 mt-2">Livraison rapide et sécurisée</p>
          </div> 
        </div>
      </section>

      <section className="text-center bg-gray-200 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">À propos de nous</h2>
        <p className="text-gray-600 text-lg mb-6">
          Nous sommes une entreprise dédiée à fournir les meilleurs produits à nos clients.
          Notre mission est de rendre votre expérience d'achat agréable et sans stress.
        </p>
        <Link href="/contact" className="text-blue-500 font-bold hover:text-blue-600 transition">
            Contactez-nous
        </Link>
      </section>
    </div>
  );
}
