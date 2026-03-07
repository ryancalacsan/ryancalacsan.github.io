import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center pt-24 pb-16">
      <div className="text-center">
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-2 font-display text-[length:var(--text-h1)] font-semibold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white dark:text-black no-underline transition-colors duration-normal hover:bg-accent-hover"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
