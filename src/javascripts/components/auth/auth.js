import util from '../../helpers/util';

const authStringBuilder = () => {
  let domString = '';
  domString += '<h3>Auth</h3>';
  util.printToDom('auth', domString);
};

export default { authStringBuilder };
