var GainToken = artifacts.require("./GainToken.sol");
var Staking = artifacts.require("./Staking.sol");

module.exports = async function (deployer) {
  await deployer.deploy(GainToken)
  let GainAddress = GainToken.address
  await deployer.deploy(Staking, GainAddress)
};

// module.exports = async function(deployer){
//   await deployer.deploy(TestToken);
//   console.log("Deployed address : ",TestToken.address)
// }
