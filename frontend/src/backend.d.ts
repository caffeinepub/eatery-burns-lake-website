import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Reservation {
    date: string;
    guestCount: bigint;
    name: string;
    time: string;
    phone: string;
}
export interface backendInterface {
    getReservations(): Promise<Array<Reservation>>;
    storeReservation(name: string, phone: string, date: string, time: string, guestCount: bigint): Promise<void>;
}
