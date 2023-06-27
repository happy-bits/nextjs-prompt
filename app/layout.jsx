import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

/*
OO:
The metadata object and generateMetadata function exports are only supported in Server Components.

Behöver heta just "metadata"
https://nextjs.org/docs/app/api-reference/functions/generate-metadata



*/
export const metadata = {
  title: "Promptopia :)",
  description: "Discover & Share AI Prompts :)",
};

// OO: layout.jsx och page.jsx är Server side, så de syns i View source
const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      {/* OO: Provider gör att vi håller koll på sessionen genom hela appen */}
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
