import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Migration "migration";
import MixinStorage "blob-storage/Mixin";

(with migration = Migration.run)
actor {
  include MixinStorage();

  type Reservation = {
    name : Text;
    phone : Text;
    date : Text;
    time : Text;
    guestCount : Nat;
  };

  let reservations = Map.empty<Text, Reservation>();

  public shared ({ caller }) func storeReservation(name : Text, phone : Text, date : Text, time : Text, guestCount : Nat) : async () {
    let reservation : Reservation = {
      name;
      phone;
      date;
      time;
      guestCount;
    };
    reservations.add(name.concat(date).concat(time), reservation);
  };

  public query ({ caller }) func getReservations() : async [Reservation] {
    reservations.values().toArray();
  };
};
