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
          <h1 className="mb-2">Rules</h1>
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
                  </a>{" "}
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
                  We are dedicated members, who are professionally and in their
                  spare time engaged in programming and other IT topics.
                  <br />
                  Most of the programmers here are trainees, students,
                  apprentices or have started their own business in IT.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  We are not an IT helpdesk, but we are happy to answer a
                  serious and level-headed question in between. We generally //
                  eslint-disable-next-line react/no-unescaped-entities
                  don&apos;t like it so much when the sole purpose of being here
                  is to answer a question and then leave the server once the
                  question has been answered.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </section>
      </main>
    </Layout>
  );
}
