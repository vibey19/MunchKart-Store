"use client";

import { Products } from "@/types-db";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, HeartCrack, ShoppingCart } from "lucide-react";
import { useState } from "react";
import useCart from "@/hooks/use-carts";

interface PopularContentProps {
  data: Products;
}

export const PopularContent = ({ data }: PopularContentProps) => {
  const [isLiked, setisLiked] = useState(false);

  const cart = useCart();

  const addToCart = (data: Products) => {
    cart.addItem({ ...data, qty: 1 });
  };

  const IsLikedIcon = isLiked ? Heart : HeartCrack;

  return (
    <Card className="w-full max-h-[340px] rounded-md bg-white shadow-lg border-none flex flex-col items-center justify-center relative  py-6 pt-24 md:pt-28">
      <div className="absolute -top-[4%] md:-top-[20%] overflow-hidden w-24 md:w-40 h-24 md:h-40 rounded-full bg-hero  flex items-center justify-center  p-1 md:p-2">
        <div className="w-full h-full rounded-full bg-white relative">
          <Image
            src={data.images[0].url}
            className="w-full h-full object-contain"
            fill
            alt={data.name}
          />
        </div>
      </div>

      <Link href={`/menu/${data.id}`} className="w-full px-2 text-center">
        <CardTitle className="text-neutral-700 truncate w-full">
          {data.name}
        </CardTitle>
      </Link>

      <div className="w-full flex items-center justify-center gap-2 flex-wrap px-1    mt-4">
        {data.cuisine && (
          <div className="rounded-md bg-emerald-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize">
            {data.cuisine}
          </div>
        )}

        {data.category && (
          <div className="rounded-md bg-blue-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize">
            {data.category}
          </div>
        )}

        {data.kitchen && (
          <div className="rounded-md bg-red-500/10 px-2 py-[2px] font-semibold text-[10px] capitalize">
            {data.kitchen}
          </div>
        )}

        {data.size && (
          <div className="rounded-md bg-yellow-500/10 px-2 py-[2px] text-[10px] font-semibold capitalize">
            {data.size}
          </div>
        )}
      </div>

      <CardDescription className="text-center px-2 my-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
        architecto Aliquid architecto
      </CardDescription>

      <div className="w-full flex items-center px-2 mt-4 gap-3">
        <Button
          variant="outline"
          className="rounded-full font-bold text-lg text-muted-foreground"
        >
          ₹{data.price}
        </Button>
        <Link href={`/menu/${data.id}`} className="w-full">
          <Button className="bg-hero w-full rounded-full">Buy Now</Button>
        </Link>
      </div>

      {/* add to cart */}

      <Button
        onClick={() => addToCart(data)}
        className="absolute top-0 right-0 rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-none p-2 px-3"
      >
        <ShoppingCart className="w-4 h-4" />
      </Button>

      {/* add to wishlist */}
      <Button
        className="absolute left-0 top-0 hover:bg-transparent"
        variant={"ghost"}
      >
        <IsLikedIcon
          className={`w-5 h-5 ${isLiked ? "text-red-500" : "text-black"}`}
        />
      </Button>
    </Card>
  );
};
