import { Token, ChainId } from 'swap-sdk'

export const C4EI_ADDRESS = process.env.REACT_APP_C4EI_TOKEN_ADDRESS
if (typeof C4EI_ADDRESS === 'undefined') throw new Error('C4EI address is not configured')

const C4EI_TOKEN =
  process.env.REACT_APP_CHAIN_ID === String(ChainId.MAINNET)
    ? new Token(ChainId.MAINNET, C4EI_ADDRESS, 18, 'C4EI', 'c4ei.net Coin')
    : new Token(ChainId.ROPSTEN, C4EI_ADDRESS, 18, 'C4EI', 'c4ei.net Coin')

export default C4EI_TOKEN