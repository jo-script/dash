'use client'
import React, { useEffect, useState } from 'react'
import { upgrade } from '@/components/checkUpgrade';
import Upgrade from './upgrade';
import NoUpgrade from './noUpgrade';

function Subscription() {

  const [subscription, setSubscription] = useState(null);

 

const subscriptionData = {
  subscriptionType: 'شهري',
  subscriptionValue:'500',
  paymentType:'كاش',
  startDate: '2023-01-01',
  endDate: '2024-01-01',

};

useEffect(() => {
  document.title = 'الإشتراك'
  setSubscription(subscriptionData);
}, []);

if (!subscription) {
  return <div className="text-center">Loading...</div>;
}
  return (
    <div className='w-full h-[80vh] mt-8 flex content-center justify-center flex-wrap gap-3' style={{ direction: 'rtl' }}>
        {upgrade == true ? (
        <Upgrade subscription={subscriptionData} />
        ) : (<NoUpgrade />)}
        
    </div>
  )
}

export default Subscription
