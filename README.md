# DeFi Swap Interface

[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

As a new DeFi protocol, DeFi Swap is designed to be the best place to swap and farm DeFi coins at the best available rate, leveraging proven and audited protocols, while offering an outstanding incentive program powered by CRO.

Please visit https://crypto.com/defi for more information!

## Submit a token request

Please see the [swap-token-list](https://github.com/crypto-com/swap-token-list) repository.

## Development

Please update the .env file to ensure full functionality.

### Build local modules

```bash
cd local_modules/swap_sdk/
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







ERC20
 
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol
 
Extentions
 
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Burnable.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Capped.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Pausable.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/ERC20Snapshot.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/extensions/IERC20Metadata.sol
 
Utils
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/utils/SafeERC20.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/utils/TokenTimelock.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/Math.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Context.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/math/SafeMath.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Arrays.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/Pausable.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Counters.sol
https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Address.sol
 

https://gist.github.com/ggbbest/0c20dde59c328746c654b6cab4cf2f62

########################################################################################################
*Submitted for verification at Etherscan.io on 2018-11-20
* CRO_TOKEN_ADDRESS = "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b"    --> 0x95CA62cB94a37bE3D4930e05D1F7f6A1Ee202B9F  	(https://exp.c4ei.net/tx/0x5e37bf0e3bb013a6b50820ac9db8a62d9a5e085d10450021e7618b2d6e9c0b31)
	
https://etherscan.io/address/0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b#code
* -----Decoded View---------------
Arg [0] : _name (string): C4EI SWAP
Arg [1] : _symbol (string): CEI
Arg [2] : _initialSupply (uint256): 10000000000000000000
Arg [3] : _decimals (uint8): 8
Arg [4] : _mintable (bool): False
Arg [5] : _secondarySaleReserveWallet (address):			0x35f517cab9a37bc31091c2f155d965af84e0bc85
Arg [6] : _mainNetLaunchIncentiveReserveWallet (address):	0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07
Arg [7] : _capitalReserveWallet (address):					0x22e4f709fd5e7fe246fbf7e714ae89bdab7e2a5d
Arg [8] : _ecosystemGrantsReserveWallet (address):			0xdda508f9f3c1b4ca39c8794df3a080298ebe9c55
Arg [9] : _airdropReserveWallet (address):					0x67703f7d089f3ac7c8c13a18b2381cbd7ee3eded
########################################################################################################
######################################
Arg [5] : _secondarySaleReserveWallet (address):			0x35f517cab9a37bc31091c2f155d965af84e0bc85 --> 5_0TokenContinuousDistribution.sol --> 0x95CA62cB94a37bE3D4930e05D1F7f6A1Ee202B9F 
															https://exp.c4ei.net/tx/0x85ff7c89d980f1c4ed5d5a64d3c515b2dece02478975d654097bc4a36afcd46a
															--> 0xEb0e79C43fc3F7926F14e79D69cE8c72f1437094
	-----Decoded View---------------
	Arg [0] : _beneficiary (address):						0x20a0bee429d6907e556205ef9d48ab6fe6a55531 --> 5_1MultiSigWalletWithDailyLimit.sol --> 0x6F94352Cd4d0AfdAC617255098979343769360E4
	Arg [1] : _start (uint256): 1542182400
	Arg [2] : _cliff (uint256): 60

	-----Encoded View---------------
	3 Constructor Arguments found :
	Arg [0] : 00000000000000000000000020a0bee429d6907e556205ef9d48ab6fe6a55531
	Arg [1] : 000000000000000000000000000000000000000000000000000000005bebd600
	Arg [2] : 000000000000000000000000000000000000000000000000000000000000003c

															######################################		0x71923865ecd2b4a11d2772f98de802dc70fb09f79292e256854d54173b6c06da   ######################################
																https://exp.c4ei.net/tx/0x71923865ecd2b4a11d2772f98de802dc70fb09f79292e256854d54173b6c06da
																--> 0x6F94352Cd4d0AfdAC617255098979343769360E4

															https://exp.c4ei.net/tx/0x907bd33112d2918d2c9d5947db5f98da38cbb7976f04c7afb97e96cda0bda07d
															--> 0x09AEd6933A313864A8B6ec3F2E82C885E3258E92

															https://exp.c4ei.net/tx/0xd3efc7431f5fb50b567b5062d5a5853579664324757fe7b4924ddd514b08b303
															--> 0x493D1882318bCF86647930C42B8bb203945F2b36

															https://exp.c4ei.net/tx/0x2e5bd978f2823c015b21384130ec2cd8d1d4d8d1d70ae32dbc00c73491de27f2
															--> 0xa0Bc8A3c82282dBaA71dbfc9fe37cE24bd24691F

															https://exp.c4ei.net/tx/0x00cbbbd8e2a293b6d0fd05a4fa760f2c92a8b58785b9d118798837e8eb016374
															--> 0x858d9Fa478686600b39d962aCE08Db24A3cE43A2
															######################################

Arg [6] : _mainNetLaunchIncentiveReserveWallet (address):	0x71507ee19cbc0c87ff2b5e05d161efe2aac4ee07 --> 5_1MultiSigWalletWithDailyLimit.sol
Arg [7] : _capitalReserveWallet (address):					0x22e4f709fd5e7fe246fbf7e714ae89bdab7e2a5d --> 5_1MultiSigWalletWithDailyLimit.sol
Arg [8] : _ecosystemGrantsReserveWallet (address):			0xdda508f9f3c1b4ca39c8794df3a080298ebe9c55 --> 5_1MultiSigWalletWithDailyLimit.sol
Arg [9] : _airdropReserveWallet (address):					0x67703f7d089f3ac7c8c13a18b2381cbd7ee3eded --> 5_1MultiSigWalletWithDailyLimit.sol



-------------------->
* --------------------
https://exp.c4ei.net/tx/0x5e37bf0e3bb013a6b50820ac9db8a62d9a5e085d10450021e7618b2d6e9c0b31
--------------------
0x95CA62cB94a37bE3D4930e05D1F7f6A1Ee202B9F
-----Decoded View---------------
Arg [0] : _name (string): C4EI SWAP
Arg [1] : _symbol (string): CEI
Arg [2] : _initialSupply (uint256): 10000000000000000000
Arg [3] : _decimals (uint8): 8
Arg [4] : _mintable (bool): False
Arg [5] : _secondarySaleReserveWallet (address):			0xEb0e79C43fc3F7926F14e79D69cE8c72f1437094
Arg [6] : _mainNetLaunchIncentiveReserveWallet (address):	0x6F94352Cd4d0AfdAC617255098979343769360E4
Arg [7] : _capitalReserveWallet (address):					0x09AEd6933A313864A8B6ec3F2E82C885E3258E92
Arg [8] : _ecosystemGrantsReserveWallet (address):			0x493D1882318bCF86647930C42B8bb203945F2b36
Arg [9] : _airdropReserveWallet (address):					0xa0Bc8A3c82282dBaA71dbfc9fe37cE24bd24691F



#################################################################################
REACT_APP_ONE_YEAR_STAKE = "0x6aba3E56AEb3b95aD64161103D793fAc5F6ce4F7"
https://etherscan.io/address/0x6aba3e56aeb3b95ad64161103d793fac5f6ce4f7#code
0x6aba3E56AEb3b95aD64161103D793fAc5F6ce4F7

-----Decoded View---------------
Arg [0] : _stakingToken (address): 0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b    --> 0x95CA62cB94a37bE3D4930e05D1F7f6A1Ee202B9F 
Arg [1] : _lockInDuration (uint256): 31557600

-----Encoded View---------------
2 Constructor Arguments found :
Arg [0] : 000000000000000000000000a0b73e1ff0b80914ab6fe0444e65848c4c34450b
Arg [1] : 0000000000000000000000000000000000000000000000000000000001e187e0

#################################################################################