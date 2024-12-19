import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import React, { Suspense } from "react"
import HomePaginatedProducts from "./home-paginated-products"
import { Button } from "@medusajs/ui"

const LatestArrival = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="flex flex-col items-center justify-center px-20 gap-10 mt-20 mb-20">
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-3xl font-semibold text-center">
          Join our community of 100,000+ <br /> happy art lovers!
        </h1>
        <p className="font-light text-black opacity-75">
          We have made over 100,000 art lovers happy worldwide by offering
          unique wearable art.
        </p>
        <div className="flex flex-col items-center justify-center gap-2">
          <h4 className="font-semibold">
            Join them now and be a part of The Galartsy Movement, and expolore
            our:
          </h4>
          <h1 className="text-3xl font-semibold">Latest Arrival</h1>
        </div>
      </div>
      <Suspense fallback={<SkeletonProductGrid />}>
        <HomePaginatedProducts
          sortBy={sort}
          page={pageNumber}
          countryCode={countryCode}
        />
      </Suspense>

      <Button className="">View All Products</Button>
    </div>
  )
}

export default LatestArrival
