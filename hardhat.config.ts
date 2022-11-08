import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import 'dotenv/config'

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const RPC_URL = process.env.RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    goerli: {
      url: GOERLI_RPC_URL,
      accounts: [PRIVATE_KEY!],
      chainId: 5,
    },
    arbitrum: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY!],
      chainId: 42161,
    },
  },
  solidity: '0.8.10',
}

export default config
