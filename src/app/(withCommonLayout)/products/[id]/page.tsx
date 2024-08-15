import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import ProductDetails from "@/components/Ui/ProductsPage/ProductDetails/ProductDetails";
import ProductFeatues from "@/components/Ui/ProductsPage/ProductFeatures/ProductFeatues";
import RelatedProducts from "@/components/Ui/ProductsPage/RelatedProducts/RelatedProducts";
import { Metadata } from "next";
import Image from "next/image";

type typePropTypes = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: "MediMart | Products Details Page",
  description:
    "Find all the products details you need for your pets at MediMart",
};

const ProductDetailsPage = async ({ params }: typePropTypes) => {
  // get product details by id
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${params.id}`,
    {
      cache: "no-store",
    }
  );

  const { data: product } = await response.json();
  

  return (
    <div>
      <SectionHeader HeaderTitle="Products Details" />
      <div className="font-sans tracking-wide p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto mx-auto my-10">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 text-center">
            <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
              <Image
                src={product?.photos[0]}
                alt="Product"
                className="lg:w-11/12 w-full h-full rounded object-cover object-top mx-auto  "
                width={500}
                height={500}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mx-auto mt-4">
              {product.photos &&
                product?.photos.map((photo: string, index: number) => (
                  <div
                    key={index}
                    className="w-28 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer"
                  >
                    <Image
                      src={photo}
                      alt="Product"
                      className="w-full h-full object-contain"
                      width={500}
                      height={500}
                    />
                  </div>
                ))}
            </div>
          </div>
          {/* Product Details */}
          <ProductDetails {...product} />
        </div>

        {/* Product Features */}
        <ProductFeatues {...product} />
      </div>

      {/* Related Products */}
      <RelatedProducts productId={product._id} />
    </div>
  );
};

export default ProductDetailsPage;
