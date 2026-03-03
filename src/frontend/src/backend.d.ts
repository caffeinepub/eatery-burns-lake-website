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
    name: string;
    time: string;
    notes: string;
    phone: string;
    guests: bigint;
}
export interface backendInterface {
    addReservation(name: string, phone: string, date: string, time: string, guests: bigint, notes: string): Promise<void>;
    getReservations(): Promise<Array<Reservation>>;
}
