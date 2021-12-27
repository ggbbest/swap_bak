# DeFi Swap Interface

[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

As a new DeFi protocol, DeFi Swap is designed to be the best place to swap and farm DeFi coins at the best available rate, leveraging proven and audited protocols, while offering an outstanding incentive program powered by CRO.

Please visit https://swap.c4ei.net/defi for more information!

## Submit a token request

Please see the [swap-token-list](https://github.com/crypto-com/swap-token-list) repository.

## Development

Please update the .env file to ensure full functionality.

### Build local modules

```bash
cd local_modules
cd swap_sdk
yarn
yarn build
```

### Install dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"{YOUR_NETWORK_URL}"` 



//////////////////
/src/connectors/Fortmatic.ts
type FormaticSupportedChains = Extract<ChainId, ChainId.MAINNET | ChainId.ROPSTEN | ChainId.RINKEBY | ChainId.KOVAN | ChainId.C4EI>

/src/constants/multicall/index.ts
multicall [ChainId.C4EI]: '0x84d291baBAE85f583dE187f7a46dA76e78cA2657'

V1_FACTORY_ADDRESSES must make c4ei 
/src/constants/v1/index.ts
//////////////////

/swap.c4ei.net/.env
/swap.c4ei.net/local_modules/swap-sdk/.env
FACTORY_ADDRESS="0xC995D403d9F95325C8d6AFd16C2C505501F48F99"
INIT_CODE_HASH="0x1ce2320bf2a425f6f2201aff0ca56456ee1adf437aec90da99e06205c9468b94"
REACT_APP_CHAIN_ID = "21004"
