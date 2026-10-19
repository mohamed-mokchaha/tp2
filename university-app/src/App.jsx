import "./App.css";
import Studentcard from "./components/studentcard.jsx" ;
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import studentImage from "./assets/IMG_9123.JPG";
const etudiants = [{
  prenom: "mohamed ",
  nom: "mokchaha",
  email: "mokchahamohamed@gmail.com",
  telephone: "+216 55896847",
  filiere: "Génie Logiciel et Systèmes d'Information",
  anneeEtude: "2ème année",
  groupe: "GLSI B 2",
  ville: "Bizerte",
  image: studentImage,
}];


function App() {
  return (
    <div className="container" id="accueil">
      <Header />
      <Navbar />

      <main id="etudiants">
        

        <div className="students">
          {etudiants.map((etudiant) => (
            <Studentcard
             image={studentImage}
              key={etudiant.email}
              prenom={etudiant.prenom}
              nom={etudiant.nom}
              email={etudiant.email}
              telephone={etudiant.telephone}
              filiere={etudiant.filiere}
              anneeEtude={etudiant.anneeEtude}
              groupe={etudiant.groupe}
              ville={etudiant.ville}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
