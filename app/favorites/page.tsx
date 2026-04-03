import { ProfileCard } from "@/components/profile-card";
import { SectionTitle } from "@/components/section-title";
import { profiles } from "@/lib/data";

export default function FavoritesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <SectionTitle eyebrow="Saved" title="Favorites" text="Keep the profiles you want to come back to." />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {profiles.slice(0, 3).map((profile) => <ProfileCard key={profile.id} profile={profile} />)}
      </div>
    </main>
  );
}
