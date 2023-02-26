var jsonInfo = '['
    + '{"Anno" : "11 Novembre 2015", "Titolo" : "Sistema solare illuminato","Descrizione" : "Piccolo progettino creato dalla classe 5B del Generale Gonzaga anno bhoo. Un progetto che riguardava la crazione del sistema solare su una base di polisterolo e i pianeti collegaticon gli stuzzicandenti. Mi chiesero di far illuminare i piantei ed il sole quindi grazie allutilizzo di un arduino nano e del saldatore collegai dei led dentro ogni pianeta creando qualcosa di sfizioso e istruttivo per i ragazzi"},'
    + '{"Anno" : "13 Marzo 2018",    "Titolo" : "Casa Iot",                 "Descrizione" : "Cercando in rete trovai un progettino open source con appena 2 anni di eta e volevo provarlo. Stiamo parlando di Home Assistant versione 0.65.6. Bellissimo progetto che ancora oggi utilizzo e che mi permette di controllare casa. Iniziai cosi la conquistista di casa convertendola in IOT."},'
    + '{"Anno" : "12 Settembre 2019","Titolo" : "Karaoke",                  "Descrizione" : "Non ricordo esattamente quale evento stava per capitare, pero mi chiesere di scaricare delle canzoni per karaoke. Trovai un sito che ne conteneva veramente tantissime unica pecca dovevi cliccare su ognuna di essa per farla scaricare. Dopo le prime 20 su un migliaio e passa mi scocciai e iniziai a pensare. Realizzai un programmino realizzato in C# che grazie alla tecnica di WebScraping ogni tot secondi (perchè avevo una connessione penosa) cliccava su un link e mi scaricava la musica. Lo feci eseguire tutta la notte e il mattino seguente. Circa primo pomeriggio aveva finito e avevo tutte le canzoni del sito sul mio pc."},'
    + '{"Anno" : "15 Settembre 2019","Titolo" : "Multiskills - Slieder 3D", "Descrizione" : "Multiskills era ormai nato e sfornavamo idee di progetti come le pizze il sabato sera.Obiettivo: scannerizzare e digitalizzare in 3D tutti gli oggetti dellistituto aggregato a noi ovvero lagrario di eboli Lidea che mi venne e che realizzai: Prendo 3 raspberry pi 0w montati su unasta e ogni raspberry montato su uno slider che si sposatava di tot cm ogni foto fatta. Costruii un programma in C# che tramite ssh mandavo un comando ai 3 raspberry per fargli scattare delle Foto poi una volta scattata tramite scp accedeva alle 3 cartelle locali dei raspberry le prendeva le rinominava e le salvava in locale sul computer catalogandole. Dopodiche si interfacciava con il wifi ad un arduino che faceva avanzare gli slider di tot cm e ripartiva a fare le foto. Una volta finita la posizione si azzerava e lutente con lasta cambiava posizione intorno alloggetto. Poi con un programma open source prendevamo tutte le foto e le convertivamo in nuvola di punti"},'
    + '{"Anno" : "19 Settembre 2019","Titolo" : "Indice Gulpease",          "Descrizione" : "in occasione di non ricordo cosa, una professoressa di italiano del mio istituto ma altra classe che ho conosciuto durante le riunioni di multiskills ed il professore con il quale avevamo creato multiskills, mi chiesero di realizzare questo programmino banale che serviva a calcolare questo indice. Siccome è un indice molto particolare nel linguaggio italiano, decisi di realizzarlo in python che non conoscevo. Python perche da prensentare sarebbe stato facilissimo e molto carino da vedere e sopratutto muovere i passi in linguaggi diversi. Niente mi divertii a conoscere python e spigarlo alla classe"},'
    + '{"Anno" : "20 Ottobre 2019",  "Titolo" : "OpenRobyNonVedenti",       "Descrizione" : ""},'
    + '{"Anno" : "17 Febbraio 2020", "Titolo" : "HackSitoScolastico",       "Descrizione" : "okok fermi non correte. Si avete letto bene e non si tratta di Hackeraggio del sito scolastico. In pratica il nostro istituto faceva uscire le circolari solo sulla del sito ed io puntualmente le perdevo perche mi dimenticavo di andare a vedere. Siccome sono unutilizzatore accanito di telegram costruii un bot telegram appunto che faceva il web scraping del sito web si costruiva lurl del documento pdf e lo mandava sul bot alle sole personi che si erano registarti al bot. Il tutto in maniera anonima perche non salvavo i dati di nessuno ma solo id telegram fatto apposta per i bot. Ps: hack per me significa Aggiunta. infatti HackSitoScolastico -> AggiuntaAlSitoScolastico"},'
    + '{"Anno" : "15 Novembre 2021", "Titolo" : "Rfid134 Libreria",         "Descrizione" : ""},'
    + '{"Anno" : "18 Novembre 2021", "Titolo" : "CiotolaCroccantiniSmart",  "Descrizione" : ""},'
    + '{"Anno" : "5 Novembre 2020",  "Titolo" : "BotUnisa",                 "Descrizione" : ""},'
    + '{"Anno" : "5 Ottobre 2022",   "Titolo" : "3GTech",                   "Descrizione" : ""},'
    + '{"Anno" : "10 Agosto 2022",   "Titolo" : "Rete Casa",                "Descrizione" : ""},'
    + '{"Anno" : "20 Dicembre 2022", "Titolo" : "Progetto TopSecret",       "Descrizione" : ""}'
    + ']';

var timeline = '<ul class="timeline">';
jsonInfo = JSON.parse(jsonInfo);
for (var i = 0; i < jsonInfo.length; i++) {
    timeline += '<li class="timeline-event">'
                + '<h2 class="timeline-event-icon"></h2>'
                + '<div class="timeline-event-copy">'
                    + '<h2 class="timeline-event-thumbnail">' + jsonInfo[i].Anno + '</h2>'
                    + '<h1 class="anno">' + jsonInfo[i].Titolo + '</h1><br>'
                    + '<h3 class="descrizioneTemporale">' + jsonInfo[i].Descrizione + '</h3>'
                + '</div>'
           + '</li>';
}
timeline += '</ul>';