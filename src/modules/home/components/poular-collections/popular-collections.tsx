import { PopularCollectionsImages } from "@lib/constants"
import { HttpTypes } from "@medusajs/types"
import { clx } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const PopularCollections = async ({
  collections,
  region,
  productCategories,
}: {
  collections: HttpTypes.StoreCollection[]
  productCategories: HttpTypes.StoreProductCategory[]
  region: HttpTypes.StoreRegion
}) => {
  if (!collections || !region) {
    return null
  }
  return (
    <div className="flex flex-col items-center justify-center mt-10 px-20">
      <section className="flex flex-col items-center justify-center mt-5">
        <h1 className="text-3xl font-semibold">Popular Collections</h1>
        <div className="mt-10">
          {productCategories && productCategories?.length > 0 && (
            <ul
              className="flex flex-row gap-10 items-center justify-center"
              data-testid="footer-categories"
            >
              <li className=" flex items-center justify-between gap-10">
                {PopularCollectionsImages.slice(0, 1).map((collection) => (
                  <div className="relative  flex items-center justify-center">
                    <div key={collection.name}>
                      <Image
                        src={collection.src}
                        alt={collection.name}
                        width={400}
                        height={400}
                      />
                    </div>
                    {productCategories.slice(3, 4).map((c) => {
                      if (c.parent_category) {
                        return
                      }
                      return (
                        <div className="absolute bottom-3" key={c.id}>
                          <LocalizedClientLink
                            className={clx("hover:text-ui-fg-base")}
                            href={`/categories/${c.handle}`}
                            data-testid="category-link"
                          >
                            <h3 className="font-bold text-3xl text-white uppercase underline ">
                              {c.name}
                            </h3>
                          </LocalizedClientLink>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </li>
              {/** */}
              <li className=" flex items-center justify-between gap-10">
                {PopularCollectionsImages.slice(1, 2).map((collection) => (
                  <div className="relative flex items-center justify-center">
                    <div key={collection.name}>
                      <Image
                        src={collection.src}
                        alt={collection.name}
                        width={400}
                        height={400}
                      />
                    </div>
                    {productCategories.slice(4, 5).map((c) => {
                      if (c.parent_category) {
                        return
                      }
                      return (
                        <div className="absolute bottom-3 " key={c.id}>
                          <LocalizedClientLink
                            className={clx("hover:text-ui-fg-base")}
                            href={`/categories/${c.handle}`}
                            data-testid="category-link"
                          >
                            <h3 className="font-bold text-3xl text-white uppercase underline ">
                              {c.name}
                            </h3>
                          </LocalizedClientLink>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </li>
              {/** */}
              <li className=" flex items-center justify-between gap-10">
                {PopularCollectionsImages.slice(2, 3).map((collection) => (
                  <div className="relative  flex items-center justify-center">
                    <div key={collection.name}>
                      <Image
                        src={collection.src}
                        alt={collection.name}
                        width={400}
                        height={400}
                      />
                    </div>
                    {productCategories.slice(5, 6).map((c) => {
                      if (c.parent_category) {
                        return
                      }
                      return (
                        <div className="absolute bottom-3 " key={c.id}>
                          <LocalizedClientLink
                            className={clx("hover:text-ui-fg-base")}
                            href={`/categories/${c.handle}`}
                            data-testid="category-link"
                          >
                            <h3 className="font-bold text-3xl text-white uppercase underline ">
                              {c.name}
                            </h3>
                          </LocalizedClientLink>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </li>
              {/** */}
              <li className=" flex items-center justify-between gap-10">
                {PopularCollectionsImages.slice(3, 4).map((collection) => (
                  <div className="relative flex items-center justify-center">
                    <div key={collection.name}>
                      <Image
                        src={collection.src}
                        alt={collection.name}
                        width={400}
                        height={400}
                      />
                    </div>
                    {productCategories.slice(9, 10).map((c) => {
                      if (c.parent_category) {
                        return
                      }
                      return (
                        <div className="absolute bottom-3" key={c.id}>
                          <LocalizedClientLink
                            className={clx("hover:text-ui-fg-base")}
                            href={`/categories/${c.handle}`}
                            data-testid="category-link"
                          >
                            <h3 className="font-bold text-3xl text-white uppercase underline ">
                              {c.name}
                            </h3>
                          </LocalizedClientLink>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </li>
              {/** */}
            </ul>
          )}
        </div>
      </section>
    </div>
  )
}

export default PopularCollections
