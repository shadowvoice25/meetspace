import Link from "next/link";
import { HeroSearch } from "@/components/hero-search";
import { ProfileCard } from "@/components/profile-card";
import { SectionTitle } from "@/components/section-title";
import { profiles } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8f8f8]">
      <section className="border-b border-rose-100 bg-gradient-to-b from-rose-50 to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1fr_0.95fr] md:px-6 md:py-20">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-700">
              Find Your Companion
            </div>
            <h1 className="max-w-2xl text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
              Meet someone worth booking time for.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Browse beautiful profiles, connect with your type, and request premium meetings that feel effortless and exciting.
            </p>
            <HeroSearch />
          </div>
          <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1600&auto=format&fit=crop"
              alt="Couple style dating visual"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <SectionTitle
          eyebrow="Featured companions"
          title="Explore the people everyone is booking"
          text="A polished dating-style browsing experience with profile cards, booking flow, and companion detail pages."
        />
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {profiles.map((profile) => <ProfileCard key={profile.id} profile={profile} />)}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/browse" className="rounded-full bg-slate-950 px-8 py-4 text-lg font-bold text-white">
            Browse all profiles
          </Link>
        </div>
      </section>
    </main>
  );
}
