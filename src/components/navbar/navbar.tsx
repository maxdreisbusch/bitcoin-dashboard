import React from 'react';
import { Navbar as MantineNavbar } from '@mantine/core';
import {
	Dashboard,
	CurrencyBitcoin,
	Calculator,
	ChartBar,
} from 'tabler-icons-react';
import { User } from '../user/user';
import { NavbarLink } from './link';
import { NavigationRoutes } from '../../constants/navigation';

const navigationLinks = [
	{
		icon: <Dashboard size={32} />,
		color: 'blue',
		label: 'Dashboard',
		target: NavigationRoutes.home,
	},
	{
		icon: <CurrencyBitcoin size={32} />,
		color: 'blue',
		label: 'Details',
		target: NavigationRoutes.details,
	},
	{
		icon: <Calculator size={32} />,
		color: 'blue',
		label: 'Währungsrechner',
		target: NavigationRoutes.calculator,
	},
	{
		icon: <ChartBar size={32} />,
		color: 'blue',
		label: 'Diagram',
		target: NavigationRoutes.diagram,
	},
];

export const Navbar: React.FunctionComponent = () => {
	return (
		<MantineNavbar fixed p='xs' width={{ base: 300 }}>
			<MantineNavbar.Section grow mt='xs'>
				{navigationLinks.map((link) => (
					<NavbarLink {...link} key={link.label} />
				))}
			</MantineNavbar.Section>

			<MantineNavbar.Section>
				<User />
			</MantineNavbar.Section>
		</MantineNavbar>
	);
};
