
# Demo

Starta appen (npm run dev)

Demo hur den funkar för användaren

# Mappar

app - sidor
components - komponenter
models - databasmodeller
public - statiska bilder
styles - CSS
utils - hjälp

# Filer

Gå genom filerna i roten


# app/page.jsx

- Ändra text
- Ta bort nån CSS
- Enkel (server) komponent som innehåller annan komponent (Feed)

# app/layout.jsx

- Namnkonventioner på filer
- 'Masterpage', mallsida
- metadata (ändra)
- Nav, children (ta bort)
- Anropar global.css

# styles/global.css

- Tailwind
- Ändra .gradient -> opacity till 0.95
- @apply directive -> .black_btn ändra

# components/Nav.jsx

- Client component
- <Link href='/'/> ==><Link href='/profile'/>
- <Image/> peta på
- <div>{toggleDropdown ? 'Ja' : 'Nej'}</div>

# components/Feed.jsx

- Client component
- <input placeholder /> (ändra)
- handleSearchChange -> lägg till  console.log(e.target.value)
- PromptCardList

# components/PromptCard.jsx

- post.creator.username -> .toUpperCase()

# components/Nav.jsx

Logga in och demo'a hur ny post sparas

- Länk till att skapa en ny post
- <Link href='/create-prompt'

# app/create-prompt/page.jsx

Binder property med functionen 'submitting'

<Form handleSubmit={createPrompt} />

# components/Form.jsx

När formuläret submittas så kör in inkomna funktionen (i detta fall 'createPrompt')

<form onSubmit={handleSubmit} />

# app/create-prompt/page.jsx

Funktionen körs och gör anrop mot /api/prompt/new

    const createPrompt = async (e) => {

    try {
        const response = await fetch("/api/prompt/new", {
        method: "POST",

# app/api/prompt/new/route.js

Körs på servern

Sparar i databasen

# View Source

Kör 'view source' på dessa sidor

http://localhost:3000/
http://localhost:3000/create-prompt

På startsidan: allt finns i HTML förutom PromptCardList

På create-prompt: allt finns i HTML

