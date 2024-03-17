const Cart = () => {
  return (
    <div className="col-span-1 rounded-xl bg-white p-[24px]">
      <h3 className="text-[18px] font-bold text-[#2F80ED]">
        Credit Hour Remaining 7 hr
      </h3>
      <hr className="my-[16px]" />
      <h3 className="mb-[21px] text-[20px] font-bold text-[#1C1B1B]">
        Course Name
      </h3>
      <ul className="mb-[20px] text-[14px] text-[#1c1b1b99]">
        <li>1 Introduction to c programming</li>
        <li>2 Introduction to c programming</li>
        <li>3 Introduction to c programming</li>
      </ul>
      <hr className="my-[16px]" />
      <h3 className="text-[16px] font-medium text-[#1c1b1bcc]">
        Total Credit Hour : 13
      </h3>
      <hr className="my-[16px]" />
      <h3 className="text-[16px] font-semibold text-[#1c1b1bcc]">
        Total Price : 48000 USD
      </h3>
    </div>
  );
};

export default Cart;
