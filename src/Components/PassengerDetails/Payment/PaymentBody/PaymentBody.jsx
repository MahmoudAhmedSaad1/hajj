import React from 'react';

// Design-only static component for Payment Body
export default function PaymentBody() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">

      {/* Total Payment Section */}
      <div className="bg-gray-50 rounded-2xl p-8 shadow-md max-w-sm mx-auto">
        <h3 className="text-xl font-bold text-[#003E71] mb-5">Total Payment</h3>
        <div className="space-y-4 text-[#6B6C6F] mb-8">
          <div className="flex justify-between">
            <p className="text-sm">Total Trip</p>
            <h2 className="text-sm font-bold text-[#A08255]">EGP 45,456.45</h2>
          </div>
          <div className="flex justify-between">
            <p className="text-sm">Adds-On</p>
            <h2 className="text-sm font-bold text-[#A08255]">EGP 654.54</h2>
          </div>
        </div>
        <hr className="border-t border-gray-200  " />
        <div className="flex justify-between items-center mt-16">
          <p className="text-base font-medium text-[#6B6C6F]">Total price you pay</p>
          <p className="text-lg font-bold text-[#A08255]">EGP 56,110.99</p>
        </div>
      </div>
  
    </div>
    
  );
}
