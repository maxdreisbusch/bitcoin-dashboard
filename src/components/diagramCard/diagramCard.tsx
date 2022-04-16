import { useCallback } from 'react';
import { Card, Text, Title } from '@mantine/core';
import { useQuery } from 'react-query';
import { format, fromUnixTime } from 'date-fns';
import {
	Line,
	LineChart,
	Tooltip,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from 'recharts';
import { getBlockchainCharts } from '../../api/blockchain';

interface DiagramCardProps {
	title: string;
	subtitle: string;
	apiEndpoint: string;
	showTime?: boolean;
	timespan?: string;
}

export const DiagramCard: React.FunctionComponent<DiagramCardProps> = (
	props: DiagramCardProps
) => {
	const { data } = useQuery(
		`bitcoin/${props.apiEndpoint}`,
		getBlockchainCharts(props.apiEndpoint, {
			timespan: props.timespan ?? 'all',
		}),
		{
			refetchIntervalInBackground: true,
			refetchInterval: 60000,
		}
	);

	const formatDate = useCallback(
		(value: number) =>
			format(fromUnixTime(value), `d.M.yyyy${props.showTime ? ' H:m' : ''}`),
		[props.showTime]
	);

	return (
		<Card>
			<Title order={2}>{props.title}</Title>
			<Text color='dimmed'>{props.subtitle}</Text>
			<Card.Section>
				{data && data.values && (
					<ResponsiveContainer height={400} width='100%'>
						<LineChart data={data.values} height={200} width={100}>
							<Line type='monotone' dataKey='y' stroke='#8884d8' dot={false} />
							<YAxis />
							<XAxis dataKey='x' tickFormatter={formatDate} />
							<Tooltip label={'test'} labelFormatter={formatDate} />
						</LineChart>
					</ResponsiveContainer>
				)}
			</Card.Section>
		</Card>
	);
};
