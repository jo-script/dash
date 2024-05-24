import Products from "../components/products";

function Page() {


  return (
    <div className='w-full mt-8 flex content-center justify-start flex-wrap gap-3' style={{ direction: 'rtl' }}>
      <Products />
    </div>
  );
}

export default Page;
