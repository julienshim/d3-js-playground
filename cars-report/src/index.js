import { cars } from './app/cars';
import {generateReport} from './app/generateReport';

import "./main.scss";

const message = generateReport(cars, 2000);

document.getElementById('message-element')
  .textContent = message;