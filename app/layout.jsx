import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

/*
I Server Componentent kan 'metadata object' exporter göras för att manipulera html

Namnet på konstanten behöver vara just 'metadata'

https://nextjs.org/docs/app/api-reference/functions/generate-metadata

*/
export const metadata = {
  title: "Promptopia :)",
  description: "Discover & Share AI Prompts :)",
};

// layout.jsx och page.jsx är Server side, så de syns i View source
const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      {/* Provider omsluter hela appen och gör att vi har koll på  sessionen genom hela appen */}
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
