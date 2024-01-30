import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>João Pedro</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon-JP(B).png" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-neutral-900 text-white">
        <div className="h-full w-full py-16 md:max-w-2xl md:py-32">
          <div className="space-y-7">
            <h1 className="font-medium">João Pedro de Moura</h1>

            <p className="font-light">
              I&apos;m a front-end developer based in Brazil who has a passion
              for creating beautiful and functional user experiences. Currently
              working at{" "}
              <a
                href="https://www.eduzz.com/pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Eduzz
              </a>
              .
            </p>

            <p className="font-light">
              Beside programming, I&apos;m a huge proghead and Lord of the Rings
              nerd.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
