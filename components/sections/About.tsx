import { GridContainer } from "../ui/GridContainer";

export default function About() {
  return (
    <section id="about" className="!mx-6 !mt-18">
      <GridContainer className="!border-t !border-[#d9d9d9]">
        <div
          className="
            !col-span-5
            mid:!col-span-6
            mobile:!col-span-10
            !mx-4
            !mt-8
          "
        >
          <span className="uppercase block !mb-3">about us</span>
          <span>
            Third Line is a web design studio focused on defining digital
            experiences through strategic creativity. We work with clients who
            value taste, vision and intention; designing considered work where
            form, structure and purpose are closely aligned.
          </span>
        </div>
      </GridContainer>
    </section>
  );
}