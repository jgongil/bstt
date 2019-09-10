var BlockchainStudio = artifacts.require("BlockchainStudio");
module.exports = function(deployer) {
  deployer.deploy(BlockchainStudio, "BlockchainStudioToken", "BST", 18, 100000);
};
