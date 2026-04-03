import { SectionTitle } from "@/components/section-title";

const bookings = [
  { name: "Maya", slot: "Friday Evening", status: "Pending approval" },
  { name: "Aria", slot: "Saturday Night", status: "Confirmed" },
  { name: "Sophia", slot: "Sunday Afternoon", status: "Pending approval" }
];

export default function BookingsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <SectionTitle eyebrow="Your dates" title="Booking requests" text="Track your upcoming meetings and request status." />
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={`${booking.name}-${booking.slot}`} className="rounded-[2rem] bg-white p-6 shadow-soft">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-2xl font-black text-slate-950">{booking.name}</div>
                <div className="mt-1 text-slate-500">{booking.slot}</div>
              </div>
              <div className="rounded-full bg-rose-50 px-4 py-2 text-sm font-bold text-rose-700">{booking.status}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
