import React, { useState } from "react";
import NavbarResearcher from "../../components/navbar/navbarResearcher";
import CardHome from "../../components/card/CardHome";

const HomePage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeDiv, setActiveDiv] = useState(null); // Track active div

  const handleClick = (id) => {
    setActiveDiv(id === activeDiv ? null : id); // Collapse if clicked again
  };

  const divs = Array.from({ length: 6 }, (_, i) => i + 1); // Creates an array with 6 items

  return (
    <div>
      <NavbarResearcher className="fixed top-0 left-0 right-0 z-50" />
      <div className="w-full h-full bg-[#202224] flex flex-col justify-center items-center mt-20 p-6 lg:p-0 lg:pb-12 ">
        <div className="space-y-5 lg:space-y-10 mt-12 lg:mt-32">
          <h1 className="font-semibold text-3xl lg:text-7xl text-white max-w-[700px] text-center">
            Tool For Heart Rate Research
          </h1>
          <p className="font-normal text-sm lg:text-base text-white max-w-[710px] text-center opacity-70">
            An innovative digital platform designed to simplify the research
            process by facilitating access and management of patient heart rate
            data.
          </p>
        </div>
        <button className="bg-white px-8 py-2 rounded-xl font-medium text-base mt-16">
          Explore Now
        </button>
        <div className="max-w-[920px] w-full bg-[#605E78] rounded-xl p-3 mt-[90px]">
          <div className="w-full bg-white rounded-xl py-6 px-8 text-center space-y-4 ">
            <h1 className="font-medium text-2xl lg:text-4xl">Heart Rate</h1>
            <p className="text-sm lg:text-base">
              Heart rate atau detak jantung merupakan indikator vital yang
              mencerminkan kesehatan kardiovaskular seseorang. Dalam konteks
              normal, jantung berdetak dengan ritme teratur yang dikendalikan
              oleh sistem konduksi listrik jantung, khususnya nodus sinoatrial
              (SA node) yang bertindak sebagai pacemaker alami. Namun, ketika
              terjadi gangguan pada sistem konduksi listrik ini atau kerusakan
              pada otot jantung, dapat timbul berbagai komplikasi serius seperti
              aritmia dan infark miokard yang saling berkaitan satu sama lain.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full bg-white flex flex-col justify-center items-center lg:py-24 lg:px-44 ">
        <div className="w-full bg-white rounded-xl py-6 px-8 text-center space-y-4 max-w-[505px] mt-10">
          <h1 className="font-semibold text-2xl lg:text-[50px]">
            Heart Rate Zones
          </h1>
          <p className="text-sm lg:text-base max-w-[380px] m-auto">
            Zona heart rate adalah pembagian rentang detak jantung berdasarkan
            persentase dari detak jantung maksimal (Maximum Heart Rate/MHR).
            Setiap zona memiliki intensitas dan manfaat yang berbeda untuk
            tubuh.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-10 lg:absolute top-48 ">
          <div className="relative">
            <div className="lg:absolute right-44 w-full px-5 py-4 border rounded-xl space-y-2 ">
              <p className="font-medium text-[#554F9B]">50-60% MHR</p>
              <h1 className="font-semibold text-xl">Zone 1 : Recovery</h1>
              <ul className="list-disc ml-7">
                <li>Active recovery</li>
                <li>Injury prevention</li>
                <li>Stress reductio</li>
              </ul>
            </div>
          </div>
          <div className="px-5 py-4 border rounded-xl space-y-2 opacity-0 hidden lg:block">
            <p className="font-medium text-[#554F9B]">50-60% MHR</p>
            <h1 className="font-semibold text-xl">Zone 1 : Recovery</h1>
            <ul className="list-disc ml-7">
              <li>Active recovery</li>
              <li>Injury prevention</li>
              <li>Stress reductio</li>
            </ul>
          </div>
          <div className="relative">
            <div className="lg:absolute -right-44 w-full px-5 py-4 border rounded-xl space-y-2 ">
              <p className="font-medium text-[#554F9B]">90-100% MHR</p>
              <h1 className="font-semibold text-xl">Zone 5 : Maximum</h1>
              <ul className="list-disc ml-7">
                <li>Maximum performance </li>
                <li>Sprint capacity </li>
                <li>VO2 max improvement</li>
              </ul>
            </div>
          </div>
          <div className="px-5 py-4 border rounded-xl space-y-2 md:col-span-2 mx-auto lg:col-span-1">
            <p className="font-medium text-[#554F9B]">60-70% MHR</p>
            <h1 className="font-semibold text-xl">Zone 2 : Fat Burn</h1>
            <ul className="list-disc ml-7">
              <li>Fat metabolism</li>
              <li>Endurance building </li>
              <li>Long workout sustainability</li>
            </ul>
          </div>
          <div className="relative">
            <div className="lg:absolute -top-14 w-full px-5 py-4 border rounded-xl space-y-2 ">
              <p className="font-medium text-[#554F9B]">70-80% MHR</p>
              <h1 className="font-semibold text-xl">Zone 3 : Aerobic</h1>
              <ul className="list-disc ml-7">
                <li>Cardiovascular improvement</li>
                <li>Aerobic capacity </li>
                <li>Stamina development</li>
              </ul>
            </div>
          </div>
          <div className="px-5 py-4 border rounded-xl space-y-2">
            <p className="font-medium text-[#554F9B]">80-90% MHR</p>
            <h1 className="font-semibold text-xl">Zone 4 : Anaerobic</h1>
            <ul className="list-disc ml-7">
              <li>Speed improvement</li>
              <li>Performance enhancement </li>
              <li>Lactate tolerance</li>
            </ul>
          </div>
        </div>
        <div className="h-[100px] md:h-[200px] lg:h-[300px]"></div>
      </div>
      <div className="w-full h-full bg-[#202224] mt-20 p-6 lg:px-[175px] lg:py-[100px] lg:pb-12 space-y-20 ">
        <div className="space-y-5 lg:space-y-5 ">
          <h1 className="font-semibold text-5xl lg:text-7xl text-white max-w-[700px] ">
            Arrythmia
          </h1>
          <p className="font-normal text-sm lg:text-base text-white max-w-[710px] center opacity-70">
            Aritmia adalah kondisi di mana detak jantung seseorang tidak
            teratur, terlalu cepat (takikardia), atau terlalu lambat
            (bradikardia). Ini terjadi ketika impuls listrik yang mengontrol
            detak jantung tidak bekerja dengan baik.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="inline-flex bg-[#605E78] rounded-xl p-3">
            <div className="w-full bg-white rounded-xl py-6 px-8  space-y-4 ">
              <h1 className="font-semibold text-sm lg:text-4xl">
                Pencegahan Arrythmia
              </h1>
              <p className="text-sm lg:text-base">
                <ul className="list-disc ml-7">
                  <li>Menjalani gaya hidup sehat</li>
                  <li>Mengelola stress dengan baik</li>
                  <li>
                    Hindari stimulan berlebihan seperti kafein, alkohol, dan
                    nikotin
                  </li>
                  <li>Melakukan pemeriksaan kesehatan jantung secara rutin </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="inline-flex bg-[#605E78] rounded-xl p-3">
            <div className="w-full bg-white rounded-xl py-6 px-8  space-y-4 ">
              <h1 className="font-semibold text-sm lg:text-4xl">
                Dampak Arrythmia
              </h1>
              <p className="text-sm lg:text-base">
                <ul className="list-disc ml-7">
                  <li>Kecemasan dan depresi terkait kondisi jantung</li>
                  <li>Pembatasan aktivitas fisik</li>
                  <li>Gangguan tidur </li>
                  <li>Penurunan produktivitas kerja</li>
                  <li>Perubahan dalam hubungan sosial</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="inline-flex bg-[#605E78] rounded-xl p-3">
            <div className="w-full bg-white rounded-xl py-6 px-8  space-y-4 ">
              <h1 className="font-semibold text-sm lg:text-4xl">
                Penyebab Arrytmia
              </h1>
              <p className="text-sm lg:text-base">
                <ul className="list-disc ml-7">
                  <li>Masalah pada sistem listrik jantung</li>
                  <li>Penyakit jantung</li>
                  <li>Stress atau kecemasan</li>
                  <li>Efek samping obat-obatan tertentu</li>
                  <li>Ketidakseimbangan elektrolit dalam tubuh</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="inline-flex bg-[#605E78] rounded-xl p-3">
            <div className="w-full bg-white rounded-xl py-6 px-8  space-y-4 ">
              <h1 className="font-semibold text-sm lg:text-4xl">
                Jenis - Jenis Arrytmia
              </h1>
              <p className="text-sm lg:text-base">
                <ul className="list-disc ml-7">
                  <li>Takikardia: Detak jantung terlalu cepat</li>
                  <li>Bradikardia: Detak jantung terlalu</li>
                  <li>
                    Fibrilasi atrium: Detak jantung tidak teratur dan cepat
                  </li>
                  <li>Fluter atrium: Detak jantung cepat tapi teratur</li>
                  <li>Ekstrasistol: Detak jantung tambahan</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="inline-flex bg-[#605E78] rounded-xl p-3">
            <div className="w-full bg-white rounded-xl py-6 px-8  space-y-4 ">
              <h1 className="font-semibold text-sm lg:text-4xl">
                Gejala Arrytmia
              </h1>
              <p className="text-sm lg:text-base">
                <ul className="list-disc ml-7">
                  <li>Jantung berdebar</li>
                  <li>Detak jantung terasa cepat atau lambat</li>
                  <li>Nyeri dada </li>
                  <li>Sesak napas </li>
                  <li>Pusing atau pingsan</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="inline-flex bg-[#605E78] rounded-xl p-3">
            <div className="w-full bg-white rounded-xl py-6 px-8  space-y-4 ">
              <h1 className="font-semibold text-sm lg:text-4xl">
                Diagnosis Arrytmia
              </h1>
              <p className="text-sm lg:text-base">
                <ul className="list-disc ml-7">
                  <li className="">
                    Diagnosis aritmia biasanya dilakukan melalui
                    Elektrokardiogram (EKG), Holter monitor, atau tes stress
                    jantung. Pengobatan dapat meliputi obat-obatan, ablasi
                    kateter, atau pemasangan alat pacu jantung, tergantung pada
                    jenis dan tingkat keparahan aritmia.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white mt-20 p-6 lg:px-[175px] lg:py-[100px] lg:pb-12 space-y-20 ">
        <div className="space-y-5 lg:space-y-5 text-right">
          <h1 className="font-semibold text-5xl lg:text-7xl  ">
            Myocardial Infartion
          </h1>
          <div className="flex justify-end">
            <p className="font-normal text-sm lg:text-base flex  opacity-70 max-w-[700px] ">
              Myocardial Infarction, yang lebih dikenal sebagai serangan
              jantung, adalah kondisi medis darurat di mana kurangnya suplai
              darah ke jantung secara tiba-tiba atau berkepanjangan, menyebabkan
              kerusakan pada otot jantung.
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-5">
          {divs.map((id) => (
            <CardHome
              key={id}
              id={id}
              isActive={activeDiv === id} // Check if current div is active
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-full bg-[#202224] flex flex-col justify-center items-center mt-20 p-6 lg:p-0 lg:pb-12 ">
        <div className="space-y-5 lg:space-y-10 mt-12 lg:mt-32">
          <h1 className="font-semibold text-3xl lg:text-3xl text-white  text-center">
            Check your Heart Rate
          </h1>
          <p className="font-normal text-sm lg:text-base text-white max-w-[710px] text-center opacity-70">
            If you feel that there is something unclear or need further
            explanation regarding this information, do not hesitate to contact
            us. We are ready to help you understand each step better.
          </p>
        </div>
        <button className="bg-white px-4 py-2 rounded-xl font-medium text-base mt-16">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="m-auto"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 9.83614C0 4.41153 4.36382 0 9.76407 0C15.1643 0 19.5281 4.41153 19.5281 9.83614C19.5281 11.1693 19.2643 12.4428 18.7856 13.6047L19.9061 17.2764C20.4163 18.9481 18.7754 20.513 17.1217 19.846L14.1662 18.6541C14.1456 18.6458 14.123 18.6456 14.1023 18.6534L14.0763 18.6632C13.5019 18.9485 12.8953 19.1787 12.2636 19.3468C12.1552 19.3829 12.0454 19.41 11.9349 19.4281C11.2359 19.588 10.5091 19.6723 9.76407 19.6723C4.36382 19.6723 0 15.2607 0 9.83614ZM5.51749 8.65924C4.9652 8.65924 4.51749 9.10696 4.51749 9.65924C4.51749 10.2115 4.9652 10.6592 5.51749 10.6592H5.52844C6.08073 10.6592 6.52844 10.2115 6.52844 9.65924C6.52844 9.10696 6.08073 8.65924 5.52844 8.65924H5.51749ZM9.89952 8.65924C9.34724 8.65924 8.89952 9.10696 8.89952 9.65924C8.89952 10.2115 9.34724 10.6592 9.89952 10.6592H9.91048C10.4628 10.6592 10.9105 10.2115 10.9105 9.65924C10.9105 9.10696 10.4628 8.65924 9.91048 8.65924H9.89952ZM14.2706 8.65924C13.7183 8.65924 13.2706 9.10696 13.2706 9.65924C13.2706 10.2115 13.7183 10.6592 14.2706 10.6592H14.2816C14.8338 10.6592 15.2816 10.2115 15.2816 9.65924C15.2816 9.10696 14.8338 8.65924 14.2816 8.65924H14.2706Z"
              fill="#554F9B"
            />
          </svg>
          Contact
        </button>
        <div className="w-full px-10 border-b my-10"></div>
        <div className="flex w-full flex-col lg:flex-row gap-10  justify-around   items-center">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/images/logo_heartcare.png"
              className="h-12"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
              HeartCare
            </span>
          </a>
          <p className="text-white">© 2019 HeartCare. All Rights Reserved. </p>
          <div className="flex justify-around gap-5">
            <div className="rounded-full w-[39px] h-[39px] border-2 flex justify-center items-center">
              <svg
                width="7"
                height="16"
                viewBox="0 0 7 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.55073 15.9435V8.44408H0V5.85962H1.55073V4.30793C1.55073 2.19954 2.42638 0.945801 4.91418 0.945801H6.98534V3.53054H5.69072C4.72228 3.53054 4.65821 3.89172 4.65821 4.56579L4.65469 5.85933H7L6.72556 8.44378H4.65469V15.9435H1.55073Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="rounded-full w-[39px] h-[39px] border-2 flex justify-center items-center">
              <svg
                width="7"
                height="16"
                viewBox="0 0 7 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.55073 15.9435V8.44408H0V5.85962H1.55073V4.30793C1.55073 2.19954 2.42638 0.945801 4.91418 0.945801H6.98534V3.53054H5.69072C4.72228 3.53054 4.65821 3.89172 4.65821 4.56579L4.65469 5.85933H7L6.72556 8.44378H4.65469V15.9435H1.55073Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="rounded-full w-[39px] h-[39px] border-2 flex justify-center items-center">
              <svg
                width="7"
                height="16"
                viewBox="0 0 7 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.55073 15.9435V8.44408H0V5.85962H1.55073V4.30793C1.55073 2.19954 2.42638 0.945801 4.91418 0.945801H6.98534V3.53054H5.69072C4.72228 3.53054 4.65821 3.89172 4.65821 4.56579L4.65469 5.85933H7L6.72556 8.44378H4.65469V15.9435H1.55073Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
