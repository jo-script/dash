
import Link from 'next/link'
import Image from 'next/image'

function AddProduct() {
  return (
    <div className="w-full mx-auto p-4 flex items-center flex-col gap-5 mt-10 max-[800px]:p-1" style={{ direction: 'rtl' }}>

      {/* add img to product */}
      <div className='w-[60%] max-[800px]:w-[80%] h-[350px] rounded-lg border flex item-center justify-center mt-3'>
        <label htmlFor='addImg' className='w-full h-full flex items-center justify-center'>Add Image</label>
        <input type='file' id='addImg' className='hidden'/>
      </div>

      {/* form add product*/}
      <form className="mt-4 w-[60%] max-[800px]:w-[95%] max-[500px]:w-full">
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="nameArabic">اسم المنتج</label>
          <input type="text" id="nameArabic" placeholder="ادخل اسم المنتج" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="nameEnglish">إسم ألمنتج بالانجليزيه </label>
          <input type="text" id="nameEnglish" placeholder="ادخل اسم المنتج بالانجليزية" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="amount"> الكمية </label>
          <input type="text" id="amount" placeholder="ادخل الكمية" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="price"> سعر المنتج </label>
          <input type="number" id="price" placeholder="ادخل سعر المنتج" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="detailsArabic"> تفاصيل المنتج بالعربية</label>
          <textarea type="text" id="detailsArabic" placeholder="ادخل تفاصيل المنتج بالعربية" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" ></textarea>
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="detailsEnglish"> تفاصيل المنتج بالانجليزية </label>
          <textarea type="text" id="detailsEnglish" placeholder="ادخل تفاصيل المنتج بالانجليزية" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" ></textarea>
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="mainCategory">التصنيف الرئيسي </label>
          <input type="text" id="mainCategory" placeholder="ادخل التصنيف الرئيسي" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 w-full">
          <label className="block text-[#224971] text-sm font-bold mb-2" htmlFor="kilograms"> الوزن </label>
          <input type="number" id="kilograms" placeholder="ادخل الوزن" className=" w-full appearance-none border border-[#22497173] text-gray-600 rounded-md  py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className='flex items-center gap-5'>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-[all_.1s]">
        اضافة منتج جديد
        </button>
        <Link href='/products' type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-[all_.1s]">
          إلغاء 
        </Link>
        </div>
      </form>

    </div>
  )
}

export default AddProduct
