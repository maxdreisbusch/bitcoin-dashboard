import React from 'react';
import { Card, Group, Skeleton, Text } from '@mantine/core';
import { useQuery } from 'react-query';
import { queryBlockchain } from '../../api/blockchain';

interface DetailCardProps {
	title: string;
	endpoint: string;
}

export const DetailCard: React.FunctionComponent<DetailCardProps> = (
	props: DetailCardProps
) => {
	const { data } = useQuery(
		`bitcoin/${props.endpoint}`,
		queryBlockchain(props.endpoint),
		{
			refetchIntervalInBackground: true,
			refetchInterval: 60000,
		}
	);

	return (
		<Card radius='sm' shadow='sm' p='lg'>
			<Group direction='column' position='apart'>
				<Text weight={500} size='sm'>
					{props.title}
				</Text>
				{data ? (
					<Text weight={500} size='xl' style={{ alignSelf: 'flex-end' }}>
						{data.toLocaleString()}
					</Text>
				) : (
					<Skeleton height={15} mt={8} mb={8} width='70%' radius='sm' />
				)}
			</Group>
		</Card>
	);
};
