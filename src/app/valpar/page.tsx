import Image from 'next/image';

import Parapgraph from '@/components/Typography/Paragraph';
import PuppiesRunning from 'public/bianca_valpar_snabba.jpeg';

export default function Valpar() {
  return (
    <div
      className="
      p-4
      md:py-8
      flex
      flex-col
      lg:px-32

      gap-4
      md:gap-8"
    >
      <h2 className="text-xl font-bold lg:text-4xl">
        Köpa valp av oss / Buy puppy from us
      </h2>
      <div
        className="
        flex

        flex-col
        md:flex-row

        md:gap-20
        "
      >
        <div className="flex flex-col gap-1 md:w-1/2">
          <Parapgraph>
            När man köper valp från oss lägger vi stor vikt vid att hitta rätt
            hem för varje individ. Vi samlar in intresse och lär känna de
            potentiella valpköparna innan vi bestämmer vilka som får möjlighet
            att köpa valp. Vi prioriterar de som bor i närheten, då vi gärna
            vill ha en god relation även efter att valpen flyttat.
            <br />
            <br />
            Valparna växer upp i hemmiljö och socialiseras noggrant innan
            leverans vid tidigast åtta veckors ålder. Vi är inte bara med från
            starten, utan kommer att finnas till hands med support och råd under
            lång tid framöver. Alla valpar får också med sig ett valppaket från
            Purina Pro Plan och vårt informativa valphäfte.
          </Parapgraph>
          <ul
            className="
            my-4
            pl-5
            list-disc
            italic
            "
          >
            <li>Fullständigt veterinärbesiktade och chipmärkt</li>
            <li>Vaccinerade</li>
            <li>Avmaskad</li>
            <li>Registrerade i Svenska kennelklubben</li>
            <li>Dolda felförsäkrad</li>
          </ul>
        </div>
        <div
          className="
          relative
          rounded-[inherit]
          overflow-hidden

          w-96
          h-96

          "
        >
          <Image
            src={PuppiesRunning}
            alt="Cocker spaniel valpar"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
