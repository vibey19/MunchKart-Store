import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FileHeart, GitCommitVertical, Plus, Salad, Truck } from "lucide-react";
import Container from "@/components/container";

const faqItems = [
  {
    id: "faq1",
    title: "How does MunchKart work?",
    content:
      "MunchKart is an online food ordering and delivery platform that connects you with a variety of restaurants in your area. Simply browse through the menu of your favorite eateries, customize your order, and proceed to checkout. Once your order is placed, the restaurant prepares your food, and a delivery partner picks it up and brings it straight to your doorstep. You can track your order in real time from the app to know exactly when it will arrive.",
  },
  {
    id: "faq2",
    title: "What are the delivery charges?",
    content:
      "Delivery charges depend on several factors, including your location, the restaurant’s policies, and ongoing promotions. Some restaurants offer free delivery, while others may have a fixed or distance-based charge. You can always check the final delivery cost before confirming your order at checkout.",
  },
  {
    id: "faq3",
    title: "Can I track my order?",
    content:
      "Absolutely! Once you place your order, you can track its progress in real time through the MunchKart app. You'll receive updates when the restaurant starts preparing your food, when the delivery partner picks it up, and when it's en route to your location. This ensures you stay informed and can anticipate when your meal will arrive.",
  },
  {
    id: "faq4",
    title: "What payment methods do you accept?",
    content:
      "MunchKart supports multiple payment options to make your experience seamless. We accept credit and debit cards, digital wallets (such as Google Pay, Apple Pay, and PayPal), and cash on delivery, depending on the restaurant’s availability. Some restaurants may also offer net banking or other regional payment methods.",
  },
  {
    id: "faq5",
    title: "Can I cancel or modify my order after placing it?",
    content:
      "Order modifications and cancellations depend on the restaurant's policies and the order status. If your order has not yet been prepared, you may be able to cancel or make changes through the app. However, once the restaurant starts preparing your food, cancellations or modifications might not be possible. In case of an urgent issue, you can contact customer support for assistance.",
  },
  {
    id: "faq6",
    title: "How long does delivery take?",
    content:
      "Delivery times vary based on factors such as restaurant preparation time, distance, traffic conditions, and order volume. On average, orders are delivered within 30-60 minutes. The estimated delivery time for your specific order will be displayed at checkout and updated in real time as your food is prepared and dispatched.",
  },
  {
    id: "faq7",
    title: "What should I do if my order is incorrect or missing items?",
    content:
      "If you receive an incorrect order or notice that some items are missing, please report the issue through the MunchKart app immediately. You can also contact our customer support team, who will coordinate with the restaurant and delivery partner to resolve the issue. We strive to ensure 100% customer satisfaction and will work with you to find the best solution, whether it's a refund, replacement, or credit for future orders.",
  },
  {
    id: "faq8",
    title: "Are there any discounts or promotions available?",
    content:
      "Yes! MunchKart regularly offers discounts, promo codes, and special deals from partnered restaurants. You can check the 'Offers' section in the app or website to find ongoing promotions. Additionally, first-time users, loyal customers, or those who refer friends may receive exclusive discount coupons.",
  },
];

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

      <section className="my-4 py-8 flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold tracking-wider uppercase text-neutral-700">
          FAQs
        </h2>
      </section>

      <div className="w-full max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className="  py-2 bg-white rounded-lg shadow-md overflow-hidden mb-2"
            >
              <AccordionTrigger className="flex w-full justify-between items-center py-4 px-5 text-lg font-semibold text-gray-800 ">
                <span className="flex items-center gap-3">{item.title}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 px-6 pb-3 text-base leading-relaxed border-l-4 border-hero">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default About;
