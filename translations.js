// translations.js - Kompletní překlady pro STROP DESIGN web

const translations = {
    cs: {
        // Navigation
        nav: {
            home: 'Úvod',
            about: 'O nás',
            services: 'Služby',
            portfolio: 'Reference',
            process: 'Proces',
            contact: 'Kontakt'
        },
        
        // Hero Section
        hero: {
            badge: 'Od základů po finální design',
            title: 'Komplexní <span>rekonstrukce</span><br>s důrazem na <span>stropy</span>',
            description: 'Specializujeme se na designové stropy všech typů, ale dokážeme realizovat kompletní rekonstrukci od A do Z. Vlastní truhlárna, 15+ řemeslníků, 20 let zkušeností.',
            stats: {
                projects: 'Realizací',
                venues: 'Hospod & klubů',
                years: 'Let zkušeností',
                craftsmen: 'Vlastních řemeslníků'
            },
            ctaPrimary: 'Nezávazná poptávka',
            ctaSecondary: 'Naše práce'
        },
        
        // About Section
        about: {
            title: 'Děláme to,<br>co ostatní nedokážou',
            highlight: 'Nejsme jen montážní firma. Máme vlastní truhlárnu, navrhujeme nábytek na míru a realizujeme kompletní rekonstrukce.',
            text1: 'Začínali jsme jako stavební firma před 20 lety. Postupně jsme si vybudovali vlastní tým řemeslníků - od omítkářů přes truhláře po elektrikáře. Dnes se specializujeme hlavně na <strong>designové stropy</strong>, které jsou naší vášní, ale stále realizujeme kompletní rekonstrukce komerčních prostor.',
            text2: 'Máme zkušenosti se speciálními projekty - <strong>kostely, nemocnice, hospody, kluby</strong>. Prostory, kde je potřeba citlivý přístup a pochopení specifických požadavků.',
            features: {
                workshop: 'Vlastní truhlárna',
                furniture: 'Návrhy nábytku',
                team: '15 stálých řemeslníků',
                complete: 'Kompletní rekonstrukce'
            }
        },
        
        // Services Section
        services: {
            title: 'Co všechno umíme',
            subtitle: 'Specializace na stropy, ale zvládneme kompletní rekonstrukci',
            
            // Main service - Ceilings
            ceilings: {
                priority: 'PRIORITA',
                title: 'DESIGNOVÉ STROPY',
                description: 'Naše současná hlavní specializace. Od klasických sádrokartonových konstrukcí přes napínací stropy až po klimatizační systémy. Každý strop je pro nás umělecké dílo.',
                types: {
                    plasterboard: {
                        title: 'Sádrokartonové',
                        desc: 'Víceúrovňové konstrukce, LED osvětlení, akustické řešení'
                    },
                    stretch: {
                        title: 'Napínací (Avenir)',
                        desc: 'Vinylové PVC, lesklé/matné, fotorealistický tisk'
                    },
                    climate: {
                        title: 'Klimatizační (Gloria)',
                        desc: 'Topení a chlazení, úspora energie 10-30%'
                    },
                    led: {
                        title: 'Speciální LED',
                        desc: 'RGB systémy pro kluby, DMX řízení'
                    }
                }
            },
            
            // Other services
            cards: [
                {
                    title: 'Kompletní rekonstrukce',
                    description: 'Od bourání po finální úklid. Zdi, podlahy, elektřina, voda, topení. Koordinace všech řemesel pod jednou střechou.'
                },
                {
                    title: 'Nábytek na míru',
                    description: 'Vlastní truhlárna, originální návrhy. Bary, police, recepce, vestavěné skříně. Vše podle vašich požadavků.'
                },
                {
                    title: 'Designové úpravy',
                    description: 'Benátské štuky, 3D panely, strukturované omítky. Specializace na náročné prostory - kostely, nemocnice.'
                },
                {
                    title: 'Podlahy',
                    description: 'Vinylové, dřevěné parkety, epoxidové stěrky. Dekorativní povrchy pro komerční prostory.'
                },
                {
                    title: 'Osvětlení',
                    description: 'Profesionální LED systémy, světelné show pro kluby, architektonické osvětlení, úsporná řešení.'
                },
                {
                    title: 'Speciální projekty',
                    description: 'Kostely, nemocnice, památkově chráněné objekty. Citlivý přístup, respekt k původní architektuře.'
                }
            ]
        },
        
        // Portfolio Section
        portfolio: {
            title: 'Naše realizace',
            subtitle: 'Designové rekonstrukce speciálních prostor',
            items: [
                { title: 'Hospody & Restaurace', count: '50+ realizací' },
                { title: 'Kluby & Diskotéky', count: '30+ realizací' },
                { title: 'Nemocnice & Kliniky', count: '15+ realizací' },
                { title: 'Kostely & Sakrální stavby', count: '8 realizací' },
                { title: 'Kanceláře & Coworkingy', count: '40+ realizací' },
                { title: 'Luxusní rezidence', count: '25+ realizací' },
                { title: 'Hotely & Penziony', count: '20+ realizací' },
                { title: 'Obchody & Showroomy', count: '35+ realizací' },
                { title: 'Speciální projekty', count: 'Jedinečné realizace' }
            ]
        },
        
        // Process Section
        process: {
            title: 'Jak funguje spolupráce',
            subtitle: 'Transparentní proces od konzultace po předání',
            steps: [
                {
                    title: 'Konzultace',
                    description: 'Přijedeme, prohlédneme, poradíme. Nezávazně a zdarma.',
                    duration: '1-2 dny'
                },
                {
                    title: 'Návrh & kalkulace',
                    description: 'Detailní návrh řešení, transparentní cenová nabídka.',
                    duration: '3-5 dní'
                },
                {
                    title: 'Realizace',
                    description: 'Vlastní řemeslníci, kontrola kvality, dodržení termínů.',
                    duration: '2-8 týdnů'
                },
                {
                    title: 'Nábytek na míru',
                    description: 'Pokud je potřeba, vyrobíme v naší truhlárně.',
                    duration: '1-3 týdny'
                },
                {
                    title: 'Předání & servis',
                    description: 'Kompletní předání, záruka 5 let, následný servis.',
                    duration: '1 den'
                }
            ]
        },
        
        // Contact Section
        contact: {
            title: 'Pojďme to probrat',
            subtitle: 'Rádi se s vámi setkáme a probereme váš projekt',
            info: {
                title: 'Kontakt',
                address: {
                    label: 'Sídlo & showroom',
                    street: 'Průmyslová 1234',
                    city: '170 00 Praha 7'
                },
                phone: {
                    label: 'Telefon',
                    number: '+420 777 123 456'
                },
                email: {
                    label: 'E-mail',
                    address: 'info@stropdesign.cz'
                },
                hours: {
                    label: 'Pracovní doba',
                    weekdays: 'Po-Pá: 7:00 - 17:00',
                    saturday: 'So: 9:00 - 12:00'
                }
            }
        },
        
        // Video Gallery
        video: {
            title: 'Video prezentace',
            subtitle: 'Prohlédněte si naše realizace v pohybu',
            items: [
                {
                    title: 'Moderní stropní konstrukce',
                    description: 'Ukázka montáže napínacího stropu s LED osvětlením'
                },
                {
                    title: 'Rekonstrukce klubu',
                    description: 'Kompletní přeměna interiéru s RGB osvětlením'
                }
            ]
        },
        
        // Footer
        footer: {
            copyright: '© 2025 STROP DESIGN s.r.o. | IČO: 12345678',
            services: 'Komplexní rekonstrukce • Designové stropy • Nábytek na míru',
            stats: '20 let na trhu • 500+ realizací • 15 vlastních řemeslníků'
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            services: 'Services',
            portfolio: 'Portfolio',
            process: 'Process',
            contact: 'Contact'
        },
        
        // Hero Section
        hero: {
            badge: 'From foundation to final design',
            title: 'Complete <span>renovations</span><br>with focus on <span>ceilings</span>',
            description: 'We specialize in designer ceilings of all types, but we can handle complete renovation from A to Z. Own carpentry, 15+ craftsmen, 20 years of experience.',
            stats: {
                projects: 'Projects',
                venues: 'Pubs & clubs',
                years: 'Years experience',
                craftsmen: 'Own craftsmen'
            },
            ctaPrimary: 'Free consultation',
            ctaSecondary: 'Our work'
        },
        
        // About Section
        about: {
            title: 'We do what<br>others cannot',
            highlight: 'We are not just an installation company. We have our own carpentry workshop, design custom furniture and carry out complete renovations.',
            text1: 'We started as a construction company 20 years ago. We gradually built our own team of craftsmen - from plasterers through carpenters to electricians. Today we mainly specialize in <strong>designer ceilings</strong>, which are our passion, but we still carry out complete renovations of commercial spaces.',
            text2: 'We have experience with special projects - <strong>churches, hospitals, pubs, clubs</strong>. Spaces that require a sensitive approach and understanding of specific requirements.',
            features: {
                workshop: 'Own carpentry',
                furniture: 'Furniture design',
                team: '15 permanent craftsmen',
                complete: 'Complete renovations'
            }
        },
        
        // Services Section
        services: {
            title: 'What we can do',
            subtitle: 'Specializing in ceilings, but we can handle complete renovation',
            
            // Main service - Ceilings
            ceilings: {
                priority: 'PRIORITY',
                title: 'DESIGNER CEILINGS',
                description: 'Our current main specialization. From classic plasterboard constructions through stretch ceilings to climate systems. Every ceiling is a work of art for us.',
                types: {
                    plasterboard: {
                        title: 'Plasterboard',
                        desc: 'Multi-level constructions, LED lighting, acoustic solutions'
                    },
                    stretch: {
                        title: 'Stretch (Avenir)',
                        desc: 'Vinyl PVC, glossy/matte, photorealistic printing'
                    },
                    climate: {
                        title: 'Climate (Gloria)',
                        desc: 'Heating and cooling, energy savings 10-30%'
                    },
                    led: {
                        title: 'Special LED',
                        desc: 'RGB systems for clubs, DMX control'
                    }
                }
            },
            
            // Other services
            cards: [
                {
                    title: 'Complete renovations',
                    description: 'From demolition to final cleaning. Walls, floors, electricity, water, heating. Coordination of all trades under one roof.'
                },
                {
                    title: 'Custom furniture',
                    description: 'Own carpentry, original designs. Bars, shelves, receptions, built-in wardrobes. Everything according to your requirements.'
                },
                {
                    title: 'Design modifications',
                    description: 'Venetian stucco, 3D panels, textured plasters. Specialization in demanding spaces - churches, hospitals.'
                },
                {
                    title: 'Flooring',
                    description: 'Vinyl, wooden parquet, epoxy screeds. Decorative surfaces for commercial spaces.'
                },
                {
                    title: 'Lighting',
                    description: 'Professional LED systems, light shows for clubs, architectural lighting, energy-saving solutions.'
                },
                {
                    title: 'Special projects',
                    description: 'Churches, hospitals, heritage buildings. Sensitive approach, respect for original architecture.'
                }
            ]
        },
        
        // Portfolio Section
        portfolio: {
            title: 'Our projects',
            subtitle: 'Design renovations of special spaces',
            items: [
                { title: 'Pubs & Restaurants', count: '50+ projects' },
                { title: 'Clubs & Discos', count: '30+ projects' },
                { title: 'Hospitals & Clinics', count: '15+ projects' },
                { title: 'Churches & Sacred Buildings', count: '8 projects' },
                { title: 'Offices & Coworking', count: '40+ projects' },
                { title: 'Luxury Residences', count: '25+ projects' },
                { title: 'Hotels & Guesthouses', count: '20+ projects' },
                { title: 'Shops & Showrooms', count: '35+ projects' },
                { title: 'Special Projects', count: 'Unique projects' }
            ]
        },
        
        // Process Section
        process: {
            title: 'How cooperation works',
            subtitle: 'Transparent process from consultation to handover',
            steps: [
                {
                    title: 'Consultation',
                    description: 'We come, inspect, advise. Non-binding and free.',
                    duration: '1-2 days'
                },
                {
                    title: 'Design & calculation',
                    description: 'Detailed solution design, transparent price offer.',
                    duration: '3-5 days'
                },
                {
                    title: 'Implementation',
                    description: 'Own craftsmen, quality control, deadline compliance.',
                    duration: '2-8 weeks'
                },
                {
                    title: 'Custom furniture',
                    description: 'If needed, we produce in our carpentry.',
                    duration: '1-3 weeks'
                },
                {
                    title: 'Handover & service',
                    description: 'Complete handover, 5-year warranty, follow-up service.',
                    duration: '1 day'
                }
            ]
        },
        
        // Contact Section
        contact: {
            title: 'Let\'s discuss it',
            subtitle: 'We\'ll be happy to meet you and discuss your project',
            info: {
                title: 'Contact',
                address: {
                    label: 'Headquarters & showroom',
                    street: 'Průmyslová 1234',
                    city: '170 00 Prague 7'
                },
                phone: {
                    label: 'Phone',
                    number: '+420 777 123 456'
                },
                email: {
                    label: 'E-mail',
                    address: 'info@stropdesign.cz'
                },
                hours: {
                    label: 'Working hours',
                    weekdays: 'Mon-Fri: 7:00 AM - 5:00 PM',
                    saturday: 'Sat: 9:00 AM - 12:00 PM'
                }
            }
        },
        
        // Footer
        footer: {
            copyright: '© 2025 STROP DESIGN Ltd. | ID: 12345678',
            services: 'Complete renovations • Designer ceilings • Custom furniture',
            stats: '20 years on market • 500+ projects • 15 own craftsmen'
        }
    },
    
    de: {
        // Navigation
        nav: {
            home: 'Start',
            about: 'Über uns',
            services: 'Leistungen',
            portfolio: 'Referenzen',
            process: 'Prozess',
            contact: 'Kontakt'
        },
        
        // Hero Section
        hero: {
            badge: 'Vom Fundament zum finalen Design',
            title: 'Komplette <span>Renovierungen</span><br>mit Fokus auf <span>Decken</span>',
            description: 'Wir spezialisieren uns auf Designer-Decken aller Art, können aber auch Komplettrenovierungen von A bis Z durchführen. Eigene Schreinerei, 15+ Handwerker, 20 Jahre Erfahrung.',
            stats: {
                projects: 'Projekte',
                venues: 'Kneipen & Clubs',
                years: 'Jahre Erfahrung',
                craftsmen: 'Eigene Handwerker'
            },
            ctaPrimary: 'Kostenlose Beratung',
            ctaSecondary: 'Unsere Arbeit'
        },
        
        // About Section
        about: {
            title: 'Wir machen,<br>was andere nicht können',
            highlight: 'Wir sind nicht nur eine Montagefirma. Wir haben eine eigene Schreinerei, entwerfen maßgefertigte Möbel und führen Komplettrenovierungen durch.',
            text1: 'Wir haben vor 20 Jahren als Baufirma angefangen. Nach und nach haben wir unser eigenes Handwerkerteam aufgebaut - von Gipsern über Schreiner bis zu Elektrikern. Heute spezialisieren wir uns hauptsächlich auf <strong>Designer-Decken</strong>, die unsere Leidenschaft sind, aber wir führen immer noch komplette Renovierungen von Gewerberäumen durch.',
            text2: 'Wir haben Erfahrung mit speziellen Projekten - <strong>Kirchen, Krankenhäuser, Kneipen, Clubs</strong>. Räume, die einen sensiblen Ansatz und Verständnis für spezifische Anforderungen erfordern.',
            features: {
                workshop: 'Eigene Schreinerei',
                furniture: 'Möbeldesign',
                team: '15 feste Handwerker',
                complete: 'Komplettrenovierungen'
            }
        },
        
        // Services Section (similar pattern for other languages)
        services: {
            title: 'Was wir können',
            subtitle: 'Spezialisierung auf Decken, aber wir schaffen komplette Renovierung',
            
            ceilings: {
                priority: 'PRIORITÄT',
                title: 'DESIGNER-DECKEN',
                description: 'Unsere aktuelle Hauptspezialisierung. Von klassischen Gipskartonkonstruktionen über Spanndecken bis zu Klimasystemen. Jede Decke ist für uns ein Kunstwerk.',
                types: {
                    plasterboard: {
                        title: 'Gipskarton',
                        desc: 'Mehrstufige Konstruktionen, LED-Beleuchtung, akustische Lösungen'
                    },
                    stretch: {
                        title: 'Spanndecken (Avenir)',
                        desc: 'Vinyl-PVC, glänzend/matt, fotorealistischer Druck'
                    },
                    climate: {
                        title: 'Klimadecken (Gloria)',
                        desc: 'Heizung und Kühlung, Energieeinsparung 10-30%'
                    },
                    led: {
                        title: 'Spezial-LED',
                        desc: 'RGB-Systeme für Clubs, DMX-Steuerung'
                    }
                }
            },
            
            cards: [
                {
                    title: 'Komplettrenovierungen',
                    description: 'Vom Abriss bis zur Endreinigung. Wände, Böden, Strom, Wasser, Heizung. Koordination aller Gewerke unter einem Dach.'
                },
                {
                    title: 'Maßgefertigte Möbel',
                    description: 'Eigene Schreinerei, originelle Entwürfe. Bars, Regale, Rezeptionen, Einbauschränke. Alles nach Ihren Anforderungen.'
                },
                {
                    title: 'Designmodifikationen',
                    description: 'Venezianischer Stuck, 3D-Paneele, strukturierte Putze. Spezialisierung auf anspruchsvolle Räume - Kirchen, Krankenhäuser.'
                },
                {
                    title: 'Bodenbeläge',
                    description: 'Vinyl, Holzparkett, Epoxidestriche. Dekorative Oberflächen für Gewerberäume.'
                },
                {
                    title: 'Beleuchtung',
                    description: 'Professionelle LED-Systeme, Lichtshows für Clubs, architektonische Beleuchtung, energiesparende Lösungen.'
                },
                {
                    title: 'Spezialprojekte',
                    description: 'Kirchen, Krankenhäuser, denkmalgeschützte Gebäude. Sensibler Ansatz, Respekt vor der ursprünglichen Architektur.'
                }
            ]
        },
        
        portfolio: {
            title: 'Unsere Projekte',
            subtitle: 'Design-Renovierungen spezieller Räume',
            items: [
                { title: 'Kneipen & Restaurants', count: '50+ Projekte' },
                { title: 'Clubs & Diskotheken', count: '30+ Projekte' },
                { title: 'Krankenhäuser & Kliniken', count: '15+ Projekte' },
                { title: 'Kirchen & Sakralbauten', count: '8 Projekte' },
                { title: 'Büros & Coworking', count: '40+ Projekte' },
                { title: 'Luxusresidenzen', count: '25+ Projekte' },
                { title: 'Hotels & Pensionen', count: '20+ Projekte' },
                { title: 'Geschäfte & Showrooms', count: '35+ Projekte' },
                { title: 'Spezialprojekte', count: 'Einzigartige Projekte' }
            ]
        },
        
        process: {
            title: 'So funktioniert die Zusammenarbeit',
            subtitle: 'Transparenter Prozess von der Beratung bis zur Übergabe',
            steps: [
                {
                    title: 'Beratung',
                    description: 'Wir kommen, schauen, beraten. Unverbindlich und kostenlos.',
                    duration: '1-2 Tage'
                },
                {
                    title: 'Entwurf & Kalkulation',
                    description: 'Detaillierter Lösungsentwurf, transparentes Preisangebot.',
                    duration: '3-5 Tage'
                },
                {
                    title: 'Umsetzung',
                    description: 'Eigene Handwerker, Qualitätskontrolle, Termintreue.',
                    duration: '2-8 Wochen'
                },
                {
                    title: 'Maßmöbel',
                    description: 'Bei Bedarf produzieren wir in unserer Schreinerei.',
                    duration: '1-3 Wochen'
                },
                {
                    title: 'Übergabe & Service',
                    description: 'Komplette Übergabe, 5 Jahre Garantie, Nachbetreuung.',
                    duration: '1 Tag'
                }
            ]
        },
        
        contact: {
            title: 'Lassen Sie uns darüber sprechen',
            subtitle: 'Wir treffen uns gerne mit Ihnen und besprechen Ihr Projekt',
            info: {
                title: 'Kontakt',
                address: {
                    label: 'Hauptsitz & Showroom',
                    street: 'Průmyslová 1234',
                    city: '170 00 Prag 7'
                },
                phone: {
                    label: 'Telefon',
                    number: '+420 777 123 456'
                },
                email: {
                    label: 'E-Mail',
                    address: 'info@stropdesign.cz'
                },
                hours: {
                    label: 'Öffnungszeiten',
                    weekdays: 'Mo-Fr: 7:00 - 17:00',
                    saturday: 'Sa: 9:00 - 12:00'
                }
            }
        },
        
        footer: {
            copyright: '© 2025 STROP DESIGN GmbH | USt-IdNr: 12345678',
            services: 'Komplettrenovierungen • Designer-Decken • Maßgefertigte Möbel',
            stats: '20 Jahre am Markt • 500+ Projekte • 15 eigene Handwerker'
        }
    },
    
    it: {
        nav: {
            home: 'Home',
            about: 'Chi siamo',
            services: 'Servizi',
            portfolio: 'Portfolio',
            process: 'Processo',
            contact: 'Contatti'
        },
        
        hero: {
            badge: 'Dalle fondamenta al design finale',
            title: 'Ristrutturazioni <span>complete</span><br>con focus sui <span>soffitti</span>',
            description: 'Siamo specializzati in soffitti di design di tutti i tipi, ma possiamo gestire ristrutturazioni complete dalla A alla Z. Falegnameria propria, 15+ artigiani, 20 anni di esperienza.',
            stats: {
                projects: 'Progetti',
                venues: 'Pub e club',
                years: 'Anni di esperienza',
                craftsmen: 'Artigiani propri'
            },
            ctaPrimary: 'Consulenza gratuita',
            ctaSecondary: 'I nostri lavori'
        },
        
        about: {
            title: 'Facciamo ciò che<br>altri non possono',
            highlight: 'Non siamo solo un\'azienda di montaggio. Abbiamo la nostra falegnameria, progettiamo mobili su misura e realizziamo ristrutturazioni complete.',
            text1: 'Abbiamo iniziato come impresa edile 20 anni fa. Gradualmente abbiamo costruito il nostro team di artigiani - da stuccatori a falegnami a elettricisti. Oggi ci specializziamo principalmente in <strong>soffitti di design</strong>, che sono la nostra passione, ma realizziamo ancora ristrutturazioni complete di spazi commerciali.',
            text2: 'Abbiamo esperienza con progetti speciali - <strong>chiese, ospedali, pub, club</strong>. Spazi che richiedono un approccio sensibile e comprensione di requisiti specifici.',
            features: {
                workshop: 'Falegnameria propria',
                furniture: 'Design di mobili',
                team: '15 artigiani fissi',
                complete: 'Ristrutturazioni complete'
            }
        },
        
        services: {
            title: 'Cosa possiamo fare',
            subtitle: 'Specializzati in soffitti, ma gestiamo ristrutturazioni complete',
            
            ceilings: {
                priority: 'PRIORITÀ',
                title: 'SOFFITTI DI DESIGN',
                description: 'La nostra attuale specializzazione principale. Dalle classiche costruzioni in cartongesso ai soffitti tesi ai sistemi climatici. Ogni soffitto è per noi un\'opera d\'arte.',
                types: {
                    plasterboard: {
                        title: 'Cartongesso',
                        desc: 'Costruzioni multilivello, illuminazione LED, soluzioni acustiche'
                    },
                    stretch: {
                        title: 'Tesi (Avenir)',
                        desc: 'PVC vinilico, lucido/opaco, stampa fotorealistica'
                    },
                    climate: {
                        title: 'Climatici (Gloria)',
                        desc: 'Riscaldamento e raffreddamento, risparmio energetico 10-30%'
                    },
                    led: {
                        title: 'LED speciali',
                        desc: 'Sistemi RGB per club, controllo DMX'
                    }
                }
            },
            
            cards: [
                {
                    title: 'Ristrutturazioni complete',
                    description: 'Dalla demolizione alla pulizia finale. Muri, pavimenti, elettricità, acqua, riscaldamento. Coordinamento di tutti i mestieri sotto un unico tetto.'
                },
                {
                    title: 'Mobili su misura',
                    description: 'Falegnameria propria, design originali. Bar, scaffali, reception, armadi a muro. Tutto secondo le vostre esigenze.'
                },
                {
                    title: 'Modifiche di design',
                    description: 'Stucco veneziano, pannelli 3D, intonaci strutturati. Specializzazione in spazi impegnativi - chiese, ospedali.'
                },
                {
                    title: 'Pavimentazione',
                    description: 'Vinile, parquet in legno, massetti epossidici. Superfici decorative per spazi commerciali.'
                },
                {
                    title: 'Illuminazione',
                    description: 'Sistemi LED professionali, spettacoli di luci per club, illuminazione architettonica, soluzioni a risparmio energetico.'
                },
                {
                    title: 'Progetti speciali',
                    description: 'Chiese, ospedali, edifici storici. Approccio sensibile, rispetto per l\'architettura originale.'
                }
            ]
        },
        
        portfolio: {
            title: 'I nostri progetti',
            subtitle: 'Ristrutturazioni di design di spazi speciali',
            items: [
                { title: 'Pub e ristoranti', count: '50+ progetti' },
                { title: 'Club e discoteche', count: '30+ progetti' },
                { title: 'Ospedali e cliniche', count: '15+ progetti' },
                { title: 'Chiese ed edifici sacri', count: '8 progetti' },
                { title: 'Uffici e coworking', count: '40+ progetti' },
                { title: 'Residenze di lusso', count: '25+ progetti' },
                { title: 'Hotel e pensioni', count: '20+ progetti' },
                { title: 'Negozi e showroom', count: '35+ progetti' },
                { title: 'Progetti speciali', count: 'Progetti unici' }
            ]
        },
        
        process: {
            title: 'Come funziona la collaborazione',
            subtitle: 'Processo trasparente dalla consulenza alla consegna',
            steps: [
                {
                    title: 'Consulenza',
                    description: 'Veniamo, ispezioniamo, consigliamo. Non vincolante e gratuito.',
                    duration: '1-2 giorni'
                },
                {
                    title: 'Progetto e preventivo',
                    description: 'Progetto dettagliato della soluzione, offerta di prezzo trasparente.',
                    duration: '3-5 giorni'
                },
                {
                    title: 'Realizzazione',
                    description: 'Artigiani propri, controllo qualità, rispetto delle scadenze.',
                    duration: '2-8 settimane'
                },
                {
                    title: 'Mobili su misura',
                    description: 'Se necessario, produciamo nella nostra falegnameria.',
                    duration: '1-3 settimane'
                },
                {
                    title: 'Consegna e servizio',
                    description: 'Consegna completa, garanzia 5 anni, servizio post-vendita.',
                    duration: '1 giorno'
                }
            ]
        },
        
        contact: {
            title: 'Parliamone',
            subtitle: 'Saremo felici di incontrarvi e discutere il vostro progetto',
            info: {
                title: 'Contatti',
                address: {
                    label: 'Sede e showroom',
                    street: 'Průmyslová 1234',
                    city: '170 00 Praga 7'
                },
                phone: {
                    label: 'Telefono',
                    number: '+420 777 123 456'
                },
                email: {
                    label: 'E-mail',
                    address: 'info@stropdesign.cz'
                },
                hours: {
                    label: 'Orari di lavoro',
                    weekdays: 'Lun-Ven: 7:00 - 17:00',
                    saturday: 'Sab: 9:00 - 12:00'
                }
            }
        },
        
        footer: {
            copyright: '© 2025 STROP DESIGN S.r.l. | P.IVA: 12345678',
            services: 'Ristrutturazioni complete • Soffitti di design • Mobili su misura',
            stats: '20 anni sul mercato • 500+ progetti • 15 artigiani propri'
        }
    },
    
    es: {
        nav: {
            home: 'Inicio',
            about: 'Nosotros',
            services: 'Servicios',
            portfolio: 'Portfolio',
            process: 'Proceso',
            contact: 'Contacto'
        },
        
        hero: {
            badge: 'Desde los cimientos hasta el diseño final',
            title: 'Renovaciones <span>completas</span><br>con enfoque en <span>techos</span>',
            description: 'Nos especializamos en techos de diseño de todo tipo, pero podemos realizar renovaciones completas de A a Z. Carpintería propia, 15+ artesanos, 20 años de experiencia.',
            stats: {
                projects: 'Proyectos',
                venues: 'Bares y clubes',
                years: 'Años de experiencia',
                craftsmen: 'Artesanos propios'
            },
            ctaPrimary: 'Consulta gratuita',
            ctaSecondary: 'Nuestro trabajo'
        },
        
        about: {
            title: 'Hacemos lo que<br>otros no pueden',
            highlight: 'No somos solo una empresa de montaje. Tenemos nuestra propia carpintería, diseñamos muebles a medida y realizamos renovaciones completas.',
            text1: 'Comenzamos como empresa de construcción hace 20 años. Gradualmente construimos nuestro propio equipo de artesanos - desde yeseros hasta carpinteros y electricistas. Hoy nos especializamos principalmente en <strong>techos de diseño</strong>, que son nuestra pasión, pero todavía realizamos renovaciones completas de espacios comerciales.',
            text2: 'Tenemos experiencia con proyectos especiales - <strong>iglesias, hospitales, bares, clubes</strong>. Espacios que requieren un enfoque sensible y comprensión de requisitos específicos.',
            features: {
                workshop: 'Carpintería propia',
                furniture: 'Diseño de muebles',
                team: '15 artesanos fijos',
                complete: 'Renovaciones completas'
            }
        },
        
        services: {
            title: 'Lo que podemos hacer',
            subtitle: 'Especializados en techos, pero manejamos renovaciones completas',
            
            ceilings: {
                priority: 'PRIORIDAD',
                title: 'TECHOS DE DISEÑO',
                description: 'Nuestra especialización principal actual. Desde construcciones clásicas de pladur hasta techos tensados y sistemas climáticos. Cada techo es una obra de arte para nosotros.',
                types: {
                    plasterboard: {
                        title: 'Pladur',
                        desc: 'Construcciones multinivel, iluminación LED, soluciones acústicas'
                    },
                    stretch: {
                        title: 'Tensados (Avenir)',
                        desc: 'PVC vinílico, brillante/mate, impresión fotorrealista'
                    },
                    climate: {
                        title: 'Climáticos (Gloria)',
                        desc: 'Calefacción y refrigeración, ahorro energético 10-30%'
                    },
                    led: {
                        title: 'LED especiales',
                        desc: 'Sistemas RGB para clubes, control DMX'
                    }
                }
            },
            
            cards: [
                {
                    title: 'Renovaciones completas',
                    description: 'Desde demolición hasta limpieza final. Paredes, suelos, electricidad, agua, calefacción. Coordinación de todos los oficios bajo un mismo techo.'
                },
                {
                    title: 'Muebles a medida',
                    description: 'Carpintería propia, diseños originales. Barras, estanterías, recepciones, armarios empotrados. Todo según sus requisitos.'
                },
                {
                    title: 'Modificaciones de diseño',
                    description: 'Estuco veneciano, paneles 3D, revoques texturizados. Especialización en espacios exigentes - iglesias, hospitales.'
                },
                {
                    title: 'Pavimentos',
                    description: 'Vinilo, parqué de madera, pavimentos epóxicos. Superficies decorativas para espacios comerciales.'
                },
                {
                    title: 'Iluminación',
                    description: 'Sistemas LED profesionales, espectáculos de luces para clubes, iluminación arquitectónica, soluciones de ahorro energético.'
                },
                {
                    title: 'Proyectos especiales',
                    description: 'Iglesias, hospitales, edificios patrimoniales. Enfoque sensible, respeto por la arquitectura original.'
                }
            ]
        },
        
        portfolio: {
            title: 'Nuestros proyectos',
            subtitle: 'Renovaciones de diseño de espacios especiales',
            items: [
                { title: 'Bares y restaurantes', count: '50+ proyectos' },
                { title: 'Clubes y discotecas', count: '30+ proyectos' },
                { title: 'Hospitales y clínicas', count: '15+ proyectos' },
                { title: 'Iglesias y edificios sagrados', count: '8 proyectos' },
                { title: 'Oficinas y coworking', count: '40+ proyectos' },
                { title: 'Residencias de lujo', count: '25+ proyectos' },
                { title: 'Hoteles y pensiones', count: '20+ proyectos' },
                { title: 'Tiendas y showrooms', count: '35+ proyectos' },
                { title: 'Proyectos especiales', count: 'Proyectos únicos' }
            ]
        },
        
        process: {
            title: 'Cómo funciona la colaboración',
            subtitle: 'Proceso transparente desde consulta hasta entrega',
            steps: [
                {
                    title: 'Consulta',
                    description: 'Venimos, inspeccionamos, asesoramos. Sin compromiso y gratis.',
                    duration: '1-2 días'
                },
                {
                    title: 'Diseño y presupuesto',
                    description: 'Diseño detallado de solución, oferta de precio transparente.',
                    duration: '3-5 días'
                },
                {
                    title: 'Realización',
                    description: 'Artesanos propios, control de calidad, cumplimiento de plazos.',
                    duration: '2-8 semanas'
                },
                {
                    title: 'Muebles a medida',
                    description: 'Si es necesario, producimos en nuestra carpintería.',
                    duration: '1-3 semanas'
                },
                {
                    title: 'Entrega y servicio',
                    description: 'Entrega completa, garantía 5 años, servicio postventa.',
                    duration: '1 día'
                }
            ]
        },
        
        contact: {
            title: 'Hablemos de ello',
            subtitle: 'Estaremos encantados de conocerle y discutir su proyecto',
            info: {
                title: 'Contacto',
                address: {
                    label: 'Sede y showroom',
                    street: 'Průmyslová 1234',
                    city: '170 00 Praga 7'
                },
                phone: {
                    label: 'Teléfono',
                    number: '+420 777 123 456'
                },
                email: {
                    label: 'Correo electrónico',
                    address: 'info@stropdesign.cz'
                },
                hours: {
                    label: 'Horario de trabajo',
                    weekdays: 'Lun-Vie: 7:00 - 17:00',
                    saturday: 'Sáb: 9:00 - 12:00'
                }
            }
        },
        
        footer: {
            copyright: '© 2025 STROP DESIGN S.L. | CIF: 12345678',
            services: 'Renovaciones completas • Techos de diseño • Muebles a medida',
            stats: '20 años en el mercado • 500+ proyectos • 15 artesanos propios'
        }
    },
    
    ja: {
        nav: {
            home: 'ホーム',
            about: '会社概要',
            services: 'サービス',
            portfolio: 'ポートフォリオ',
            process: 'プロセス',
            contact: 'お問い合わせ'
        },
        
        hero: {
            badge: '基礎から最終デザインまで',
            title: '天井に特化した<br><span>総合リノベーション</span>',
            description: 'あらゆるタイプのデザイナー天井を専門としていますが、AからZまでの完全なリノベーションも可能です。自社大工工房、15人以上の職人、20年の経験。',
            stats: {
                projects: 'プロジェクト',
                venues: 'パブ＆クラブ',
                years: '年の経験',
                craftsmen: '自社職人'
            },
            ctaPrimary: '無料相談',
            ctaSecondary: '実績紹介'
        },
        
        about: {
            title: '他社にできないことを<br>私たちは実現',
            highlight: '私たちは単なる設置会社ではありません。自社の大工工房を持ち、オーダーメイド家具をデザインし、完全なリノベーションを実施しています。',
            text1: '20年前に建設会社として始めました。左官から大工、電気技師まで、徐々に自社の職人チームを構築しました。今日、私たちは主に<strong>デザイナー天井</strong>を専門としており、これが私たちの情熱ですが、商業スペースの完全なリノベーションも実施しています。',
            text2: '特別なプロジェクトの経験があります - <strong>教会、病院、パブ、クラブ</strong>。繊細なアプローチと特定の要件の理解が必要なスペース。',
            features: {
                workshop: '自社大工工房',
                furniture: '家具デザイン',
                team: '15人の常駐職人',
                complete: '完全リノベーション'
            }
        },
        
        services: {
            title: '私たちができること',
            subtitle: '天井専門ですが、完全なリノベーションも対応',
            
            ceilings: {
                priority: '優先',
                title: 'デザイナー天井',
                description: '現在の主な専門分野。クラシックな石膏ボード構造からストレッチ天井、空調システムまで。すべての天井が私たちにとって芸術作品です。',
                types: {
                    plasterboard: {
                        title: '石膏ボード',
                        desc: '多層構造、LED照明、音響ソリューション'
                    },
                    stretch: {
                        title: 'ストレッチ (Avenir)',
                        desc: 'ビニルPVC、光沢/マット、フォトリアリスティック印刷'
                    },
                    climate: {
                        title: '空調 (Gloria)',
                        desc: '暖房と冷房、エネルギー節約10-30%'
                    },
                    led: {
                        title: '特殊LED',
                        desc: 'クラブ用RGBシステム、DMX制御'
                    }
                }
            },
            
            cards: [
                {
                    title: '完全リノベーション',
                    description: '解体から最終清掃まで。壁、床、電気、水道、暖房。一つ屋根の下ですべての作業を調整。'
                },
                {
                    title: 'オーダーメイド家具',
                    description: '自社大工工房、オリジナルデザイン。バー、棚、受付、ビルトイン収納。すべてお客様のご要望に応じて。'
                },
                {
                    title: 'デザイン修正',
                    description: 'ベネチアンスタッコ、3Dパネル、テクスチャー塗装。要求の厳しいスペースの専門 - 教会、病院。'
                },
                {
                    title: 'フローリング',
                    description: 'ビニル、木製パーケット、エポキシスクリード。商業スペース用の装飾的な表面。'
                },
                {
                    title: '照明',
                    description: 'プロフェッショナルLEDシステム、クラブ用ライトショー、建築照明、省エネソリューション。'
                },
                {
                    title: '特別プロジェクト',
                    description: '教会、病院、遺産建築物。繊細なアプローチ、元の建築への敬意。'
                }
            ]
        },
        
        portfolio: {
            title: '私たちのプロジェクト',
            subtitle: '特別なスペースのデザインリノベーション',
            items: [
                { title: 'パブ＆レストラン', count: '50以上のプロジェクト' },
                { title: 'クラブ＆ディスコ', count: '30以上のプロジェクト' },
                { title: '病院＆クリニック', count: '15以上のプロジェクト' },
                { title: '教会＆宗教建築', count: '8プロジェクト' },
                { title: 'オフィス＆コワーキング', count: '40以上のプロジェクト' },
                { title: '高級住宅', count: '25以上のプロジェクト' },
                { title: 'ホテル＆ゲストハウス', count: '20以上のプロジェクト' },
                { title: '店舗＆ショールーム', count: '35以上のプロジェクト' },
                { title: '特別プロジェクト', count: 'ユニークなプロジェクト' }
            ]
        },
        
        process: {
            title: '協力の仕組み',
            subtitle: '相談から引き渡しまでの透明なプロセス',
            steps: [
                {
                    title: 'コンサルティング',
                    description: '訪問、検査、アドバイス。拘束力なし、無料。',
                    duration: '1-2日'
                },
                {
                    title: 'デザインと見積もり',
                    description: '詳細なソリューションデザイン、透明な価格提供。',
                    duration: '3-5日'
                },
                {
                    title: '実装',
                    description: '自社職人、品質管理、締切厳守。',
                    duration: '2-8週間'
                },
                {
                    title: 'カスタム家具',
                    description: '必要に応じて、自社大工工房で製作。',
                    duration: '1-3週間'
                },
                {
                    title: '引き渡しとサービス',
                    description: '完全引き渡し、5年保証、アフターサービス。',
                    duration: '1日'
                }
            ]
        },
        
        contact: {
            title: '話し合いましょう',
            subtitle: 'お会いしてプロジェクトについて話し合うことを楽しみにしています',
            info: {
                title: 'お問い合わせ',
                address: {
                    label: '本社＆ショールーム',
                    street: 'Průmyslová 1234',
                    city: '170 00 プラハ 7'
                },
                phone: {
                    label: '電話',
                    number: '+420 777 123 456'
                },
                email: {
                    label: 'メール',
                    address: 'info@stropdesign.cz'
                },
                hours: {
                    label: '営業時間',
                    weekdays: '月-金: 7:00 - 17:00',
                    saturday: '土: 9:00 - 12:00'
                }
            }
        },
        
        footer: {
            copyright: '© 2025 STROP DESIGN 株式会社 | 会社番号: 12345678',
            services: '完全リノベーション • デザイナー天井 • オーダーメイド家具',
            stats: '市場で20年 • 500以上のプロジェクト • 15人の自社職人'
        }
    }
};
