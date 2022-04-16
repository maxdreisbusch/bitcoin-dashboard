import React, { useMemo, useState } from 'react';
import {
	Card,
	Container,
	Group,
	NumberInput,
	Select,
	Text,
	ThemeIcon,
} from '@mantine/core';
import { useQuery } from 'react-query';
import { ArrowRight, CurrencyBitcoin, Equal } from 'tabler-icons-react';
import { getBlockchainTicker } from '../api/blockchain';

const allowedCurrencies = [
	{ value: 'EUR', label: 'Euro', text: '€' },
	{ value: 'USD', label: 'US-Dollar', text: 'US$' },
	{ value: 'AUD', label: 'Australische Dollar', text: 'A$' },
	{ value: 'NZD', label: 'Neuseeland-Dollar', text: 'N$' },
	{ value: 'GBP', label: 'Pfund Sterling', text: '£' },
];

export const BitcoinCalculatorPage: React.FunctionComponent = () => {
	const { data } = useQuery('bitcoin/ticker', getBlockchainTicker);
	const [amount, setAmount] = useState<number | undefined>(100);
	const [currency, setCurrency] = useState<string | null>('EUR');

	const currencyText = useMemo(
		() => allowedCurrencies.find((item) => item.value === currency)?.text,
		[currency]
	);

	const calculatedBitcoins = useMemo(() => {
		if (data && currency && amount) {
			const btcValue = data[currency].last;
			return amount / btcValue;
		}
		return '-';
	}, [data, currency, amount]);

	return (
		<Container size='xs'>
			<Card radius='sm' shadow='sm'>
				<Group position='center' mb='lg'>
					<ThemeIcon
						size={90}
						variant='gradient'
						gradient={{ from: 'orange', to: 'red' }}>
						<Text style={{ fontSize: '40px' }}>{currencyText}</Text>
					</ThemeIcon>
					<ArrowRight size={40} />
					<ThemeIcon
						size={90}
						variant='gradient'
						gradient={{ from: 'teal', to: 'lime' }}>
						<CurrencyBitcoin size={40} />
					</ThemeIcon>
				</Group>
				<Group direction='column' position='center'>
					<Group direction='row'>
						<NumberInput
							placeholder='Bitte Betrag eingeben'
							value={amount}
							onChange={setAmount}
							radius='sm'
							size='sm'
							hideControls
						/>
						<Select
							placeholder='Bitte wählen'
							value={currency}
							onChange={setCurrency}
							allowDeselect={false}
							radius='sm'
							size='sm'
							data={allowedCurrencies}
						/>
					</Group>
					<Equal />
					<Group direction='row'>
						<CurrencyBitcoin size={40} />
						<Text style={{ fontSize: 20 }}>{calculatedBitcoins}</Text>
					</Group>
				</Group>
			</Card>
		</Container>
	);
};
