import './styles.css';
import imgCar from '../../assets/Car.jpg';

export default function CardCar() {
  return (
    <div className="card-car">
      <img src={imgCar} alt="" />
      <h3>Lorem ipsum dolor</h3>
    </div>
  );
}
