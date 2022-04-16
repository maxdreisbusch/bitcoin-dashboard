export interface BlockchainTicker {
	[key: string]: BlockchainTickerCurrency;
}

export interface BlockchainTickerCurrency {
	'15m': number;
	buy: number;
	last: number;
	sell: number;
	symbol: string;
}

export interface BlockchainStats {
	market_price_usd: number;
	hash_rate: number;
	total_fees_btc: number;
	n_btc_mined: number;
	n_tx: number;
	n_blocks_mined: number;
	minutes_between_blocks: number;
	totalbc: number;
	n_blocks_total: number;
	estimated_transaction_volume_usd: number;
	blocks_size: number;
	miners_revenue_usd: number;
	nextretarget: number;
	difficulty: number;
	estimated_btc_sent: number;
	miners_revenue_btc: number;
	total_btc_sent: number;
	trade_volume_btc: number;
	trade_volume_usd: number;
	timestamp: number;
}

export interface GetWalletBalanceData {
	guid: string;
	password: string;
}

export interface WalletBalanceResponse {
	balance: number;
}
