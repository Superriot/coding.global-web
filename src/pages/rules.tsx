import { Accordion } from "flowbite-react";
import * as React from "react";

import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";

export default function Rules() {
  return (
    <Layout>
      <Seo
        templateTitle="Components"
        description="Pre-built components with awesome default"
      />

      <main>
        <section className="layout my-10 rounded-md bg-dark-light bg-opacity-80 p-10 text-white">
          <h1 className="mb-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M554.9 154.5c-17.62-35.25-68.12-35.38-85.87 0c-87 174.3-84.1 165.9-84.1 181.5c0 44.13 57.25 80 128 80s127.1-35.88 127.1-80C639.1 319.9 641.4 327.3 554.9 154.5zM439.1 320l71.96-144l72.17 144H439.1zM256 336c0-16.12 1.375-8.75-85.12-181.5c-17.62-35.25-68.12-35.38-85.87 0c-87 174.3-84.1 165.9-84.1 181.5c0 44.13 57.25 80 127.1 80S256 380.1 256 336zM127.9 176L200.1 320H55.96L127.9 176zM495.1 448h-143.1V153.3C375.5 143 393.1 121.8 398.4 96h113.6c17.67 0 31.1-14.33 31.1-32s-14.33-32-31.1-32h-128.4c-14.62-19.38-37.5-32-63.62-32S270.1 12.62 256.4 32H128C110.3 32 96 46.33 96 64S110.3 96 127.1 96h113.6c5.25 25.75 22.87 47 46.37 57.25V448H144c-26.51 0-48.01 21.49-48.01 48c0 8.836 7.165 16 16 16h416c8.836 0 16-7.164 16-16C544 469.5 522.5 448 495.1 448z"/></svg>Regeln / Community Guidelines</h1>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>Community Regeln</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <b>1. Discord Richtlinien</b>
                  <br />
                  1.1 Auf Programming [DE/EN] gelten die Discord
                  Community-Richtlinien, diese können unter
                  <a
                    href="https://discord.com/guidelines"
                    rel="noindex, nofollow"
                  >
                    https://discord.com/guidelines
                  </a>
                  eingesehen werden.
                  <br />
                  <br />
                  <b>2. Sprache</b>
                  <br />
                  2.1 Die Sprache unserer Community ist Deutsch und Englisch. Im
                  Voice Channel “Public [DE]” ist Deutsch die Hauptsprache,
                  Englisch kann auf freiwilliger Basis gesprochen werden. Im
                  Voice Channel “Public [EN]” muss englisch gesprochen werden.
                  <br />
                  <br />
                  <b>3. Stellen von Fragen</b>
                  <br />
                  3.1 Niemand ist verpflichtet zu helfen oder eine Frage zu
                  beantworten. Hilfe erfolgt grundsätzlich kostenlos.
                  <br />
                  3.2 Member mit der Rolle “HELPER” haben sich freiwillig bereit
                  erklärt, bei Fragen zu helfen.
                  <br />
                  3.3 Das pingen von Membern um eine schnellere Antwort zu
                  erwarten, ist nicht erlaubt.
                  <br />
                  3.4 Stelle keine Fragen wie “Kennt sich jemand mit XY aus?”
                  sondern stelle die Frage direkt siehe auch ➔
                  <a href="https://dontasktoask.com/" rel="noindex, nofollow">
                    https://dontasktoask.com/
                  </a>
                  .
                  <br />
                  3.5 Beachte den Thread “Wie stelle ich eine gute Frage?” auf
                  Stackoverflow ➔{" "}
                  <a
                    href="https://stackoverflow.com/help/how-to-ask"
                    rel="noindex, nofollow"
                  >
                    https://stackoverflow.com/help/how-to-ask
                  </a>
                  .
                  <br />
                  <br />
                  <b>4. Aufzeichnung von Bild und Ton</b>
                  <br />
                  4.1 Das Aufzeichnen oder Mitschneiden von Bild (Screensharing,
                  Webcam etc..) und Ton (Voice Chat) ist auf diesem Discord
                  nicht gestattet.
                  <br />
                  <b>5. Werbung</b>
                  <br />
                  5.1 Jegliche Art der Fremdwerbung ist untersagt.
                  <br />
                  <br />
                  <b>6. Moderatoren</b>
                  <br />
                  6.1 Das Moderatorenteam hat das Recht, angemessene Maßnahmen
                  gegen einen Benutzer zu ergreifen, auch wenn eine bestimmte
                  Regel nicht ausdrücklich verletzt wurde. Dies kann die
                  Eskalation der ergriffenen Maßnahmen umfassen, wenn der
                  Benutzer sich weigert, getroffene Entscheidungen zu befolgen.
                  <br />
                  <br />
                  <b>7. Direktnachrichten</b>
                  <br />
                  7.1 Bitte unterlasse es Direktnachrichten an die
                  Administratoren zu senden.
                  <br />
                  <br />
                  <b>8. Verbreitung persönlicher Informationen</b>
                  <br />
                  8.1 Das Verbreiten von persönlichen Informationen anderer
                  Personen jeglicher Art ohne deren Einwilligung ist Verboten
                  und führt zu einem dauerhaften Ban. Dazu zählen z. B. Vorname,
                  Nachname, Adresse, Mobiltelefonnummer oder Bilder etc.
                  <br />
                  <br />
                  <b>9. Durchsetzung einer Massnahme</b>
                  <br />
                  9.1 Die Auslegung der Regeln liegen im Ermessen des jeweiligen
                  Administrators.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Wir sind kein IT-Helpdesk, beantworten aber gerne
                  zwischendurch eine ernst gemeinte und niveauvolle Frage.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Wir mögen es generell nicht so sehr, wenn der einzige Zweck
                  des Aufenthalts der Beantwortung einer Frage dient und der
                  Server danach wieder verlassen wird, sobald die Frage
                  beantwortet wurde.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Community Guidelines</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <b>1. Discord guidelines</b>
                  <br />
                  1.1 The Discord Community Guidelines apply to Programming [DE
                  / EN]; users can view these at{" "}
                  <a
                    href="https://discord.com/guidelines"
                    rel="noindex, nofollow"
                  >
                    https://discord.com/guidelines
                  </a>
                  .
                  <br />
                  <br />
                  <b>2. Language</b>
                  <br />
                  2.1 The language of our community is German and English. In
                  the voice channel, &rsquo;Public [DE]&rsquo; German is the
                  primary language. Users can speak English voluntarily.
                  However, users must speak English in the Voice Channel “Public
                  [EN]”.
                  <br />
                  <br />
                  <b>3. Asking questions</b>
                  <br />
                  3.1 Nobody is obliged to help or answer a question. Help is
                  generally free of charge.
                  <br />
                  3.2 Members with the role of “HELPER” have volunteered to help
                  with questions.
                  <br />
                  3.3 Pinging members to expect a faster response is not
                  allowed.
                  <br />
                  3.4 Don&acute;t ask questions like &rsquo;Does anyone know about
                  XY?&rsquo; ask the question directly, see also ➔{" "}
                  <a
                    href="https://discord.com/guidelines"
                    rel="noindex, nofollow"
                  >
                    https://discord.com/guidelines
                  </a>
                  .
                  <br />
                  3.5 Note the thread “How do I ask a good question?” on
                  Stackoverflow ➔{" "}
                  <a
                    href="https://stackoverflow.com/help/how-to-ask"
                    rel="noindex, nofollow"
                  >
                    https://stackoverflow.com/help/how-to-ask
                  </a>
                  .
                  <br />
                  <br />
                  <b>4. Recording</b>
                  <br />
                  4.1 The recording of videos (screen sharing, webcam) and sound
                  (voice chat) is not permitted on this Discord.
                  <br />
                  <br />
                  <b>5. Advertising</b>
                  <br />
                  5.1 Any kind of third-party advertising is prohibited.
                  <br />
                  <br />
                  <b>6. Moderators</b>
                  <br />
                  6.1 The moderation team has the right to take appropriate
                  actions against a user, even if a certain rule has not been
                  explicitly violated. Moderator actions can include escalating
                  actions taken when the user refuses to obey decisions made.
                  <br />
                  <br />
                  <b>7. Direct messages</b>
                  <br />
                  7.1 Please refrain from sending direct messages to the
                  administrators.
                  <br />
                  <br />
                  <b>8. Dissemination of personal information</b>
                  <br />
                  8.1 Dissemination of other people&acute;s personal information
                  of any kind without their consent is prohibited and will
                  result in a permanent ban. This includes, for example, first
                  name, last name, address, mobile phone number or pictures,
                  etc.
                  <br />
                  <br />
                  <b>9. Enforcement of a measure</b>
                  <br />
                  9.1 The interpretation of the rules is at the discretion of
                  the respective administrator.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </section>
      </main>
    </Layout>
  );
}
