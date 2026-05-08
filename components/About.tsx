import Image from 'next/image';
import { SectionHead } from './SectionHead';

export function About() {
  return (
    <section className="section about" id="about">
      <SectionHead num="01" label="Profil" />

      <div className="about__grid">
        <h2 className="about__headline">
          Architekt aus München, ursprünglich aus dem oberbayerischen{' '}
          <span className="italic">Maitenbeth</span>.
        </h2>

        <div className="about__text">
          <p>
            Seit über sechs Jahren bei <strong>HENN</strong> in München. Der Fokus liegt auf
            anspruchsvollen Hochbauten — von Revitalisierungen denkmalgeschützter Bausubstanz
            bis zu großmaßstäblichen Neubauten in Forschung, Industrie und Kultur.
          </p>
          <p>
            Verbunden mit einer Ausbildung an der Hochschule München unter{' '}
            <strong>Prof. Andreas Meck</strong>, ergänzt durch Computational&nbsp;Design,
            parametrisches Entwerfen und ein scharfes Auge für die Materialität des Details.
          </p>
        </div>

        <figure className="about__portrait">
          <Image
            src="/images/profile.jpg"
            alt="Jakob Christ"
            width={1200}
            height={800}
            sizes="(min-width: 900px) 30vw, 90vw"
            priority={false}
          />
        </figure>

        <dl className="about__facts">
          <div><dt>Standort</dt><dd>München</dd></div>
          <div><dt>Anstellung</dt><dd>HENN, seit 2017</dd></div>
          <div><dt>Abschluss</dt><dd>M.A. Architektur · HM</dd></div>
          <div><dt>Schwerpunkte</dt><dd>Hochbau · Revitalisierung · Computational Design</dd></div>
        </dl>
      </div>
    </section>
  );
}
