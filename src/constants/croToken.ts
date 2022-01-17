import { Token, ChainId } from '../../local_modules/swap-sdk'

export const CRO_ADDRESS = process.env.REACT_APP_CRO_TOKEN_ADDRESS
if (typeof CRO_ADDRESS === 'undefined') throw new Error('CRO address is not configured')

const CRO_TOKEN =
  process.env.REACT_APP_CHAIN_ID === String(ChainId.C4EI)
    ? new Token(ChainId.C4EI, CRO_ADDRESS, 8, 'CRO', 'CRO Coin')
    : new Token(ChainId.ROPSTEN, CRO_ADDRESS, 8, 'CRO', 'CRO Coin')
  // new Token(ChainId.C4EI, CRO_ADDRESS, 8, 'CRO', 'CRO Coin')
export default CRO_TOKEN
