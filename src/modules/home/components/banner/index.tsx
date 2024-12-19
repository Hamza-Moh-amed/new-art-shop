import { Input } from "@medusajs/ui"
import DiscountCode from "@modules/checkout/components/discount-code"
import {
  ArrowRight,
  BellIcon,
  CarIcon,
  CreditCardIcon,
  Headphones,
} from "lucide-react"

const Banner = () => {
  return (
    <section className=" bg-black">
      <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-800 bg-opacity-75">
        <h1 className="text-3xl font-normal text-white sm:text-5xl uppercase">
          Don't Miss Our
          <br />
          Biggest Sale of The year
        </h1>
        <p className="mt-4 max-w-lg text-orange-400 sm:text-xl/relaxed uppercase text-center">
          Shop your Favourites while tey're still in stock
        </p>
      </div>
      <div className="flex items-center justify-between text-center py-10 px-20 bg-orange-100 bg-opacity-75">
        <div className="flex flex-col items-center justify-center gap-2">
          <CarIcon className="size-14" />
          <h3>Free shipping worldwide</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <CreditCardIcon className="size-14" />
          <h3>Guaranteed Safe Checkout</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Headphones className="size-14" />
          <h3>7/7 Customer Support</h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <BellIcon className="size-14" />
          <h3>Black Friday : Save up to 70% OFF</h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center py-10 px-20 bg-gray-800 bg-opacity-75">
        <h1 className="text-3xl font-normal text-white sm:text-5xl uppercase">
          Get 10% off your first order
        </h1>
        <p className="mt-4 text-white text-sm uppercase text-center">
          Enter your email to get a -10% discount code now & to be the first to
          know about new collections and exclusive offers.
        </p>

        <Input className="mt-5 w-72" placeholder="Email" />
      </div>
    </section>
  )
}

export default Banner
