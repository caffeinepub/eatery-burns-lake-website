import React, { useState } from 'react';
import { CalendarDays, Users, Clock, Phone, User, CheckCircle2, Loader2 } from 'lucide-react';
import { useStoreReservation } from '../hooks/useQueries';

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guestCount: '2',
  });
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { mutate: storeReservation, isPending } = useStoreReservation();

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!form.date) newErrors.date = 'Date is required';
    if (!form.time) newErrors.time = 'Time is required';
    const guests = parseInt(form.guestCount);
    if (!form.guestCount || isNaN(guests) || guests < 1) newErrors.guestCount = 'At least 1 guest required';
    if (guests > 20) newErrors.guestCount = 'Maximum 20 guests per booking';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    storeReservation(
      {
        name: form.name.trim(),
        phone: form.phone.trim(),
        date: form.date,
        time: form.time,
        guestCount: BigInt(parseInt(form.guestCount)),
      },
      {
        onSuccess: () => {
          setSuccess(true);
          setForm({ name: '', phone: '', date: '', time: '', guestCount: '2' });
        },
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  if (success) {
    return (
      <div className="py-20 bg-cream-100">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <div className="bg-white rounded-3xl shadow-korean-xl p-10 border border-cream-200">
            <CheckCircle2 size={64} className="text-gochujang-500 mx-auto mb-6" />
            <h3 className="font-heading text-2xl font-bold text-charcoal-700 mb-3">
              Reservation Confirmed!
            </h3>
            <p className="font-body text-charcoal-400 text-base mb-6">
              Thank you for booking a table at Bunsik Korean Restaurant. We look forward to seeing you! We'll confirm your reservation by phone.
            </p>
            <p className="font-body text-charcoal-500 text-sm mb-8">
              Questions? Call us at{' '}
              <a href="tel:+61269647310" className="text-gochujang-500 font-bold hover:text-gochujang-400">
                +61 2 6964 7310
              </a>
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="font-body font-bold text-sm px-8 py-3 rounded-full bg-gochujang-500 hover:bg-gochujang-400 text-white transition-colors shadow-korean"
            >
              Make Another Booking
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-cream-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-10 bg-gochujang-500/50" />
            <span className="font-body text-gochujang-500 text-xs tracking-[0.3em] uppercase font-bold">
              Book a Table
            </span>
            <div className="h-px w-10 bg-gochujang-500/50" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-700 mb-4">
            Make a Reservation
          </h2>
          <p className="font-body text-charcoal-400 text-base">
            Reserve your table at Bunsik Korean Restaurant. We'll confirm your booking by phone.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-korean-xl p-8 border border-cream-200"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="sm:col-span-2">
              <label className="block font-body text-charcoal-600 text-sm font-semibold mb-1.5">
                <span className="flex items-center gap-1.5">
                  <User size={14} />
                  Full Name *
                </span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={`w-full font-body text-sm px-4 py-3 rounded-xl border ${
                  errors.name ? 'border-red-400 bg-red-50' : 'border-cream-300 bg-cream-50'
                } focus:outline-none focus:ring-2 focus:ring-gochujang-400 focus:border-transparent transition-colors text-charcoal-700 placeholder-charcoal-300`}
              />
              {errors.name && <p className="font-body text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="sm:col-span-2">
              <label className="block font-body text-charcoal-600 text-sm font-semibold mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Phone size={14} />
                  Phone Number *
                </span>
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 0412 345 678"
                className={`w-full font-body text-sm px-4 py-3 rounded-xl border ${
                  errors.phone ? 'border-red-400 bg-red-50' : 'border-cream-300 bg-cream-50'
                } focus:outline-none focus:ring-2 focus:ring-gochujang-400 focus:border-transparent transition-colors text-charcoal-700 placeholder-charcoal-300`}
              />
              {errors.phone && <p className="font-body text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Date */}
            <div>
              <label className="block font-body text-charcoal-600 text-sm font-semibold mb-1.5">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={14} />
                  Date *
                </span>
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={today}
                className={`w-full font-body text-sm px-4 py-3 rounded-xl border ${
                  errors.date ? 'border-red-400 bg-red-50' : 'border-cream-300 bg-cream-50'
                } focus:outline-none focus:ring-2 focus:ring-gochujang-400 focus:border-transparent transition-colors text-charcoal-700`}
              />
              {errors.date && <p className="font-body text-red-500 text-xs mt-1">{errors.date}</p>}
            </div>

            {/* Time */}
            <div>
              <label className="block font-body text-charcoal-600 text-sm font-semibold mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  Time *
                </span>
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className={`w-full font-body text-sm px-4 py-3 rounded-xl border ${
                  errors.time ? 'border-red-400 bg-red-50' : 'border-cream-300 bg-cream-50'
                } focus:outline-none focus:ring-2 focus:ring-gochujang-400 focus:border-transparent transition-colors text-charcoal-700`}
              />
              {errors.time && <p className="font-body text-red-500 text-xs mt-1">{errors.time}</p>}
            </div>

            {/* Guests */}
            <div className="sm:col-span-2">
              <label className="block font-body text-charcoal-600 text-sm font-semibold mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Users size={14} />
                  Number of Guests *
                </span>
              </label>
              <input
                type="number"
                name="guestCount"
                value={form.guestCount}
                onChange={handleChange}
                min="1"
                max="20"
                placeholder="2"
                className={`w-full font-body text-sm px-4 py-3 rounded-xl border ${
                  errors.guestCount ? 'border-red-400 bg-red-50' : 'border-cream-300 bg-cream-50'
                } focus:outline-none focus:ring-2 focus:ring-gochujang-400 focus:border-transparent transition-colors text-charcoal-700 placeholder-charcoal-300`}
              />
              {errors.guestCount && <p className="font-body text-red-500 text-xs mt-1">{errors.guestCount}</p>}
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full mt-6 flex items-center justify-center gap-2 font-body font-bold text-base px-8 py-4 rounded-xl bg-gochujang-500 hover:bg-gochujang-400 disabled:bg-gochujang-300 text-white transition-all duration-200 shadow-korean hover:shadow-korean-lg"
          >
            {isPending ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                Booking...
              </>
            ) : (
              <>
                <CalendarDays size={18} />
                Book My Table
              </>
            )}
          </button>

          <p className="font-body text-charcoal-400 text-xs text-center mt-4">
            We'll call you on{' '}
            <a href="tel:+61269647310" className="text-gochujang-500 font-semibold">
              +61 2 6964 7310
            </a>{' '}
            to confirm your reservation.
          </p>
        </form>
      </div>
    </div>
  );
}
