import Document, { Head, Main, NextScript } from 'next/document'

export default class myDocument extends Document {
  render() {
    return (
      <html lang='en'>
        <Head>
          <link href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'></link>
          <meta charSet='utf-8'></meta>
          <meta name='robots' content='noindex, nofollow' ></meta>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
        <style global jsx>{`
          body {
            font-family: 'Montserrat', sans-serif;
          }
        `}</style>
      </html>
    )
  }
}