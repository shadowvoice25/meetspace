import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-rose-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="text-3xl font-black tracking-tight text-rose-600">
          meetup
        </Link>
        <nav className="hidden items-center gap-8 text-lg font-medium text-slate-700 md:flex">
          <Link href="/browse">Find companions</Link>
          <Link href="/bookings">Bookings</Link>
          <Link href="/favorites">Favorites</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-lg font-medium text-slate-700 md:inline-flex">Log in</Link>
          <Link href="/signup" className="rounded-full bg-rose-600 px-6 py-3 text-lg font-bold text-white">Sign up</Link>
        </div>
      </div>
    </header>
  );
}
