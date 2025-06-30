
import { Transaction } from '@/types';

const LOCAL_STORAGE_KEY = 'financial_transactions';

export const getTransactions = (): Transaction[] => {
  if (typeof window === 'undefined') {
    return [];
  }
  const storedTransactions = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedTransactions ? JSON.parse(storedTransactions) : [];
};

export const saveTransactions = (transactions: Transaction[]) => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(transactions));
};
