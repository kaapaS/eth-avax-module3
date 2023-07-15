const hre = require("hardhat");

async function main() {

  const mytoken = await hre.ethers.deployContract("mytoken");
  await mytoken.waitForDeployment();

  console.log(`MyTokens token has been deployed to ${mytoken.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
