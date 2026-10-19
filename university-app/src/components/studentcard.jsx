function Studentcard(props) {
  return (
    <div>
        <h1 id="F">Fiche Etudiant</h1>
        <img src={props.image} alt="Photo de l'étudiant" id="img" />
        <p><strong>Prénom :</strong> {props.prenom}</p>
        <p><strong>Nom :</strong> {props.nom}</p>
        <p><strong>Email : </strong>{props.email}</p>
        <p><strong>Téléphone : </strong>{props.telephone}</p>
        <p><strong>Filière :</strong> {props.filiere}</p>
        <p><strong>Année d'étude :</strong> {props.anneeEtude}</p>
        <p><strong>Groupe : </strong>{props.groupe}</p>
        <p><strong>Ville : </strong>{props.ville}</p>
        <a href={`mailto:${props.email}`} className="btn">
    Contacter
  </a>
    </div>
   
  );
}
export default Studentcard ;