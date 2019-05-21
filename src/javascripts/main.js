import auth from './components/auth/auth';
import birfday from './components/birfday/birfday';

import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  auth.authStringBuilder();
  birfday.birfdayStringBuilder();
};

init();
