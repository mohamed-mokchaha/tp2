
import "./App.css";
import Studentcard from "./components/studentcard";
import { useState } from "react";
import image from "./assets/IMG_9123.JPG";
import imgy from "./assets/hero.png";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      prenom: "mohamed",
      nom: "mokchaha",
      email: "mokchahamohamed@gmail.com",
      telephone: "+216 55896847",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI B 2",
      ville: "Bizerte",
      image: image,
    },
  ]);

  function AjouterEtudiant() {
    const nouvelEtudiant = {
      id: Date.now(),
      nom: "Ben Salem",
      prenom: "Yassine",
      email: "yassine.bensalem@example.com",
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sfax",
      image: imgy,
    };

    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  // Supprimer étudiant
  function supprimerEtudiant(id) {
    setEtudiants(
      etudiants.filter((etudiant) => etudiant.id !== id)
    );
  }

  return (
    <div className="app">
      <Header />
      <Navbar />

      <h1 id="st">Student list</h1>

      <button onClick={AjouterEtudiant} className="btn">
        Ajouter un étudiant
      </button>

      {etudiants.map((etudiant) => (
        <Studentcard
          key={etudiant.id}
          {...etudiant}
          onSupprimer={supprimerEtudiant}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;


