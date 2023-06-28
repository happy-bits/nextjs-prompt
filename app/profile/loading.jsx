/*
Denna fil loading.jsx används automatiskt när en komponent laddas in.

Andra filer med speciell betydelse:
- default.js
- error.js
- layout.js
- loading.js
- not-found.js
- page.js
- route.js
- template.js

https://nextjs.org/docs/app/api-reference/file-conventions/loading

*/
import Image from "next/image";

const Loading = () => {
  return (
    <div className='w-full flex-center'>
      <Image
        src='assets/icons/loader.svg'
        width={50}
        height={50}
        alt='loader'
        className='object-contain'
      />
    </div>
  );
};

export default Loading;
