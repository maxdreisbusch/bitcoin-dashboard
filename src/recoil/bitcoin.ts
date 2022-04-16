import { atom } from 'recoil';
import { LocalStorage } from '../constants/localStorage';
import { MyWallet } from '../types/myWallet';

const myBitcoins = localStorage.getItem(LocalStorage.myBitcoins);

export const myBitcoinsAtom = atom<number | undefined>({
	key: 'myBitcoins',
	default: myBitcoins ? JSON.parse(myBitcoins) : undefined,
});

const myWallets = localStorage.getItem(LocalStorage.myBitcoins);

export const myWalletsAtom = atom<{ [key: string]: MyWallet }>({
	key: 'myWallets',
	default: myWallets ? JSON.parse(myWallets) : {},
});
