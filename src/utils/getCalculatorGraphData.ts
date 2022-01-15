import { CalculatorGraphData } from '../state/calculator/reducer'
import { gql } from 'graphql-request'
import graphQLClient from './graphqlClient'
import { FACTORY_ADDRESS } from 'swap-sdk'

const calculatorDataQuery = gql`
  query data($factoryId: String) {
    staking(id: "1") {
      totalCrops
      totalTokenStaked
      averageMultiplier
    }
    prices(id: "1") {
      CERU
    }
    factory(id: $factoryId) {
      totalLiquidityUSD
    }
  }
`

function getCroToUsdRate(prices: { CERU: string }[]) {
  const { CERU } = prices[0]
  return CERU
}

/**
 * Contains the logic for resolving a list URL to a validated token list
 * @param listUrl list url
 */
export default async function getCalculatorGraphData(listUrl: string): Promise<CalculatorGraphData> {
  const data = await graphQLClient.request(calculatorDataQuery, {
    factoryId: FACTORY_ADDRESS
  })
  return {
    liquidityProvidedUsd: '0',
    totalCropWeight: data.staking.totalCrops,
    existingStakeList: [],
    allPoolStakedCroAmount: data.staking.totalTokenStaked,
    croToUsdRate: getCroToUsdRate(data.prices),
    totalPoolLiquidityUsd: data.factory.totalLiquidityUSD,
    averageMultiplier: data.staking.averageMultiplier
  }
}
