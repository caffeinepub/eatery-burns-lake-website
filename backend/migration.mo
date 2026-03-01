import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

module {
  type Reservation = {
    name : Text;
    phone : Text;
    date : Text;
    time : Text;
    guestCount : Nat;
  };

  type OldActor = {};
  type NewActor = {
    reservations : Map.Map<Text, Reservation>;
  };

  public func run(old : OldActor) : NewActor {
    {
      reservations = Map.empty<Text, Reservation>();
    };
  };
};
