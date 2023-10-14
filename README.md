# Tietokannat-ja-rajapinnat

Täällä on nyt tämä kirjautuminen HTML-formsia käyttäen. Salasana kryptataan bcryptillä. Jos joku kokeilee, ajakaa ensin tuo SQL tiedosto Uniserverin
terminaalissa, siinä luodaan tuo tietokanta 'banking'. Sen jälkeen kansiossa 'Express_example' ajettava komento npm install, 'database.js' tiedostossa
MySQL käyttäjän 'root' salasana vaihdettava, .env tiedosto luotava ja sinne muuttuja 'PORT', johon portti jota halutaan kuunnella (yleensä portti 3000).
Sen jälkeen sovellus käynnistetään komennolla 'npm start' kansiossa 'Express_example'.
Ennen kirjautumista on luotava /bank endpointissa POST metodilla tietokantaan uusi käyttäjä (Username, Password, Name ja Balance). Sen jälkeen kirjautumista 
voi kokeilla /login endpointissa.
