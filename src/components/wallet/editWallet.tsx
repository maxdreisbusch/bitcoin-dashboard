import React, { useCallback, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import { Button, Group, Modal, PasswordInput, TextInput } from '@mantine/core';
import { useFormik } from 'formik';
import { myWalletsAtom } from '../../recoil/bitcoin';
import { getWalletBalance } from '../../api/blockchain';
import { WalletBalanceResponse } from '../../types/blockchainApi';
import { MyWallet } from '../../types/myWallet';

interface FormValues {
	walletId: string;
	title: string;
	password: string;
}

interface PasswordModalProps {
	isNew?: boolean;
	data?: MyWallet;
	open: boolean;
	closeModal: () => void;
}

export const EditWalletModal: React.FunctionComponent<PasswordModalProps> = (
	props: PasswordModalProps
) => {
	const [myWallets, setMyWallets] = useRecoilState(myWalletsAtom);

	const onSubmit = useCallback(
		(values: FormValues) => {
			refreshWalletBalance.mutate(
				{
					guid: values.walletId,
					password: values.password,
				},
				{
					onSuccess: (data) => saveWallet(values, data),
					onError: (error) => console.log(error),
				}
			);
		},
		[props.isNew]
	);

	const saveWallet = useCallback(
		(values: FormValues, balance: WalletBalanceResponse) => {
			setMyWallets({
				...myWallets,
				[values.walletId]: {
					walletId: values.walletId,
					title: values.title,
					balance: balance.balance,
				},
			});
		},
		[myWallets]
	);

	const refreshWalletBalance = useMutation(
		`blockchain/wallet/${props.data?.walletId}`,
		getWalletBalance
	);

	const formik = useFormik<FormValues>({
		initialValues: {
			walletId: '',
			title: '',
			password: '',
		},
		onSubmit,
	});

	useEffect(() => {
		formik.setValues({
			walletId: props.data?.walletId ?? '',
			title: props.data?.title ?? '',
			password: '',
		});
	}, [props.data]);

	return (
		<Modal
			opened={props.open}
			onClose={props.closeModal}
			title='Wallet refreshen'>
			<Group direction='column'>
				<TextInput
					id='title'
					name='title'
					placeholder='Titel'
					label='Titel'
					description='Bitte gib hier Deinen Titel an'
					required
					disabled={!props.isNew}
					onChange={formik.handleChange}
					value={formik.values.title}
					style={{ alignSelf: 'stretch' }}
				/>
				<TextInput
					id='walletId'
					name='walletId'
					placeholder='Wallet ID'
					label='Wallet ID'
					description='Bitte gib hier Deine Wallet ID an'
					required
					disabled={!props.isNew}
					onChange={formik.handleChange}
					value={formik.values.walletId}
					style={{ alignSelf: 'stretch' }}
				/>
				<PasswordInput
					placeholder='Passwort'
					label='Passwort'
					description='Bitte gib hier das Password für Deinen Wallet ein.'
					required
					value={formik.values.password}
					onChange={(e) => formik.handleChange('password')(e)}
					style={{ alignSelf: 'stretch' }}
				/>
				<Button
					onClick={formik.submitForm}
					style={{ alignSelf: 'stretch' }}
					loading={formik.isSubmitting}>
					Wallet {props.isNew ? 'hinzufügen' : 'aktualisieren'}
				</Button>
			</Group>
		</Modal>
	);
};
