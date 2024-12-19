import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { listCategories } from "@lib/data/categories"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PopularCollections from "@modules/home/components/poular-collections/popular-collections"
import LatestArrival from "@modules/home/components/latest-arrival/LatestArrival"
import Banner from "@modules/home/components/banner"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

type Params = {
  searchParams: Promise<{
    sortBy?: SortOptions
    page?: string
  }>
  params: Promise<{
    countryCode: string
  }>
}
export default async function Home(props: Params) {
  const params = await props.params
  const searchParams = await props.searchParams
  const { sortBy, page } = searchParams

  const { countryCode } = params

  const { collections } = await listCollections({
    fields: "*products",
  })
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  const productCategories = await listCategories()

  return (
    <>
      <Hero />
      <PopularCollections
        productCategories={productCategories}
        collections={collections}
        region={region}
      />

      <ul className="flex flex-col gap-x-6">
        <FeaturedProducts collections={collections} region={region} />
      </ul>
      <LatestArrival sortBy={sortBy} page={page} countryCode={countryCode} />
      <Banner />
    </>
  )
}
