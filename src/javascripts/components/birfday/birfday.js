import util from '../../helpers/util';

const birfdayStringBuilder = () => {
  let domString = '';
  domString += '<h3>Birfday</h3>';
  util.printToDom('birfday', domString);
};

export default { birfdayStringBuilder };
