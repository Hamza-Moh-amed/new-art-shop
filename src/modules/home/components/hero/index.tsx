import Link from "next/link"

const Hero = () => {
  return (
    <section className="relative bg-[url(https://galartsy.com/cdn/shop/products/product-image-656556167.jpg?v=1620607517&width=1280)] bg-cover bg-center bg-no-repeat">
      <div className="relative flex flex-col items-center justify-center text-center p-20 bg-black bg-opacity-75">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your
            <strong className="block font-extrabold text-orange-bg-blue-400">
              Forever Home.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex  gap-4 text-center items-center justify-center">
            <Link
              href="#"
              className="block w-full rounded bg-blue-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-400 focus:outline-none focus:ring active:bg-blue-400 sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-bg-blue-400 shadow hover:text-orange-bg-blue-400 focus:outline-none focus:ring active:text-orange-bg-blue-400 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
