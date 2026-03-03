import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle, Loader2 } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { useAddReservation } from "../hooks/useQueries";

interface ReservationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const timeSlots = [
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
];

export default function ReservationModal({
  open,
  onOpenChange,
}: ReservationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");

  const { mutate, isPending, isSuccess, isError, reset } = useAddReservation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({
      name: name.trim(),
      phone: phone.trim(),
      date,
      time,
      guests: BigInt(guests || "1"),
      notes: notes.trim(),
    });
  };

  const handleClose = (v: boolean) => {
    if (!v) {
      reset();
      setName("");
      setPhone("");
      setDate("");
      setTime("");
      setGuests("2");
      setNotes("");
    }
    onOpenChange(v);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        data-ocid="reservation.modal"
        className="bg-ivory-100 border-ivory-300 max-w-lg w-full rounded-sm p-0 overflow-hidden"
      >
        {/* Header strip */}
        <div className="bg-terracotta-500 px-6 pt-6 pb-5">
          <DialogHeader>
            <DialogTitle className="font-heading text-ivory-50 text-2xl font-bold italic">
              Reserve Your Table
            </DialogTitle>
            <DialogDescription className="font-body text-ivory-200 text-sm mt-1">
              ILONA Pasta · 80A Emerson Street, Napier · Dinner from 5:30 PM
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="px-6 py-6">
          {/* Success state */}
          {isSuccess && (
            <div
              data-ocid="reservation.success_state"
              className="text-center py-8"
            >
              <CheckCircle size={52} className="text-olive-500 mx-auto mb-4" />
              <h3 className="font-heading text-espresso-700 text-xl font-bold mb-2">
                Reservation Confirmed!
              </h3>
              <p className="font-body text-espresso-400 text-base leading-relaxed mb-6">
                Thank you, {name}! We look forward to welcoming you. We'll
                confirm by phone shortly.
              </p>
              <Button
                onClick={() => handleClose(false)}
                className="bg-terracotta-500 hover:bg-terracotta-400 text-ivory-50 font-body font-semibold rounded-none px-8"
              >
                Close
              </Button>
            </div>
          )}

          {/* Error state */}
          {isError && !isSuccess && (
            <div
              data-ocid="reservation.error_state"
              className="bg-red-50 border border-red-200 rounded-sm p-4 mb-5 flex gap-3 items-start"
            >
              <AlertCircle
                size={18}
                className="text-red-500 flex-shrink-0 mt-0.5"
              />
              <div>
                <p className="font-body font-semibold text-red-700 text-sm">
                  Unable to submit reservation
                </p>
                <p className="font-body text-red-600 text-sm mt-0.5">
                  Please call us directly at{" "}
                  <a href="tel:+64211860029" className="underline">
                    +64 21 186 0029
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* Form */}
          {!isSuccess && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="res-name"
                    className="font-body text-espresso-600 text-sm font-semibold"
                  >
                    Full Name <span className="text-terracotta-500">*</span>
                  </Label>
                  <Input
                    id="res-name"
                    data-ocid="reservation.name.input"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                    className="rounded-sm border-ivory-300 bg-ivory-50 font-body text-espresso-700 focus:border-terracotta-400 focus:ring-terracotta-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="res-phone"
                    className="font-body text-espresso-600 text-sm font-semibold"
                  >
                    Phone <span className="text-terracotta-500">*</span>
                  </Label>
                  <Input
                    id="res-phone"
                    data-ocid="reservation.phone.input"
                    type="tel"
                    placeholder="+64 ..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    autoComplete="tel"
                    className="rounded-sm border-ivory-300 bg-ivory-50 font-body text-espresso-700 focus:border-terracotta-400 focus:ring-terracotta-400"
                  />
                </div>
              </div>

              {/* Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="res-date"
                    className="font-body text-espresso-600 text-sm font-semibold"
                  >
                    Date <span className="text-terracotta-500">*</span>
                  </Label>
                  <Input
                    id="res-date"
                    data-ocid="reservation.date.input"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="rounded-sm border-ivory-300 bg-ivory-50 font-body text-espresso-700 focus:border-terracotta-400 focus:ring-terracotta-400"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="font-body text-espresso-600 text-sm font-semibold">
                    Time <span className="text-terracotta-500">*</span>
                  </Label>
                  <Select value={time} onValueChange={setTime} required>
                    <SelectTrigger
                      data-ocid="reservation.time.select"
                      className="rounded-sm border-ivory-300 bg-ivory-50 font-body text-espresso-700 focus:border-terracotta-400"
                    >
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="rounded-sm bg-ivory-100 border-ivory-300">
                      {timeSlots.map((slot) => (
                        <SelectItem
                          key={slot}
                          value={slot}
                          className="font-body text-espresso-700 focus:bg-terracotta-50 cursor-pointer"
                        >
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="res-guests"
                  className="font-body text-espresso-600 text-sm font-semibold"
                >
                  Number of Guests{" "}
                  <span className="text-terracotta-500">*</span>
                </Label>
                <Input
                  id="res-guests"
                  data-ocid="reservation.guests.input"
                  type="number"
                  min="1"
                  max="10"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  required
                  className="rounded-sm border-ivory-300 bg-ivory-50 font-body text-espresso-700 focus:border-terracotta-400 focus:ring-terracotta-400 w-32"
                />
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="res-notes"
                  className="font-body text-espresso-600 text-sm font-semibold"
                >
                  Special Requests{" "}
                  <span className="text-espresso-300 font-normal">
                    (optional)
                  </span>
                </Label>
                <Textarea
                  id="res-notes"
                  data-ocid="reservation.notes.textarea"
                  placeholder="Dietary requirements, celebrations, seating preferences..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="rounded-sm border-ivory-300 bg-ivory-50 font-body text-espresso-700 focus:border-terracotta-400 focus:ring-terracotta-400 resize-none"
                />
              </div>

              {/* Submit */}
              <Button
                data-ocid="reservation.submit.button"
                type="submit"
                disabled={isPending}
                className="w-full bg-terracotta-500 hover:bg-terracotta-400 text-ivory-50 font-body font-semibold text-base py-3 h-auto rounded-none tracking-wide transition-all duration-200 shadow-terracotta hover:shadow-warm-lg"
              >
                {isPending ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Confirming…
                  </>
                ) : (
                  "Confirm Reservation"
                )}
              </Button>

              <p className="font-body text-espresso-300 text-xs text-center">
                Or call us directly:{" "}
                <a
                  href="tel:+64211860029"
                  className="text-terracotta-500 hover:underline font-medium"
                >
                  +64 21 186 0029
                </a>
              </p>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
