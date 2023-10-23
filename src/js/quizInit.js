const quiz = [
    {
        question:"Kühlte sich das Klima durch die Eroberungszüge von Dschingis Khan ab?", 
        choices: ["Nein, das hatte keinen Einfluss!", "Ja, durch die natürliche Wiederbewaldung auf dem entvölkerten Land wurde das Klima heruntergekühlt", "Wer ist Dschingis Khan!"], 
        answer: 1,
        reward: 1.8,
        information: "Der hat so hart geraided, dass alle down gegangen sind und die Natur back war."
    },
    {
        question:"Wie viel Tonnen C02-Äquivalente emittierte Deutschland im Jahr 2022?",
        choices: ["746 Millionen", "1.045 Millionen", "67 Millionen"],
        answer: 0,
        reward: 1.4,
        information: "Im Jahr 2022 verursachte Deutschland rund 746 Millionen Tonnen CO2-Äquivalente, wovon 786 Millionen Tonnen reines CO2 waren."
    },
    {
        question:"Welche Alternativen gibt es zu torfhaltiger Blumenerde?",
        choices: ["Torfhaltige Blumenerde ist alternativlos", "Komposterde oder torffreie Erden aus dem Handel", "Kaffeesatz mit Sand gemischt ergibt eine gute Alternative"],
        answer: 1,
        reward: 1,
        information: "Kompost aus dem eigenen Garten ist eine hervorragende Alternative. Er belebt den Boden und gibt wichtige Nährstoffe zurück aber auch torffreie Erde aus dem Handel eignet sich sehr gut."
    },
    {
        question:"Welches Treibhausgas trägt am stärksten zum Klimawandel bei?",
        choices: ["Lachgas", "NOx", "Kohlendioxid"],
        answer: 0,
        reward: 2.1,
        information: "Lachgas wirkt 310 mal so stark wie CO2. Die meisten N2O-Emissionen kommen aus der Landwirtschaft - das Treibhausgaspotenzial von Lachgas aus der Landwirtschaft in Deutschland ist etwa so groß wie 30 Millionen Tonnen CO2."
    },
    {
        question:"Wie kann ich die Inselstaaten unterstützen und einen Beitrag gegen den Meeresspiegelanstieg leisten?",
        choices: ["Urlaub am Meer vermeiden", "Energie-und Ressourcenverbrauch reduzieren", "Nutzung des Rebound-Effekts"],
        answer: 1,
        reward: 0.9,
        information: "Wir alle können einen großen Teil tun, es hilft schon, wenn wir den eigenen Energieverbrauch selbst reduzieren. Dennoch ist die Industrie der größte Energieverbraucher"
    },
    {
        question: "Welche wichtigen Strukturen spielen für den Wald eine große Rolle?",
        choices: ["Zusammenspiel zwischen Flora und Fauna muss beständig sein", "Landschaft rund um den Wald sollte möglichst divers sein", "Baumartenzusammensetzung, Menge an Totholz, Höhlen und Waldentwicklungsphasen"],
        answer: 2,
        reward: 1.3,
        information: "Die Zusammensetzung der Baumarten beeinflusst die Artenvielfalt und die ökologischen Prozesse im Wald, während Totholz und Höhlen wichtige Lebensräume für verschiedene Tierarten bieten. Die verschiedenen Entwicklungsphasen eines Waldes sind ebenfalls wichtig, da sie verschiedene ökologische Bedingungen schaffen und die Biodiversität fördern können."
    },
    {
        question:"Was ist der Rebound-Effekt?",
        choices: ["Wenn der Ball beim Basketball vom Korb zurückspringt und wieder gefangen wird", "Je mehr energieeffiziente Geräte ich nutze, umso mehr Energie spare ich", "Bei Nutzung von energieeffizienten Geräten wird das Verhalten geändert und die Geräte werden mehr genutzt"],
        answer: 2,
        reward: 1.9,
        information: "Der Rebound-Effekt ist der mengenmäßige Unterschied zwischen möglichen Ressourceneinsparungen und den tatsächlichen Einsparungen. Somit führt der Rebound-Effekt dazu, dass das Einsparungspotenzial von Effizienzsteigerungen nicht oder nur teilweise realisiert wird"
    },
    {
        question:"Welche Maßnahmen schützen am besten vor Überschwemmungen?",
        choices: ["Bau von Deichen und Spundwänden", "Schaffung von naturnahen Überschwemmungsflächen", "Bau von höheren Gebäuden"],
        answer: 1,
        reward: 1.7,
        information: "Die Überschwemmungsflächen der Flussauen sind ein starker Hochwasserschutz. Zurzeit wird zwar viel auf technischen Schutz der Flüsse von ihren Auen durch Deiche gesetzt aber so gehen natürliche Rückhalteräume für Hochwasser verloren. Schutzmaßnahmen wie Spundwände sind zwar lokal notwendig, eine dauerhafte Verbesserung wird aber nur durch den Anschluss alter Rückhalteräume erreicht."
    },
    {
        question:"Welcher Aspekt der Energienutzung wird häufig übersehen?",
        choices: ["Die Energie muss effizienter genutzt werden.", "Die genutzte Energie muss immer nachhaltig und erneuerbar sein!", "Nicht benötigte Energie ist die nachhaltigste Energie!"],
        answer: 2,
        reward: 1.9,
        information: "Natürlich sollte die Energiegewinnnung erneuerbar geschehen. Energie wird zudem zwar immer effizienter genutzt und teilweise eingespart, doch Wirtschaftswachstum und Konsumsteigerungen verhindern einen deutlicheren Verbrauchsrückgang.Die nicht benötigte Energie, muss auch nicht erzeugt werden. Dadurch spart man sich natürlich auch die Energiekosten!"
    },
    {
        question:"Warum sind Moore so wichtig für das Klima?",
        choices: ["Moore spiele keine wichtige Rolle für das Klima.", "Moore sind kühlen das Klima ab. ", "Moore sind die effektivsten Kohlenstoffspeicher aller Landlebensräume!"],
        answer: 2,
        reward: 1.8,
        information: "Obwohl Moore weltweit lediglich drei Prozent der globalen Landfläche einnehmen, binden sie ein Drittel des terrestrischen Kohlenstoffes – doppelt so viel wie alle Wälder dieser Erde zusammen. Außerdem speichern Moore viel Wasser und sind Heimat für eine Vielzahl an Tier -und Pflanzenarten.Im weltweiten Vergleich verursacht die Europäische Union die zweithöchsten Treibhausgasemissionen aus der Zerstörung von Moorgebieten."
    },
    {
        question:"Welches der folgenden Abkommen zielt auf den Klimaschutz ab?",
        choices: ["WHO-Abkommen", "Pariser Abkommen ", "NATO-Abkommen"],
        answer: 1,
        reward: 1.5,
        information: "Das Pariser Abkommen, das im November 2016 in Kraft getreten ist, ist ein Abkommen mit dem Ziel des Klimaschutzes."
    },
    {
        question:"Welche Art von Verkehrsmittel verursacht die meisten CO2-Emissionen?",
        choices: ["Auto", "Bus", "Fahrrad"],
        answer: 0,
        reward: 0.8,
        information: "Autos verursachen die meisten CO2-Emissionen im Verkehr."
    },
    {
        question:"Welches Land emittiert die meisten Treibhausgase?",
        choices: ["USA", "Indien", "China"],
        answer: 2,
        reward: 1.5,
        information: "China emittiert mit 30,9 % die meisten Treibhausgase im weltweiten vergleich."
    },
    {
        question:"Welche Maßnahme trägt zur Reduzierung der Abfallproduktion bei?",
        choices: ["Verwenden von Einwegplastik", "Recycling", "Müllverbrennung"],
        answer: 1,
        reward: 1.5,
        information: "Recycling hilft, die Abfallproduktion zu reduzieren."
    },
    {
        question:"Welches Symbol kennzeichnet Klimafreundliche Produkte?",
        choices: ["Grünes Blatt", "Recycling-Symbol", "Akazienbaum"],
        answer: 0,
        reward: 1.6,
        information: "Klimafreundliche Produkte werden durch das grüne Blatt gekennzeichnet."
    },
    {
        question:"Welche Art von Treibhausgasen entsteht hauptsächlich bei der Tierhaltung?",
        choices: ["Kohlenstoffdioxid", "Stickstoff", "Methan"],
        answer: 2,
        reward: 1.2,
        information: "Bei der Tierhaltung entsteht hauptsächlich Methan."
    },
    {
        question:"Welche Pflanze wird häufig zur Herstellung von Biodiesel verwendet?",
        choices: ["Raps", "Weizen", "Kartoffel"],
        answer: 0,
        reward: 1.4,
        information: "Zur Herstellung von Biodiesel wird Raps verwendet."
    },
    {
        question:"Welcher Faktor begünstigt sauren Regen?",
        choices: ["Übermäßige Sonneneinstrahlung", "Luftverschmutzung durch Schwefel- und Stickstoffverbindungen", "Starke Vulkanausbrüche"],
        answer: 1,
        reward: 1.4,
        information: "Saurer Regen ist Regen mit einem niedrigen pH-Wert. Begünstigt wird dieser durch Luftverschmutzungen durch Schwefel- und Stickstoffverbindungen."
    },
    {
        question:"Welche internationale Umweltschutzorganisation setzt sich für den Schutz der Tierwelt ein?",
        choices: ["UNICEF", "WWF", "Greenpeace"],
        answer: 1,
        reward: 1.5,
        information: "Der WWF (World Wide Fund for Nature) setzt sich für den Schutz der Tierwelt ein."
    },
    {
        question:"Welches Verfahren wandelt organische Abfälle in nährstoffreichen Dünger um?",
        choices: ["Kompostierung", "Mülldeponierung", "Verbrennung"],
        answer: 0,
        reward: 0.8,
        information: "Die Kompostierung ist ein umweltfreundliches Verfahren, welches organische Abfälle in nährstoffreichen Dünger umwandelt."
    },
    {
        question:"Welcher Begriff beschreibt die Erwärmung der Erdoberfläche aufgrund von menschlichen Aktivitäten?",
        choices: ["Anthropogener Klimawandel", "Homogener Klimawandel", "Bedingter Klimawandel"],
        answer: 0,
        reward: 1.8,
        information: "Der Begriff anthropogener Klimawandel beschreibt die Erwärmung der Erdoberfläche aufgrund menschlicher Aktivitäten."
    },
    {
        question:"Welcher natürliche Prozess ist entscheidend für den Klimaschutz?",
        choices: ["Zellatmung", "Verwesung", "Photosynthese"],
        answer: 2,
        reward: 1.6,
        information: "Die Photosynthese, bei der Pflanzen Kohlenstoff aufnehmen, ist für den Klimaschutz entscheidend."
    },
    {
        question:"Welche Art von Treibhausgasen entsteht vor allem bei der Verbrennung von fossilen Brennstoffen?",
        choices: ["Methan", "Kohlenstoffdioxid", "Wasserstoff"],
        answer: 1,
        reward: 1.3,
        information: "Bei der Verbrennung von fossilen Brennstoffen entsteht vor allem Kohlenstoffdioxid."
    },
    {
        question:"Welche Tierart ist sehr stark von der der Entwaldung und Lebensraumzerstörung betroffen?",
        choices: ["Tiger", "Grauwolf", "Elefant"],
        answer: 0,
        reward: 1.3,
        information: "Der Tiger ist besonders von der Entwaldung und Lebensraumzerstörung betroffen. Viele Arten sind vom aussterben bedroht."
    },
    {
        question:"Welches Kühlmittel in Klimaanlagen trägt zur Zerstörung der Ozonschicht bei?",
        choices: ["Kohlenstoffdioxid", "FCKW", "Stickstoffdioxid"],
        answer: 1,
        reward: 1.8,
        information: "Fluorchlorkohlenwasserstoffe, kurz FCKW, tragen zur Zerstörung der Ozonschicht bei."
    },
    {
        question:"Welche internationale Organisation setzt sich für den Schutz von bedrohten Tier- und Pflanzenarten ein?",
        choices: ["UNESCO", "UNHCR", "IUCN"],
        answer: 2,
        reward: 1.9,
        information: "Die Internationale Union zur Bewahrung der Natur, kurz IUCN, setzt sich für den Schutz von bedrohten Tier- und Pflanzenarten ein."
    },
    {
        question:"Welche Maßnahme kann zur Reduzierung  des Wasserverbrauchs in Haushalten beitragen?",
        choices: ["Trinken von Regenwasser", "Schließen des Wasserhahns während dem Zähneputzen", "Tägliches Duschen"],
        answer: 1,
        reward: 0.7,
        information: "Während man die Zähne putzt, kann man den Wasserhahn schließen, um den Wasserverbrauch zu reduzieren."
    },
    {
        question:"Welche Maßnahme kann zur Reduzierung der Bodenerosion und zur Erhaltung der Bodenfruchtbarkeit beitragen?",
        choices: ["Monokulturen", "Agroforstwirtschaft", "Pestizideinsatz"],
        answer: 1,
        reward: 1.8,
        information: "Agroforstwitschaft, die Bäume und Nutzpflanzen kombiniert, kann zur Reduzierung der Bodenerosion und Erhaltung der Bodenfruchtbarkeit beitragen."
    },
    {
        question:"Welche Maßnahme kann zur Verringerung von Plastikmüll im Meer beitragen?",
        choices: ["Verwendung von Einwegplastik-Produkten", "Müll direkt ins Meer werfen", "Mülltrennung und Recycling"],
        answer: 2,
        reward: 0.5,
        information: "Zur Verringerung von Plastikmüll im Meer sollte Müll getrennt und recycelt werden."
    },
    {
        question:"Welche internationale Konferenz im Jahr 1992 legte den Grundstein für viele Umweltabkommen und steigerte das Bewusstsein für den Klimaschutz?",
        choices: ["Erdgipfel Rio de Janeiro", "Tokio-Konferenz", "Erdrettung Kopenhagen"],
        answer: 0,
        reward: 1.8,
        information: "Der Erdgipfel in Rio de Janeiro im Jahr 1992 legte den Grundstein für viele Umweltabkommen und steigerte das Bewusstsein für den Klimaschutz."
    },
    {
        question:"Welcher Begriff beschreibt das Auftreten ungewöhnlicher, nicht zyklischer, veränderter Meeresströmungen im äquatorial Pazifik?",
        choices: ["El Niño", "Meeresversauerung", "Meeressturm"],
        answer: 0,
        reward: 1.8,
        information: "Dieses Phänomen nennt man El Niño. Es tritt in unregelmäßigen Abständen von durchschnittlich vier Jahren auf und beeinflusst die Wettermuster auf drei Vierteln der Erde. "
    },
    {
        question:"Welches internationale Abkommen zielt auf den Schutz der Ozonschicht ab?",
        choices: ["Pariser Abkommen", "Kyoto-Protokoll", "Montreal-Protokoll"],
        answer: 2,
        reward: 1.4,
        information: "Das Montreal-Protokoll ist ein verbindlicher Vertrag des Umweltrechts, das auf den Schutz der Ozonschicht abzielt."
    },
    {
        question:"Welcher Prozess entfernt Schadstoffe aus Abgasen, um die Luftqualität zu verbessern?",
        choices: ["Schadstoffemission", "Rauchzerberstung", "Rauchgasreinigung"],
        answer: 2,
        reward: 1.5,
        information: "Die Rauchgasreinigung ist ein Prozess, der Schadstoffe aus Abgasen entfernt, um die Luftqualität zu verbessern."
    },
    {
        question:"Welcher Begriff beschreibt den natürlichen Prozess, bei dem Wasser in die Atmosphäre verdunstet und wieder zu Boden fällt?",
        choices: ["Bodenerosion", "Wasserzyklus", "Klimawandel"],
        answer: 1,
        reward: 1,
        information: "Diesen natürlichen Prozess nennt man Wasserzyklus oder Wasserkreislauf."
    },
    {
        question:"Welches globale Problem führt zu einer Erwärmung der Erdatmosphäre und verändert das Klima?",
        choices: ["Ozonabbau", "Meeresverschmutzung", "Treibhausgasemission"],
        answer: 2,
        reward: 1.3,
        information: "Treibhausgasemissionen führen zu einer Erwärmung der Erdatmosphäre und verändern somit das Klima."
    },
    {
        question:"Welche Maßnahme kann zur Reduzierung der Umweltauswirkungen durch die Lebensmittelproduktion beitragen?",
        choices: ["Monokulturen", "Nachhaltige Landwirtschaft", "Massentierhaltung"],
        answer: 1,
        reward: 1.3,
        information: "Eine nachhaltige Landwirtschaft kann zu Reduzierung der Umweltauswirkungen führen."
    },
    {
        question:"Welches internationale Umweltabkommen zielt darauf ab, gefährliche Chemikalien zu kontrollieren und zu reduzieren?",
        choices: ["Genfer Konvention", "Basler Übereinkommen", "Stockholmer Übereinkommen"],
        answer: 2,
        reward: 1.9,
        information: "Das Stockholmer Übereinkommen ist eine völkerrechtlich bindende Verbots- und Beschränkungsmaßnahme für gefährliche Chemikalien und organische Schadstoffe."
    },
    {
        question:"Welcher natürliche Prozess recycelt Nährstoffe in Ökosystemen und trägt zur Bodenfruchtbarkeit bei?",
        choices: ["Biodiversität", "Photosynthese", "Nährstoffkreislauf"],
        answer: 2,
        reward: 1,
        information: "Dieser Prozess ist der Nährstoffkreislauf. Er ist eine periodische Bewegung bei der sich abgestorbene Pflanzenteile zersetzen und Nährstoffe freigeben, die im Boden gespeichert und anschließend wieder durch Wurzeln aufgenommen werden."
    },
    {
        question:"Welcher Begriff beschreibt die Ablagerung von Schadstoffen aus der Atmosphäre auf Oberflächen?",
        choices: ["Ozonloch", "Versauerung", "Luftverschmutzung"],
        answer: 2,
        reward: 0.8,
        information: "Luftverschmutzung beschreibt diese Ablagerung."
    },
    {
        question:"Aus was entseht Kohle unter Wärme, Druck und Luftabschluss?",
        choices: ["Biomasse", "Plastik", "Aluminium"],
        answer: 0,
        reward: 1.1,
        information: "Durch Wärme, Druck und Luftabschluss entsteht Kohle aus Biomasse. Dieser Prozess dauert Millionen von Jahren."
    },
    {
        question:"Welcher Begriff beschreibt den Prozess, bei dem Wasser von der Blattunterseite von Pflanzen verdunstet?",
        choices: ["Verdunstung", "Niederschlag", "Transpiration"],
        answer: 2,
        reward: 1.5,
        information: "Diesen Prozess nennt man Transpiration. Er wird durch Umweltfaktoren wie Luftfeuchtigkeit, Temperatur und Lichtintensität beeinflusst."
    },
    {
        question:"Welcher Begriff beschreibt die Wiederherstellung von Lebensräumen, um einen möglichst natürlichen Zustand zu erreichen?",
        choices: ["Renaturierung", "Ökostromerzeugung", "Postökotisierung"],
        answer: 0,
        reward: 1.3,
        information: "Die möglichst naturnahe Wiederherstellung von Lebensräumen nennt man Renaturierung."
    },
    {
        question:"Welche Maßnahme kann zur Reduzierung des Wasserverbrauchs in landwirtschaftlichen Betrieben beitragen?",
        choices: ["Tropensturzfluten", "intensive Bewässerung", "Tröpfchenbewässerung"],
        answer: 2,
        reward: 1,
        information: "Tröpfchenbewässerung wird verwendet, um den Wasserverbrauch zu reduzieren. Dabei werden aus kleinen Öffnungen in Schläuchen nur geringe, exakte Wassermengen abgegeben."
    },
    {
        question:"Welche internationale Organisation fördert den Schutz von Umwelt und Biodiversität durch die Ausweisung von Schutzgebieten?",
        choices: ["WWF", "IUCN", "UNESCO"],
        answer: 2,
        reward: 1.3,
        information: "Die UNESCO (United Nations Educational, Scientific and Cultural Organization) fördert den Umweltschutz durch die Ausweisung von Schutzgebieten."
    },
    {
        question:"Welcher Begriff beschreibt den Verlust von Bodenfruchtbarkeit aufgrund von Übernutzung und Umweltverschmutzung?",
        choices: ["Erddekontamination", "Bodendegradation", "Bodenerosion"],
        answer: 1,
        reward: 1.8,
        information: "Bodendegradation beschreibt die Verschlechterung der Bodenfruchtbarkeit bis hin zum Verlust."
    },
    {
        question:"Was versteht man unter einer Monokultur?",
        choices: ["Den Anbau einer einzigen Pflanzenart über mehrere Jahre auf derselben Anbaufläche.", "Die Verwendung von einem einzigen Pestizid zur Schädlingsbekämpfung auf einer Anbaufläche.", "Das halten von einer einzigen Tierart über mehrere Jahre auf derselben Weide."],
        answer: 0,
        reward: 1.3,
        information: "Bei einer Monokultur wird über mehrere Jahre eine einzige Pflanzenart auf derselben Fläche angebaut."
    },
    {
        question:"Wie wird Geothermie auch genannt?",
        choices: ["Pyrolyse", "Erdwärme", "Bodentherme"],
        answer: 1,
        reward: 1.2,
        information: "Geothermie wird auch Erdwärme genannt."
    },
    {
        question:"Was ist eine Voraussetzung für einen tropischen Wirbelsturm?",
        choices: ["Maximal 500 km Entfernung zum Äquator", "Meeresoberflächentemperatur von mindestens 26 °C", "Wolkenloser Himmel"],
        answer: 1,
        reward: 2,
        information: "Damit ein tropischer Wirbelsturm entstehen kann, muss die Temperatur der Meeresoberfläche mindestens 26 °C betragen. Außerdem ist eine Mindestentfernung von circa 500 km vom Äquator nötig."
    },
    {
        question:"Was versteht man unter einem Ozonloch?",
        choices: ["Eine starke Ausdünnung der Ozonschicht.", "Ein für mehrere Minuten anhaltendendes Loch, nachdem eine Rakete die Ozonschicht durchdringt.", "Ein Loch im Hals einer Wasserflasche."],
        answer: 0,
        reward: 1.7,
        information: "Ein Ozonloch ist eine starke Ausdünnung der Ozonschicht. Durch diese Ausdünnung kann mehr UV-Strahlung auf die Erdoberfläche gelangen."
    },
    {
        question:"Was versteht man unter dem Treibhauseffekt?",
        choices: ["Erkaltung der Erdoberfläche aufgrund von Treibhausgasen in der Atmosphäre.", "Ein Prozess, bei dem Treibhausgase die Wärme in der Atmosphäre einschließen.", "Ein Prozess, bei dem die Sauerstoffkonzentration in der Atmosphäre erhöht wird."],
        answer: 1,
        reward: 1.3,
        information: "Der Treibhauseffekt ist ein natürlicher Prozess, bei dem Treibhausgase die Wärme in der Erdatmosphäre einschließen."
    },
    {
        question:"Was ist ein effektiver Weg, um Energie in einem Haushalt zu sparen?",
        choices: ["Dauerhaft alle Elektrogeräte eingeschaltet lassen", "Energieeffiziente Geräte verwenden", "Häufiges Lüften"],
        answer: 1,
        reward: 0.7,
        information: "Der Einsatz von energieeffizienten Geräten kann den Energieverbrauch in einem Haushalt erheblich reduzieren."
    },
    {
        question:"Was ist ein Beispiel für eine erneuerbare Energie?",
        choices: ["Windkraft", "Kohle", "Erdöl"],
        answer: 0,
        reward: 0.7,
        information: "Erneuerbare Engergien wie Windkraft sind nachhaltige Alternativen zu fossilen Brennstoffen."
    },
    {
        question:"Welche Beleuchtungsoption ist energieeffizienter?",
        choices: ["Leuchtstoffröhren", "Glühbirnen", "LED-Lampen"],
        answer: 2,
        reward: 1.2,
        information: "LED-Lampen sind deutlich energieeffizienter und langlebiger als herkömmliche Glühbirnen."
    },
    {
        question:"Was ist ein Beispiel für passives Energieeffizienzdesign in einem Gebäude?",
        choices: ["Installation einer effizienten Heizungsanlage", "Nutzung von Tageslicht als Beleuchtung", "Verwendung von alten, undichten Fenstern"],
        answer: 1,
        reward: 1.3,
        information: "Passives Energieeffizienzdesign nutzt natürliche Ressourcen wie Tageslicht, um den Energieverbrauch zu senken."
    },
    {
        question:"Welche Aussage ist wahr?",
        choices: ["Elektrogeräte im Standby-Modus verbrauchen keine Energie.", "Elektrogeräte im Standby-Modus verbrauchen genauso viel Energie wie im Betrieb.", "Der Energieverbrauch von Elektrogeräten im Standby-Modus kann vernachlässigt werden."],
        answer: 1,
        reward: 1.2,
        information: "Elektrogeräte im Standby-Modus verbrauchen weiterhin Energie, auch wenn sie nicht aktiv genutzt werden."
    },
    {
        question:"Welches Element wird oft zur Speicherung von Energie in erneuerbaren Energiesystemen verwendet.",
        choices: ["Wasserstoff", "Erdgas", "Blei"],
        answer: 0,
        reward: 1.4,
        information: "Wasserstoff wird häufig als Energiespeicher in erneuerbaren Energiesystemen eingesetzt, um Energie bei Bedarf verfügbar zu machen."
    },
    {
        question:"Was ist die Hauptursache des Klimawandels?",
        choices: ["Natürliche Klimaschwankungen", "Der Einfluss von Vulkanen", "Die Freisetzung von Treibhausgasen durch menschliche Aktivitäten"],
        answer: 2,
        reward: 1,
        information: "Der menschliche Einfluss auf den Klimawandel ist hauptsächlich auf die Freisetzung von Treibhausgasen wie CO2 zurückzuführen."
    },
    {
        question:"Was ist ein Effekt des Klimawandels?",
        choices: ["Abkühlung der Erdatmosphäre", "Anstieg des Meeresspiegels", "Erhöhung der Wüstenbildung"],
        answer: 1,
        reward: 1.2,
        information: "Der Klimawandel führt zum Anstieg des Meeresspiegels aufgrund der Erwärmung und Ausdehnung der Ozeane und das Schmelzen der Pole."
    },
    {
        question:"Welcher Bereich ist besonders vom Klimawandel betroffen?",
        choices: ["Polargebiete", "Wüstenregionen", "Gemäßigte Klimazonen"],
        answer: 0,
        reward: 0.9,
        information: "Die Polargebiete erwärmen sich schneller als der globale Durchschnitt und sind daher besonders vom Klimawandel betroffen."
    },
    {
        question:"Welche Region ist besonders anfällig für zunehmende Hitzewellen aufgrund des Klimawandels?",
        choices: ["Antarktis", "Saharawüste", "Südeuropa"],
        answer: 2,
        reward: 1.5,
        information: "Südeuropa ist besonders anfällig für steigende Temperaturen und häufige Hitzewellen."
    },
    {
        question:"Welche Art von Solaranlagen wandelt Sonnenlicht direkt in elektrische Energie um?",
        choices: ["Photovoltaik", "Solarthermie", "Sonnenkraftanlage"],
        answer: 0,
        reward: 1.4,
        information: "Photovoltaik-Anlagen wandeln Sonnenlicht direkt in elektrische Energie um."
    },
    {
        question:"Welcher Kontinent beherbergt den größten Teil der weltweiten Regenwälder?",
        choices: ["Afrika", "Nordamerika", "Südamerika"],
        answer: 2,
        reward: 1.2,
        information: "Der größte Teil der weltweiten Regenwälder befindet sich in Südamerika, insbesondere im Amazonasgebiet."
    },
    {
        question:"Wie viel Prozent der bekannten Tier- und Pflanzenarten der Welt sind in Regenwäldern zu finden?",
        choices: ["5 %", "25 %", "50 %"],
        answer: 1,
        reward: 1.5,
        information: "Etwa 25 % der bekannten Tier- und Pflanzenarten der Welt sind in Regenwäldern beheimatet. Und das obwohl nur circa 13 % der Erde mit Regenwäldern bedeckt sind."
    },
    {
        question:"Welche Funktion haben Regenwälder im globalen Klimasystem?",
        choices: ["Sie tragen zur Erwärmung der Erde bei", "Sie haben keinen Einfluss auf das Klima", "Sie absorbieren Kohlendioxid"],
        answer: 2,
        reward: 1.1,
        information: "Regenwälder sind wichtige Kohlenstoffsenken und tragen zur Reduzierung von Treibhausgasen bei. Sie tragen zur Stabilisierung des Klimas bei."
    },
    {
        question:"Was ist der Boden in Regenwäldern oft?",
        choices: ["Stark versauert", "Reich an Nährstoffen", "Trocken und sandig"],
        answer: 0,
        reward: 1.7,
        information: "Der Boden in Regenwäldern ist oft stark versauert, da die Niederschläge die Nährstoffe aufspühlen."
    },
    {
        question:"Welche gefährdete Menschenaffenart ist in den Regenwäldern Südostasiens beheimatet?",
        choices: ["Gorillas", "Orang-Utans", "Kapuzineraffen"],
        answer: 1,
        reward: 1.6,
        information: "Orang-Utans sind in den Regenwäldern von Borneo und Sumatra in Südostasien beheimatet und stark gefährdet."
    },
    {
        question:"Wie werden die Bewohner von Regenwäldern oft genannt, die in traditionellen Lebensweisen in diesen Gebieten leben?",
        choices: ["Regenwäldler", "Ureinwohner", "Dschungelbewohner"],
        answer: 1,
        reward: 0.8,
        information: "Die Menschen, die in traditionellen Lebensweisen in Regenwäldern leben, werden oft als Ureinwohner bezeichnet."
    },
    {
        question:"Welches Tier, das im australischen Regenwald lebt, wird auch Honigbär genannt?",
        choices: ["Panda", "Koala", "Braunbär"],
        answer: 1,
        reward: 1.2,
        information: "Der Honigbär, der im australischen Regenwald beheimatet ist, ist besser bekannt als Koala."
    },
    {
        question:"Welche der folgenden Holzarten wird oft illegal aus Regenwäldern entnommen?",
        choices: ["Kiefernholz", "Teakholz", "Ahornholz"],
        answer: 1,
        reward: 1.3,
        information: "Teakholz ist eine Holzart, die oft illegal aus den Regenwäldern entnommen wird und aufgrund ihrer Qualität sehr begehrt ist."
    },
    {
        question:"Welche der folgenden Naturkatastrophen wir durch die Bewegung der Erdplatten verursacht?",
        choices: ["Vulkanausbruch", "Hitzewelle", "Tornade"],
        answer: 0,
        reward: 0.8,
        information: "Vulkanausbrüche werden oft durch die Bewegung der Erdplatten und den Ausstoß von Magma verursacht."
    },
    {
        question:"Welche internationale Vereinbarung hat das Ziel, den illegalen Handel mit gefährdeten Tierarten zu bekämpfen?",
        choices: ["Artenschutzabkommen (CITES)", "Handelsabkommen von Brüssel", "UNESCO-Welterbekonvention"],
        answer: 0,
        reward: 1.2,
        information: "Das Washingtoner Artenschutzabkommen (CITES) soll den illegalen Handel mit gefährdeten Arten verhindern."
    },
    {
        question:"Welcher Kontinent ist besonders von der Entwaldung betroffen?",
        choices: ["Europa", "Afrika", "Antarktika"],
        answer: 1,
        reward: 0.7,
        information: "Die Entwaldung ist in vielen Teilen Afrikas ein ernstet Umweltproblem."
    },
    {
        question:"Welche Branche ist oft für großflächige Entwaldung verantwortlich?",
        choices: ["Textilindustrie", "Lebensmittelindustrie", "Stahlindustrie"],
        answer: 1,
        reward: 1.2,
        information: "Die Lebensmittelindustrie trägt durch den Anbau von Monokulturen wie Soja und Palmöl stark zu Entwaldung bei."
    },
    {
        question:"Was sind die sozialen Auswirkungen der Abholzung auf indigene Völker?",
        choices: ["Steigender Lebensstandard und Wohlstand", "Vertreibung und Verlust von Lebensgrundlagen und Kultur", "Die Abholzung wirkt sich nicht auf indigene Völker aus"],
        answer: 1,
        reward: 0.9,
        information: "Abholzung hat oft negative Auswirkungen auf indigene Gemeinschaften, die von den Wäldern abhängig sind. Somit verlieren sie ihre Lebensgrundlagen und Kultur und werden vertrieben."
    },
    {
        question:"Welches internationale Abkommen zielt auf die Bekämpfung der Abholzung und Waldzerstörung ab?",
        choices: ["Pariser Klimaabkommen", "Kyoto-Protokoll", "REDD+"],
        answer: 2,
        reward: 1.4,
        information: "REDD+ steht für 'Reduktion der Emissionen aus Entwaldung und Walddegradierung' und zielt auf die Erhaltung der Wälder ab."
    },
    {
        question:"Welche Tiere sind von der Abholzung der Wälder am stärksten betroffen?",
        choices: ["Wale", "Bienen", "Ameisen"],
        answer: 1,
        reward: 0.8,
        information: "Bienen und andere Bestäuber sind von der Zerstörung ihrer Lebensräume in Wäldern durch Abholzung stark betroffen."
    },
    {
        question:"Welche langfristigen Auswirkungen hat Abholzung auf die Artenvielfalt?",
        choices: ["Sie erhöht die Artenvielfalt", "Sie führt zur Ausrottung einiger Arten", "Sie hat keinen Einfluss auf die Artenvielfalt"],
        answer: 1,
        reward: 0.8,
        information: "Abholzung kann dazu führen, dass Tier- und Pflanzenarten ihre Lebensräume verlieren und aussterben."
    },
]
