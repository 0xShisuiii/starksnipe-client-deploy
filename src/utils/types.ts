import { TOKEN_SYMBOL } from './constants'
import { RpcProvider, Contract } from 'starknet'

export type USDCPair = {
    address: string
    reversed: boolean
}

export type Token = {
    address: string
    symbol: TOKEN_SYMBOL
    name: string
    decimals: number
    camelCased?: boolean
    usdcPair?: USDCPair
}

interface i129 {
    mag: string
    sign: string
}

interface EkuboPoolKey {
    token0: string
    token1: string
    fee: string
    tickSpacing: string
    extension: string
}

interface EkuboBounds {
    lower: i129
    upper: i129
}

interface BaseMemecoin {
    address: string
    name: string
    symbol: string
    totalSupply: string
    isLaunched: boolean
    owner: string
}

interface BaseLaunchedMemecoin extends BaseMemecoin {
    isLaunched: true
    launch: {
        blockNumber: number
        teamAllocation: string
    }
}

interface BaseLiquidity {
    launchManager: string
    unlockTime: number
    owner: string
    quoteToken: string
}

export interface EkuboMemecoin extends BaseLaunchedMemecoin {
    liquidity: {
        ekuboId: string
        startingTick: number
        poolKey: EkuboPoolKey
        bounds: EkuboBounds
    } & Omit<BaseLiquidity, 'type'>
}

interface NotLaunchedMemecoin extends BaseMemecoin {
    isLaunched: false
}

export type Memecoin = EkuboMemecoin | NotLaunchedMemecoin

export type NetworkType = 'MAINNET' | 'SEPOLIA'

export interface AccountConfig {
    network: NetworkType
    address: string,
    provider: RpcProvider,
    private_key: string
}

export interface EkuboQuoteApiSwap {
    amount_specified: string;
    amount_calculated: string;
    route: {
        pool_key: {
            token0: string;
            token1: string;
            fee: string;
            tick_spacing: number;
            extension: string;
        };
        sqrt_ratio_limit: string;
        skip_ahead: string;
    }[];
}
export interface EkuboQuoteApiResponse {
    total_calculated: string;
    splits: EkuboQuoteApiSwap[];
}

export interface EkuboConfig {
    network: NetworkType,
    api: string,
    qoute_api:string,
    router: Contract
}

export interface AvnuConfig {
    network: NetworkType,
    api: string
}

export interface EkuboTokenData {
    name: string,
    symbol: string,
    decimals: number,
    l2_token_address: string,
    sort_order: number,
    total_supply: number,
    hidden: boolean,
    disabled: boolean,
    logo_url: string
}

export interface UserTokenData {
    total: number,
    tokens: {
        l2_token_address: string,
        balance: bigint,
        name: string,
        symbol: string,
        decimals: number,
        logo_url: string
    }[]
}