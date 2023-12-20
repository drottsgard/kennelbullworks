import Image from 'next/image';

import ButtonLink, { ButtonVariant } from '@/components/Button';
import TextContent from '@/components/TextContent';
import ListWithPaws from '@/components/ListWithPaws';
import Hero from '@/components/Hero';
import BulletList from '@/components/BulletList';


export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <div className="px-8">
        <TextContent
          title="Att köpa valp av oss"
          content={
            <p>
              Vi är inte bara med er från starten, utan kommer att finnas till
              hands med support och råd under lång tid framöver. Dolda
              fel-försäkring från Agria ingår självklart. Alla valpar får också
              med sig ett valppaket från Purina Pro Plan och vårt informativa
              valphäfte. De kommer fullständigt veterinärbesiktade, vaccinerade,
              avmaskade och registrerade i SKK.
            </p>
          }
        />
      </div>
      <BulletList
        items={[
          'Veterinärbesiktning',
          'Registrering i SKK',
          'Försäkring från Agria',
          'Valppaket & Valphäfte',
        ]}
      />
      <div className="p-8 bg-brown-400">
        <h3 className="text-2xl mb-8">
          Gör ditt hem komplett – med en kärleksfull Cocker Spaniel-valp vid din
          sida!
        </h3>
        <ListWithPaws
          items={[
            {
              title: 'Lär känna oss och vår kärlek till Cocker Spaniel',
              text: 'Vi har en ärvd passion för hundar och är tillägnade till Cocker Spanielns charm. Detta vill vi dela med oss till er.',
              numOfPaws: 4,
              linkOptions: {
                linkTo: '/om-oss',
                linkText: 'Läs mer om oss',
              },
            },
            {
              title: 'Läs mer om den fantastiska hundrasen Cocker Spaniel',
              text: 'Vill du dela ditt liv med en underbar följeslagare som alltid är där för dig, redo för alla äventyr vare sig det är i skogen eller mitt i stadspulsen? Då är Engelsk Cocker Spaniel den perfekta rasen för dig. Deras oemotståndliga charm och positiva personlighet gör dem till fantastiska kamrater.',
              linkOptions: {
                linkTo: 'https://www.skk.se', // TODO: Fix link
                linkText: 'Läs mer om cocker spaniel',
              },
              numOfPaws: 6,
            },
            {
              title: 'Upptäck våra bedårande Cocker Spaniel valpar',
              text: 'Valparna är uppväxta i vårt vardagsrum och kommer vara vana vid all bök och stök från dammsugare till gäster och får bra social kontakt från början. Våra valpar är redo att flytta till sina nya hem vid åtta veckors ålder, från och med den 22e november.',
              linkOptions: {
                linkTo: '/vara-hundar',
                linkText: 'Upptäck våra valpar',
              },
              numOfPaws: 6,
            },
          ]}
        />
      </div>
      <div className="px-8 flex flex-col gap-8">
        <TextContent
          title="Låt oss få lära känna er!"
          content={
            <p>
              Skicka oss gärna ett meddelande så berättar vi mer om vår kennel
              och oss själva. Vi ser fram emot att höra mer om er och diskutera
              hur en av våra förtjusande Engelska Cocker Spaniel-valpar kan bli
              en perfekt matchning för er.
              <br /> <br /> Ni kan alltid skicka ett meddelande på våra sociala
              medier också.
            </p>
          }
        />
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="https://www.facebook.com/kennelbullworks"
              className="flex gap-2"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                height={24}
                width={24}
              />
              <p>Kennel Bullworks</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bullworkscockers"
              className="flex gap-2"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                height={24}
                width={24}
              />
              <p>bullworkscockers</p>
            </a>
          </li>
          <li>
            <a
              href="https://www.blocket.se/profil/45447484"
              className="flex gap-2"
            >
              <Image src="/blocket.svg" alt="Blocket" height={24} width={24} />
              <p>Kennel Bullworks</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
