import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { FileHeart, Salad, Truck } from "lucide-react";
import Container from "@/components/container";

const About = () => {
  return (
    <Container className="px-4 md:px-12">
      <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
        <div className="flex flex-col items-start justify-start gap-4">
          <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
            Get To Know Us!!
          </p>

          <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            About Us
          </h2>

          <p className="text-base text-left text-neutral-600">
            MunchKart is dedicated to making food delivery seamless and
            enjoyable. Whether you’re craving a quick snack, a comforting meal,
            or an indulgent feast, we bring your favorite dishes right to your
            door. With a wide selection of restaurants and cuisines, we ensure
            that you have access to the best flavors in town. Our platform is
            designed for convenience, speed, and customer satisfaction.
          </p>
          <b className="text-neutral-700 text-lg uppercase">Our Mission</b>
          <p className="text-base text-left text-neutral-600">
            At MunchKart, we aim to provide an effortless food ordering
            experience by partnering with top restaurants and ensuring quick and
            reliable delivery. Your cravings, delivered—anytime, anywhere.
          </p>
        </div>
      </section>

      <section className="my-4 py-8 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
          <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
            <Salad className="w-8 h-8 text-hero" />
            <CardTitle className="text-neutral-600">Healthy & Fresh</CardTitle>
            <CardDescription className="text-center">
              We prioritize fresh and nutritious ingredients to ensure a
              wholesome dining experience.
            </CardDescription>
          </Card>

          <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
            <FileHeart className="w-8 h-8 text-hero" />
            <CardTitle className="text-neutral-600">Premium Quality</CardTitle>
            <CardDescription className="text-center">
              Our chefs craft every dish with precision, delivering exceptional
              flavors and quality.
            </CardDescription>
          </Card>

          <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
            <Truck className="w-8 h-8 text-hero" />
            <CardTitle className="text-neutral-600">Swift Delivery</CardTitle>
            <CardDescription className="text-center">
              Get your favorite meals delivered to your doorstep quickly and
              efficiently.
            </CardDescription>
          </Card>
        </div>
      </section>
    </Container>
  );
};

export default About;
