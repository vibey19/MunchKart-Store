import getProducts from "@/actions/get-products";
import Container from "@/components/container";
import { PopularContent } from "@/components/popular-content";
import Reviews from "@/components/reviews";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { FileHeart, Salad, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });

  return (
    <>
      <Container className="px-4 md:px-12">
        <section className="grid grid-cols-1 md:grid-cols-2 py-12 pt-16">
          <div className="flex flex-col items-start justify-start gap-4">
            <p className="px-6 py-1 rounded-full text-neutral-500 border border-gray-300">
              Satisfy Your Cravings
            </p>

            <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
              Delicious Meals, Delivered to Your Doorstep
            </h2>

            <p className="text-base text-center md:text-left text-neutral-500 my-4">
              Enjoy a diverse menu of gourmet dishes, freshly prepared and
              delivered with care. Order now and indulge in a delightful
              culinary experience.
            </p>

            <div className="my-4 flex text-center justify-center gap-6 w-full md:w-auto">
              <Link href={"/menu"}>
                <Button className="px-8 md:px-16 py-4 md:py-6 rounded-full bg-hero hover:bg-hero/85">
                  Order Now
                </Button>
              </Link>
              <Link href={"/about"}>
                <Button
                  className="px-8 md:px-16 py-4 md:py-6 rounded-full "
                  variant="outline"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="w-full relative h-[560px] flex items-center justify-center">
              <Image
                src="/img/Food.png"
                alt="Delicious Food"
                className="object-contain w-full h-full absolute"
                fill
              />
            </div>
          </div>
        </section>

        {/* Popular Dishes Section */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 md:gap-12 my-4 py-12">
          {products?.slice(0, 4).map((item) => (
            <PopularContent key={item.id} data={item} />
          ))}
        </section>

        {/* Why Choose Us Section */}
        <section className="my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Why Choose Us?
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            We take pride in delivering high-quality meals made from the
            freshest ingredients. Experience taste, quality, and convenience
            like never before.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <Salad className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">
                Healthy & Fresh
              </CardTitle>
              <CardDescription className="text-center">
                We prioritize fresh and nutritious ingredients to ensure a
                wholesome dining experience.
              </CardDescription>
            </Card>

            <Card className="shadow-lg rounded-md border-none p-4 py-12 flex flex-col items-center justify-center gap-4">
              <FileHeart className="w-8 h-8 text-hero" />
              <CardTitle className="text-neutral-600">
                Premium Quality
              </CardTitle>
              <CardDescription className="text-center">
                Our chefs craft every dish with precision, delivering
                exceptional flavors and quality.
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

        {/* Our Chefs Section */}
        <section className="my-4 py-12 flex flex-col items-center justify-center">
          <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700 my-4">
            Meet Our Expert Chefs
          </h2>
          <p className="w-full text-center md:w-[560px] text-base text-neutral-500 my-2">
            Our talented chefs bring years of experience and passion to every
            dish, ensuring an exceptional dining experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-6 mt-20">
            <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                src="/img/chef1.png"
                alt="Chef One"
                className="w-full h-full object-contain"
                fill
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] mt-20 bg-hero/30">
              <Image
                src="/img/chef3.png"
                alt="Chef Two"
                className="w-full h-full object-contain"
                fill
              />
            </Card>

            <Card className="shadow-lg relative rounded-md border-none flex flex-col items-center justify-end h-96 md:h-[520px] bg-hero/30">
              <Image
                src="/img/chef2.png"
                alt="Chef Three"
                className="w-full h-full object-contain"
                fill
              />
            </Card>
          </div>
          <Reviews />
        </section>
      </Container>
    </>
  );
};

export default HomePage;
