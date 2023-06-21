# Mongodb

https://www.mongodb.com/cloud/atlas/register

Sign up with Google

Skapa **nytt projekt**

https://cloud.mongodb.com/v2#/org/5c9df4ee014b76cb79823987/projects

Skapa **ny databas** i projeket

Klicka på database. Connect. **Drivers**. Kopiera koden, typ:

    mongodb+srv://happybits:<password>@cluster0.bikylqr.mongodb.net/?retryWrites=true&w=majority
OXsCvxEGuUS8vMrd

Lägg in den i **.env**-filen, glöm inte att ersätta **<password>** med ditt lösenord

# Google Cloud

Skapa nytt projekt

https://console.cloud.google.com/

Klicka **Select project**

I navigationen till vänster välj **API & services** => **OAuth consent screen**

Create. Skriv app name. Ange epostadress. Lägg till testanvändare (skriv din egen.) Authorized domain kan du skippa.

Välj **Credentials** i menyn. Tryck **Create Credentials** och välj **OAuth client id**. Välj Web application. Under **Authorized JavaScript origins**, välj 

    http://localhost:3000

...och **Authorized redirect URIs** välj
    
    http://localhost:3000
    http://localhost:3000/api/auth/callback/google

Spara och du får ett ClientID och Client secret

Lägg dessa två värden i **.env**-filen


# Installation

npm install

# .env filen

.env fil checkas inte in och behöver fyllas med inlogguppgifter

    GOOGLE_ID=2492756......apps.googleusercontent.com
    GOOGLE_CLIENT_SECRET=GOCSP.......
    MONGODB_URI=mongodb+srv://happybits:OX.....