import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <main
        id="main-content"
        className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <header className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Adsmom
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your website description goes here. Replace this with your actual
            content.
          </p>
        </header>

        <section className="flex flex-col items-center gap-8 mb-16">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Getting Started
            </h2>
            <ol className="font-mono list-inside list-decimal text-sm space-y-2 text-gray-700 dark:text-gray-300">
              <li>
                Get started by editing{' '}
                <code className="bg-gray-100 dark:bg-gray-700 font-mono font-semibold px-2 py-1 rounded text-sm">
                  src/app/page.tsx
                </code>
              </li>
              <li>Save and see your changes instantly</li>
              <li>Build your amazing website</li>
            </ol>
          </div>
        </section>

        <section className="flex gap-4 items-center justify-center flex-col sm:flex-row mb-16">
          <a
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Deploy your Next.js application on Vercel"
          >
            <Image
              className="mr-2"
              src="/vercel.svg"
              alt=""
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read Next.js documentation"
          >
            Read our docs
          </a>
        </section>
      </main>

      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <nav
            className="flex flex-wrap justify-center gap-6"
            aria-label="Footer navigation"
          >
            <a
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/file.svg" alt="" width={16} height={16} />
              Learn
            </a>
            <a
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/window.svg" alt="" width={16} height={16} />
              Examples
            </a>
            <a
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/globe.svg" alt="" width={16} height={16} />
              Go to nextjs.org →
            </a>
          </nav>
          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>&copy; 2024 Adsmom. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
