import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

import MixinStorage "blob-storage/Mixin";



actor {
  include MixinStorage();

  type Reservation = {
    name : Text;
    phone : Text;
    date : Text;
    time : Text;
    guests : Nat;
    notes : Text;
  };

  type ReservationStore = Map.Map<Text, Reservation>;

  var reservations : ReservationStore = Map.empty<Text, Reservation>();

  public shared ({ caller }) func addReservation(name : Text, phone : Text, date : Text, time : Text, guests : Nat, notes : Text) : async () {
    let reservation : Reservation = {
      name;
      phone;
      date;
      time;
      guests;
      notes;
    };
    reservations.add(name.concat(date).concat(time), reservation);
  };

  public query ({ caller }) func getReservations() : async [Reservation] {
    reservations.values().toArray();
  };
};
