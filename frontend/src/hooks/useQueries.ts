import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface StoreReservationParams {
  name: string;
  phone: string;
  date: string;
  time: string;
  guestCount: bigint;
}

export function useStoreReservation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: StoreReservationParams) => {
      if (!actor) throw new Error('Backend not available');
      await actor.storeReservation(
        params.name,
        params.phone,
        params.date,
        params.time,
        params.guestCount
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reservations'] });
    },
  });
}
