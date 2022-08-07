import { atom } from "jotai";

export const selectedAddressAtom = atom<string>("");
export const markerModalAtom = atom<boolean>(false);