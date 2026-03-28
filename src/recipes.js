const recipes = [

  // ── BATCH 1: Deutsche Küche (1–100) ────────────────────────────────────────

  {
    name: "Sauerbraten",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1,5 kg Rinderbraten",
      "500 ml Rotweinessig",
      "500 ml Wasser",
      "2 Zwiebeln, grob gehackt",
      "2 Karotten, in Scheiben",
      "1 Stange Sellerie",
      "10 Pfefferkörner",
      "4 Lorbeerblätter",
      "6 Wacholderbeeren",
      "2 EL Zucker",
      "3 EL Schmalz oder Butterschmalz",
      "200 ml Rinderfond",
      "4 Lebkuchen (zerbröselt)",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Essig, Wasser, Zwiebeln, Karotten, Sellerie und Gewürze aufkochen und abkühlen lassen. Den Braten darin 3–4 Tage einlegen und kalt stellen.",
      "Den Braten aus der Marinade nehmen, trocken tupfen und mit Salz und Pfeffer würzen. Marinade durch ein Sieb gießen und auffangen.",
      "Schmalz in einem Schmortopf erhitzen. Den Braten von allen Seiten kräftig anbraten.",
      "Das Gemüse aus der Marinade dazugeben und kurz mitbraten. Marinade und Fond angießen.",
      "Zugedeckt bei mittlerer Hitze ca. 2,5 Stunden schmoren lassen.",
      "Den Braten herausnehmen. Sauce durch ein Sieb passieren, Lebkuchen einrühren und einköcheln lassen bis sie sämig ist. Mit Salz, Pfeffer und Zucker abschmecken.",
      "Den Braten in Scheiben schneiden und mit der Sauce servieren. Dazu passen Rotkohl und Klöße."
    ]
  },

  {
    name: "Rinderrouladen",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "4 dünne Rinderscheiben (Oberschale, je ca. 200 g)",
      "4 TL Senf (mittelscharf)",
      "200 g durchwachsener Speck, in Streifen",
      "2 Zwiebeln, in Ringe geschnitten",
      "4 Gewürzgurken, längs halbiert",
      "Salz und Pfeffer",
      "2 EL Butterschmalz",
      "300 ml Rinderfond",
      "150 ml Rotwein",
      "2 Lorbeerblätter",
      "1 EL Tomatenmark",
      "1 EL Speisestärke"
    ],
    zubereitung: [
      "Fleischscheiben flach klopfen, salzen, pfeffern und dünn mit Senf bestreichen.",
      "Speckstreifen, Zwiebelringe und je eine halbe Gewürzgurke auf jede Scheibe legen. Fest aufrollen und mit Rouladennadeln oder Küchengarn fixieren.",
      "Butterschmalz in einem Schmortopf erhitzen. Rouladen von allen Seiten scharf anbraten.",
      "Tomatenmark einrühren, kurz anrösten. Mit Rotwein ablöschen und einkochen lassen.",
      "Fond angießen, Lorbeerblätter dazugeben. Bei mittlerer Hitze ca. 90 Minuten zugedeckt schmoren.",
      "Rouladen herausnehmen, Sauce durch ein Sieb passieren. Stärke mit etwas kaltem Wasser verrühren, Sauce damit binden.",
      "Rouladen zurück in die Sauce geben und kurz ziehen lassen. Mit Kartoffelklößen und Rotkohl servieren."
    ]
  },

  {
    name: "Königsberger Klopse",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "500 g gemischtes Hackfleisch",
      "2 altbackene Brötchen, eingeweicht",
      "1 Zwiebel, fein gewürfelt",
      "2 Eier",
      "1 EL Sardellenpaste",
      "Salz, Pfeffer, Muskat",
      "1 l Gemüsebrühe",
      "50 g Butter",
      "40 g Mehl",
      "150 ml Sahne",
      "3 EL Kapern",
      "2 EL Zitronensaft",
      "1 TL Zucker"
    ],
    zubereitung: [
      "Brötchen ausdrücken. Hackfleisch, Brötchen, Zwiebel, Eier und Sardellenpaste zu einer glatten Masse verkneten. Mit Salz, Pfeffer und Muskat würzen.",
      "Aus der Masse gleichmäßige Klöße formen (ca. 5 cm Durchmesser).",
      "Brühe aufkochen. Klöße hineingeben und bei mittlerer Hitze 20 Minuten gar ziehen lassen. Herausnehmen und warm halten.",
      "Butter in einem Topf schmelzen. Mehl einrühren und hell anschwitzen. Nach und nach 500 ml der Kochbrühe einrühren, dabei ständig rühren.",
      "Sahne, Kapern und Zitronensaft einrühren. Mit Salz, Pfeffer und Zucker abschmecken.",
      "Klöße in die Sauce geben und kurz erhitzen. Mit Salzkartoffeln servieren."
    ]
  },

  {
    name: "Labskaus",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "400 g gepökeltes Rindfleisch (Corned Beef)",
      "600 g Salzkartoffeln, vorgekocht",
      "3 Rote Bete (gekocht, aus dem Glas)",
      "2 Matjesfilets",
      "2 Gewürzgurken",
      "1 große Zwiebel",
      "3 EL Schmalz",
      "Salz und Pfeffer",
      "4 Spiegeleier",
      "Rollmöpse zum Anrichten"
    ],
    zubereitung: [
      "Zwiebel fein würfeln und im Schmalz glasig dünsten.",
      "Gepökeltes Rindfleisch grob zerhacken und dazugeben, kurz mitbraten.",
      "Kartoffeln grob zerdrücken (nicht zu fein). Rote Bete, Matjes und Gurken klein schneiden.",
      "Alles zusammen in die Pfanne geben und gut vermischen. Mit Salz und Pfeffer abschmecken.",
      "Die Masse bei mittlerer Hitze durcherhitzen und leicht anbraten lassen.",
      "Auf Tellern anrichten. Jeweils ein Spiegelei obenauf setzen. Mit Rollmöpsen und Gewürzgurken garnieren."
    ]
  },

  {
    name: "Grünkohl mit Pinkel",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1,5 kg frischer Grünkohl",
      "4 Pinkelwürste",
      "300 g durchwachsener Bauchspeck",
      "2 Zwiebeln, gewürfelt",
      "3 EL Schmalz",
      "400 ml Fleischbrühe",
      "1 TL Senf",
      "Salz, Pfeffer, Muskat",
      "1 Prise Zucker"
    ],
    zubereitung: [
      "Grünkohl waschen, die Blätter von den Stielen zupfen und grob hacken. In kochendem Salzwasser 5 Minuten blanchieren, abschrecken und gut ausdrücken.",
      "Schmalz in einem großen Topf erhitzen. Zwiebeln und Speck anbraten.",
      "Grünkohl dazugeben, mit Brühe aufgießen. Senf einrühren.",
      "Pinkelwürste obenauf legen. Bei niedriger Hitze ca. 60 Minuten zugedeckt garen.",
      "Mit Salz, Pfeffer, Muskat und einer Prise Zucker abschmecken.",
      "Mit Salzkartoffeln oder Brot servieren."
    ]
  },

  {
    name: "Reibekuchen (Kartoffelpuffer)",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg festkochende Kartoffeln",
      "2 Eier",
      "1 Zwiebel",
      "3 EL Mehl",
      "Salz und Pfeffer",
      "Muskat",
      "Öl zum Braten",
      "Apfelmus zum Servieren"
    ],
    zubereitung: [
      "Kartoffeln und Zwiebel schälen und fein reiben. Masse in ein Tuch geben und gut ausdrücken — je trockener, desto knuspriger.",
      "Eier und Mehl unterrühren. Mit Salz, Pfeffer und Muskat würzen.",
      "Öl in einer Pfanne erhitzen. Esslöffelweise Masse hineingeben und flach drücken.",
      "Von beiden Seiten bei mittlerer Hitze goldbraun braten — ca. 4 Minuten pro Seite.",
      "Auf Küchenpapier abtropfen lassen und sofort heiß servieren.",
      "Traditionell mit Apfelmus oder saurer Sahne servieren."
    ]
  },

  {
    name: "Himmel und Erde",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "600 g mehligkochende Kartoffeln",
      "500 g Äpfel (säuerlich)",
      "300 g Blutwurst",
      "200 g Speckwürfel",
      "1 große Zwiebel, in Ringe geschnitten",
      "50 g Butter",
      "Salz, Pfeffer, Muskat",
      "Etwas Zucker"
    ],
    zubereitung: [
      "Kartoffeln schälen, würfeln und in Salzwasser weich kochen. Äpfel schälen, entkernen und grob würfeln.",
      "Äpfel zur Kartoffel in den Topf geben und mitkochen bis beide weich sind.",
      "Butter, Salz, Pfeffer und Muskat dazugeben und zu einem groben Stampf verarbeiten. Apfelstampf abschmecken.",
      "Speck in einer Pfanne ohne Fett knusprig auslassen. Herausnehmen.",
      "Zwiebelringe im Speckfett goldbraun braten.",
      "Blutwurst in Scheiben schneiden und in der Pfanne von beiden Seiten kurz anbraten.",
      "Kartoffel-Apfel-Stampf auf Tellern anrichten, Blutwurst, Speck und Zwiebelringe darauflegen."
    ]
  },

  {
    name: "Maultaschen in Brühe",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "300 g Mehl",
      "3 Eier",
      "1 TL Salz",
      "300 g gemischtes Hackfleisch",
      "100 g Spinat (aufgetaut, ausgedrückt)",
      "1 Zwiebel, fein gewürfelt",
      "2 EL Semmelbrösel",
      "1 Ei",
      "Salz, Pfeffer, Muskat",
      "1,5 l Rinderbrühe",
      "Frischer Schnittlauch"
    ],
    zubereitung: [
      "Aus Mehl, Eiern und Salz einen glatten Nudelteig kneten. In Folie gewickelt 30 Minuten ruhen lassen.",
      "Zwiebel in Butter glasig dünsten. Hackfleisch dazugeben und anbraten. Spinat, Semmelbrösel, Ei und Gewürze unterrühren. Abkühlen lassen.",
      "Teig dünn ausrollen. Häufchen der Füllung im Abstand aufsetzen. Teig darüberklappen, Ränder gut andrücken und Maultaschen ausschneiden.",
      "Brühe aufkochen. Maultaschen hineingeben und ca. 15 Minuten bei schwacher Hitze garen.",
      "In tiefen Tellern mit der heißen Brühe anrichten. Mit frischem Schnittlauch bestreuen."
    ]
  },

  {
    name: "Flammkuchen",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "250 g Mehl",
      "125 ml Wasser",
      "3 EL Olivenöl",
      "½ TL Salz",
      "200 g Crème fraîche",
      "150 g durchwachsener Speck, in Streifen",
      "2 Zwiebeln, in feine Ringe geschnitten",
      "Salz, Pfeffer, Muskat"
    ],
    zubereitung: [
      "Mehl, Wasser, Öl und Salz zu einem glatten Teig verkneten. 20 Minuten ruhen lassen.",
      "Backofen auf 250 °C vorheizen.",
      "Teig sehr dünn auf einem bemehlten Blech oder Backstein ausrollen.",
      "Crème fraîche mit Salz, Pfeffer und Muskat verrühren und gleichmäßig auf dem Teig verteilen.",
      "Zwiebelringe und Speckstreifen darübergeben.",
      "Im vorgeheizten Ofen 10–12 Minuten backen bis der Rand goldbraun und knusprig ist.",
      "Sofort heiß servieren."
    ]
  },

  {
    name: "Kartoffelsuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg mehligkochende Kartoffeln",
      "2 Karotten",
      "1 Stange Lauch",
      "1 Stange Sellerie",
      "1 Zwiebel",
      "1,5 l Gemüsebrühe",
      "100 ml Sahne",
      "2 EL Butter",
      "Petersilie",
      "Salz, Pfeffer, Muskat",
      "Geröstete Speckwürfel zum Garnieren"
    ],
    zubereitung: [
      "Gemüse schälen und in grobe Würfel schneiden. Zwiebel fein hacken.",
      "Butter im Topf schmelzen. Zwiebel glasig dünsten. Restliches Gemüse kurz mitdünsten.",
      "Mit Brühe aufgießen und ca. 25 Minuten kochen bis alles weich ist.",
      "Suppe mit dem Stabmixer pürieren. Sahne einrühren.",
      "Mit Salz, Pfeffer und Muskat abschmecken.",
      "Mit Petersilie und knusprigen Speckwürfeln servieren."
    ]
  },

  {
    name: "Erbsensuppe mit Würstchen",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "300 g getrocknete Erbsen (gelb oder grün)",
      "200 g Bauchspeck",
      "2 Kartoffeln, gewürfelt",
      "2 Karotten, in Scheiben",
      "1 Zwiebel, gehackt",
      "1,5 l Wasser",
      "2 Würstchen (Wiener oder Bockwurst)",
      "Majoran",
      "Salz und Pfeffer",
      "Petersilie"
    ],
    zubereitung: [
      "Erbsen über Nacht in Wasser einweichen.",
      "Erbsen abgießen, mit Speck und Zwiebel in frischem Wasser aufsetzen. 45 Minuten kochen.",
      "Kartoffeln und Karotten dazugeben. Weitere 20 Minuten kochen.",
      "Speck herausnehmen, in kleine Würfel schneiden und zurückgeben.",
      "Einen Teil der Suppe pürieren für eine cremige Konsistenz.",
      "Mit Majoran, Salz und Pfeffer abschmecken. Würstchen in Scheiben schneiden und erhitzen.",
      "Suppe in Schüsseln füllen, Würstchenscheiben darauf verteilen. Mit Petersilie garnieren."
    ]
  },

  {
    name: "Linsensuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "300 g rote oder braune Linsen",
      "2 Karotten",
      "1 Stange Sellerie",
      "1 Zwiebel",
      "2 Knoblauchzehen",
      "1 EL Tomatenmark",
      "1 TL Kreuzkümmel",
      "1 TL Paprikapulver",
      "1,2 l Gemüsebrühe",
      "2 EL Olivenöl",
      "Salz und Pfeffer",
      "Zitronensaft",
      "Petersilie"
    ],
    zubereitung: [
      "Zwiebel, Knoblauch, Karotten und Sellerie fein würfeln.",
      "Öl erhitzen. Zwiebel und Knoblauch dünsten. Tomatenmark einrühren und kurz anrösten.",
      "Gewürze dazugeben und kurz mitrösten. Gemüse dazugeben und kurz anbraten.",
      "Linsen und Brühe hinzufügen. Aufkochen und bei mittlerer Hitze 25 Minuten köcheln lassen.",
      "Suppe teilweise oder ganz pürieren nach Wunsch.",
      "Mit Salz, Pfeffer und Zitronensaft abschmecken. Mit frischer Petersilie servieren."
    ]
  },

  {
    name: "Zwiebelsuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg Zwiebeln, in dünne Ringe geschnitten",
      "50 g Butter",
      "1 EL Olivenöl",
      "1 EL Mehl",
      "200 ml Weißwein",
      "1 l Rinderfond",
      "Thymian",
      "Salz und Pfeffer",
      "4 Scheiben Baguette",
      "100 g Emmentaler, gerieben"
    ],
    zubereitung: [
      "Butter und Öl in einem großen Topf erhitzen. Zwiebeln bei mittlerer Hitze unter Rühren ca. 30 Minuten goldbraun karamellisieren.",
      "Mehl darüberstreuen und kurz anrösten. Mit Weißwein ablöschen.",
      "Fond angießen, Thymian dazugeben. 20 Minuten köcheln lassen.",
      "Mit Salz und Pfeffer abschmecken.",
      "Suppe in feuerfeste Schüsseln füllen. Baguettescheiben darauflegen, mit Käse bestreuen.",
      "Im Ofen bei 220 °C überbacken bis der Käse goldbraun ist. Sofort servieren."
    ]
  },

  {
    name: "Gulaschsuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Rindfleisch (Schulter), gewürfelt",
      "3 Zwiebeln, gewürfelt",
      "2 Paprika (rot, grün)",
      "2 Kartoffeln, gewürfelt",
      "3 EL Paprikapulver (edelsüß)",
      "1 TL Kümmel",
      "2 EL Tomatenmark",
      "1 l Rinderbrühe",
      "3 EL Schmalz",
      "Salz und Pfeffer",
      "Majoran"
    ],
    zubereitung: [
      "Fleisch in Würfel schneiden und trocken tupfen. Schmalz erhitzen und Fleisch scharf anbraten.",
      "Zwiebeln dazugeben und mitdünsten. Tomatenmark einrühren, kurz anrösten.",
      "Paprikapulver und Kümmel dazugeben. Sofort mit Brühe ablöschen.",
      "Paprika und Kartoffeln dazugeben. Alles aufkochen und bei mittlerer Hitze 45 Minuten schmoren.",
      "Mit Salz, Pfeffer und Majoran abschmecken.",
      "Mit frischem Brot oder Semmel servieren."
    ]
  },

  {
    name: "Bohneneintopf",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "400 g weiße Bohnen (aus der Dose)",
      "200 g Bauchspeck, gewürfelt",
      "2 Karotten",
      "1 Stange Lauch",
      "1 Zwiebel",
      "800 ml Gemüsebrühe",
      "Thymian, Lorbeer",
      "Salz und Pfeffer",
      "Petersilie"
    ],
    zubereitung: [
      "Speck in einem Topf ohne Fett anbraten. Zwiebel dazugeben und glasig dünsten.",
      "Karotten und Lauch in Scheiben schneiden und mitdünsten.",
      "Brühe, Lorbeer und Thymian dazugeben. 15 Minuten köcheln lassen.",
      "Bohnen abgießen, spülen und dazugeben. Weitere 10 Minuten kochen.",
      "Mit Salz und Pfeffer abschmecken. Mit Petersilie bestreuen."
    ]
  },

  {
    name: "Kartoffelklöße",
    kategorie: "Beilage",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg mehligkochende Kartoffeln",
      "150 g Kartoffelmehl",
      "2 Eier",
      "Salz und Muskat",
      "Geröstete Weißbrotwürfel (optional, als Einlage)"
    ],
    zubereitung: [
      "Kartoffeln in der Schale kochen, pellen und noch heiß durch eine Presse drücken. Abkühlen lassen.",
      "Kartoffelmehl, Eier, Salz und Muskat unterkneten bis ein glatter Teig entsteht.",
      "Mit feuchten Händen Klöße formen. Optional: Brotwürfel in die Mitte drücken.",
      "In siedendes Salzwasser (nicht sprudelnd kochen) geben. Wenn sie aufschwimmen, noch 5 Minuten ziehen lassen.",
      "Vorsichtig herausheben und sofort mit Braten und Sauce servieren."
    ]
  },

  {
    name: "Rotkohl (Blaukraut)",
    kategorie: "Beilage",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg Rotkohl",
      "2 Äpfel, gewürfelt",
      "1 Zwiebel, gewürfelt",
      "3 EL Schmalz",
      "100 ml Rotwein",
      "3 EL Rotweinessig",
      "2 EL Zucker",
      "3 Gewürznelken",
      "2 Lorbeerblätter",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Rotkohl in feine Streifen schneiden. Mit Salz und Essig mischen und kurz stehen lassen.",
      "Schmalz erhitzen. Zwiebeln und Äpfel darin anschwitzen.",
      "Rotkohl dazugeben, Rotwein, Zucker, Gewürze hinzufügen.",
      "Alles gut verrühren, zugedeckt bei niedriger Hitze ca. 45 Minuten schmoren.",
      "Mit Salz, Pfeffer und Essig abschmecken."
    ]
  },

  {
    name: "Sauerkraut",
    kategorie: "Beilage",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Sauerkraut",
      "1 Zwiebel, gewürfelt",
      "100 g Speck, gewürfelt",
      "1 Lorbeerblatt",
      "5 Wacholderbeeren",
      "200 ml Weißwein",
      "1 TL Kümmel",
      "Salz und Pfeffer",
      "1 Prise Zucker"
    ],
    zubereitung: [
      "Sauerkraut in einem Sieb abspülen (für milderes Aroma) oder direkt verwenden.",
      "Speck und Zwiebeln in einem Topf anbraten.",
      "Sauerkraut dazugeben. Weißwein, Lorbeer, Wacholder und Kümmel hinzufügen.",
      "Bei niedriger Hitze ca. 30 Minuten zugedeckt schmoren.",
      "Mit Salz, Pfeffer und einer Prise Zucker abschmecken."
    ]
  },

  {
    name: "Semmelknödel",
    kategorie: "Beilage",
    herkunft: "Deutschland",
    zutaten: [
      "6 altbackene Semmeln (Brötchen)",
      "250 ml warme Milch",
      "3 Eier",
      "1 Zwiebel, fein gewürfelt",
      "2 EL Butter",
      "Petersilie, gehackt",
      "Salz, Pfeffer, Muskat"
    ],
    zubereitung: [
      "Semmeln in dünne Scheiben schneiden. Milch erwärmen und darübergießen. 20 Minuten einweichen.",
      "Butter erhitzen, Zwiebeln darin glasig dünsten.",
      "Zwiebeln, Eier, Petersilie und Gewürze zur Semmelmasse geben. Gut vermischen.",
      "Mit feuchten Händen Knödel formen.",
      "In siedendem Salzwasser bei schwacher Hitze ca. 20 Minuten gar ziehen lassen.",
      "Vorsichtig herausheben und mit Braten oder Pilzrahmsoße servieren."
    ]
  },

  {
    name: "Schweinebraten",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1,5 kg Schweinebauch oder Schulter mit Schwarte",
      "2 TL Kümmel",
      "2 TL Salz",
      "1 TL Pfeffer",
      "3 Knoblauchzehen, zerdrückt",
      "2 Zwiebeln, grob gewürfelt",
      "2 Karotten",
      "300 ml helles Bier",
      "300 ml Fleischbrühe"
    ],
    zubereitung: [
      "Schwarte rautenförmig einschneiden. Kümmel, Salz, Pfeffer und Knoblauch mischen und die Schwarte einreiben.",
      "Backofen auf 200 °C vorheizen.",
      "Braten auf dem Gemüse in einer Fettpfanne platzieren. Mit Bier und Brühe begießen.",
      "Im Ofen ca. 2 Stunden braten. Alle 30 Minuten mit dem Bratensaft begießen.",
      "In den letzten 15 Minuten die Grillfunktion einschalten damit die Schwarte knusprig wird.",
      "Braten ruhen lassen, Sauce durch ein Sieb passieren und abschmecken. Mit Knödeln und Sauerkraut servieren."
    ]
  },

  {
    name: "Zwiebelkuchen",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "250 g Mehl",
      "1 Würfel Hefe (42 g)",
      "125 ml lauwarme Milch",
      "1 TL Zucker",
      "50 g weiche Butter",
      "1 TL Salz",
      "800 g Zwiebeln, in Ringe geschnitten",
      "200 g Speckwürfel",
      "3 Eier",
      "200 g saure Sahne",
      "Kümmel, Salz, Pfeffer"
    ],
    zubereitung: [
      "Hefe mit Zucker in lauwarmer Milch auflösen. Mit Mehl, Butter und Salz zu einem Hefeteig verkneten. 30 Minuten gehen lassen.",
      "Speck in einer Pfanne anbraten. Zwiebeln dazugeben und bei mittlerer Hitze goldgelb dünsten. Abkühlen lassen.",
      "Eier und saure Sahne verquirlen. Mit Zwiebelmasse mischen, mit Kümmel, Salz und Pfeffer würzen.",
      "Teig auf einem Backblech ausrollen. Zwiebelbelag darauf verteilen.",
      "Im Ofen bei 200 °C ca. 30 Minuten backen bis der Belag goldbraun ist.",
      "Warm servieren, am besten zum neuen Wein."
    ]
  },

  {
    name: "Rheinischer Sauerbraten",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1,2 kg Rinderbraten",
      "400 ml Rotweinessig",
      "400 ml Wasser",
      "1 Zwiebel",
      "2 Karotten",
      "Lorbeer, Nelken, Pfefferkörner",
      "8 Lebkuchen",
      "50 g Rosinen",
      "3 EL Schmalz",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Marinade aus Essig, Wasser und Gewürzen kochen und abkühlen lassen. Braten 4 Tage einlegen.",
      "Braten herausnehmen, trocken tupfen, würzen und im Schmalz anbraten.",
      "Gemüse und etwas Marinade dazugeben, schmoren lassen ca. 2 Stunden.",
      "Sauce durch ein Sieb passieren. Lebkuchen und Rosinen einrühren und einkochen.",
      "Mit Klößen und Rotkohl servieren."
    ]
  },

  {
    name: "Bratwurst mit Sauerkraut",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "4 frische Bratwürste",
      "500 g Sauerkraut",
      "1 Zwiebel",
      "1 EL Schmalz",
      "100 ml Weißwein",
      "Kümmel, Lorbeer",
      "Senf zum Servieren"
    ],
    zubereitung: [
      "Sauerkraut mit Zwiebeln, Schmalz, Weißwein und Gewürzen schmoren.",
      "Bratwürste in der Pfanne oder auf dem Grill rundherum goldbraun braten.",
      "Mit Sauerkraut und Senf servieren."
    ]
  },

  {
    name: "Kasslerbraten",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "800 g Kassler (geräuchertes Schweinefleisch)",
      "2 Zwiebeln",
      "300 ml Apfelsaft",
      "200 ml Brühe",
      "2 EL Honig",
      "1 EL Senf",
      "Thymian, Lorbeer"
    ],
    zubereitung: [
      "Kassler in einem Bräter mit Zwiebeln anbraten.",
      "Apfelsaft, Brühe, Honig und Senf mischen und angießen.",
      "Kräuter dazugeben. Bei 180 °C ca. 60 Minuten schmoren.",
      "Sauce einkochen und abschmecken.",
      "Mit Kartoffelpüree oder Sauerkraut servieren."
    ]
  },

  {
    name: "Eisbein mit Erbspüree",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "2 Eisbeine (gepökelt)",
      "1 Zwiebel mit Nelken gespickt",
      "Lorbeer, Pfefferkörner, Wacholderbeeren",
      "300 g getrocknete Erbsen",
      "50 g Speck",
      "Butter, Salz, Pfeffer",
      "Etwas Essig"
    ],
    zubereitung: [
      "Eisbeine mit Zwiebel und Gewürzen in Wasser aufsetzen. 2–2,5 Stunden köcheln lassen.",
      "Erbsen einweichen und mit Speck weich kochen. Pürieren und mit Butter abschmecken.",
      "Eisbeine auf dem Erbspüree anrichten. Mit Sauerkraut und Senf servieren."
    ]
  },

  {
    name: "Leber Berliner Art",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "4 Scheiben Kalbsleber (je ca. 150 g)",
      "2 große Zwiebeln, in Ringe",
      "2 Äpfel, in Scheiben",
      "50 g Mehl",
      "50 g Butter",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Leber in Mehl wenden und mit Salz und Pfeffer würzen.",
      "Butter erhitzen. Zwiebeln goldbraun braten — herausnehmen.",
      "Äpfel kurz mitbraten — herausnehmen.",
      "Leber im restlichen Fett von jeder Seite 2–3 Minuten braten (innen noch rosa).",
      "Mit Zwiebeln und Äpfeln belegen. Mit Kartoffelpüree servieren."
    ]
  },

  {
    name: "Hasenpfeffer",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1 Hase, in Stücke geteilt",
      "500 ml Rotwein",
      "200 ml Wildbrühe",
      "2 Zwiebeln",
      "Thymian, Lorbeer, Wacholder",
      "3 EL Schmalz",
      "1 EL Tomatenmark",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Hasenstücke in Rotwein und Gewürzen 24 Stunden marinieren.",
      "Abtropfen lassen, trocken tupfen und im Schmalz scharf anbraten.",
      "Tomatenmark einrühren. Marinade und Brühe angießen.",
      "Ca. 90 Minuten bei mittlerer Hitze schmoren.",
      "Sauce passieren und abschmecken. Mit Rotkohl und Spätzle servieren."
    ]
  },

  {
    name: "Forelle Müllerin",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "2 Forellen, küchenfertig",
      "Mehl zum Wenden",
      "100 g Butter",
      "Saft von 1 Zitrone",
      "Petersilie, gehackt",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Forellen waschen, trocken tupfen, innen und außen salzen und pfeffern.",
      "In Mehl wenden und überschüssiges Mehl abklopfen.",
      "Butter in einer Pfanne erhitzen. Forellen von jeder Seite ca. 5 Minuten braten.",
      "Herausnehmen. Im Bratfett Zitronensaft erhitzen und aufschäumen lassen.",
      "Zitronen-Buttersauce über die Forellen geben, mit Petersilie bestreuen.",
      "Mit Salzkartoffeln und Gurkensalat servieren."
    ]
  },

  {
    name: "Matjesfilet nach Hausfrauenart",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "4 Matjesfilets",
      "200 g saure Sahne",
      "1 Apfel, gewürfelt",
      "1 Zwiebel, in Ringe",
      "2 Gewürzgurken, in Scheiben",
      "Dill, frisch",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Saure Sahne mit Apfel, Gurken und Dill verrühren. Mit Salz und Pfeffer abschmecken.",
      "Matjesfilets auf dem Salat anrichten.",
      "Zwiebelringe obenauf geben.",
      "Mit Salzkartoffeln oder Schwarzbrot servieren."
    ]
  },

  {
    name: "Spargel mit Hollandaise",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg weißer Spargel",
      "3 Eigelb",
      "150 g Butter",
      "2 EL Weißwein",
      "1 EL Zitronensaft",
      "Salz, Zucker, Pfeffer",
      "4 Scheiben gekochter Schinken"
    ],
    zubereitung: [
      "Spargel schälen, holzige Enden abbrechen. In Salzwasser mit einer Prise Zucker ca. 15 Minuten kochen.",
      "Butter schmelzen und klären (Molke abschöpfen).",
      "Eigelb mit Weißwein im Wasserbad aufschlagen bis die Masse cremig ist.",
      "Geklärte Butter langsam einrühren. Mit Zitronensaft, Salz und Pfeffer abschmecken.",
      "Spargel auf Tellern anrichten, Hollandaise darübergeben. Mit Schinken und Salzkartoffeln servieren."
    ]
  },

  {
    name: "Falscher Hase",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "600 g gemischtes Hackfleisch",
      "2 altbackene Brötchen",
      "1 Zwiebel",
      "2 Eier",
      "1 EL Senf",
      "Salz, Pfeffer",
      "3 hartgekochte Eier (als Einlage)",
      "3 EL Öl",
      "300 ml Brühe"
    ],
    zubereitung: [
      "Brötchen einweichen und ausdrücken. Zwiebel fein würfeln.",
      "Hackfleisch, Brötchen, rohe Eier, Zwiebeln, Senf, Salz und Pfeffer verkneten.",
      "Masse flach ausbreiten. Hartgekochte Eier in einer Reihe darauflegen. Masse drumherum formen — ein Laib.",
      "In Öl von allen Seiten anbraten. In eine Auflaufform legen.",
      "Mit Brühe angießen. Bei 180 °C ca. 50 Minuten braten.",
      "In Scheiben schneiden — das Ei zeigt sich in der Mitte. Mit Kartoffelpüree und Sauce servieren."
    ]
  },

  {
    name: "Kartoffelpüree",
    kategorie: "Beilage",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg mehligkochende Kartoffeln",
      "150 ml warme Milch",
      "80 g Butter",
      "Salz und Muskat"
    ],
    zubereitung: [
      "Kartoffeln schälen, würfeln und in Salzwasser weich kochen.",
      "Abgießen und kurz ausdampfen lassen.",
      "Durch eine Kartoffelpresse drücken oder stampfen (kein Mixer — sonst wird es klebrig).",
      "Warme Milch und Butter einarbeiten. Mit Salz und Muskat abschmecken.",
      "Sofort servieren."
    ]
  },

  {
    name: "Bayerischer Schweinsbraten",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "2 kg Schweinebauch mit Schwarte",
      "2 TL Kümmel",
      "4 Knoblauchzehen",
      "2 TL Salz",
      "300 ml dunkles Bier",
      "300 ml Fleischbrühe",
      "2 Zwiebeln"
    ],
    zubereitung: [
      "Schwarte rautenförmig einschneiden. Mit Kümmel, Knoblauch und Salz einreiben.",
      "Backofen auf 220 °C vorheizen.",
      "Braten auf Zwiebeln in einem Bräter legen. Bier und Brühe angießen.",
      "Ofen auf 180 °C reduzieren. 2,5 Stunden braten, dabei regelmäßig begießen.",
      "Grillfunktion für knusprige Schwarte einschalten.",
      "Braten ruhen lassen. Sauce mit Brühe auffüllen und passieren."
    ]
  },

  {
    name: "Spanferkel",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1 Spanferkelkeule (ca. 1 kg)",
      "3 Knoblauchzehen",
      "2 EL Öl",
      "Rosmarin, Thymian",
      "Salz, Pfeffer",
      "300 ml Weißwein"
    ],
    zubereitung: [
      "Fleisch einschneiden und mit Kräutern, Knoblauch, Salz und Pfeffer einreiben.",
      "Über Nacht marinieren.",
      "Bei 200 °C im Ofen ca. 90 Minuten braten. Dabei mit Weißwein begießen.",
      "Sauce passieren und abschmecken."
    ]
  },

  {
    name: "Stockfisch (Baccalà)",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "500 g eingeweichter Stockfisch",
      "500 g Kartoffeln",
      "2 Zwiebeln",
      "2 EL Butter",
      "250 ml Sahne",
      "Petersilie",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Stockfisch 3 Tage wässern, täglich Wasser wechseln.",
      "Fisch in Stücke zerteilen, Gräten entfernen.",
      "Kartoffeln kochen und in Scheiben schneiden. Zwiebeln glasig dünsten.",
      "Fisch, Kartoffeln und Zwiebeln in einer Auflaufform schichten.",
      "Sahne darübergießen und mit Butter bestreichen.",
      "Bei 180 °C ca. 40 Minuten backen. Mit Petersilie servieren."
    ]
  },

  {
    name: "Reiberdatschi (Oberbayerische Kartoffelpuffer)",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg Kartoffeln",
      "2 Eier",
      "1 Zwiebel",
      "2 EL Mehl",
      "Salz, Pfeffer",
      "Öl zum Braten",
      "Sauerkraut oder Apfelmus"
    ],
    zubereitung: [
      "Kartoffeln und Zwiebeln fein reiben. Gut ausdrücken.",
      "Eier, Mehl, Salz und Pfeffer unterrühren.",
      "Im heißen Öl flache Puffer von beiden Seiten knusprig braten.",
      "Mit Sauerkraut oder Apfelmus servieren."
    ]
  },

  {
    name: "Obatzda (Bayerischer Käseaufstrich)",
    kategorie: "Vorspeise",
    herkunft: "Deutschland",
    zutaten: [
      "300 g reifer Camembert",
      "100 g Frischkäse",
      "1 Zwiebel, fein gewürfelt",
      "2 EL Butter",
      "Paprikapulver, Kümmel, Salz, Pfeffer",
      "2 EL Bier"
    ],
    zubereitung: [
      "Camembert zerdrücken. Mit Frischkäse und Butter cremig rühren.",
      "Bier einrühren. Zwiebeln dazugeben.",
      "Mit Paprika, Kümmel, Salz und Pfeffer würzen.",
      "Mindestens 1 Stunde kühl stellen.",
      "Mit Brezn, Radieschen und Schnittlauch servieren."
    ]
  },

  {
    name: "Brezensuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "2 altbackene Brezeln",
      "750 ml Gemüsebrühe",
      "1 Zwiebel",
      "2 EL Butter",
      "150 ml Sahne",
      "Schnittlauch",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Brezeln in Würfel schneiden und im Ofen rösten.",
      "Zwiebeln in Butter glasig dünsten. Brühe angießen.",
      "Brezelwürfel dazugeben und 10 Minuten quellen lassen.",
      "Alles pürieren. Sahne einrühren.",
      "Mit Salz und Pfeffer abschmecken. Mit Schnittlauch servieren."
    ]
  },

  {
    name: "Leberknödelsuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "200 g Leber (Rind oder Kalb), fein gehackt",
      "150 g altbackenes Brot, eingeweicht",
      "1 Ei",
      "1 Zwiebel, fein gewürfelt",
      "Majoran, Petersilie",
      "Salz, Pfeffer",
      "1 l Rinderbrühe"
    ],
    zubereitung: [
      "Brot ausdrücken. Alle Zutaten gut verkneten.",
      "Aus der Masse Knödel formen und in Salzwasser probegaren — falls sie zerfallen, mehr Brot.",
      "Brühe erhitzen. Knödel darin 15 Minuten gar ziehen lassen.",
      "In der Brühe servieren, mit Schnittlauch bestreuen."
    ]
  },

  {
    name: "Handkäse mit Musik",
    kategorie: "Vorspeise",
    herkunft: "Deutschland",
    zutaten: [
      "4 Handkäse",
      "2 Zwiebeln, in feine Ringe",
      "4 EL Apfelessig",
      "2 EL Öl",
      "Kümmel",
      "Salz und Pfeffer",
      "Schnittlauch",
      "Brot zum Servieren"
    ],
    zubereitung: [
      "Handkäse in Scheiben auf einem Teller anrichten.",
      "Zwiebeln, Essig, Öl und Kümmel zu einer Vinaigrette verrühren.",
      "Über den Käse gießen.",
      "Mit Schnittlauch bestreuen und mit Brot servieren."
    ]
  },

  {
    name: "Frankfurter Grüne Soße",
    kategorie: "Beilage",
    herkunft: "Deutschland",
    zutaten: [
      "Je 1 Bund: Borretsch, Kerbel, Kresse, Petersilie, Pimpinelle, Sauerampfer, Schnittlauch",
      "3 hartgekochte Eier",
      "200 g saure Sahne",
      "200 g Mayonnaise",
      "1 EL Senf",
      "Salz, Pfeffer, Zucker",
      "Zitronensaft"
    ],
    zubereitung: [
      "Kräuter waschen und sehr fein hacken.",
      "Hartgekochte Eier fein hacken.",
      "Saure Sahne, Mayonnaise und Senf verrühren.",
      "Kräuter und Eier unterrühren. Mit Salz, Pfeffer, Zucker und Zitronensaft abschmecken.",
      "Mindestens 1 Stunde kühl stellen.",
      "Traditionell mit Salzkartoffeln und hartgekochten Eiern servieren."
    ]
  },

  {
    name: "Thüringer Rostbratwurst",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "4 Thüringer Rostbratwürste",
      "4 Brötchen",
      "Senf (mittelscharf)",
      "Optional: Sauerkraut"
    ],
    zubereitung: [
      "Grill oder Pfanne auf mittlere bis hohe Hitze vorheizen.",
      "Bratwürste langsam grillen — regelmäßig wenden bis sie gleichmäßig gebräunt und durchgegart sind.",
      "In Brötchen legen und großzügig mit Senf bestreichen.",
      "Nach Wunsch mit Sauerkraut servieren."
    ]
  },

  {
    name: "Lammkeule aus dem Ofen",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1,5 kg Lammkeule",
      "5 Knoblauchzehen",
      "Rosmarin, Thymian",
      "4 EL Olivenöl",
      "Salz und Pfeffer",
      "300 ml Lammfond oder Gemüsebrühe",
      "200 ml Weißwein"
    ],
    zubereitung: [
      "Lammkeule mit Knoblauchzehen spicken. Mit Öl, Kräutern, Salz und Pfeffer einreiben.",
      "Über Nacht marinieren.",
      "Bei 200 °C im Ofen 30 Minuten anbraten. Dann auf 160 °C reduzieren.",
      "Fond und Wein angießen. Weitere 90 Minuten schmoren, dabei begießen.",
      "Ruhen lassen. Sauce abschmecken und servieren."
    ]
  },

  {
    name: "Westfälischer Pfefferpotthast",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg Rindfleisch (Schulter), gewürfelt",
      "4 Zwiebeln",
      "2 Lorbeerblätter",
      "1 EL Pfefferkörner",
      "500 ml Rinderfond",
      "2 EL Butter",
      "Kapern",
      "Zitronensaft",
      "Salz"
    ],
    zubereitung: [
      "Zwiebeln in Butter golden braten. Fleisch dazugeben und anbraten.",
      "Fond, Lorbeer und Pfefferkörner dazugeben. 90 Minuten schmoren.",
      "Kapern und Zitronensaft einrühren. Mit Salz abschmecken.",
      "Mit Salzkartoffeln oder Schwarzbrot servieren."
    ]
  },

  {
    name: "Strammer Max",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "4 Scheiben Schwarzbrot oder Graubrot",
      "8 Scheiben Kochschinken",
      "4 Eier",
      "Butter zum Braten",
      "Salz und Pfeffer",
      "Schnittlauch"
    ],
    zubereitung: [
      "Brot mit Butter bestreichen. Schinken darauflegen.",
      "Spiegeleier in Butter braten, mit Salz und Pfeffer würzen.",
      "Jeweils ein Ei auf den Schinken setzen.",
      "Mit Schnittlauch bestreuen und sofort servieren."
    ]
  },

  {
    name: "Himbeertorte",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "4 Eier",
      "150 g Zucker",
      "150 g Mehl",
      "1 TL Backpulver",
      "400 g frische Himbeeren",
      "400 ml Schlagsahne",
      "2 Päckchen Vanillezucker",
      "Gelatine"
    ],
    zubereitung: [
      "Eier und Zucker schaumig schlagen. Mehl und Backpulver unterheben. Biskuitboden backen.",
      "Sahne mit Vanillezucker steif schlagen. Gelatine einarbeiten.",
      "Boden teilen. Erste Schicht mit Sahne und Himbeeren belegen.",
      "Zweiten Boden auflegen. Kuchen komplett mit Sahne einstreichen.",
      "Himbeeren obenauf dekorieren. Mindestens 2 Stunden kalt stellen."
    ]
  },

  {
    name: "Schwarzwälder Kirschtorte",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "4 Eier",
      "150 g Zucker",
      "100 g Mehl",
      "50 g Kakao",
      "1 TL Backpulver",
      "600 ml Schlagsahne",
      "1 Glas Sauerkirschen",
      "Kirschwasser",
      "Zartbitterschokoladenraspeln"
    ],
    zubereitung: [
      "Biskuit mit Mehl, Kakao, Eiern, Zucker und Backpulver backen. Auskühlen und zweimal teilen.",
      "Kirschen abtropfen lassen, Saft auffangen. Saft mit Kirschwasser mischen.",
      "Böden mit Kirschsaft tränken.",
      "Sahne steif schlagen. Zwischen die Böden Sahne und Kirschen geben.",
      "Außen mit Sahne einstreichen. Mit Schokoladenraspeln bestreuen."
    ]
  },

  {
    name: "Bienenstich",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "300 g Mehl",
      "1 Würfel Hefe",
      "150 ml Milch",
      "50 g Butter",
      "50 g Zucker",
      "1 Ei",
      "100 g Butter (für den Belag)",
      "100 g Zucker",
      "100 g Mandelblättchen",
      "3 EL Sahne",
      "500 ml Vanillecreme"
    ],
    zubereitung: [
      "Hefeteig aus Mehl, Hefe, Milch, Butter, Zucker und Ei kneten. Gehen lassen.",
      "Für den Belag Butter, Zucker, Sahne und Mandeln aufkochen. Abkühlen lassen.",
      "Teig auf Backblech ausrollen. Mandelbelag darauf verteilen.",
      "Nochmals gehen lassen. Bei 180 °C ca. 20 Minuten backen.",
      "Auskühlen lassen, mittig teilen. Vanillecreme einfüllen und wieder zusammensetzen."
    ]
  },

  {
    name: "Apfelkuchen vom Blech",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "200 g Butter",
      "200 g Zucker",
      "4 Eier",
      "300 g Mehl",
      "1 Päckchen Backpulver",
      "6 Äpfel, geschält und in Scheiben",
      "Zimt und Zucker",
      "Puderzucker zum Bestäuben"
    ],
    zubereitung: [
      "Butter und Zucker cremig schlagen. Eier einzeln einrühren.",
      "Mehl und Backpulver unterrühren.",
      "Teig auf ein gefettetes Blech streichen.",
      "Apfelscheiben darauflegen und leicht andrücken.",
      "Mit Zimt-Zucker bestreuen.",
      "Bei 180 °C ca. 35 Minuten backen. Mit Puderzucker bestäuben."
    ]
  },

  {
    name: "Käsekuchen",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "200 g Mehl",
      "100 g Butter",
      "75 g Zucker",
      "1 Ei",
      "1 kg Quark (Magerquark)",
      "200 g Zucker",
      "4 Eier",
      "1 Päckchen Vanillepuddingpulver",
      "200 ml Milch",
      "Saft und Schale einer Zitrone"
    ],
    zubereitung: [
      "Aus Mehl, Butter, Zucker und Ei einen Mürbteig kneten. Als Boden und Rand in die Springform drücken. Kühl stellen.",
      "Quark, Zucker, Eier, Puddingpulver, Milch und Zitrone glatt rühren.",
      "Quarkmasse in die Form füllen.",
      "Bei 175 °C ca. 60 Minuten backen. Im Ofen auskühlen lassen (kein Riss).",
      "Mindestens 2 Stunden kalt stellen vor dem Servieren."
    ]
  },

  {
    name: "Pflaumenkuchen",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "300 g Mehl",
      "1 Würfel Hefe",
      "100 ml Milch",
      "50 g Butter",
      "50 g Zucker",
      "1 Prise Salz",
      "1 kg Pflaumen, entsteint und halbiert",
      "Zimt-Zucker",
      "Streusel (optional)"
    ],
    zubereitung: [
      "Hefeteig kneten und gehen lassen.",
      "Auf einem Backblech ausrollen.",
      "Pflaumen dachziegelartig darauflegen.",
      "Mit Zimtzucker bestreuen.",
      "Bei 190 °C ca. 25 Minuten backen."
    ]
  },

  {
    name: "Streuselkuchen",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "300 g Mehl (Teig)",
      "1 Würfel Hefe",
      "100 ml Milch",
      "50 g Butter",
      "30 g Zucker",
      "200 g Mehl (Streusel)",
      "150 g Butter (Streusel)",
      "150 g Zucker (Streusel)"
    ],
    zubereitung: [
      "Hefeteig zubereiten und gehen lassen.",
      "Für Streusel Mehl, Butter und Zucker mit den Händen zu Krümeln verreiben.",
      "Teig auf dem Backblech ausrollen. Mit Streusel bedecken.",
      "Nochmals 15 Minuten gehen lassen.",
      "Bei 180 °C ca. 25 Minuten backen bis goldbraun."
    ]
  },

  {
    name: "Berliner (Pfannkuchen)",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Mehl",
      "1 Würfel Hefe",
      "200 ml warme Milch",
      "60 g Zucker",
      "80 g Butter",
      "2 Eier",
      "1 Prise Salz",
      "Öl zum Frittieren",
      "Himbeer- oder Pflaumenmarmelade",
      "Puderzucker"
    ],
    zubereitung: [
      "Hefeteig aus allen Zutaten kneten. 1 Stunde gehen lassen.",
      "Kleine Kugeln formen. Nochmals 20 Minuten gehen lassen.",
      "In Öl bei 170 °C von beiden Seiten goldgelb frittieren.",
      "Auskühlen lassen. Marmelade mit einem Spritzbeutel einfüllen.",
      "Mit Puderzucker bestäuben."
    ]
  },

  {
    name: "Dampfnudeln",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Mehl",
      "1 Würfel Hefe",
      "200 ml Milch",
      "50 g Zucker",
      "50 g Butter",
      "2 Eier",
      "1 Prise Salz",
      "250 ml Milch (zum Dämpfen)",
      "50 g Butter (zum Dämpfen)",
      "1 Prise Salz (zum Dämpfen)",
      "Vanillesauce"
    ],
    zubereitung: [
      "Hefeteig kneten. 1 Stunde gehen lassen.",
      "Gleichmäßige Kugeln formen. Nochmals 20 Minuten gehen lassen.",
      "In einem breiten Topf Milch, Butter und Salz erhitzen. Dampfnudeln hineinsetzen.",
      "Zugedeckt bei mittlerer Hitze ca. 20 Minuten garen — kein Deckel öffnen!",
      "Es entsteht eine goldbraune Kruste. Mit Vanillesauce servieren."
    ]
  },

  {
    name: "Rote Grütze",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "500 g gemischte rote Beeren (Erdbeeren, Himbeeren, Kirschen, Johannisbeeren)",
      "400 ml Beerensaft oder Rotwein",
      "50 g Zucker",
      "3 EL Speisestärke",
      "Vanillesauce oder Sahne"
    ],
    zubereitung: [
      "Beeren waschen und verlesen. Große Früchte halbieren.",
      "Saft und Zucker aufkochen.",
      "Stärke mit etwas kaltem Wasser glatt rühren. In den heißen Saft einrühren und kurz aufkochen.",
      "Beeren einrühren und vom Herd nehmen.",
      "In Schüsseln füllen und auskühlen lassen. Mit Vanillesauce oder Sahne servieren."
    ]
  },

  {
    name: "Grießpudding",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "1 l Milch",
      "100 g Grieß",
      "50 g Zucker",
      "1 Päckchen Vanillezucker",
      "1 Prise Salz",
      "Butter",
      "Zimt und Zucker zum Servieren"
    ],
    zubereitung: [
      "Milch mit Zucker, Vanillezucker und Salz aufkochen.",
      "Grieß unter Rühren einstreuen.",
      "Bei niedriger Hitze ca. 5 Minuten quellen lassen, dabei rühren.",
      "Butter einrühren.",
      "Warm oder kalt servieren, mit Zimt-Zucker oder Beerenkompott."
    ]
  },

  {
    name: "Lebkuchen",
    kategorie: "Gebäck",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Honig",
      "200 g Zucker",
      "100 g Butter",
      "800 g Mehl",
      "2 Eier",
      "2 TL Lebkuchengewürz",
      "1 TL Natron",
      "Zuckerguss und Dekoration"
    ],
    zubereitung: [
      "Honig, Zucker und Butter erwärmen bis alles aufgelöst ist. Abkühlen lassen.",
      "Eier unterrühren. Mehl, Gewürze und Natron einarbeiten.",
      "Teig in Folie wickeln und über Nacht kalt stellen.",
      "Dünn ausrollen, ausstechen und bei 180 °C ca. 10 Minuten backen.",
      "Auskühlen lassen und mit Zuckerguss verzieren."
    ]
  },

  {
    name: "Zimtsterne",
    kategorie: "Gebäck",
    herkunft: "Deutschland",
    zutaten: [
      "3 Eiweiß",
      "250 g Puderzucker",
      "2 TL Zimt",
      "350 g gemahlene Mandeln",
      "Eiweiß-Glasur (aus 2 Eiweiß + Puderzucker)"
    ],
    zubereitung: [
      "Eiweiß steif schlagen. Puderzucker einrieseln lassen. 3 EL für die Glasur abnehmen.",
      "Zimt und Mandeln unter den Rest heben.",
      "Masse ca. 5 mm dick ausrollen. Sterne ausstechen.",
      "Mit Eiweißglasur bestreichen.",
      "Bei 150 °C ca. 15 Minuten backen. Die Glasur soll weiß bleiben."
    ]
  },

  {
    name: "Stollen",
    kategorie: "Gebäck",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Mehl",
      "1 Würfel Hefe",
      "200 ml warme Milch",
      "150 g Butter",
      "100 g Zucker",
      "200 g Rosinen",
      "100 g Zitronat/Orangeat",
      "100 g Mandeln",
      "Rum",
      "Nelken, Kardamom, Zimt",
      "Puderzucker und Butter zum Fertigstellen"
    ],
    zubereitung: [
      "Rosinen in Rum einweichen.",
      "Hefeteig zubereiten. Früchte, Mandeln und Gewürze einarbeiten.",
      "Zu einer ovalen Form formen. 1 Stunde gehen lassen.",
      "Bei 175 °C ca. 60 Minuten backen.",
      "Noch heiß mit geschmolzener Butter bestreichen und dick mit Puderzucker bestäuben.",
      "Mindestens 2 Wochen reifen lassen."
    ]
  },

  {
    name: "Bayerische Creme",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "500 ml Milch",
      "4 Eigelb",
      "100 g Zucker",
      "1 Päckchen Vanillezucker",
      "4 Blatt Gelatine",
      "300 ml Schlagsahne"
    ],
    zubereitung: [
      "Gelatine in kaltem Wasser einweichen.",
      "Eigelb und Zucker schaumig schlagen. Heiße Milch einrühren und im Wasserbad zu einer cremigen Masse rühren.",
      "Gelatine ausdrücken und einrühren. Abkühlen lassen.",
      "Sobald die Masse beginnt zu gelieren, steif geschlagene Sahne unterheben.",
      "In Förmchen füllen und mindestens 4 Stunden kalt stellen.",
      "Stürzen und mit Fruchtsoße servieren."
    ]
  },

  {
    name: "Hefezopf",
    kategorie: "Gebäck",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Mehl",
      "1 Würfel Hefe",
      "200 ml warme Milch",
      "80 g Butter",
      "60 g Zucker",
      "2 Eier",
      "1 Prise Salz",
      "Eigelb zum Bestreichen",
      "Hagelzucker"
    ],
    zubereitung: [
      "Hefeteig aus allen Zutaten kneten. 1 Stunde gehen lassen.",
      "In drei gleiche Stränge teilen und zu einem Zopf flechten.",
      "Auf einem Backblech nochmals 20 Minuten gehen lassen.",
      "Mit Eigelb bestreichen, mit Hagelzucker bestreuen.",
      "Bei 180 °C ca. 30 Minuten backen."
    ]
  },

  {
    name: "Baumkuchen",
    kategorie: "Gebäck",
    herkunft: "Deutschland",
    zutaten: [
      "250 g Butter",
      "200 g Zucker",
      "6 Eier",
      "200 g Mehl",
      "50 g Speisestärke",
      "1 TL Backpulver",
      "1 Prise Salz",
      "Rum oder Vanille"
    ],
    zubereitung: [
      "Butter und Zucker schaumig rühren. Eigelb einzeln einrühren.",
      "Mehl, Stärke und Backpulver sieben und einarbeiten.",
      "Eiweiß steif schlagen und unterheben.",
      "Immer wieder dünne Schichten in eine Springform geben und unter dem Grill backen bis goldbraun.",
      "Diesen Vorgang ca. 10–15 Mal wiederholen.",
      "Auskühlen lassen. Mit Schokolade überziehen."
    ]
  },

  {
    name: "Quarkkeulchen",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Quark",
      "500 g Kartoffeln (gekocht, gerieben)",
      "2 Eier",
      "100 g Mehl",
      "50 g Zucker",
      "1 Prise Salz",
      "Öl zum Braten",
      "Zimt-Zucker"
    ],
    zubereitung: [
      "Quark gut abtropfen lassen. Mit Kartoffeln, Eiern, Mehl, Zucker und Salz vermischen.",
      "Zu kleinen flachen Küchlein formen.",
      "Im heißen Öl von beiden Seiten goldbraun braten.",
      "Mit Zimt-Zucker oder Apfelmus servieren."
    ]
  },

  {
    name: "Kartoffelpuffer mit Lachs",
    kategorie: "Vorspeise",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Kartoffeln",
      "1 Ei",
      "2 EL Mehl",
      "Salz, Pfeffer",
      "Öl zum Braten",
      "150 g Räucherlachs",
      "150 g Saure Sahne",
      "Dill"
    ],
    zubereitung: [
      "Kartoffeln reiben, ausdrücken. Mit Ei und Mehl mischen. Würzen.",
      "Kleine Puffer im Öl knusprig braten.",
      "Mit saurer Sahne, Räucherlachs und Dill servieren."
    ]
  },

  {
    name: "Laugenbrezel",
    kategorie: "Gebäck",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Mehl",
      "1 Würfel Hefe",
      "300 ml Wasser",
      "10 g Salz",
      "30 g Butter",
      "Natronlauge (3 % Lösung)",
      "Grobes Salz"
    ],
    zubereitung: [
      "Hefeteig aus Mehl, Hefe, Wasser, Salz und Butter kneten. 30 Minuten gehen lassen.",
      "Lange Stränge rollen und zu Brezeln formen.",
      "30 Minuten einfrieren (für bessere Form).",
      "Kurz durch Natronlauge ziehen (Schutzhandschuhe tragen!).",
      "Mit Salz bestreuen. Bei 220 °C ca. 15 Minuten backen."
    ]
  },

  {
    name: "Dresdner Eierschecke",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "Hefeteig (Grundrezept)",
      "500 g Quark",
      "3 Eier",
      "100 g Zucker",
      "1 Päckchen Vanillezucker",
      "50 g Butter",
      "Pudding (Vanille)",
      "3 Eigelb",
      "3 Eiweiß"
    ],
    zubereitung: [
      "Hefeteig auf Blech ausrollen und gehen lassen.",
      "Quark, Zucker, Vanillezucker, Eigelb und Butter verrühren. Auf den Teig streichen.",
      "Pudding zubereiten und darüber verteilen.",
      "Eiweiß steif schlagen und obenauf verteilen.",
      "Bei 175 °C ca. 40 Minuten backen."
    ]
  },

  {
    name: "Sächsischer Quarkstollen",
    kategorie: "Gebäck",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Mehl",
      "250 g Quark",
      "150 g Butter",
      "150 g Zucker",
      "2 Eier",
      "1 Päckchen Backpulver",
      "200 g Rosinen",
      "100 g Zitronat",
      "Butter und Puderzucker"
    ],
    zubereitung: [
      "Alle Zutaten zu einem weichen Teig vermengen.",
      "Zu einer Stollenform formen.",
      "Bei 175 °C ca. 45 Minuten backen.",
      "Heiß mit Butter bestreichen und mit Puderzucker bestäuben."
    ]
  },

  {
    name: "Bauernfrühstück",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "600 g Bratkartoffeln (vom Vortag)",
      "150 g Speckwürfel",
      "4 Eier",
      "2 EL Butter",
      "Salz und Pfeffer",
      "Schnittlauch"
    ],
    zubereitung: [
      "Speck in einer großen Pfanne knusprig braten.",
      "Bratkartoffeln dazugeben und mitbraten.",
      "Eier verquirlen, würzen und in die Pfanne geben.",
      "Alles verrühren bis die Eier gestockt sind.",
      "Mit Schnittlauch bestreuen. Sofort servieren."
    ]
  },

  {
    name: "Bratkartoffeln",
    kategorie: "Beilage",
    herkunft: "Deutschland",
    zutaten: [
      "800 g festkochende Kartoffeln",
      "2 Zwiebeln",
      "100 g Speckwürfel",
      "3 EL Schmalz oder Öl",
      "Salz und Pfeffer",
      "Majoran",
      "Petersilie"
    ],
    zubereitung: [
      "Kartoffeln in der Schale kochen, pellen und in Scheiben schneiden (am besten vom Vortag).",
      "Schmalz erhitzen. Speck knusprig braten. Herausnehmen.",
      "Kartoffelscheiben im Fett goldbraun braten — nicht zu viel rühren!",
      "Zwiebeln dazugeben und mitbraten.",
      "Speck zurück in die Pfanne. Mit Salz, Pfeffer und Majoran würzen.",
      "Mit Petersilie bestreuen."
    ]
  },

  {
    name: "Sülze",
    kategorie: "Vorspeise",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Schweinefleisch (Schulter, Haxe)",
      "Suppengemüse",
      "Gelatine",
      "Essig, Zucker",
      "Lorbeer, Pfefferkörner",
      "Gewürzgurken",
      "Salz"
    ],
    zubereitung: [
      "Fleisch mit Gemüse und Gewürzen weich kochen. Auskühlen lassen.",
      "Fleisch in kleine Stücke zupfen. Gurken würfeln.",
      "Brühe abmessen, mit Gelatine, Essig und Zucker abschmecken.",
      "Fleisch und Gurken in eine Form geben, Brühe darübergießen.",
      "Kalt stellen bis die Sülze fest ist. In Scheiben schneiden."
    ]
  },

  {
    name: "Dicke Bohnen mit Speck",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg dicke Bohnen (Saubohnen), enthülst",
      "200 g Bauchspeck",
      "1 Bund Bohnenkraut",
      "1 Zwiebel",
      "2 EL Butter",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Bohnen in Salzwasser mit Bohnenkraut ca. 20 Minuten kochen. Abgießen.",
      "Speck und Zwiebeln im Butter anbraten.",
      "Bohnen dazugeben und kurz mitbraten.",
      "Mit Salz und Pfeffer abschmecken. Mit Brot servieren."
    ]
  },

  {
    name: "Gebratene Gans",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1 Gans (ca. 4 kg)",
      "Äpfel, Maronen, Zwiebeln (Füllung)",
      "Majoran, Salz, Pfeffer",
      "500 ml Geflügelfond",
      "200 ml Rotwein"
    ],
    zubereitung: [
      "Gans waschen und trocken tupfen. Innen würzen.",
      "Mit Äpfeln, Maronen und Zwiebeln füllen.",
      "Äußerlich mit Salz, Pfeffer und Majoran einreiben.",
      "Auf einem Rost bei 160 °C ca. 3–4 Stunden braten. Mit Fond begießen.",
      "Gelegentlich das Fett abschöpfen. Sauce aus dem Bratensatz herstellen."
    ]
  },

  {
    name: "Putenbrust mit Kräuterkruste",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "800 g Putenbrust",
      "2 EL Senf",
      "4 EL Semmelbrösel",
      "Thymian, Rosmarin, Petersilie",
      "2 EL Olivenöl",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Putenbrust mit Salz und Pfeffer würzen. Mit Senf einreiben.",
      "Kräuter, Semmelbrösel und Öl mischen. Auf die Putenbrust drücken.",
      "Bei 180 °C im Ofen ca. 40 Minuten braten.",
      "Kurz ruhen lassen. In Scheiben schneiden."
    ]
  },

  {
    name: "Markklößchensuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "100 g Knochenmark",
      "2 Eier",
      "3 EL Semmelbrösel",
      "Salz, Pfeffer, Muskat",
      "1 l Rinderbrühe",
      "Schnittlauch"
    ],
    zubereitung: [
      "Mark aus dem Knochen lösen und erwärmen bis er weich ist.",
      "Mit Eiern, Semmelbröseln und Gewürzen zu einer festen Masse rühren.",
      "Kleine Klößchen formen. In leicht siedender Brühe 10 Minuten gar ziehen lassen.",
      "In der Brühe servieren, mit Schnittlauch garnieren."
    ]
  },

  {
    name: "Milchreis",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "200 g Milchreis (Rundkornreis)",
      "1 l Milch",
      "50 g Zucker",
      "1 Prise Salz",
      "1 Päckchen Vanillezucker",
      "Zimt-Zucker",
      "Kirschkompott"
    ],
    zubereitung: [
      "Milch mit Salz aufkochen. Reis einrühren.",
      "Bei niedrigster Hitze unter gelegentlichem Rühren ca. 30 Minuten quellen lassen.",
      "Zucker und Vanillezucker einrühren.",
      "Mit Zimt-Zucker bestreuen. Mit Kirschkompott servieren."
    ]
  },

  {
    name: "Scholle nach Finkenwerder Art",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "2 Schollen, küchenfertig",
      "150 g Nordseekrabben",
      "100 g Speckwürfel",
      "Mehl",
      "100 g Butter",
      "Petersilie",
      "Salz und Pfeffer",
      "Zitrone"
    ],
    zubereitung: [
      "Schollen in Mehl wenden, salzen und pfeffern.",
      "Butter erhitzen. Schollen von jeder Seite ca. 5 Minuten braten.",
      "Speckwürfel knusprig braten. Krabben kurz erwärmen.",
      "Schollen auf Tellern anrichten. Speck und Krabben darüber verteilen.",
      "Mit Petersilie und Zitrone servieren."
    ]
  },


  // ── BATCH 2: Österreichische Küche (101–200) ───────────────────────────────

  {
    name: "Wiener Schnitzel",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "4 Kalbsschnitzel (je ca. 150 g)",
      "2 Eier",
      "150 g Semmelbrösel",
      "100 g Mehl",
      "200 ml Pflanzenöl",
      "Salz und Pfeffer",
      "1 Zitrone"
    ],
    zubereitung: [
      "Die Schnitzel zwischen Frischhaltefolie legen und gleichmäßig dünn klopfen.",
      "Mit Salz und Pfeffer würzen.",
      "Mehl, verquirlte Eier und Semmelbrösel jeweils in flache Teller geben.",
      "Die Schnitzel nacheinander in Mehl, Ei und Semmelbröseln wenden — nicht andrücken, damit die Panade locker bleibt.",
      "Öl in einer großen Pfanne erhitzen (ca. 170 °C). Schnitzel goldbraun ausbacken — ca. 2–3 Minuten pro Seite.",
      "Auf Küchenpapier abtropfen lassen und sofort mit Zitronenspalten und Preiselbeeren servieren."
    ]
  },

  {
    name: "Tafelspitz",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "1,2 kg Tafelspitz (Rind)",
      "Suppengemüse (Karotten, Sellerie, Lauch, Petersilienwurzel)",
      "1 Zwiebel (halbiert, angeröstet)",
      "Lorbeer, Pfefferkörner",
      "Salz",
      "Meerrettich",
      "Apfelkren",
      "Röstkartoffeln"
    ],
    zubereitung: [
      "Wasser aufkochen. Zwiebelhälften in der Pfanne ohne Fett dunkel anrösten.",
      "Fleisch ins kochende Wasser geben. Zwiebeln, Gemüse und Gewürze dazugeben.",
      "Bei schwacher Hitze ca. 2,5 Stunden sieden lassen — nicht kochen.",
      "Fleisch herausnehmen, kurz ruhen lassen. Brühe durch ein Sieb passieren.",
      "Fleisch quer zur Faser in Scheiben schneiden. Mit Brühe, Meerrettich, Apfelkren und Röstkartoffeln servieren."
    ]
  },

  {
    name: "Gulasch",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "800 g Rindfleisch (Schulter), in Würfeln",
      "500 g Zwiebeln, in Ringe geschnitten",
      "3 EL Schweineschmalz",
      "3 EL Paprikapulver (edelsüß)",
      "1 EL Paprikapulver (scharf)",
      "1 TL Kümmel",
      "1 EL Tomatenmark",
      "500 ml Rinderfond",
      "Majoran",
      "Salz und Pfeffer",
      "Knoblauch"
    ],
    zubereitung: [
      "Schmalz erhitzen. Zwiebeln langsam goldbraun braten — das ist die Basis des Geschmacks.",
      "Fleisch dazugeben und kurz mitbraten.",
      "Tomatenmark einrühren. Paprika, Kümmel und Majoran dazugeben.",
      "Mit Fond aufgießen. Bei niedriger Hitze ca. 2 Stunden köcheln lassen.",
      "Das Fleisch soll weich sein, die Sauce soll von allein binden.",
      "Mit Salz und Pfeffer abschmecken. Mit Semmel oder Nockerln servieren."
    ]
  },

  {
    name: "Kaiserschmarrn",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "4 Eier",
      "250 ml Milch",
      "1 Prise Salz",
      "200 g Mehl",
      "40 g Zucker",
      "50 g Butter",
      "50 g Rosinen (in Rum eingeweicht)",
      "Puderzucker",
      "Zwetschkenröster oder Preiselbeeren"
    ],
    zubereitung: [
      "Eigelb, Milch, Salz, Mehl und Zucker zu einem glatten Teig rühren.",
      "Eiweiß steif schlagen und unterheben.",
      "Butter in einer großen Pfanne erhitzen. Teig hineingeben, Rosinen darüberstreuen.",
      "Bei mittlerer Hitze ca. 5 Minuten backen bis die Unterseite goldbraun ist.",
      "Wenden (evtl. in Stücke teilen). Fertig backen.",
      "Mit zwei Gabeln in unregelmäßige Stücke reißen. Mit Puderzucker bestäuben.",
      "Mit Zwetschkenröster oder Preiselbeeren servieren."
    ]
  },

  {
    name: "Apfelstrudel",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "300 g Mehl",
      "1 Ei",
      "150 ml lauwarmes Wasser",
      "1 EL Öl",
      "1 Prise Salz",
      "1 kg Äpfel, geschält und in Scheiben",
      "100 g Zucker",
      "100 g Rosinen",
      "80 g Semmelbrösel (geröstet in Butter)",
      "Zimt",
      "Puderzucker"
    ],
    zubereitung: [
      "Aus Mehl, Ei, Wasser, Öl und Salz einen glatten Teig kneten. In Öl einwickeln, 30 Minuten ruhen lassen.",
      "Äpfel mit Zucker, Rosinen und Zimt mischen.",
      "Teig auf einem bemehlten Tuch hauchdünn ausziehen.",
      "Geröstete Brösel aufstreuen. Apfelmasse darauf verteilen (nicht ganz bis zum Rand).",
      "Mit Hilfe des Tuchs aufrollen. Auf ein gefettetes Blech legen.",
      "Mit Butter bestreichen. Bei 190 °C ca. 35 Minuten goldbraun backen.",
      "Warm mit Puderzucker bestäubt und Schlagobers servieren."
    ]
  },

  {
    name: "Zwiebelrostbraten",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "4 Scheiben Rostbraten (Rindslende, je ca. 180 g)",
      "3 Zwiebeln, in Ringe geschnitten",
      "3 EL Butterschmalz",
      "100 ml Rinderfond",
      "Salz, Pfeffer",
      "Petersilie"
    ],
    zubereitung: [
      "Zwiebeln im Butterschmalz langsam goldbraun und knusprig braten. Herausnehmen.",
      "Fleisch am Rand einschneiden (damit es sich nicht wölbt). Mit Salz und Pfeffer würzen.",
      "Im gleichen Fett von jeder Seite 2–3 Minuten scharf braten.",
      "Mit Fond ablöschen. Sauce kurz einkochen lassen.",
      "Fleisch auf Tellern anrichten. Zwiebelringe darüber häufen.",
      "Mit Bratkartoffeln und grünem Salat servieren."
    ]
  },

  {
    name: "Erdäpfelgulasch",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "800 g Kartoffeln, gewürfelt",
      "3 Zwiebeln, gewürfelt",
      "2 EL Schmalz",
      "2 EL Paprikapulver",
      "1 EL Tomatenmark",
      "700 ml Gemüsebrühe",
      "Majoran, Kümmel",
      "Salz und Pfeffer",
      "Wurst nach Wahl"
    ],
    zubereitung: [
      "Zwiebeln im Schmalz goldbraun braten.",
      "Tomatenmark und Paprikapulver einrühren, kurz anrösten.",
      "Kartoffeln dazugeben. Mit Brühe aufgießen.",
      "Mit Majoran, Kümmel, Salz und Pfeffer würzen.",
      "Ca. 25 Minuten köcheln lassen bis Kartoffeln weich sind.",
      "Etwas zerdrücken für Bindung. Mit Würstchen servieren."
    ]
  },

  {
    name: "Palatschinken",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "3 Eier",
      "250 ml Milch",
      "150 g Mehl",
      "1 Prise Salz",
      "Butter zum Braten",
      "Marillenmarmelade",
      "Puderzucker"
    ],
    zubereitung: [
      "Eier, Milch, Mehl und Salz zu einem glatten Teig rühren. 20 Minuten quellen lassen.",
      "Butter in einer beschichteten Pfanne erhitzen.",
      "Dünne Palatschinken von beiden Seiten backen.",
      "Mit Marillenmarmelade bestreichen, zusammenrollen.",
      "Mit Puderzucker bestäuben und servieren."
    ]
  },

  {
    name: "Semmelknödel mit Schwammerlrahmsoße",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "Semmelknödel (Grundrezept)",
      "300 g gemischte Pilze",
      "1 Zwiebel",
      "200 ml Schlagobers (Sahne)",
      "100 ml Weißwein",
      "1 EL Butter",
      "Petersilie",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Semmelknödel wie gewohnt zubereiten.",
      "Pilze putzen und in Scheiben schneiden. Zwiebeln fein würfeln.",
      "Butter erhitzen. Zwiebeln glasig dünsten. Pilze kräftig anbraten.",
      "Mit Weißwein ablöschen. Sahne angießen und einköcheln lassen.",
      "Mit Salz, Pfeffer und Petersilie abschmecken.",
      "Knödel in der Sauce anrichten."
    ]
  },

  {
    name: "Topfenstrudel",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "Strudelteig (selbst gemacht oder fertig)",
      "500 g Topfen (Quark)",
      "3 Eier",
      "100 g Zucker",
      "Schale einer Zitrone",
      "100 g Rosinen",
      "Butter",
      "Puderzucker"
    ],
    zubereitung: [
      "Topfen, Eigelb, Zucker und Zitronenschale glatt rühren.",
      "Eiweiß steif schlagen und unterheben. Rosinen dazugeben.",
      "Strudelteig ausziehen. Mit Butter bestreichen.",
      "Topfenmasse auftragen, aufrollen.",
      "Bei 190 °C ca. 35 Minuten backen. Mit Puderzucker servieren."
    ]
  },

  {
    name: "Marillenknödel",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "500 g Topfen",
      "200 g Mehl",
      "2 Eier",
      "50 g Butter",
      "1 Prise Salz",
      "8 kleine Marillen (Aprikosen) — Kern entfernen",
      "8 Würfelzucker",
      "Butter, Semmelbrösel, Zucker, Zimt"
    ],
    zubereitung: [
      "Topfen gut abtropfen lassen. Mit Mehl, Eiern, Butter und Salz zu einem Teig verkneten.",
      "Je einen Würfelzucker in eine Marille stecken.",
      "Teig in kleine Portionen teilen, jede um eine Marille formen.",
      "In kochendem Salzwasser 12–15 Minuten garen.",
      "Butter erhitzen, Brösel darin goldbraun rösten. Zimt und Zucker einrühren.",
      "Knödel in den Bröseln wenden. Warm servieren."
    ]
  },

  {
    name: "Wiener Gulasch",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "800 g Rindfleisch (Schulter), gewürfelt",
      "600 g Zwiebeln",
      "4 EL Schmalz",
      "3 EL Paprikapulver",
      "1 EL Essig",
      "1 TL Kümmel",
      "Lorbeer, Majoran",
      "500 ml Fond",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Zwiebeln fein hacken und im Schmalz sehr dunkel anrösten.",
      "Paprika einrühren, sofort mit Essig und Fond ablöschen.",
      "Fleisch dazugeben. Gewürze einrühren.",
      "Bei schwacher Hitze ca. 2 Stunden schmoren. Nicht rühren, nur gelegentlich schütteln.",
      "Die Sauce bindet durch die Zwiebeln und das Fleisch ganz von selbst.",
      "Mit Semmel und Gürkchen servieren."
    ]
  },

  {
    name: "Salzburger Nockerl",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "6 Eiweiß",
      "6 EL Zucker",
      "3 Eigelb",
      "1 EL Mehl",
      "1 Päckchen Vanillezucker",
      "Butter für die Form",
      "Puderzucker"
    ],
    zubereitung: [
      "Backofen auf 220 °C vorheizen.",
      "Eiweiß mit Zucker und Vanillezucker steif schlagen.",
      "Eigelb und Mehl vorsichtig unterheben.",
      "Butter in einer ovalen Auflaufform schmelzen.",
      "Masse in drei großen Nocken in die Form geben.",
      "Im Ofen ca. 8 Minuten backen — innen noch weich.",
      "Sofort mit Puderzucker bestäubt servieren — sie fallen schnell zusammen."
    ]
  },

  {
    name: "Sachertorte",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "130 g Butter",
      "110 g Zucker",
      "130 g Zartbitterschokolade",
      "6 Eier",
      "130 g Mehl",
      "1 TL Backpulver",
      "Marillenmarmelade (Aprikosenmarmelade)",
      "200 g Zartbitterkuvertüre",
      "100 ml Sahne"
    ],
    zubereitung: [
      "Schokolade schmelzen. Butter schaumig rühren. Zucker einrühren. Eigelb einzeln einarbeiten.",
      "Schokolade unterrühren. Eiweiß steif schlagen.",
      "Mehl und Eiweiß abwechselnd unterheben.",
      "Bei 170 °C ca. 55 Minuten backen. Auskühlen lassen, halbieren.",
      "Innenlage mit Marmelade bestreichen. Außen komplett mit Marmelade einstreichen.",
      "Kuvertüre mit Sahne schmelzen und als Spiegel über die Torte gießen. Erstarren lassen."
    ]
  },

  {
    name: "Vanillekipferl",
    kategorie: "Gebäck",
    herkunft: "Österreich",
    zutaten: [
      "250 g Mehl",
      "200 g Butter",
      "80 g gemahlene Mandeln oder Walnüsse",
      "70 g Puderzucker",
      "1 Päckchen Vanillezucker",
      "Puderzucker und Vanillezucker zum Wälzen"
    ],
    zubereitung: [
      "Alle Zutaten rasch zu einem glatten Teig verkneten. 30 Minuten kalt stellen.",
      "Kleine Rollen formen und zu Kipferln biegen.",
      "Bei 170 °C ca. 12 Minuten backen — hellgelb, nicht braun.",
      "Noch warm in Vanillezucker-Puderzucker-Gemisch wälzen.",
      "Auskühlen lassen und nochmals in Puderzucker tauchen."
    ]
  },

  {
    name: "Linzer Torte",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "200 g Butter",
      "200 g Zucker",
      "2 Eier",
      "250 g gemahlene Haselnüsse",
      "200 g Mehl",
      "1 TL Zimt",
      "1 Prise Nelkenpulver",
      "200 g Ribiselmarmelade (rote Johannisbeere)"
    ],
    zubereitung: [
      "Butter und Zucker cremig rühren. Eier einrühren.",
      "Haselnüsse, Mehl und Gewürze unterkneten.",
      "2/3 des Teigs in eine gefettete Form drücken. Marmelade darauf verteilen.",
      "Rest Teig zu Streifen formen und als Gitter darüberlegen.",
      "Bei 175 °C ca. 40 Minuten backen."
    ]
  },

  {
    name: "Buchteln",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "500 g Mehl",
      "1 Würfel Hefe",
      "200 ml Milch",
      "80 g Butter",
      "80 g Zucker",
      "3 Eigelb",
      "Marillenmarmelade",
      "Vanillesauce"
    ],
    zubereitung: [
      "Hefeteig zubereiten. 1 Stunde gehen lassen.",
      "Teig zu gleichmäßigen Kugeln formen. Je eine Mulde eindrücken, Marmelade hineingeben.",
      "Gut verschließen. In eine gebutterte Form setzen — eng aneinandergestellt.",
      "Nochmals 20 Minuten gehen lassen. Mit Butter bestreichen.",
      "Bei 180 °C ca. 30 Minuten backen. Mit Puderzucker und Vanillesauce servieren."
    ]
  },

  {
    name: "Tiroler Gröstl",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "600 g Bratkartoffeln (vom Vortag)",
      "300 g Rindfleisch (Reste) oder Kalbfleisch",
      "1 Zwiebel",
      "3 EL Butterschmalz",
      "Kümmel, Majoran",
      "Salz und Pfeffer",
      "4 Spiegeleier",
      "Schnittlauch"
    ],
    zubereitung: [
      "Zwiebeln im Butterschmalz goldbraun braten.",
      "Fleisch in Würfel schneiden und mitbraten.",
      "Kartoffeln dazugeben und kräftig anbraten bis eine Kruste entsteht.",
      "Mit Kümmel, Majoran, Salz und Pfeffer würzen.",
      "Spiegeleier separat braten und obenauf legen.",
      "Mit Schnittlauch garnieren."
    ]
  },

  {
    name: "Zwetschkenröster",
    kategorie: "Beilage",
    herkunft: "Österreich",
    zutaten: [
      "500 g Zwetschken (Pflaumen), entsteint",
      "50 g Zucker",
      "Saft einer halben Zitrone",
      "1 Stück Zimtstange",
      "2 Gewürznelken"
    ],
    zubereitung: [
      "Zwetschken mit Zucker, Zitronensaft und Gewürzen aufkochen.",
      "Bei mittlerer Hitze 15 Minuten köcheln lassen bis sie weich sind.",
      "Gewürze entfernen. Mit Kaiserschmarrn, Nockerln oder Topfenpalatschinken servieren."
    ]
  },

  {
    name: "Kärntner Kasnudeln",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "300 g Mehl",
      "3 Eier",
      "1 EL Öl",
      "Salz",
      "300 g Topfen",
      "200 g mehlige Kartoffeln (gekocht)",
      "Minze, Schnittlauch",
      "1 Eigelb",
      "Butter und Semmelbrösel"
    ],
    zubereitung: [
      "Nudelteig kneten und ruhen lassen.",
      "Topfen mit gestampften Kartoffeln, Kräutern und Eigelb mischen. Würzen.",
      "Teig dünn ausrollen. Runde Scheiben ausstechen.",
      "Füllung in die Mitte geben, zuklappen und Ränder fest zusammendrücken.",
      "In Salzwasser ca. 12 Minuten kochen.",
      "In Butter schwenken, mit Bröseln bestreuen."
    ]
  },

  {
    name: "Steirisches Wurzelfleisch",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "800 g Schweinefleisch (Schulter)",
      "Suppengemüse",
      "Lorbeer, Pfefferkörner",
      "Kren (Meerrettich), frisch gerieben",
      "Essig",
      "Salz"
    ],
    zubereitung: [
      "Fleisch mit Gemüse und Gewürzen in Salzwasser ca. 90 Minuten weich kochen.",
      "Fleisch herausnehmen und in mundgerechte Stücke schneiden.",
      "Mit frisch geriebenem Meerrettich und einem Spritzer Essig anmachen.",
      "Warm mit Bauernbrot servieren."
    ]
  },

  {
    name: "Österreichische Leberknödelsuppe",
    kategorie: "Suppe",
    herkunft: "Österreich",
    zutaten: [
      "200 g Rinderleber, fein gehackt",
      "3 altbackene Semmeln, eingeweicht",
      "2 Eier",
      "Zwiebel, Petersilie, Majoran",
      "Salz, Pfeffer",
      "1 l Rindsuppe (klare Brühe)"
    ],
    zubereitung: [
      "Semmeln ausdrücken. Mit Leber, Eiern und Gewürzen verkneten.",
      "Knödel formen und in Salzwasser probegaren.",
      "Klare Rindsuppe erhitzen. Knödel darin 15 Minuten ziehen lassen.",
      "In der Suppe servieren, mit Schnittlauch bestreuen."
    ]
  },

  {
    name: "Rindssuppe mit Grießnockerln",
    kategorie: "Suppe",
    herkunft: "Österreich",
    zutaten: [
      "1 l klare Rindssuppe",
      "2 Eier",
      "50 g weiche Butter",
      "80 g Grieß",
      "Salz, Muskat",
      "Schnittlauch"
    ],
    zubereitung: [
      "Butter schaumig rühren. Eier einrühren.",
      "Grieß, Salz und Muskat untermengen. 20 Minuten quellen lassen.",
      "Mit nassen Händen kleine Nockerln formen.",
      "In siedender Suppe 15 Minuten garziehen lassen.",
      "In der Suppe servieren, mit Schnittlauch garnieren."
    ]
  },

  {
    name: "Krautfleckerl",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "300 g Fleckerl (quadratische Nudeln)",
      "500 g Weißkohl, fein gehobelt",
      "2 Zwiebeln",
      "3 EL Schmalz",
      "1 TL Zucker",
      "Kümmel",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Kraut salzen und ziehen lassen. Ausdrücken.",
      "Zucker im Schmalz karamellisieren. Zwiebeln dazugeben.",
      "Kraut einrühren und unter Rühren dunkel braten.",
      "Nudeln al dente kochen.",
      "Kraut und Nudeln vermischen. Mit Kümmel, Salz und Pfeffer würzen."
    ]
  },

  {
    name: "Powidltascherln",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "500 g Kartoffeln, mehlig (gekocht)",
      "150 g Mehl",
      "2 Eier",
      "Salz",
      "Powidl (Pflaumenmus)",
      "Butter, Semmelbrösel, Zucker, Zimt"
    ],
    zubereitung: [
      "Kartoffeln stampfen und auskühlen lassen. Mit Mehl, Eiern und Salz zu einem Teig verkneten.",
      "Teig dünn ausrollen, Kreise ausstechen.",
      "Powidl in die Mitte geben, Ränder fest zusammendrücken.",
      "In Salzwasser 8–10 Minuten kochen.",
      "In Butter schwenken und in Zimt-Zucker-Bröseln wälzen."
    ]
  },

  {
    name: "Faschiertes (Fleischlaibchen)",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "500 g gemischtes Faschiertes",
      "2 Semmeln, eingeweicht",
      "1 Zwiebel",
      "1 Ei",
      "Petersilie, Majoran",
      "Salz, Pfeffer",
      "Öl zum Braten"
    ],
    zubereitung: [
      "Semmeln ausdrücken. Zwiebel fein reiben.",
      "Alles gut vermengen. Laibchen formen.",
      "Im Öl von beiden Seiten goldbraun braten — ca. 5 Minuten pro Seite.",
      "Mit Kartoffelpüree und Gurkensalat servieren."
    ]
  },

  {
    name: "Schinkenfleckerl",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "300 g Fleckerl",
      "200 g gekochter Schinken, gewürfelt",
      "4 Eier",
      "200 ml Sauerrahm",
      "Salz, Pfeffer, Muskat",
      "Butter"
    ],
    zubereitung: [
      "Fleckerl al dente kochen.",
      "Eier mit Sauerrahm verquirlen. Mit Salz, Pfeffer und Muskat würzen.",
      "Nudeln, Schinken und Eiermasse vermischen.",
      "In eine gebutterte Auflaufform füllen.",
      "Bei 180 °C ca. 30 Minuten backen bis goldbraun."
    ]
  },

  {
    name: "Geröstete Knödel",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "4–6 Semmelknödel (vom Vortag)",
      "3 Eier",
      "Salz, Pfeffer",
      "3 EL Butter",
      "Schnittlauch"
    ],
    zubereitung: [
      "Knödel in Scheiben schneiden.",
      "Eier verquirlen, salzen und pfeffern.",
      "Butter erhitzen. Knödelscheiben anbraten.",
      "Eier darübergeben und stocken lassen.",
      "Mit Schnittlauch servieren."
    ]
  },

  {
    name: "Tiroler Speckknödelsuppe",
    kategorie: "Suppe",
    herkunft: "Österreich",
    zutaten: [
      "150 g Tiroler Speck, fein gewürfelt",
      "4 altbackene Semmeln",
      "200 ml Milch",
      "2 Eier",
      "Petersilie, Schnittlauch",
      "Salz, Pfeffer",
      "1 l klare Rindssuppe"
    ],
    zubereitung: [
      "Semmeln würfeln und in Milch einweichen.",
      "Speck leicht anbraten. Eier, Kräuter und Gewürze zur Brötchenmasse geben. Speck dazugeben.",
      "Knödel formen und in Salzwasser 15 Minuten garziehen lassen.",
      "Klare Brühe erhitzen. Knödel in der Suppe servieren."
    ]
  },

  {
    name: "Wiener Kipferl",
    kategorie: "Gebäck",
    herkunft: "Österreich",
    zutaten: [
      "500 g Mehl",
      "250 g Butter",
      "1 Würfel Hefe",
      "150 ml Milch",
      "50 g Zucker",
      "1 Ei",
      "Eigelb zum Bestreichen"
    ],
    zubereitung: [
      "Hefeteig zubereiten. 1 Stunde gehen lassen.",
      "Teig ausrollen, in Dreiecke schneiden.",
      "Von der breiten Seite her aufrollen. Zu Kipferln biegen.",
      "Mit Eigelb bestreichen. Nochmals 20 Minuten gehen lassen.",
      "Bei 190 °C ca. 15 Minuten backen."
    ]
  },

  {
    name: "Einspänner (Wiener Mokka)",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "2 Espresso oder starker Mokka",
      "Schlagobers (Schlagsahne)",
      "Puderzucker"
    ],
    zubereitung: [
      "Mokka in ein Häferl (kleines Henkelglas) gießen.",
      "Sahne steif schlagen und mit Zucker abschmecken.",
      "Großzügig auf dem Kaffee häufen.",
      "Nicht umrühren — durch den Schaum trinken."
    ]
  },

  {
    name: "Topfenpalatschinken",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "Palatschinkenteig",
      "500 g Topfen",
      "2 Eier",
      "80 g Zucker",
      "Schale 1 Zitrone",
      "Rosinen",
      "Butter",
      "Vanillesauce oder Sauerrahm"
    ],
    zubereitung: [
      "Palatschinken backen.",
      "Topfen mit Eiern, Zucker, Zitronenschale und Rosinen verrühren.",
      "Auf jede Palatschinke Topfencreme streichen, aufrollen.",
      "In eine gebutterte Form legen.",
      "Bei 180 °C ca. 20 Minuten backen. Mit Vanillesauce servieren."
    ]
  },

  {
    name: "Gebackene Leber",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "400 g Kalbsleber in Scheiben",
      "Mehl, Ei, Semmelbrösel",
      "Butter",
      "Salz, Pfeffer",
      "Zitrone",
      "Petersilie"
    ],
    zubereitung: [
      "Leber dünn klopfen. Würzen.",
      "In Mehl, Ei und Bröseln wenden.",
      "In heißer Butter goldbraun backen — ca. 2 Minuten pro Seite.",
      "Mit Zitrone und Petersilie garnieren. Mit Erdäpfelsalat servieren."
    ]
  },

  {
    name: "Warmer Erdäpfelsalat",
    kategorie: "Beilage",
    herkunft: "Österreich",
    zutaten: [
      "800 g festkochende Kartoffeln",
      "1 Zwiebel, fein gewürfelt",
      "4 EL Weißweinessig",
      "4 EL Öl",
      "100 ml Rindsuppe",
      "Senf, Salz, Pfeffer, Zucker",
      "Schnittlauch"
    ],
    zubereitung: [
      "Kartoffeln in der Schale kochen. Noch warm pellen und in Scheiben schneiden.",
      "Essig, Öl, Suppe, Senf, Zucker, Salz und Pfeffer zu einem Dressing rühren.",
      "Warme Kartoffeln und Zwiebeln damit übergießen. Gut ziehen lassen.",
      "Mit Schnittlauch bestreuen. Warm oder lauwarm servieren."
    ]
  },

  {
    name: "Gebackener Fisch (Viennese Style)",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "4 Fischfilets (Zander, Dorsch)",
      "Mehl, Ei, Semmelbrösel",
      "Öl zum Frittieren",
      "Zitrone",
      "Salat als Beilage"
    ],
    zubereitung: [
      "Fisch trocken tupfen, würzen.",
      "In Mehl, Ei und Bröseln panieren.",
      "In heißem Öl goldbraun frittieren.",
      "Abtropfen lassen. Mit Zitrone und grünem Salat servieren."
    ]
  },

  {
    name: "Selchfleisch mit Sauerkraut",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "600 g geräuchertes Selchfleisch",
      "500 g Sauerkraut",
      "1 Zwiebel",
      "Kümmel, Lorbeer",
      "Schmalz",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Selchfleisch ca. 60 Minuten in Wasser köcheln.",
      "Sauerkraut mit Zwiebeln, Schmalz, Kümmel und Lorbeer schmoren.",
      "Selchfleisch in Scheiben schneiden.",
      "Zusammen mit Knödeln oder Brot servieren."
    ]
  },

  {
    name: "Weißer Kaffee (Melange)",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "1 Espresso",
      "Heiße Milch",
      "Milchschaum"
    ],
    zubereitung: [
      "Espresso zubereiten.",
      "Milch erhitzen und aufschäumen.",
      "Espresso in eine Tasse füllen. Milch darübergießen.",
      "Mit Milchschaum krönen. So trinkt Wien am Morgen."
    ]
  },

  {
    name: "Steirischer Brettljausn",
    kategorie: "Vorspeise",
    herkunft: "Österreich",
    zutaten: [
      "Verschiedene Aufschnitte (Verhack, Speck, Salami)",
      "Kernöl-Käse",
      "Steirisches Kernöl",
      "Kürbiskerne",
      "Bauernbrot",
      "Gurken, Radieschen",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Alles schön auf einem Holzbrett anrichten.",
      "Käse mit Kernöl beträufeln und mit Kürbiskernen bestreuen.",
      "Frisches Bauernbrot dazureichen.",
      "Mit einem Achterl Wein genießen."
    ]
  },

  {
    name: "Rindsuppe mit Einlage",
    kategorie: "Suppe",
    herkunft: "Österreich",
    zutaten: [
      "1 kg Suppenfleisch (Rind)",
      "Suppengemüse",
      "Lorbeer, Pfefferkörner",
      "Salz",
      "Einlage nach Wahl (Nudeln, Griesnockerln, Leberkäse)"
    ],
    zubereitung: [
      "Suppenfleisch in kaltem Wasser aufsetzen. Aufkochen und Schaum abschöpfen.",
      "Gemüse und Gewürze dazugeben. Bei schwacher Hitze 2 Stunden sieden lassen.",
      "Brühe durch ein feines Sieb passieren.",
      "Mit gewählter Einlage servieren."
    ]
  },

  {
    name: "Gekochtes Rindfleisch mit Schnittlauchsauce",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "600 g gekochtes Rindfleisch (vom Tafelspitz)",
      "1 Bund Schnittlauch",
      "200 g Sauerrahm",
      "1 EL Weißweinessig",
      "Salz, Zucker, Pfeffer"
    ],
    zubereitung: [
      "Schnittlauch fein schneiden.",
      "Sauerrahm mit Essig, Salz, Pfeffer und Zucker verrühren.",
      "Schnittlauch einrühren.",
      "Rindfleisch in Scheiben aufschneiden. Mit Sauce und Kartoffeln servieren."
    ]
  },

  {
    name: "Rahmschwammerl",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "500 g gemischte Pilze",
      "1 Zwiebel",
      "2 EL Butter",
      "200 ml Schlagobers",
      "1 Schuss Weißwein",
      "Petersilie, Schnittlauch",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Pilze putzen und grob schneiden. Zwiebeln fein würfeln.",
      "Butter erhitzen. Zwiebeln glasig dünsten. Pilze kräftig anbraten.",
      "Mit Weißwein ablöschen. Sahne angießen.",
      "5 Minuten köcheln lassen. Mit Salz, Pfeffer und Kräutern abschmecken.",
      "Mit Semmeln oder Nockerln servieren."
    ]
  },

  {
    name: "Österreichischer Kartoffelsalat",
    kategorie: "Beilage",
    herkunft: "Österreich",
    zutaten: [
      "800 g Kartoffeln",
      "1 Zwiebel",
      "3 EL Weißweinessig",
      "5 EL Öl",
      "200 ml Gemüsebrühe",
      "Senf, Zucker, Salz, Pfeffer",
      "Schnittlauch"
    ],
    zubereitung: [
      "Kartoffeln kochen, pellen, in Scheiben schneiden.",
      "Dressing aus Essig, Öl, Brühe, Senf, Zucker, Salz und Pfeffer rühren.",
      "Noch warme Kartoffeln mit Zwiebeln und Dressing mischen.",
      "Mindestens 30 Minuten ziehen lassen.",
      "Mit Schnittlauch bestreuen."
    ]
  },

  {
    name: "Kalbsschnitzel Natur",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "4 Kalbsschnitzel",
      "2 EL Butter",
      "Salz, Pfeffer",
      "Zitronensaft",
      "Kapern",
      "Petersilie"
    ],
    zubereitung: [
      "Schnitzel dünn klopfen, würzen.",
      "Butter erhitzen. Schnitzel von jeder Seite 2 Minuten braten.",
      "Mit Zitronensaft ablöschen.",
      "Mit Kapern und Petersilie garnieren. Mit Erdäpfelsalat servieren."
    ]
  },

  {
    name: "Krapfen (Faschingskrapfen)",
    kategorie: "Gebäck",
    herkunft: "Österreich",
    zutaten: [
      "500 g Mehl",
      "1 Würfel Hefe",
      "200 ml Milch",
      "80 g Butter",
      "60 g Zucker",
      "3 Eigelb",
      "Rum",
      "Öl zum Frittieren",
      "Marillenmarmelade",
      "Puderzucker"
    ],
    zubereitung: [
      "Hefeteig zubereiten. 1 Stunde gehen lassen.",
      "Runde Kugeln formen. Nochmals 20 Minuten gehen lassen.",
      "In Öl bei 170 °C von beiden Seiten goldgelb frittieren.",
      "Auskühlen lassen. Marmelade mit Spritzbeutel einfüllen.",
      "Mit Puderzucker bestäuben."
    ]
  },

  {
    name: "Mohnstrudel",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "Strudelteig",
      "300 g gemahlener Mohn",
      "100 ml Milch",
      "100 g Zucker",
      "50 g Rosinen",
      "Rum",
      "Zitronenschale",
      "Butter"
    ],
    zubereitung: [
      "Milch mit Zucker aufkochen. Mohn einrühren und 10 Minuten quellen lassen.",
      "Rosinen, Rum und Zitronenschale einrühren. Abkühlen lassen.",
      "Strudelteig dünn ausziehen. Mit Butter bestreichen.",
      "Mohnfüllung darauf verteilen. Aufrollen.",
      "Bei 190 °C ca. 30 Minuten backen. Mit Puderzucker servieren."
    ]
  },

  {
    name: "Frittatensuppe",
    kategorie: "Suppe",
    herkunft: "Österreich",
    zutaten: [
      "1 l klare Rindssuppe",
      "2 Eier",
      "100 ml Milch",
      "3 EL Mehl",
      "Salz",
      "Butter",
      "Schnittlauch"
    ],
    zubereitung: [
      "Eier, Milch, Mehl und Salz zu einem glatten Teig rühren.",
      "In etwas Butter dünne Palatschinken (Fritatten) backen.",
      "Auskühlen lassen und in feine Streifen schneiden.",
      "In tiefen Tellern anrichten. Heiße Suppe darübergießen.",
      "Mit Schnittlauch garnieren."
    ]
  },

  {
    name: "Szegediner Gulasch",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "600 g Schweinefleisch, gewürfelt",
      "400 g Sauerkraut",
      "2 Zwiebeln",
      "2 EL Schmalz",
      "2 EL Paprika",
      "1 TL Kümmel",
      "200 g Sauerrahm",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Zwiebeln im Schmalz anbraten. Fleisch dazugeben und anbraten.",
      "Paprika und Kümmel einrühren.",
      "Sauerkraut dazugeben. Mit etwas Wasser aufgießen.",
      "Ca. 60 Minuten schmoren lassen.",
      "Sauerrahm einrühren. Mit Brot oder Nockerln servieren."
    ]
  },

  {
    name: "Milchrahmstrudel",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "Strudelteig",
      "500 ml Milch",
      "4 Eier",
      "100 g Zucker",
      "Vanille",
      "Butter",
      "Rosinen"
    ],
    zubereitung: [
      "Strudelteig ausziehen. Mit Butter bestreichen.",
      "Eier, Zucker und Vanille verquirlen.",
      "Teig aufrollen. In gebutterte Form legen.",
      "Milch-Eier-Mischung darübergießen.",
      "Bei 180 °C ca. 35 Minuten backen."
    ]
  },

  {
    name: "Wiener Rahmgulasch",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "600 g Schweinefleisch",
      "3 Zwiebeln",
      "2 EL Schmalz",
      "2 EL Paprika",
      "200 ml Sauerrahm",
      "Kümmel, Lorbeer",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Zwiebeln dunkel anrösten. Fleisch dazugeben.",
      "Paprika und Gewürze einrühren. Mit Wasser aufgießen.",
      "60 Minuten schmoren.",
      "Sauerrahm einrühren, noch 10 Minuten köcheln.",
      "Mit Nockerln servieren."
    ]
  },

  {
    name: "Bauernbrot",
    kategorie: "Gebäck",
    herkunft: "Österreich",
    zutaten: [
      "400 g Roggenmehl",
      "200 g Weizenmehl",
      "1 Päckchen Trockenhefe",
      "350 ml lauwarmes Wasser",
      "1 EL Salz",
      "1 EL Kümmel",
      "1 EL Essig"
    ],
    zubereitung: [
      "Alle Zutaten zu einem klebrigen Teig verrühren.",
      "In einer geölten Schüssel 2 Stunden gehen lassen.",
      "In eine bemehlte Kastenform füllen.",
      "Nochmals 30 Minuten gehen lassen.",
      "Bei 220 °C 10 Minuten, dann bei 180 °C weitere 40 Minuten backen.",
      "Auf einem Gitter auskühlen lassen."
    ]
  },

  {
    name: "Klachelsuppe",
    kategorie: "Suppe",
    herkunft: "Österreich",
    zutaten: [
      "2 Schweinspfoten",
      "200 g Sauerkraut",
      "2 Kartoffeln",
      "1 Zwiebel",
      "Lorbeer, Kümmel",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Schweinspfoten in Salzwasser 2 Stunden köcheln.",
      "Pfoten herausnehmen, Fleisch ablösen und in die Suppe geben.",
      "Sauerkraut, Kartoffeln und Zwiebeln dazugeben.",
      "Weitere 30 Minuten kochen. Mit Kümmel und Lorbeer würzen.",
      "Mit Brot servieren."
    ]
  },

  {
    name: "Erdäpfelsalat mit Kernöl",
    kategorie: "Beilage",
    herkunft: "Österreich",
    zutaten: [
      "800 g Kartoffeln",
      "4 EL steirisches Kürbiskernöl",
      "3 EL Apfelessig",
      "Salz, Pfeffer",
      "1 Zwiebel",
      "Kürbiskerne",
      "Schnittlauch"
    ],
    zubereitung: [
      "Kartoffeln kochen, schälen und in Scheiben schneiden.",
      "Noch warm mit Öl, Essig, Zwiebeln, Salz und Pfeffer marinieren.",
      "Mit Kürbiskernen und Schnittlauch bestreuen.",
      "Mindestens 20 Minuten ziehen lassen."
    ]
  },

  {
    name: "Wiener Zwiebelrostbraten",
    kategorie: "Hauptgericht",
    herkunft: "Österreich",
    zutaten: [
      "4 Rindssteaks (Hüfte)",
      "4 Zwiebeln",
      "Butterschmalz",
      "Fond",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Zwiebeln in feine Ringe schneiden und im Butterschmalz sehr dunkel karamellisieren.",
      "Steaks würzen und scharf anbraten.",
      "Mit Fond ablöschen, Sauce einkochen.",
      "Fleisch auf Tellern anrichten, Zwiebeln darübergeben.",
      "Mit Erdäpfelsalat oder Paradeisersalat servieren."
    ]
  },

  {
    name: "Gebackene Champignons",
    kategorie: "Vorspeise",
    herkunft: "Österreich",
    zutaten: [
      "500 g Champignons",
      "Mehl, Ei, Semmelbrösel",
      "Öl",
      "Remoulade oder Kräuterdip",
      "Zitrone"
    ],
    zubereitung: [
      "Champignons putzen.",
      "In Mehl, Ei und Bröseln panieren.",
      "In heißem Öl goldbraun frittieren.",
      "Mit Dip und Zitrone servieren."
    ]
  },

  {
    name: "Tiroler Knödel",
    kategorie: "Beilage",
    herkunft: "Österreich",
    zutaten: [
      "6 altbackene Semmeln",
      "150 ml warme Milch",
      "2 Eier",
      "100 g Tiroler Speck, fein gewürfelt",
      "Petersilie, Schnittlauch",
      "Salz, Pfeffer, Muskat"
    ],
    zubereitung: [
      "Semmeln würfeln und in Milch einweichen.",
      "Speck ohne Fett anbraten. Mit Eiern und Kräutern zur Masse geben.",
      "Mit feuchten Händen Knödel formen.",
      "In leicht siedendem Salzwasser 15–20 Minuten garen.",
      "Mit Sauerkraut oder in Suppe servieren."
    ]
  },

  {
    name: "Geröstete Maroni",
    kategorie: "Beilage",
    herkunft: "Österreich",
    zutaten: [
      "500 g Maroni (Esskastanien)",
      "Salz"
    ],
    zubereitung: [
      "Maroni kreuzweise einschneiden.",
      "In einer Pfanne oder auf dem Grill rösten bis die Schalen aufspringen — ca. 20 Minuten.",
      "Noch warm pellen. Mit Salz bestreuen.",
      "Als Beilage oder Snack servieren."
    ]
  },

  {
    name: "Wachauer Marillenknödel",
    kategorie: "Dessert",
    herkunft: "Österreich",
    zutaten: [
      "500 g Topfen",
      "150 g Mehl",
      "1 Ei",
      "Salz",
      "8 Wachauer Marillen",
      "8 Zuckerstücke",
      "Butter, Brösel, Zimt, Zucker"
    ],
    zubereitung: [
      "Topfen, Mehl, Ei und Salz verkneten.",
      "Je einen Kern durch Zucker ersetzen.",
      "Teig um jede Marille formen.",
      "In Salzwasser 12 Minuten kochen.",
      "In Zimt-Zucker-Bröseln wälzen."
    ]
  },


  // ── BATCH 3: Südtirolerische & weitere deutsche Küche (201–300) ────────────

  {
    name: "Schlutzkrapfen",
    kategorie: "Hauptgericht",
    herkunft: "Südtirol",
    zutaten: [
      "300 g Roggenmehl",
      "100 g Weizenmehl",
      "3 Eier",
      "1 EL Olivenöl",
      "Salz",
      "300 g Blattspinat (blanchiert, ausgedrückt)",
      "250 g Ricotta",
      "50 g Parmesan",
      "Muskat, Salz",
      "Brauner Butter",
      "Parmesan zum Servieren"
    ],
    zubereitung: [
      "Aus Roggenmehl, Weizenmehl, Eiern, Öl und Salz einen festen Nudelteig kneten. 30 Minuten ruhen lassen.",
      "Spinat fein hacken. Mit Ricotta und Parmesan verrühren. Mit Muskat und Salz würzen.",
      "Teig hauchdünn ausrollen. Mit einem runden Ausstecher Kreise ausstechen.",
      "Je einen Teelöffel Füllung daraufgeben, halbieren und Ränder fest andrücken.",
      "In Salzwasser ca. 5 Minuten kochen.",
      "In brauner Butter schwenken. Mit geriebenem Parmesan und frischer Minze servieren."
    ]
  },

  {
    name: "Speckknödel",
    kategorie: "Hauptgericht",
    herkunft: "Südtirol",
    zutaten: [
      "6 altbackene Semmeln",
      "150 ml Milch",
      "2 Eier",
      "150 g Südtiroler Speck, fein gewürfelt",
      "1 Zwiebel",
      "Petersilie, Schnittlauch",
      "Salz, Pfeffer, Muskat",
      "Mehl (falls nötig)",
      "Klare Fleischsuppe oder Sauerkraut"
    ],
    zubereitung: [
      "Semmeln in kleine Würfel schneiden und in lauwarmer Milch einweichen.",
      "Speck und Zwiebel fein würfeln, in etwas Butter anschwitzen.",
      "Eier, Speck, Kräuter und Gewürze zur Semmelmasse geben. Gut vermischen.",
      "Teig 15 Minuten ruhen lassen. Falls zu weich: etwas Mehl einarbeiten.",
      "Mit nassen Händen Knödel formen.",
      "In leicht siedendem Salzwasser 15–20 Minuten garen.",
      "In der Suppe servieren oder mit Sauerkraut und brauner Butter."
    ]
  },

  {
    name: "Tirtlan",
    kategorie: "Hauptgericht",
    herkunft: "Südtirol",
    zutaten: [
      "300 g Roggenmehl",
      "100 g Weizenmehl",
      "2 Eier",
      "1 EL Öl",
      "Salz",
      "200 g Sauerkraut (gut ausgedrückt)",
      "200 g Ricotta",
      "1 Ei",
      "Salz, Kümmel",
      "Öl oder Schmalz zum Ausbacken"
    ],
    zubereitung: [
      "Aus den Mehlen, Eiern, Öl und Salz einen glatten Teig kneten. Ruhen lassen.",
      "Sauerkraut hacken, mit Ricotta, Ei, Kümmel und Salz vermischen.",
      "Teig ausrollen. Ovale Formen ausstechen.",
      "Füllung auf eine Hälfte geben, zuklappen. Ränder fest zusammendrücken.",
      "In heißem Schmalz oder Öl von beiden Seiten goldbraun ausbacken.",
      "Heiß servieren."
    ]
  },

  {
    name: "Graukäsesuppe",
    kategorie: "Suppe",
    herkunft: "Südtirol",
    zutaten: [
      "150 g Südtiroler Graukäse",
      "1 l Gemüsebrühe",
      "1 Zwiebel, fein gewürfelt",
      "2 EL Butter",
      "100 ml Sahne",
      "Salz, Pfeffer",
      "Schnittlauch",
      "Geröstetes Brot"
    ],
    zubereitung: [
      "Zwiebeln in Butter glasig dünsten.",
      "Brühe angießen und aufkochen.",
      "Graukäse zerrupfen und einrühren. Bei niedriger Hitze schmelzen lassen.",
      "Sahne einrühren. Mit Salz und Pfeffer abschmecken.",
      "In Schüsseln füllen. Mit Schnittlauch und geröstetem Brot servieren."
    ]
  },

  {
    name: "Kastaniensuppe",
    kategorie: "Suppe",
    herkunft: "Südtirol",
    zutaten: [
      "400 g Maroni (vorgegart)",
      "1 Zwiebel",
      "1 Stange Sellerie",
      "2 EL Butter",
      "700 ml Gemüsebrühe",
      "100 ml Sahne",
      "Rosmarin",
      "Salz, Pfeffer",
      "Geröstete Maroni zum Garnieren"
    ],
    zubereitung: [
      "Zwiebeln und Sellerie in Butter anschwitzen.",
      "Maroni dazugeben. Mit Brühe aufgießen.",
      "Mit Rosmarin 20 Minuten kochen.",
      "Pürieren. Sahne einrühren.",
      "Mit Salz und Pfeffer abschmecken. Mit gerösteten Maronistücken garnieren."
    ]
  },

  {
    name: "Vinschgauer Marillenkuchen",
    kategorie: "Dessert",
    herkunft: "Südtirol",
    zutaten: [
      "200 g Butter",
      "200 g Zucker",
      "4 Eier",
      "250 g Mehl",
      "1 TL Backpulver",
      "500 g Marillen (Aprikosen), entsteint und halbiert",
      "Zimtzucker"
    ],
    zubereitung: [
      "Butter und Zucker schaumig rühren. Eier einzeln einrühren.",
      "Mehl und Backpulver unterheben.",
      "Teig in eine gefettete Form geben.",
      "Marillen mit der Schnittfläche nach oben eindrücken.",
      "Mit Zimtzucker bestreuen.",
      "Bei 175 °C ca. 40 Minuten backen."
    ]
  },

  {
    name: "Zelten",
    kategorie: "Gebäck",
    herkunft: "Südtirol",
    zutaten: [
      "300 g Roggenmehl",
      "100 g Weizenmehl",
      "1 Päckchen Hefe",
      "200 ml lauwarmes Wasser",
      "300 g gemischte Trockenfrüchte (Feigen, Datteln, Rosinen, Nüsse)",
      "2 EL Honig",
      "Zimt, Nelken, Anis",
      "Grappa oder Rum"
    ],
    zubereitung: [
      "Trockenfrüchte kleinschneiden und mit Grappa, Honig und Gewürzen mischen. Über Nacht ziehen lassen.",
      "Hefeteig aus Mehl, Hefe, Wasser und Salz zubereiten.",
      "Früchtemasse einkneten.",
      "Flache Laibe formen. 1 Stunde gehen lassen.",
      "Bei 180 °C ca. 40 Minuten backen.",
      "Kühl und trocken gelagert mehrere Wochen haltbar."
    ]
  },

  {
    name: "Südtiroler Speck",
    kategorie: "Vorspeise",
    herkunft: "Südtirol",
    zutaten: [
      "Dünn geschnittener Südtiroler Speck",
      "Bauernbrot",
      "Butter",
      "Kren (Meerrettich)",
      "Saure Gürkchen"
    ],
    zubereitung: [
      "Speck so dünn wie möglich aufschneiden.",
      "Brot buttern.",
      "Speck auf dem Brot anrichten.",
      "Mit einem Hauch Meerrettich und einem Gürkchen servieren.",
      "Ein Glas Lagrein dazu — das ist Südtirol."
    ]
  },

  {
    name: "Krapfen (Südtiroler)",
    kategorie: "Gebäck",
    herkunft: "Südtirol",
    zutaten: [
      "400 g Mehl",
      "200 ml Milch",
      "1 Würfel Hefe",
      "80 g Butter",
      "60 g Zucker",
      "2 Eier",
      "Preiselbeerfüllung oder Apfelmus",
      "Öl zum Frittieren",
      "Puderzucker"
    ],
    zubereitung: [
      "Hefeteig zubereiten. Gehen lassen.",
      "Teig ausrollen. Kreise ausstechen.",
      "Preiselbeeren oder Apfelmus auf einer Hälfte platzieren. Zuklappen.",
      "In heißem Öl goldgelb frittieren.",
      "Mit Puderzucker servieren."
    ]
  },

  {
    name: "Schüttelbrot",
    kategorie: "Gebäck",
    herkunft: "Südtirol",
    zutaten: [
      "500 g Roggenmehl",
      "250 ml lauwarmes Wasser",
      "1 TL Trockenhefe",
      "1 TL Salz",
      "1 EL Kümmel",
      "1 TL Fenchelsamen"
    ],
    zubereitung: [
      "Alle Zutaten zu einem weichen Teig verrühren.",
      "2 Stunden gehen lassen.",
      "Flache, dünne Scheiben auf ein Backblech legen (schütteln für gleichmäßige Form).",
      "Bei 200 °C ca. 20 Minuten backen bis krachend knusprig.",
      "Abkühlen lassen. Bleibt wochenlang knusprig."
    ]
  },

  {
    name: "Vinschger Marillenschnaps-Creme",
    kategorie: "Dessert",
    herkunft: "Südtirol",
    zutaten: [
      "500 g Marillen, entsteint",
      "100 g Zucker",
      "2 EL Marillenschnaps",
      "300 ml Schlagsahne",
      "Minze"
    ],
    zubereitung: [
      "Marillen mit Zucker weich kochen. Pürieren. Abkühlen lassen.",
      "Schnaps einrühren.",
      "Sahne steif schlagen. Unter das Püree heben.",
      "In Gläsern kalt stellen. Mit Minze garnieren."
    ]
  },

  {
    name: "Riebel",
    kategorie: "Hauptgericht",
    herkunft: "Südtirol",
    zutaten: [
      "300 g Maisgrieß",
      "500 ml Milch",
      "200 ml Wasser",
      "50 g Butter",
      "Salz",
      "Apfelmus oder Preiselbeeren"
    ],
    zubereitung: [
      "Milch und Wasser aufkochen. Salzen.",
      "Maisgrieß einrieseln lassen, dabei rühren.",
      "Bei niedriger Hitze quellen lassen bis eine feste Masse entsteht.",
      "Butter einarbeiten. Mit einer Gabel in Brösel zerteilen.",
      "In Butter goldbraun braten.",
      "Mit Apfelmus oder Preiselbeeren servieren."
    ]
  },

  {
    name: "Südtiroler Minestrone",
    kategorie: "Suppe",
    herkunft: "Südtirol",
    zutaten: [
      "2 Karotten",
      "2 Kartoffeln",
      "1 Zucchini",
      "1 Stange Lauch",
      "100 g Bohnen",
      "100 g Speck",
      "1 l Gemüsebrühe",
      "Olivenöl",
      "Parmesan",
      "Rosmarin, Lorbeer"
    ],
    zubereitung: [
      "Speck in Öl anbraten. Gemüse würfeln und dazugeben.",
      "Mit Brühe aufgießen. Lorbeer und Rosmarin dazugeben.",
      "30 Minuten kochen bis alles weich ist.",
      "Mit Salz und Pfeffer abschmecken.",
      "Mit Parmesan und Bauernbrot servieren."
    ]
  },

  {
    name: "Bauernomelett",
    kategorie: "Hauptgericht",
    herkunft: "Südtirol",
    zutaten: [
      "6 Eier",
      "100 g Südtiroler Speck",
      "1 Zwiebel",
      "2 Kartoffeln (gekocht)",
      "Petersilie",
      "Salz, Pfeffer",
      "Butter"
    ],
    zubereitung: [
      "Speck und Zwiebeln in Butter anbraten.",
      "Kartoffeln in Scheiben schneiden und mitbraten.",
      "Eier mit Petersilie, Salz und Pfeffer verquirlen.",
      "Über die Zutaten geben. Bei mittlerer Hitze stocken lassen.",
      "Wenden oder im Ofen fertig garen.",
      "Mit Salat servieren."
    ]
  },

  {
    name: "Lagrein-Gulasch",
    kategorie: "Hauptgericht",
    herkunft: "Südtirol",
    zutaten: [
      "800 g Rindfleisch",
      "3 Zwiebeln",
      "300 ml Lagrein (Rotwein aus Südtirol)",
      "2 EL Tomatenmark",
      "Paprika, Lorbeer, Thymian",
      "Schmalz",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Fleisch anbraten. Zwiebeln dazugeben.",
      "Tomatenmark einrühren. Mit Lagrein ablöschen.",
      "Kräuter und Gewürze dazugeben. 2 Stunden schmoren.",
      "Sauce einkochen lassen.",
      "Mit Knödeln und Preiselbeeren servieren."
    ]
  },

  {
    name: "Apfelkuchen aus dem Vinschgau",
    kategorie: "Dessert",
    herkunft: "Südtirol",
    zutaten: [
      "300 g Mehl",
      "150 g Butter",
      "100 g Zucker",
      "2 Eier",
      "1 TL Backpulver",
      "800 g Vinschgauer Äpfel",
      "Zimt, Zucker, Rosinen",
      "Puderzucker"
    ],
    zubereitung: [
      "Mürbteig aus Mehl, Butter, Zucker und Eiern bereiten.",
      "2/3 des Teigs in eine Form drücken.",
      "Äpfel schälen, in Scheiben schneiden. Mit Zimt, Zucker und Rosinen mischen.",
      "Auf dem Teig verteilen. Rest Teig darüberreiben.",
      "Bei 175 °C ca. 45 Minuten backen. Mit Puderzucker servieren."
    ]
  },

  {
    name: "Topfen-Marillen-Strudel",
    kategorie: "Dessert",
    herkunft: "Südtirol",
    zutaten: [
      "Strudelteig",
      "300 g Topfen",
      "200 g Marillen, gewürfelt",
      "60 g Zucker",
      "1 Ei",
      "Vanille",
      "Butter",
      "Puderzucker"
    ],
    zubereitung: [
      "Topfen, Zucker, Ei und Vanille verrühren. Marillen einrühren.",
      "Strudelteig ausziehen. Mit Butter bestreichen.",
      "Füllung darauf verteilen. Aufrollen.",
      "Bei 190 °C ca. 30 Minuten backen. Mit Puderzucker servieren."
    ]
  },

  {
    name: "Südtiroler Fleischsuppe",
    kategorie: "Suppe",
    herkunft: "Südtirol",
    zutaten: [
      "500 g Suppenfleisch (Rind)",
      "Suppengemüse",
      "Speck",
      "Lorbeer",
      "Salz",
      "Frittatenstreifen oder Griesnockerln"
    ],
    zubereitung: [
      "Fleisch und Speck in Wasser aufsetzen. Aufkochen, Schaum abschöpfen.",
      "Gemüse und Gewürze dazugeben. 2 Stunden sanft köcheln.",
      "Brühe passieren.",
      "Mit Einlage servieren."
    ]
  },

  {
    name: "Bozener Sauce",
    kategorie: "Beilage",
    herkunft: "Südtirol",
    zutaten: [
      "3 hartgekochte Eier",
      "1 EL Senf",
      "3 EL Weißweinessig",
      "6 EL Öl",
      "Schnittlauch",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Eier pellen. Eigelb herauslösen.",
      "Eigelb mit Senf, Essig und Öl cremig rühren.",
      "Eiweiß fein würfeln und einrühren.",
      "Reichlich Schnittlauch dazugeben. Würzen.",
      "Zu gekochtem Spargel oder Tafelspitz servieren."
    ]
  },

  {
    name: "Knödelauflauf",
    kategorie: "Hauptgericht",
    herkunft: "Südtirol",
    zutaten: [
      "4 Speckknödel (vom Vortag, in Scheiben)",
      "3 Eier",
      "200 ml Milch",
      "100 g geriebener Käse",
      "Salz, Pfeffer, Muskat",
      "Butter"
    ],
    zubereitung: [
      "Knödelscheiben in eine gebutterte Form legen.",
      "Eier und Milch verquirlen. Würzen.",
      "Über die Knödel gießen. Mit Käse bestreuen.",
      "Bei 180 °C ca. 25 Minuten backen.",
      "Mit Salat servieren."
    ]
  },

  {
    name: "Roggenbrot mit Speck",
    kategorie: "Vorspeise",
    herkunft: "Südtirol",
    zutaten: [
      "Frisches Roggenbrot",
      "Gesalzene Butter",
      "Dünner Südtiroler Speck",
      "Radieschen",
      "Schnittlauch"
    ],
    zubereitung: [
      "Brot in Scheiben schneiden.",
      "Dünn mit gesalzener Butter bestreichen.",
      "Speck darauflegen.",
      "Mit Radieschen und Schnittlauch servieren."
    ]
  },

  {
    name: "Heidensterz (Buchweizensterz)",
    kategorie: "Hauptgericht",
    herkunft: "Südtirol",
    zutaten: [
      "200 g Buchweizenmehl",
      "400 ml Wasser",
      "1 TL Salz",
      "50 g Butter",
      "Speck (optional)"
    ],
    zubereitung: [
      "Wasser mit Salz zum Kochen bringen.",
      "Buchweizenmehl einrühren. Zu einer festen Masse rühren.",
      "Butter einarbeiten.",
      "Mit zwei Gabeln Sterz (Brösel) formen.",
      "In Butter goldbraun rösten.",
      "Mit Sauermilch oder als Beilage zu Speck servieren."
    ]
  },

  {
    name: "Brixner Erdbeertorte",
    kategorie: "Dessert",
    herkunft: "Südtirol",
    zutaten: [
      "Biskuitboden",
      "500 g Erdbeeren",
      "400 ml Sahne",
      "2 EL Zucker",
      "1 Päckchen Sahnesteif",
      "Erdbeerkonfitüre",
      "Puderzucker"
    ],
    zubereitung: [
      "Biskuit halbieren. Erste Schicht mit Erdbeermarmelade bestreichen.",
      "Sahne steif schlagen. Die Hälfte auf dem Boden verteilen.",
      "Erdbeeren (halbiert) darauflegen.",
      "Zweite Schicht Sahne auftragen. Mit Erdbeeren dekorieren.",
      "Mindestens 2 Stunden kalt stellen."
    ]
  },

  {
    name: "Graukas-Krapfen",
    kategorie: "Vorspeise",
    herkunft: "Südtirol",
    zutaten: [
      "250 g Mehl",
      "1 TL Backpulver",
      "2 Eier",
      "100 ml Milch",
      "150 g Graukäse, zerbröselt",
      "1 Zwiebel",
      "Schnittlauch",
      "Öl zum Ausbacken"
    ],
    zubereitung: [
      "Mehl, Backpulver, Eier und Milch zu einem glatten Teig rühren.",
      "Graukäse, Zwiebeln und Schnittlauch einrühren.",
      "Esslöffelweise in heißes Öl geben.",
      "Goldbraun frittieren. Abtropfen lassen.",
      "Warm servieren."
    ]
  },

  {
    name: "Vinschgau-Burger",
    kategorie: "Hauptgericht",
    herkunft: "Südtirol",
    zutaten: [
      "Vinschgauer Brot (klein, flach)",
      "Rindfleisch-Patty",
      "Südtiroler Speck",
      "Graukäse",
      "Apfelkren",
      "Feldsalat",
      "Tomaten"
    ],
    zubereitung: [
      "Vinschgauer aufschneiden und toasten.",
      "Rindfleischpatty würzen und braten.",
      "Käse darauf schmelzen lassen.",
      "Brot mit Apfelkren bestreichen.",
      "Alle Zutaten schichten. Servieren."
    ]
  },

  {
    name: "Knödel mit Schwammerln",
    kategorie: "Hauptgericht",
    herkunft: "Südtirol",
    zutaten: [
      "4 Semmelknödel",
      "400 g Steinpilze oder Eierschwammerln",
      "2 EL Butter",
      "1 Zwiebel",
      "200 ml Sahne",
      "Petersilie",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Knödel zubereiten und garen.",
      "Pilze putzen und grob schneiden. Zwiebeln würfeln.",
      "In Butter anbraten. Mit Sahne ablöschen. Würzen.",
      "Knödel auf Tellern anrichten. Pilzrahmsauce darüber.",
      "Mit Petersilie bestreuen."
    ]
  },

  {
    name: "Südtiroler Nocken",
    kategorie: "Beilage",
    herkunft: "Südtirol",
    zutaten: [
      "3 Eier",
      "200 ml Milch",
      "200 g Mehl",
      "Salz",
      "Butter",
      "Parmesan"
    ],
    zubereitung: [
      "Eier, Milch, Mehl und Salz zu einem glatten Teig rühren.",
      "Durch ein Spätzlesieb in kochendes Salzwasser drücken.",
      "Wenn die Nocken aufschwimmen, noch 1 Minute kochen. Abschöpfen.",
      "In Butter schwenken. Mit Parmesan servieren."
    ]
  },

  {
    name: "Stockfischröstl",
    kategorie: "Hauptgericht",
    herkunft: "Südtirol",
    zutaten: [
      "400 g eingeweichter Stockfisch",
      "400 g Kartoffeln, gegart",
      "1 Zwiebel",
      "3 EL Olivenöl",
      "Petersilie",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Stockfisch in Stücke zupfen. Kartoffeln grob zerdrücken.",
      "Zwiebeln im Öl goldbraun braten.",
      "Fisch und Kartoffeln dazugeben. Gut anrösten.",
      "Mit Salz, Pfeffer und Petersilie würzen.",
      "Mit einem Glas Weißwein servieren."
    ]
  },

  {
    name: "Müsleibrot (Mürbteigbrot)",
    kategorie: "Gebäck",
    herkunft: "Südtirol",
    zutaten: [
      "300 g Roggenmehl",
      "200 g Weizenmehl",
      "1 TL Salz",
      "1 TL Kümmel",
      "1 TL Fenchel",
      "1 Päckchen Trockenhefe",
      "300 ml Wasser"
    ],
    zubereitung: [
      "Alle Zutaten zu einem Teig verkneten.",
      "2 Stunden gehen lassen.",
      "Laibe formen und nochmals 30 Minuten gehen lassen.",
      "Bei 220 °C mit Dampf ca. 35 Minuten backen.",
      "Auf einem Rost auskühlen lassen."
    ]
  },

  {
    name: "Spätzle",
    kategorie: "Beilage",
    herkunft: "Deutschland",
    zutaten: [
      "400 g Mehl",
      "4 Eier",
      "150 ml Wasser",
      "1 TL Salz",
      "Butter zum Schwenken"
    ],
    zubereitung: [
      "Mehl, Eier, Wasser und Salz zu einem zähflüssigen Teig rühren.",
      "Teig durch ein Spätzlesieb in kochendes Salzwasser streichen.",
      "Wenn die Spätzle aufschwimmen, noch 1 Minute kochen. Abschöpfen.",
      "In Butter schwenken. Mit Käse überstreuen oder als Beilage servieren."
    ]
  },

  {
    name: "Käsespätzle",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "400 g Spätzle (zubereitet)",
      "200 g Bergkäse, gerieben",
      "2 große Zwiebeln, in Ringe",
      "3 EL Butter",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Zwiebeln in Butter langsam goldbraun und karamellisiert braten.",
      "Spätzle in Schichten mit Käse in eine Auflaufform geben.",
      "Im Ofen bei 200 °C überbacken bis der Käse schmilzt.",
      "Mit Zwiebeln toppen. Sofort servieren."
    ]
  },

  {
    name: "Oberschwäbischer Zwiebelrostbraten",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "4 Rindsteaks",
      "4 Zwiebeln",
      "Butterschmalz",
      "Mehl",
      "Rinderfond",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Zwiebeln in Ringe schneiden. In Mehl wenden und im Butterschmalz knusprig braten.",
      "Steaks würzen und scharf anbraten.",
      "Mit Fond ablöschen.",
      "Auf Tellern mit Zwiebeln und Spätzle servieren."
    ]
  },

  {
    name: "Saure Linsen mit Spätzle",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "300 g braune Linsen",
      "150 g geräucherter Speck",
      "1 Zwiebel",
      "2 EL Mehl",
      "3 EL Essig",
      "Brühe",
      "Lorbeer",
      "Salz, Zucker, Pfeffer",
      "Saitenwürste"
    ],
    zubereitung: [
      "Linsen einweichen und mit Lorbeer und Speck weich kochen.",
      "Zwiebeln in Schmalz glasig dünsten. Mehl einrühren.",
      "Mit Brühe aufgießen. Essig, Salz, Zucker und Pfeffer einrühren.",
      "Linsen dazugeben und kurz kochen.",
      "Mit Spätzle und Saitenwürstchen servieren."
    ]
  },

  {
    name: "Birnen, Bohnen und Speck",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "4 feste Birnen",
      "500 g grüne Bohnen",
      "200 g geräucherter Bauchspeck",
      "Bohnenkraut",
      "Salz und Pfeffer"
    ],
    zubereitung: [
      "Birnen schälen, halbieren. Bohnen putzen.",
      "Speck in einem Topf anbraten. Wasser dazugeben.",
      "Birnen, Bohnen und Bohnenkraut einlegen.",
      "Ca. 30 Minuten köcheln lassen.",
      "Mit Kartoffeln servieren."
    ]
  },

  {
    name: "Kichererbsensuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "400 g Kichererbsen (Dose)",
      "2 Knoblauchzehen",
      "1 Zwiebel",
      "1 TL Kreuzkümmel",
      "1 TL Koriander",
      "800 ml Gemüsebrühe",
      "2 EL Olivenöl",
      "Zitrone, Petersilie"
    ],
    zubereitung: [
      "Zwiebeln und Knoblauch in Öl anschwitzen. Gewürze kurz mitrösten.",
      "Kichererbsen und Brühe dazugeben. 15 Minuten köcheln.",
      "Hälfte pürieren für cremige Konsistenz.",
      "Mit Zitrone und Petersilie abschmecken."
    ]
  },

  {
    name: "Grünkohlchips",
    kategorie: "Vorspeise",
    herkunft: "Deutschland",
    zutaten: [
      "1 Bund Grünkohl",
      "2 EL Olivenöl",
      "Salz, Paprika"
    ],
    zubereitung: [
      "Grünkohl waschen und trocken schütteln. In mundgerechte Stücke zupfen.",
      "Mit Öl, Salz und Paprika mischen.",
      "Auf Backblech verteilen.",
      "Bei 150 °C ca. 20 Minuten rösten bis knusprig.",
      "Sofort servieren."
    ]
  },

  {
    name: "Blaukrautsalat",
    kategorie: "Beilage",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Rotkohl",
      "3 EL Apfelessig",
      "2 EL Zucker",
      "3 EL Öl",
      "1 Apfel",
      "Kümmel, Salz, Pfeffer"
    ],
    zubereitung: [
      "Rotkohl sehr fein hobeln. Mit Salz einkneten.",
      "Apfel raspeln.",
      "Essig, Zucker, Öl und Kümmel zum Dressing rühren.",
      "Alles mischen. Mindestens 1 Stunde ziehen lassen."
    ]
  },

  {
    name: "Tomatensuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "800 g reife Tomaten oder 1 Dose gehackte Tomaten",
      "1 Zwiebel",
      "2 Knoblauchzehen",
      "500 ml Gemüsebrühe",
      "2 EL Olivenöl",
      "Basilikum",
      "Zucker, Salz, Pfeffer",
      "Sahne"
    ],
    zubereitung: [
      "Zwiebeln und Knoblauch in Öl anschwitzen.",
      "Tomaten dazugeben. Mit Brühe aufgießen.",
      "20 Minuten köcheln. Pürieren.",
      "Mit Zucker, Salz und Pfeffer abschmecken.",
      "Mit Sahne und Basilikum servieren."
    ]
  },

  {
    name: "Brokkolicremesuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Brokkoli",
      "1 Kartoffel",
      "1 Zwiebel",
      "700 ml Gemüsebrühe",
      "100 ml Sahne",
      "Butter",
      "Salz, Pfeffer, Muskat"
    ],
    zubereitung: [
      "Brokkoli in Röschen teilen. Stiel würfeln.",
      "Zwiebeln in Butter dünsten. Brokkoli und Kartoffel dazugeben.",
      "Mit Brühe aufgießen. 20 Minuten kochen.",
      "Pürieren. Sahne einrühren.",
      "Mit Salz, Pfeffer und Muskat abschmecken."
    ]
  },

  {
    name: "Kürbiscremesuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "800 g Hokkaido-Kürbis",
      "1 Zwiebel",
      "1 Stück Ingwer",
      "700 ml Gemüsebrühe",
      "150 ml Kokosmilch",
      "2 EL Olivenöl",
      "Salz, Pfeffer, Muskat",
      "Kürbiskernöl"
    ],
    zubereitung: [
      "Kürbis würfeln (Schale beim Hokkaido mitessen). Zwiebeln und Ingwer würfeln.",
      "In Öl anschwitzen. Brühe angießen.",
      "20 Minuten kochen. Pürieren.",
      "Kokosmilch einrühren. Abschmecken.",
      "Mit Kürbiskernöl beträufeln."
    ]
  },

  {
    name: "Graupensuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "150 g Perlgraupen",
      "2 Karotten",
      "1 Stange Sellerie",
      "1 Stange Lauch",
      "100 g Speck",
      "1 l Fleischbrühe",
      "Petersilie",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Speck anbraten. Gemüse würfeln und mitdünsten.",
      "Graupen und Brühe dazugeben.",
      "30–40 Minuten kochen bis Graupen weich sind.",
      "Mit Salz, Pfeffer und Petersilie abschmecken."
    ]
  },

  {
    name: "Pfälzer Saumagen",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1 Schweinemagen",
      "500 g Hackfleisch",
      "300 g Kartoffeln, gewürfelt",
      "Majoran, Muskat, Salz",
      "2 Eier",
      "Zwiebelwürfel"
    ],
    zubereitung: [
      "Hackfleisch, Kartoffeln, Eier und Gewürze gut vermischen.",
      "Magen waschen und mit der Masse füllen. Zunähen.",
      "In leicht simmerndem Wasser ca. 2 Stunden garen.",
      "In Scheiben schneiden. Anbraten bis goldbraun.",
      "Mit Sauerkraut und Brot servieren."
    ]
  },

  {
    name: "Badischer Zwiebelkuchen",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "Mürbteig oder Hefeteig",
      "1 kg Zwiebeln",
      "200 g Speck",
      "4 Eier",
      "200 ml Sahne",
      "Salz, Pfeffer, Muskat"
    ],
    zubereitung: [
      "Teig ausrollen und in eine Form geben.",
      "Zwiebeln und Speck anbraten.",
      "Eier und Sahne verquirlen. Würzen.",
      "Zwiebelmasse auf dem Teig verteilen. Eiersahne darübergießen.",
      "Bei 180 °C ca. 35 Minuten backen."
    ]
  },

  {
    name: "Westfälisches Pumpernickel mit Lachs",
    kategorie: "Vorspeise",
    herkunft: "Deutschland",
    zutaten: [
      "Pumpernickel",
      "Frischkäse",
      "Räucherlachs",
      "Dill",
      "Zitrone"
    ],
    zubereitung: [
      "Pumpernickel mit Frischkäse bestreichen.",
      "Lachs darauflegen.",
      "Mit Dill und Zitrone garnieren."
    ]
  },

  {
    name: "Steinpilzrisotto",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "300 g Risottoreis",
      "30 g getrocknete Steinpilze",
      "1 Zwiebel",
      "150 ml Weißwein",
      "1 l Gemüsebrühe",
      "50 g Butter",
      "50 g Parmesan",
      "Olivenöl, Salz, Pfeffer"
    ],
    zubereitung: [
      "Steinpilze in Wasser einweichen. Abtropfen, Wasser aufbewahren.",
      "Zwiebeln in Öl glasig dünsten. Reis einrühren.",
      "Mit Wein ablöschen. Einkochen lassen.",
      "Löffelweise Brühe und Pilzwasser einrühren.",
      "Pilze dazugeben. Ca. 18 Minuten kochen.",
      "Butter und Parmesan einrühren. Würzen."
    ]
  },

  {
    name: "Pfannkuchen",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "3 Eier",
      "300 ml Milch",
      "150 g Mehl",
      "1 Prise Salz",
      "Butter",
      "Zucker, Zimt oder Marmelade"
    ],
    zubereitung: [
      "Eier, Milch, Mehl und Salz glatt rühren.",
      "Butter in der Pfanne erhitzen.",
      "Dünne Pfannkuchen von beiden Seiten backen.",
      "Mit Zimt-Zucker oder Marmelade servieren."
    ]
  },

  {
    name: "Rheinischer Reibekuchen",
    kategorie: "Hauptgericht",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg Kartoffeln",
      "2 Eier",
      "1 Zwiebel",
      "3 EL Mehl",
      "Salz, Pfeffer",
      "Öl",
      "Apfelmus"
    ],
    zubereitung: [
      "Kartoffeln und Zwiebel reiben und gut ausdrücken.",
      "Mit Eiern, Mehl, Salz und Pfeffer vermengen.",
      "Im Öl flache Puffer von beiden Seiten knusprig braten.",
      "Mit Apfelmus oder saurer Sahne servieren."
    ]
  },

  {
    name: "Heringssalat",
    kategorie: "Vorspeise",
    herkunft: "Deutschland",
    zutaten: [
      "4 Heringsfilets",
      "3 Kartoffeln (gekocht)",
      "2 Äpfel",
      "2 Rote Bete",
      "2 Gewürzgurken",
      "1 Zwiebel",
      "Mayonnaise, Saure Sahne",
      "Salz, Pfeffer, Zucker"
    ],
    zubereitung: [
      "Alles in gleichmäßige Würfel schneiden.",
      "Mit Mayonnaise und Saurer Sahne mischen.",
      "Mit Salz, Pfeffer und Zucker abschmecken.",
      "Mindestens 2 Stunden kalt stellen.",
      "Mit Schwarzbrot servieren."
    ]
  },

  {
    name: "Gemüsesuppe mit Frikadellen",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "Gemüsesuppe (Brühe, Karotten, Sellerie, Lauch)",
      "200 g Hackfleisch",
      "1 Ei",
      "Semmelbrösel",
      "Petersilie, Salz"
    ],
    zubereitung: [
      "Hackfleisch mit Ei, Bröseln und Gewürzen verkneten.",
      "Kleine Bällchen formen.",
      "Gemüsebrühe aufkochen. Bällchen darin 10 Minuten garen.",
      "Mit Gemüse und Petersilie servieren."
    ]
  },

  {
    name: "Fruchtbowle",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "1 Flasche Weißwein",
      "500 ml Mineralwasser",
      "Erdbeeren, Pfirsiche, Weintrauben",
      "2 EL Zucker",
      "Minze"
    ],
    zubereitung: [
      "Früchte waschen und in Stücke schneiden.",
      "Mit Zucker mischen. 30 Minuten ziehen lassen.",
      "Wein und Mineralwasser darübergießen.",
      "Mit Minze garnieren. Kalt servieren."
    ]
  },

  {
    name: "Eingemachtes (Weißkohl einlegen)",
    kategorie: "Beilage",
    herkunft: "Deutschland",
    zutaten: [
      "1 kg Weißkohl",
      "20 g Salz",
      "1 TL Kümmel"
    ],
    zubereitung: [
      "Kohl fein hobeln.",
      "Mit Salz und Kümmel verkneten bis Saft austritt.",
      "In ein sauberes Einmachglas drücken — der Saft soll den Kohl bedecken.",
      "Mit einem Gewicht beschweren. Abdecken.",
      "Bei Zimmertemperatur 3–5 Tage fermentieren lassen. Dann kühl stellen."
    ]
  },

  {
    name: "Mandelkuchen",
    kategorie: "Dessert",
    herkunft: "Deutschland",
    zutaten: [
      "200 g Butter",
      "200 g Zucker",
      "4 Eier",
      "200 g gemahlene Mandeln",
      "100 g Mehl",
      "1 TL Backpulver",
      "Mandelblättchen",
      "Puderzucker"
    ],
    zubereitung: [
      "Butter und Zucker schaumig rühren. Eier einrühren.",
      "Mandeln, Mehl und Backpulver unterheben.",
      "In Kastenform füllen. Mandelblättchen bestreuen.",
      "Bei 170 °C ca. 50 Minuten backen.",
      "Mit Puderzucker bestäuben."
    ]
  },

  {
    name: "Nussecken",
    kategorie: "Gebäck",
    herkunft: "Deutschland",
    zutaten: [
      "Mürbteig",
      "100 g Aprikosenmarmelade",
      "200 g Haselnüsse, gehackt",
      "150 g Zucker",
      "100 g Butter",
      "2 EL Wasser",
      "Zartbitterkuvertüre"
    ],
    zubereitung: [
      "Mürbteig auf Blech ausrollen. Mit Marmelade bestreichen.",
      "Zucker, Butter und Wasser aufkochen. Nüsse einrühren.",
      "Auf dem Teig verteilen.",
      "Bei 175 °C ca. 20 Minuten backen.",
      "Abkühlen lassen. In Dreiecke schneiden. Ecken in Kuvertüre tauchen."
    ]
  },

  {
    name: "Bayerischer Blaukrautsalat",
    kategorie: "Beilage",
    herkunft: "Deutschland",
    zutaten: [
      "500 g Rotkohl",
      "1 Zwiebel",
      "4 EL Apfelessig",
      "2 EL Zucker",
      "4 EL Öl",
      "Kümmel, Salz, Pfeffer"
    ],
    zubereitung: [
      "Rotkohl sehr fein hobeln oder schneiden.",
      "Mit Salz kneten.",
      "Dressing aus Essig, Zucker, Öl, Kümmel und Pfeffer rühren.",
      "Alles mischen. 2 Stunden ziehen lassen."
    ]
  },

  {
    name: "Meerrettich-Kartoffelsuppe",
    kategorie: "Suppe",
    herkunft: "Deutschland",
    zutaten: [
      "600 g Kartoffeln",
      "1 l Brühe",
      "2 EL frisch geriebener Meerrettich",
      "100 ml Sahne",
      "Butter",
      "Salz, Pfeffer"
    ],
    zubereitung: [
      "Kartoffeln würfeln und in Brühe weich kochen.",
      "Pürieren. Sahne einrühren.",
      "Meerrettich einrühren. Würzen.",
      "Mit Schnittlauch garnieren."
    ]
  }

];

export default recipes;
