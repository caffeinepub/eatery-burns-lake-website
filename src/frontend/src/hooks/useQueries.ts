import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

interface AddReservationParams {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: bigint;
  notes: string;
}

export function useAddReservation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: AddReservationParams) => {
      if (!actor) throw new Error("Backend not available");
      await actor.addReservation(
        params.name,
        params.phone,
        params.date,
        params.time,
        params.guests,
        params.notes,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reservations"] });
    },
  });
}
