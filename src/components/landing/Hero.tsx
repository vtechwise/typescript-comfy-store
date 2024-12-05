import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold tracking-tight sm:tect-6xl text-4xl">
          we are chaning the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nobis
          nihil ratione. Consequatur iusto iure quas quo illum totam. Doloremque
          nesciunt quaerat qui! Ex, ipsum. Laboriosam, doloremque tenetur!
          Reiciendis ipsam odio, natus facilis nihil recusandae dolores
          veritatis iure aliquid facere.
        </p>
        <Button asChild size="lg" className="my-10">
          <Link to="/products">our product</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
