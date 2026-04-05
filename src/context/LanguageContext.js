import React, { createContext, useContext, useState } from 'react';

const translations = {
  bs: {
    // Navbar
    nav_home: 'Početna',
    nav_about: 'O nama',
    nav_services: 'Usluge',
    nav_equipment: 'Tehnička specifikacija opreme',
    nav_gallery: 'Galerija',
    nav_references: 'Reference',
    nav_contact: 'Kontakt',

    // Home hero
    home_hero_title: 'Industrijsko Čišćenje Bez Kompromisa',
    home_hero_subtitle: 'Preduzeće za pružanje usluga iz oblasti profesionalnog čišćenja prašine kod industrijskih i komunalnih objekata',
    home_hero_btn: 'Saznaj više o nama',

    // Home contact section
    home_contact_title: 'Kontaktirajte Nas',
    home_contact_subtitle: 'Imate pitanja ili želite više informacija? Popunite formular i mi ćemo vam se javiti što je prije moguće.',
    home_contact_address: 'Adresa: Gornjozenička 42, Zenica, Bosna i Hercegovina',
    home_form_name: 'Puno Ime',
    home_form_name_placeholder: 'Unesite vaše puno ime',
    home_form_email: 'Email Adresa',
    home_form_email_placeholder: 'Unesite vašu email adresu',
    home_form_message: 'Poruka',
    home_form_message_placeholder: 'Unesite vašu poruku',
    home_form_submit: 'Pošalji Poruku',
    home_form_error: 'Molimo popunite sva polja ispravno.',
    home_form_success: 'Vaša poruka je uspješno poslana. Javićemo vam se uskoro!',

    // Services
    services_title: 'Naše usluge',
    services_subtitle: 'Nudimo širok spektar profesionalnih industrijskih usluga čišćenja prilagođenih vašim specifičnim potrebama.',
    services_mining: 'RUDARSTVO',
    services_mining_1: 'Izvlačenje vacupress tehnikom ostataka ugljena, ugljene prašine, ugljenih muljeva',
    services_mining_2: 'Čišćenje silosa, transportera, vagona, svodova, kolosijeka i dr.',
    services_mining_3: 'Čišćenja u energetskim postrojenjima i kompresorskim stanicama',
    services_energy: 'ENERGANE I TOPLANE',
    services_energy_1: 'Usisavanje pepela, ugljena, koksa, ulja, zauljenih muljeva, trafo-ulja, gipsa, izolacionih materijala od turbina i cjevovoda',
    services_energy_2: 'Čišćenje grijaćih površina, dimnih kanala, silosa, elektrofiltera, rashladnih tornjeva i šahtova',
    services_wood: 'DRVNA INDUSTRIJA',
    services_wood_1: 'Izvlačenje sječke, piljevine i drugih ostataka',
    services_cement: 'CEMENTARE',
    services_cement_1: 'Čišćenje silosa',
    services_cement_2: 'Izvlačenje klinkera, cementa fine prašine i ugljene prašine',

    // About
    about_title: 'O nama',
    about_text: 'Dust Company je preduzeće za pružanje usluga iz oblasti profesionalnog čišćenja industrijskih i komunalnih objekata. Primjenom savremenih uređaja, sredstava rada i tehnološki obučenom radnom snagom, u mogućnosti je da u svakom trenutku efikasno, kvalitetno i u skladu sa najvišim standardima zaštite životne okoline i sigurnosti na radu u potpunosti odgovori na sve izazove u cilju postizanja visokog nivoa čistoće vašeg pogona, kako bi osigurali optimalne uslove rada i maksimalnu produktivnost.',
    about_contact_btn: 'Kontaktirajte nas',

    // Usluge page
    usluge_title: 'INDUSTRIJSKE USLUGE',
    usluge_subtitle: 'Specijalizirane usluge za različite industrijske sektore',
    usluge_footer: '© 2025 Industrijske Usluge | Sva prava pridržana',
    usluge_mining: 'RUDARSTVO',
    usluge_mining_1: 'Izvlačenje vacupress tehnikom ostataka ugljena, ugljene prašine, ugljenih muljeva',
    usluge_mining_2: 'Čišćenje silosa, transportera, vagona, svodova, kolosijeka i dr.',
    usluge_mining_3: 'Čišćenja u energetskim postrojenjima i kompresorskim stanicama',
    usluge_energy: 'ENERGANE I TOPLANE',
    usluge_energy_1: 'Usisavanje pepela, ugljena, koksa, ulja, zauljenih muljeva, trafo-ulja, gipsa...',
    usluge_energy_2: 'Čišćenje grijaćih površina, dimnih kanala, silosa...',
    usluge_wood: 'DRVNA INDUSTRIJA',
    usluge_wood_1: 'Izvlačenje sječke, piljevine i drugih ostataka',
    usluge_cement: 'CEMENTARE',
    usluge_cement_1: 'Čišćenje silosa',
    usluge_cement_2: 'Izvlačenje klinkera, cementa fine prašine i ugljene prašine',
    usluge_construction: 'GRAĐEVINARSTVO I KOMUNALNE USLUGE',
    usluge_construction_1: 'Skidanje šljunka, pijeska i substrata sa ravnih krovova...',
    usluge_construction_2: 'Čišćenje separatora zauljenih voda, betonskih površina, fekalnih jama...',
    usluge_chemical: 'HEMIJSKA INDUSTRIJA I RAFINERIJE',
    usluge_chemical_1: 'Čišćenje različitih spremnika, kolona i izmjenjivača topline...',
    usluge_chemical_2: 'Vanjsko i unutarnje čišćenje auto i vagon cisterni',
    usluge_steel: 'ČELIČANE, LJEVAONICE, KOKSARE',
    usluge_steel_1: 'Čišćenja kolosijeka, transportera, skladišta, taložnica...',
    usluge_steel_2: 'Izvlačenje koksa, vapna, vatrostalnog materijala...',
    usluge_water: 'POSTROJENJA ZA PROČIŠĆAVANJE KOMUNALNIH OTPADNIH VODA',
    usluge_water_1: 'Izmjena šljunka, pijeska i drugih filter materijala',
    usluge_water_2: 'Čišćenje/odmuljivanje filtera, bistrilišta, separatora, tankova...',

    // Contact page
    contact_title: 'Kontaktirajte Nas',
    contact_subtitle: 'Imate pitanja ili želite više informacija? Javite nam se!',
    contact_name: 'Ime i Prezime',
    contact_message: 'Poruka',
    contact_submit: 'Pošalji Poruku',
    contact_success: 'Vaša poruka je poslana! Odgovorit ćemo uskoro.',

    // Reference
    reference_title: 'Naše reference',
    reference_subtitle: 'Ponosni smo na dugogodišnju saradnju sa vodećim kompanijama u industriji.',
    reference_img_alt: 'Logos naših partnera i klijenata',

    // Oprema
    oprema_title: 'Specifikacija Opreme',
    oprema_subtitle: 'Pregled naše industrijske opreme',
    oprema_view_specs: 'Pogledaj Specifikacije',
    oprema_kombinovano: 'Kombinovano vozilo CanalMaster',
    oprema_metilica: 'Metilica RCM Boxer',

    // Galerija
    galerija_title: 'Naša Galerija',
    galerija_subtitle: 'Pogled na naše najlepše trenutke',

    // Footer
    footer_address: 'Adresa',
    footer_contact: 'KONTAKT',
    footer_follow: 'Pratite nas',
    footer_facebook: 'Označi sa sviđa mi se',
  },
  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_services: 'Services',
    nav_equipment: 'Equipment Specifications',
    nav_gallery: 'Gallery',
    nav_references: 'References',
    nav_contact: 'Contact',

    // Home hero
    home_hero_title: 'Industrial Cleaning Without Compromise',
    home_hero_subtitle: 'A company providing professional industrial and municipal dust cleaning services',
    home_hero_btn: 'Learn more about us',

    // Home contact section
    home_contact_title: 'Contact Us',
    home_contact_subtitle: 'Have questions or want more information? Fill out the form and we\'ll get back to you as soon as possible.',
    home_contact_address: 'Address: Gornjozenička 42, Zenica, Bosnia and Herzegovina',
    home_form_name: 'Full Name',
    home_form_name_placeholder: 'Enter your full name',
    home_form_email: 'Email Address',
    home_form_email_placeholder: 'Enter your email address',
    home_form_message: 'Message',
    home_form_message_placeholder: 'Enter your message',
    home_form_submit: 'Send Message',
    home_form_error: 'Please fill in all fields correctly.',
    home_form_success: 'Your message has been sent successfully. We\'ll get back to you soon!',

    // Services
    services_title: 'Our Services',
    services_subtitle: 'We offer a wide range of professional industrial cleaning services tailored to your specific needs.',
    services_mining: 'MINING',
    services_mining_1: 'Extraction of coal residues, coal dust and coal sludge using vacupress technology',
    services_mining_2: 'Cleaning of silos, conveyors, wagons, vaults, tracks and more',
    services_mining_3: 'Cleaning in power plants and compressor stations',
    services_energy: 'POWER PLANTS AND HEATING PLANTS',
    services_energy_1: 'Vacuuming of ash, coal, coke, oil, oily sludge, transformer oil, gypsum, insulation materials from turbines and pipelines',
    services_energy_2: 'Cleaning of heating surfaces, flue ducts, silos, electrostatic filters, cooling towers and shafts',
    services_wood: 'WOOD INDUSTRY',
    services_wood_1: 'Extraction of wood chips, sawdust and other residues',
    services_cement: 'CEMENT PLANTS',
    services_cement_1: 'Silo cleaning',
    services_cement_2: 'Extraction of clinker, cement fine dust and coal dust',

    // About
    about_title: 'About Us',
    about_text: 'Dust Company is a professional industrial and municipal cleaning services company. Using modern equipment, work tools and technologically trained workforce, we are able at any time to efficiently and effectively, in accordance with the highest environmental protection and occupational safety standards, fully respond to all challenges in order to achieve a high level of cleanliness in your facility, ensuring optimal working conditions and maximum productivity.',
    about_contact_btn: 'Contact Us',

    // Usluge page
    usluge_title: 'INDUSTRIAL SERVICES',
    usluge_subtitle: 'Specialized services for various industrial sectors',
    usluge_footer: '© 2025 Industrial Services | All rights reserved',
    usluge_mining: 'MINING',
    usluge_mining_1: 'Extraction of coal residues, coal dust and coal sludge using vacupress technology',
    usluge_mining_2: 'Cleaning of silos, conveyors, wagons, vaults, tracks and more',
    usluge_mining_3: 'Cleaning in power plants and compressor stations',
    usluge_energy: 'POWER PLANTS AND HEATING PLANTS',
    usluge_energy_1: 'Vacuuming of ash, coal, coke, oil, oily sludge, transformer oil, gypsum...',
    usluge_energy_2: 'Cleaning of heating surfaces, flue ducts, silos...',
    usluge_wood: 'WOOD INDUSTRY',
    usluge_wood_1: 'Extraction of wood chips, sawdust and other residues',
    usluge_cement: 'CEMENT PLANTS',
    usluge_cement_1: 'Silo cleaning',
    usluge_cement_2: 'Extraction of clinker, cement fine dust and coal dust',
    usluge_construction: 'CONSTRUCTION AND MUNICIPAL SERVICES',
    usluge_construction_1: 'Removal of gravel, sand and substrate from flat roofs...',
    usluge_construction_2: 'Cleaning of oily water separators, concrete surfaces, sewage pits...',
    usluge_chemical: 'CHEMICAL INDUSTRY AND REFINERIES',
    usluge_chemical_1: 'Cleaning of various tanks, columns and heat exchangers...',
    usluge_chemical_2: 'External and internal cleaning of road and rail tankers',
    usluge_steel: 'STEEL MILLS, FOUNDRIES, COKING PLANTS',
    usluge_steel_1: 'Cleaning of tracks, conveyors, warehouses, settling tanks...',
    usluge_steel_2: 'Extraction of coke, lime, refractory materials...',
    usluge_water: 'MUNICIPAL WASTEWATER TREATMENT PLANTS',
    usluge_water_1: 'Replacement of gravel, sand and other filter materials',
    usluge_water_2: 'Cleaning/de-sludging of filters, clarifiers, separators, tanks...',

    // Contact page
    contact_title: 'Contact Us',
    contact_subtitle: 'Have questions or want more information? Reach out to us!',
    contact_name: 'Full Name',
    contact_message: 'Message',
    contact_submit: 'Send Message',
    contact_success: 'Your message has been sent! We\'ll respond shortly.',

    // Reference
    reference_title: 'Our References',
    reference_subtitle: 'We are proud of our long-standing cooperation with leading companies in the industry.',
    reference_img_alt: 'Logos of our partners and clients',

    // Oprema
    oprema_title: 'Equipment Specifications',
    oprema_subtitle: 'Overview of our industrial equipment',
    oprema_view_specs: 'View Specifications',
    oprema_kombinovano: 'CanalMaster Combination Vehicle',
    oprema_metilica: 'RCM Boxer Sweeper',

    // Galerija
    galerija_title: 'Our Gallery',
    galerija_subtitle: 'A look at our finest moments',

    // Footer
    footer_address: 'Address',
    footer_contact: 'CONTACT',
    footer_follow: 'Follow Us',
    footer_facebook: 'Like us on Facebook',
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('bs');
  const toggleLanguage = () => setLanguage(l => l === 'bs' ? 'en' : 'bs');
  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
