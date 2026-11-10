
import { useState } from "react";
import "../App.css";

function Studentcard(props) {
  const [CoordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function Visibles() {
    setCoordonneesVisibles(!CoordonneesVisibles);
  }

  function supprimer() {
    props.onSupprimer(props.id);
  }

  return (
    <div>
      <h1 id="F">Fiche Etudiant</h1>

      <img
        src={props.image}
        alt="Photo de l'étudiant"
        id="img"
      />

      <p><strong>Prénom :</strong> {props.prenom}</p>
      <p><strong>Nom :</strong> {props.nom}</p>

      {CoordonneesVisibles && (
        <>
          <p><strong>Email :</strong> {props.email}</p>
          <p><strong>Téléphone :</strong> {props.telephone}</p>
        </>
      )}

      <p><strong>Filière :</strong> {props.filiere}</p>
      <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
      <p><strong>Groupe :</strong> {props.groupe}</p>
      <p><strong>Ville :</strong> {props.ville}</p>

      <a href={`mailto:${props.email}`} className="btn">
        Contacter
      </a>

      <button onClick={Visibles} className="btn">
        Masquer / Afficher
      </button>

      <button onClick={supprimer} className="btn">
        Supprimer
      </button>
    </div>
  );
}

export default Studentcard;
