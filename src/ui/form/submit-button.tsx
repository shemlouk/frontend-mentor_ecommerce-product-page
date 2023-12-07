export function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="flex h-14 w-full items-center justify-center gap-4 rounded-lg bg-orange text-white transition-all hover:shadow-[0_10px_40px_-15px_rgb(255,125,26,0.7)]"
    >
      {children}
    </button>
  );
}
