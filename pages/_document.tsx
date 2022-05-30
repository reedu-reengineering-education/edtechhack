import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="bg-zinc-900">
      <Head>
        <script
          async
          defer
          data-website-id="f914eec6-9a0a-4a0b-a36d-2f954ed7ae58"
          src="https://umami-eta-one.vercel.app/umami.js"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
