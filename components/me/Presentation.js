import { Description } from '../text/Description'
import { TitleLarge } from '../text/TitleLarge'
import { TitleMedium } from '../text/TitleMedium'
import { TitleSmall } from '../text/TitleSmall'
import { ButtonLink } from '../ui/ButtonLink'

export const Presentation = () => {
  return (
    <>
      <section id="home" className="presentation">
        <TitleSmall color="var(--color-secundary)">Hola, soy</TitleSmall>
        <TitleLarge>Andres Mestra</TitleLarge>
        <TitleMedium>Front-end Developer</TitleMedium>
        {/*TODO: Cambiar esta presentación*/}
        <Description>
          Sponsored by Frontend Masters, advancing your skills with in-depth,
          modern front-end engineering courses
        </Description>

        <div className="presentation__links">
          <ButtonLink href="#contact" transform="uppercase">
            Contáctame
          </ButtonLink>
        </div>
      </section>
      <style jsx>{`
        .presentation {
          background-image: radial-gradient(
            circle,
            #ffffff,
            #f9f9fa,
            #f3f4f6,
            #edeef1,
            #e7e9ed
          );
          padding: 5rem;
          display: grid;
          align-content: center;
          grid-auto-rows: min-content;
          grid-row-gap: 0.5rem;
          height: 100%;
        }

        .presentation__links {
          display: flex;
          margin-top: 2rem;
        }
      `}</style>
    </>
  )
}
