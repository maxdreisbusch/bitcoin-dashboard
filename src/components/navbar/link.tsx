import React from 'react';
import { UnstyledButton, Text, Group, ThemeIcon } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface NavbarLinkProps {
	icon: React.ReactNode;
	color: string;
	label: string;
	target: string;
}

export const NavbarLink: React.FunctionComponent<NavbarLinkProps> = (
	props: NavbarLinkProps
) => {
	const navigate = useNavigate();

	return (
		<UnstyledButton
			sx={(theme) => ({
				display: 'block',
				width: '100%',
				padding: theme.spacing.xs,
				borderRadius: theme.radius.sm,
				color: theme.black,

				'&:hover': {
					backgroundColor: theme.colors.gray[0],
				},
			})}
			onClick={() => {
				navigate(props.target);
			}}>
			<Group>
				<ThemeIcon color={props.color} variant='light' size={40}>
					{props.icon}
				</ThemeIcon>

				<Text size='md'>{props.label}</Text>
			</Group>
		</UnstyledButton>
	);
};
