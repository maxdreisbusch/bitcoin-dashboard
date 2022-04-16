import React from 'react';
import {
	UnstyledButton,
	Group,
	Avatar,
	Text,
	Box,
	useMantineTheme,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export const User: React.FunctionComponent = () => {
	const theme = useMantineTheme();
	const navigate = useNavigate();

	return (
		<Box
			sx={{
				paddingTop: theme.spacing.sm,
				borderTop: `1px solid ${theme.colors.gray[2]}`,
			}}>
			<UnstyledButton
				sx={{
					display: 'block',
					width: '100%',
					padding: theme.spacing.xs,
					borderRadius: theme.radius.sm,
					color: theme.black,

					'&:hover': {
						backgroundColor: theme.colors.gray[0],
					},
				}}
				onClick={() => navigate('me')}>
				<Group>
					<Avatar radius='xl' />
					<Box sx={{ flex: 1 }}>
						<Text size='sm' weight={500}>
							Max Dreisbusch
						</Text>
						<Text color='dimmed' size='xs'>
							max.dreisbusch@gmx.de
						</Text>
					</Box>
				</Group>
			</UnstyledButton>
		</Box>
	);
};
