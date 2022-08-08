import { atom } from "jotai";
import { Group } from "@prisma/client";

export const selectedAddressAtom = atom<string>("");
export const markerModalAtom = atom<boolean>(false);
export const createGroupAtom = atom<boolean>(false);
export const selectedGroupAtom = atom<Group | null>(null);