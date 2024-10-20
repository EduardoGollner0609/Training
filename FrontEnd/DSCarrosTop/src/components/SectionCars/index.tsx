import CardCar from "../CardCar";
import "./styles.css";

export default function SectionCars() {
  return (
    <section className="section-cars">
        <h2>Venha nos visitar</h2>
      <CardCar />
      <CardCar />
    </section>
  );
}
