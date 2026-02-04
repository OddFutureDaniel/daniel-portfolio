import { DateDisplay } from "../ui/DateDisplay";
import { GridContainer } from "../ui/GridContainer";
import Image from 'next/image';



export default function Header() {
  return ( // mx-6! for outsider 24px margin
    <header className="mx-10! mt-4!">
      <GridContainer>
        <div className="col-span-4">
          <Image
            src="/thirdlinelogoblack.svg"
            alt="Third Line Logo"
            width={250}
            height={100}
          />
        </div>
        <div className="col-span-4 text-center " >
          <DateDisplay />
        </div>
        <div className="col-span-4 uppercase text-right ">about</div>
      </GridContainer>
    </header>
  );
}
