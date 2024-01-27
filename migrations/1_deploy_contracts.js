const Ballot = artifacts.require("Ballot");

module.exports = function(deployer) {
  deployer.deploy(Ballot,[
    web3.utils.asciiToHex('Toby Adams'),
    web3.utils.asciiToHex('Julian Lee'),
    web3.utils.asciiToHex('Alden Reid')
  ]);
};
