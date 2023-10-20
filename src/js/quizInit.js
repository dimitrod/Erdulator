const quiz = [
    {
        question:"Kühlte sich das Klima durch die Eroberungszüge von Dschingis Khan ab?", 
        choices: ["Nein, das hatte keinen Einfluss!", "Ja, durch die natürliche Wiederbewaldung auf dem entvölkerten Land wurde das Klima heruntergekühlt", "Wer ist Dschingis Khan!"], 
        answer: 1,
        reward: 1.8,
        information: "Der hat so hart geraided, dass alle down gegangen sind und die Natur back war."
    },
    {
        question:"Wie viel Tonnen C02-Äquivalente emmitierte Deutschland im Jahr 2022?",
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
        choices: ["Urlaub am Meer vermeiden", "Energie-und Ressourcenverbrauch reduzieren", "Nutzung des Rebound-Effektes"],
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
        choices: ["Moore spiele keine wichtige Rolle für das Klima.", "Moore sind große Feuchtgebiete und speichern viel Wasser. ", "Moore sind die effektivsten Kohlenstoffspeicher aller Landlebensräume!"],
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
        choices: ["Grünes Blatt", "Recycling-Symbol", "Akazien Baum"],
        answer: 0,
        reward: 1.6,
        information: "Klimafreundliche Produkte werden durch das grüne Blatt gekennzeichnet."
    },
    {
        question:"Welche Art von Verkehrsmittel verursacht die meisten CO2-Emissionen?",
        choices: ["Auto", "Bus", "Fahrrad"],
        answer: 0,
        reward: 0.8,
        information: "Autos verursachen die meisten CO2-Emissionen im Verkehr."
    },
    {
        question:"Welche Art von Treibhausgasen entsteht hauptsächlich bei der Tierhaltung?",
        choices: ["Kohlenstoffdioxid", "Stickstoff", "Methan"],
        answer: 2,
        reward: 1.2,
        information: "Bei der Tierhaltung entsteht hauptsächlich Methan."
    },
    {
        question:"Welches Kühlmittel in Klimaanlagen trägt zur Zerstörung der Ozonschicht bei?",
        choices: ["Kohlenstoffdioxid", "FCKW", "Stickstoffdioxid"],
        answer: 1,
        reward: 1.8,
        information: "Fluorchlorkohlenwasserstoffe, kurz FCKW, tragen zur Zerstörung der Ozonschicht bei."
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
        question:"Welches Kühlmittel in Klimaanlagen trägt zur Zerstörung der Ozonschicht bei?",
        choices: ["Kohlenstoffdioxid", "FCKW", "Stickstoffdioxid"],
        answer: 1,
        reward: 1.8,
        information: "Fluorchlorkohlenwasserstoffe, kurz FCKW, tragen zur Zerstörung der Ozonschicht bei."
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
        question:"Welche internationale Organisation setzt sich für den Schutz von dedrohten Tier- und Pflanzenarten ein?",
        choices: ["UNESCO", "UNHCR", "IUCN"],
        answer: 2,
        reward: 1.9,
        information: "Die Internationale Union zur Bewahrung der Natur, kurz IUCN, setzt sich für den Schutz von bedrohten Tier- und Pflanzenarten ein."
    },
    {
        question:"Welche Maßnahme kann zur Reduzierung  des Wasserverbrauchs in Haushalten beitragen?",
        choices: ["Verwenden von Regenwasser", "Schließen des Wasserhahns während dem Zähneputzen", "Tägliches Duschen"],
        answer: 1,
        reward: 0.7,
        information: "Während man die Zähne putzt, kann man den Wasserhahn schließen, um den Wasserverbrauch zu reduzieren."
    },
    {
        question:"Welche Maßnahme kann zur Reduzierung von der Bodenerosion und zur Erhaltung der Bodenfruchtbarkeit beitragen?",
        choices: ["Monokulturen", "Agroforstwirtschaft", "Pestizideinsatz"],
        answer: 1,
        reward: 1.8,
        information: "Agroforstwitschaft, die Bäume und Nutzpflanzen kombiniert, kann zur Reduzierung der Bodenerosion und Erhaltung der Bodenfruchtbarkeit beitragen."
    },
    {
        question:"Welche Maßnahme kann zur Verringerung von Platikmüll im Meer beitragen?",
        choices: ["Verwendung von Einwegplatik-Produkten", "Müll direkt ins Meer werfen", "Mülltrennung und Recycling"],
        answer: 2,
        reward: 0.5,
        information: "Zur Verringerung von Platikmüll im Meer sollte Müll getrennt und recycled werden."
    },
    {
        question:"Welche internationale Konferenz im Jahr 1992 legte den Grundstein für viele Umweltabkommen und das Bewusstsein für den Klimaschutz?",
        choices: ["Erdgipfel Rio de Janeiro", "Tokio-Konferenz", "Erdrettung Kopenhagen"],
        answer: 0,
        reward: 1.8,
        information: "Der Erdgipfel in Rio de Janeiro im Jahr 1992 legte den Grundstein für viele Umweltabkommen und das Bewusstsein für den Klimaschutz."
    },
]
