import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <Alert variant="success">
      <Alert.Heading>Benvenuta/o!</Alert.Heading>
      <p>
        Lo shop EpiBook sezione Horror ti da il benvenuto! Scopri numerosi libri
        tema horror. Se vuoi leggere altri temi, collegati alla{" "}
        <Alert.Link href="#">Pagina Principale</Alert.Link> del sito di Epibook!
      </p>
    </Alert>
  );
}

export default Welcome;
