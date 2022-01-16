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
cd swap-sdk/
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


/home/dev/www/swap_sol_project/2_swap-contracts-periphery/readme.txt
   > transaction hash:    0x58877b236703b30a42ba3f038b0a87d1a46924035adbe4d1c5ff6f785d250a36
   > contract address:    0x395A3BE5A29e45f534d24C796dDd2F98eE1aE197
   > block number:        426209

CroDefiSwapRouter02 deployed on development with 
factoryAddress 0x0baEE3029DEBFcF63aE172460ECDeCdF72FcC047
wethAddress 0xE94b78D58826eca66a921cEc0E3Bc40BC6707897



---------------------------------------------------------
Failed to fetch multicall chunk Array(1)0: {address: '0x0baEE3029DEBFcF63aE172460ECDeCdF72FcC047', callData: '0x06f2bf6200000000000000000000000058a3f3237ac6dd279702f2ec02c36ab536ff08e1'}length: 1[[Prototype]]: Array(0) 21004 

0: {address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e', callData: '0x0178b8bf21fdc334cbc282fa0d11e70cfb63b59e39c6c2de6dd210e1800688bb16c0d679'}
1: {address: '0x1d187BbeCeF8d7b1731339c301ab8354d4F0A50b', callData: '0x70a08231000000000000000000000000a6b2cb6c363905ef324b1cf462f3677e4477ba00'}
2: {address: '0x84d291baBAE85f583dE187f7a46dA76e78cA2657', callData: '0x4d2301cc000000000000000000000000a6b2cb6c363905ef324b1cf462f3677e4477ba00'}
3: {address: '0x0baEE3029DEBFcF63aE172460ECDeCdF72FcC047', callData: '0x06f2bf620000000000000000000000001d187bbecef8d7b1731339c301ab8354d4f0a50b'}
length: 4
--> 0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e  ENS

0: {address: '0x1d187BbeCeF8d7b1731339c301ab8354d4F0A50b', callData: '0x70a08231000000000000000000000000a6b2cb6c363905ef324b1cf462f3677e4477ba00'}
1: {address: '0x1d187BbeCeF8d7b1731339c301ab8354d4F0A50b', callData: '0xdd62ed3e000000000000000000000000a6b2cb6c363905ef…000000000395a3be5a29e45f534d24c796ddd2f98ee1ae197'}
2: {address: '0x33beD426A6F2Cbc71d7b60265C8eB2C5B73C4C9f', callData: '0x0902f1ac'}
3: {address: '0x4b976Fe5dd9dB874e4203e8c55e86c80A5a57aBC', callData: '0x0178b8bf21fdc334cbc282fa0d11e70cfb63b59e39c6c2de6dd210e1800688bb16c0d679'}
4: {address: '0x7E6af705dB981D0E391B4e063E39a6bbDF60e66f', callData: '0x70a08231000000000000000000000000a6b2cb6c363905ef324b1cf462f3677e4477ba00'}
5: {address: '0x7E6af705dB981D0E391B4e063E39a6bbDF60e66f', callData: '0xdd62ed3e000000000000000000000000a6b2cb6c363905ef…000000000395a3be5a29e45f534d24c796ddd2f98ee1ae197'}
6: {address: '0x84d291baBAE85f583dE187f7a46dA76e78cA2657', callData: '0x4d2301cc000000000000000000000000a6b2cb6c363905ef324b1cf462f3677e4477ba00'}



/swap.c4ei.net/cypress/support/commands.js
CustomizedBridge


(alias) useMemo<{liquidityToken: Token;tokens: [Token, Token];}[]>(factory: () 
=> {liquidityToken: Token;tokens: [Token, Token];}[], deps: 
   React.DependencyList | undefined): {liquidityToken: Token;tokens: [Token, Token];}[]
import useMemo