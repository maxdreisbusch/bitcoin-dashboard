import axios from 'axios';
import {
	blockchainUrl,
	blockchainApiUrl,
	blockchainQueryUrl,
} from '../constants/api';
import {
	BlockchainTicker,
	BlockchainStats,
	WalletBalanceResponse,
	GetWalletBalanceData,
} from '../types/blockchainApi';

export const getBlockchainTicker = async () => {
	const result = await axios.get<BlockchainTicker>(`${blockchainUrl}/ticker`);
	return result.data;
};

export const getBlockchainStats = async () => {
	const result = await axios.get<BlockchainStats>(`${blockchainApiUrl}/stats`);
	return result.data;
};

export const queryBlockchain = (endpoint: string) => async () => {
	const result = await axios.get<number>(`${blockchainQueryUrl}/${endpoint}`, {
		params: { cors: true },
	});
	return result.data;
};

export const getBlockchainCharts =
	(endpoint: string, params: { [key: string]: string }) => async () => {
		const result = await axios.get(`${blockchainApiUrl}/charts/${endpoint}`, {
			params: { ...params, cors: true },
		});
		return result.data;
	};

export const getWalletBalance = async (data: GetWalletBalanceData) => {
	const result = await axios.post<WalletBalanceResponse>(
		`${blockchainUrl}/merchant/${data.guid}/balance`,
		`password=${data.password}`,
		{
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			params: { cors: true },
		}
	);
	return result.data;
};
