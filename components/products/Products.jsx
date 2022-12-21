import React, { useState } from "react";
import Image from "next/image";
const Products = () => {
  return (
    <div className="mt-8 lg:mt-16 mb-20">
      <div className="container max-w-[375px] lg:max-w-[1280px] mx-auto">
        <h2 className="text-[30px] lg:text-[32px] mx-4 lg:mx-0 text-[#A9610A] text-primary font-bold lg:border-none border-b-2 border-[#A9610A] border-solid lg:font-semibold">
          Biz orqali Xitoyga ketsangiz qancha pulni tejab qolasiz?
        </h2>
        <div className="mt-10 lg:h-[524px] bg-no-repeat bg-cover bg-aboutMobiBack lg:bg-aboutBack">
          <div className="flex">
            <div className="hidden bg-[#A9610A] lg:block relative lg:left-[80px] rounded-sm p-5 top-[260px] lg:top-[360px] font-sans font-normal text-xl text-white lg:w-[750px] w-[347px] mx-auto lg:mx-0">
              <p>1. Yotoqxona xarajatlari – 1000$ dan 4 yil-4000$</p>
              <p>2. Tibbiy xizmatlar va boshqa mayda xarajatlar - 1000$</p>
              <p>3. Sifatli til kurslari 6oy - 1000$</p>
              <p>
                4. Grand kafolatlanmaydi, kontraktda o‘qisangiz – 2000$ dan 4
                yil-8000$
              </p>
              <p>
                5. Ish bilan ta‘minlash kafolati yo‘q, yashashingiz uchun 3000$
                dan 4 yil-12 000$
              </p>
            </div>

            <div className="relative bg-[#A9610A] lg:hidden lg:left-[80px] rounded-sm p-5 top-[260px] lg:top-[360px] font-sans font-normal text-xl text-white lg:w-[750px] w-[347px] mx-auto lg:mx-0">
              <p className="pb-2 lg:pb-0">
                1. Yotoqxona xarajatlari – 1000$ dan 4 yil-4000$
              </p>
              <p className="pb-2 lg:pb-0">
                2. Tibbiy xizmatlar va boshqa mayda xarajatlar - 1000$
              </p>
              <p className="pb-2 lg:pb-0">
                3. Sifatli til kurslari 6oy - 1000$
              </p>
              <p className="pb-2 lg:pb-0">
                4. Grand kafolatlanmaydi, kontraktda o‘qisangiz – 2000$ dan 4
                yil-8000$
              </p>
              <p className="pb-2 lg:pb-0">
                5. Ish bilan ta‘minlash kafolati yo‘q, yashashingiz uchun 3000$
                dan 4 yil-12 000$
              </p>
              <p className="lg:hidden text-2xl font-sans font-semibold text-center">
                Jami: 26 000$ Siz shularni barchasiga 3 800$ evaziga
                erishishingiz mumkin.
              </p>
            </div>

            <div className="hidden lg:block bg-[#A9610A] text-center h- ml-5 relative left-[80px] rounded-sm p-5 top-[360px] font-sans font-normal text-xl text-white w-[350px]">
              <p className="flex items-center h-full">
                Jami: 26 000$ Siz shularni barchasiga 3 800$ evaziga
                erishishingiz mumkin.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mt-20 mt-72 container max-w-[375px] lg:max-w-[1280px] mx-4 lg:mx-auto">
        <p className="font-sans lg:w-auto w-[373px] text-xl text-[#242424] font-medium">
          Biz barcha ketishni istaganlarni yubora olmaymiz! Bor yog‘i 100
          kishini kafolatli holda yuboramiz. Bu 100 kishini orasida bo‘lish
          uchun nima qilishingiz kerak?
        </p>

        <p className="mt-10 lg:w-auto w-[373px] font-sans text-xl text-[#666666] font-medium">
          <strong className="text-black line-through decoration-1">
            “Pul to‘lasam bas”
          </strong>{" "}
          Yo‘q! Pulingiz bor degani omadlilar qatorida bo’lasiz degani emas. Siz
          ushbu imkoniyatdan foydalanish uchun 25-dekabrda bo‘lib o‘tadigan
          imtihon orqali 76 ball dan ortiq ball to‘plashingiz kerak. So‘ngra
          o‘zingiz tanlagan ta‘rif va yo‘nalish bo‘yicha o‘qishga qabul
          qilinasiz.
        </p>

        <p className="mt-10 lg:w-auto w-[373px] font-sans text-xl text-[#666666] font-medium">
          <strong className="text-[#A9610A]">Imtihon haqida ma‘lumot:</strong>{" "}
          <br />
          Fanlar: Umumiy 30 test bo‘lib, boshlang‘ich matematika, psixologik
          savollardan iborat bo‘ladi <br /> Manzil: Medion academy <br /> Sana:
          25 dekabr, soat 10:00 da <br /> Imtixon mehmoni: Saadulla Abdullaev
          (Texnoplov)
        </p>

        <p className="mt-10 lg:w-auto w-[373px] font-sans text-xl text-[#666666] font-medium">
          <strong className="text-[#A9610A]">Kafolat:</strong> <br />
          Agar imtihondan o’tsangiz, siz bilan huquqiy kuchga ega shartnoma
          tuzamiz. Unga ko‘ra agar yuqorida kafolat bergan xizmatlarimizni
          bajara olmasak, til kurslariga sarflangan pulingizdan tashqari barcha
          pulingizni to’liq qaytarib beramiz.
        </p>

        <p className="mt-6 lg:w-auto w-[373px] font-sans text-xl text-[#666666] font-medium">
          Hayotini butunlay yaxshi tomonga o‘zgartirishni istaganlar va
          23-dekabrgacha e’lon qilingan “optimal” ta’rifidan foydalanish
          istagidagilar, hoziroq imtihonga ro‘yxatdan o‘ting.
        </p>

        <p className="mt-6 lg:w-auto w-[373px] font-sans text-xl text-[#666666] font-medium">
          Ro‘yxatdan o‘tish va yanada batafsil ma’lumot olish uchun
          “Imkoniyatdan foydalanaman” tugmasi ustiga bosing.
        </p>
      </div>
    </div>
  );
};

export default Products;
