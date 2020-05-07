import { cars } from './app/cars';
import "./main.scss";

const message = cars[0].make;

document.getElementById('message-element')
  .textContent = message;