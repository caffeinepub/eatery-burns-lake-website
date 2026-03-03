import Map "mo:core/Map";
import Text "mo:core/Text";

module {
  type OldReservation = {
    name : Text;
    phone : Text;
    date : Text;
    time : Text;
    guestCount : Nat;
  };

  type OldActor = {
    reservations : Map.Map<Text, OldReservation>;
  };

  type NewReservation = {
    name : Text;
    phone : Text;
    date : Text;
    time : Text;
    guests : Nat;
    notes : Text;
  };

  type NewActor = {
    reservations : Map.Map<Text, NewReservation>;
  };

  public func run(old : OldActor) : NewActor {
    let newReservations = old.reservations.map<Text, OldReservation, NewReservation>(
      func(_k, oldRes) {
        {
          oldRes with
          guests = oldRes.guestCount;
          notes = "";
        };
      }
    );
    { reservations = newReservations };
  };
};
