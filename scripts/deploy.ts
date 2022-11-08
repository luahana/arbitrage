import { ethers } from 'hardhat'
import 'dotenv/config'

const GOERLI_POOL_ADDRESSES_PROVIDER =
  process.env.GOERLI_POOL_ADDRESSES_PROVIDER
const POOL_ADDRESSES_PROVIDER = process.env.POOL_ADDRESSES_PROVIDER

async function main() {
  console.log('deploying...')
  const FlashLoan = await ethers.getContractFactory('FlashLoan')
  const flashLoan = await FlashLoan.deploy(GOERLI_POOL_ADDRESSES_PROVIDER)

  await flashLoan.deployed()

  console.log('Flash loan contract deployed: ', flashLoan.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
