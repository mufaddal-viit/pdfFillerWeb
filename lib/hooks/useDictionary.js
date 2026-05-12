'use client';
import en from '@/locales/en.json';

export function useDictionary(section) {
	return section ? en[section] : en;
}
