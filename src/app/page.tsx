import Image from 'next/image';

import TextContent from '@/components/TextContent';
import ListWithPaws from '@/components/ListWithPaws';
import Hero from '@/components/Hero';
import BulletList from '@/components/BulletList';
import Heading3 from '@/components/Typography/Heading';
import Parapgraph from '@/components/Typography/Paragraph';


export default function Home() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Hero />
      <div className="px-8 flex flex-col gap-4 md:px-28 md:items-center">
        <Heading3 className="">Att köpa valp av oss</Heading3>
        <Parapgraph className="md:max-w-[800px]">Vi är inte bara med er från starten, utan kommer att finnas till
          hands med support och råd under lång tid framöver. Alla valpar får också
          med sig ett valppaket från Purina Pro Plan och vårt informativa
          valphäfte. De kommer fullständigt veterinärbesiktade, vaccinerade,
          avmaskade och registrerade i SKK. Dolda felförsäkring ingår alltid.
        </Parapgraph>
      </div>
      <BulletList
        items={[
          'Veterinärbesiktning',
          'Registrering i SKK',
          'Felförsäkring',
          'Valppaket & Valphäfte',
        ]}
      />
      <div className="flex flex-col p-8 bg-brown-400 md:mx-28 md:rounded-2xl md:items-center">
        <h3 className="text-2xl mb-8 md:mx-28">
          Gör ditt hem komplett
          <br className="hidden md:inline" />
          - med en kärleksfull Cocker Spaniel-valp vid din sida!
        </h3>
        <ListWithPaws
          items={[
            {
              title: 'Läs mer om den fantastiska hundrasen Cocker Spaniel',
              text: 'Vill du dela ditt liv med en underbar följeslagare som alltid är där för dig, redo för alla äventyr vare sig det är i skogen eller mitt i stadspulsen? Då är Engelsk Cocker Spaniel den perfekta rasen för dig. Deras oemotståndliga charm och positiva personlighet gör dem till fantastiska kamrater.',
              linkOptions: {
                linkTo: 'https://www.skk.se', // TODO: Fix link
                linkText: 'Läs mer om cocker spaniel',
              },
              numOfPaws: 3,
            },
            {
              title: 'Känns Cocker Spaniel som rätt ras för dig?',
              text: 'Vi känner ett stort ansvar för att våra valpar hamnar i rätt hem och att de får det liv de förtjänar. Därför vill vi lära känna er, men också att ni ska känna er trygga med ert val av en valp från oss',
              numOfPaws: 3,
              linkOptions: {
                linkTo: '/om-oss',
                linkText: 'Läs mer om oss',
              },
            },
            {
              title: 'Upptäck våra bedårande Cocker Spaniel valpar',
              text: 'Alla våra valpar växer upp inomhus nära oss och kommer att vara vana vid all bök och stök från dammsugare till gäster och får bra social kontakt från början. Våra valpar är redo att flytta till sina nya hem vid åtta veckors ålder.',
              linkOptions: {
                linkTo: '/vara-hundar',
                linkText: 'Upptäck våra valpar',
              },
              numOfPaws: 3,
            },
          ]}
        />
      </div>
      <div className="px-8 mb-8 flex flex-col gap-8 md:px-28">
        <TextContent
          title="Låt oss få lära känna er!"
          content={
            <p>
              Skicka ett meddelande till oss på våra sociala medier
            </p>
          }
        />
        <ul className="flex flex-col gap-4 md:flex-row">
          <li className="md:mr-auto">
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
          <li className="md:mr-auto">
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
