'use client'
import React, { useEffect, useState } from 'react'

function Subscription() {

  const [subscription, setSubscription] = useState(null);
  useEffect(() => {
  const subscriptionData = {
    subscriptionType: 'شهري',
    subscriptionValue:'500',
    paymentType:'كاش',
    startDate: '2023-01-01',
    endDate: '2024-01-01',

  };
  document.title = 'الإشتراك'

  setSubscription(subscriptionData);
}, []);

if (!subscription) {
  return <div className="text-center">Loading...</div>;
}
  return (
    <div className='w-full h-[80vh] mt-8 flex content-center justify-center flex-wrap gap-3' style={{ direction: 'rtl' }}>
        <div class="w-[460px] max-[900px]:w-full overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-start rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-[#dae6f2] uppercase bg-[#224971] ">
            <tr>
              <th scope="col" class=" text-start px-6 py-3 text-[16px]">تفاصيل الإشتراك</th>
              <th scope="col" class="px-6 py-3"> </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-[17px] w-2/4 text-start px-6 py-4 font-medium">نوع الإشتراك:</th>
              <td class=" text-[17px]  text-start px-6 py-4">{subscription.subscriptionType}</td>
            </tr>
            <tr class=" text-black">
              <th scope="row" class=" text-[17px]  text-start px-6 py-4 font-medium ">قيمه الإشتراك:</th>
              <td class=" text-[17px] px-6 py-4">{subscription.subscriptionValue}</td>
            </tr>
            <tr class="bg-white text-black">
              <th scope="row" class=" text-[17px]  text-start px-6 py-4 font-medium ">نوع الدفع: </th>
              <td class=" text-[17px] px-6 py-4">{subscription.paymentType}</td>
            </tr>
            <tr class=" text-black">
              <th scope="row" class=" text-[17px] text-start px-6 py-4 font-medium "> تاريخ الإبتداء:</th>
              <td class=" text-[17px] px-6 py-4">{subscription.startDate}</td>
            </tr>
            <tr class=" text-black">
              <th scope="row" class=" text-[17px] text-start px-6 py-4 font-medium ">تاريخ الإنتهاء: </th>
              <td class=" text-[17px] px-6 py-4">{subscription.endDate}</td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Subscription
