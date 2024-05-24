'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { products } from '../../products/productData.js'
import Link from 'next/link';

const EditProduct = ({ params }) => {
  const { id } = params;
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full mx-auto p-4 flex items-center flex-col gap-5" style={{ direction: 'rtl' }}>

      <div className='w-[60%] h-[350px] rounded-lg border flex item-center justify-center mt-3'>
        <Image src={product.img} alt={product.name} />
      </div>
      {/* from edit product*/}
      <form className="mt-4 w-[60%]">
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="nameArabic">اسم المنتج</label>
          <input type="text" id="nameArabic" defaultValue={product.nameArabic} placeholder="ادخل اسم المنتج" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="nameEnglish">إسم ألمنتج بالانجليزيه </label>
          <input type="text" id="nameEnglish" defaultValue={product.nameEnglish} placeholder="ادخل اسم المنتج بالانجليزية" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="amount"> الكمية </label>
          <input type="text" id="amount" defaultValue={product.amount} placeholder="ادخل الكمية" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="price"> سعر المنتج </label>
          <input type="number" id="price" defaultValue={product.price} placeholder="ادخل سعر المنتج" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="detailsArabic"> تفاصيل المنتج بالعربية</label>
          <textarea type="text" id="detailsArabic" defaultValue={product.detailsArabic} placeholder="ادخل تفاصيل المنتج بالعربية" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" ></textarea>
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="detailsEnglish"> تفاصيل المنتج بالانجليزية </label>
          <textarea type="text" id="detailsEnglish" defaultValue={product.detailsEnglish} placeholder="ادخل تفاصيل المنتج بالانجليزية" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" ></textarea>
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="mainCategory">التصنيف الرئيسي </label>
          <input type="text" id="mainCategory" defaultValue={product.mainCategory} placeholder="ادخل التصنيف الرئيسي" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="kilograms"> ألوزن </label>
          <input type="number" id="kilograms" defaultValue={product.kilograms} placeholder="ادخل الوزن" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='flex items-center gap-5'>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-[all_.1s]">
          حفظ التعديلات
        </button>
        <Link href='/products' type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-[all_.1s]">
          إلغاء التعديلات
        </Link>
        </div>
      </form>

    </div>
  );
};

export default EditProduct;
