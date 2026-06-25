export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex flex-col items-center gap-6">
        {/* Logo placeholder */}
        <div className="h-5 w-[100px] animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />

        {/* Heading placeholder */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-9 w-[260px] animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-6 w-[340px] animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>

        {/* Buttons placeholder */}
        <div className="flex gap-4">
          <div className="h-12 w-[158px] animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-12 w-[158px] animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}
