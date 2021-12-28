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
 

1. 특정 application 로그 확인
   yarn logs -applicationId <application_id>
2. 에러로그만 확인
   yarn logs -applicationId <application_id> -log_files stderr
3. container별 로그 확인
   # application에서 사용하는 container 전체출력
   yarn logs -applicationId <application_id> -show_application_log_info
   # 위에 container정보에서 특정 container에 대한 로그 확인
   yarn logs -applicationId <application_id> -containerId <container_id>

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
FACTORY_ADDRESS="0xD50ca576cA5962C59b841b036a0d5488E59EFe6B"
INIT_CODE_HASH="0x33200e31f337fafeeeabfacdc6ab723c9b68ee30b1b0537cb5d8cbf5a040bc65"
REACT_APP_CHAIN_ID = "21004"
