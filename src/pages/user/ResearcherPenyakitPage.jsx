import React, { useCallback, useEffect, useState } from "react";
import NavbarResearcher from "../../components/navbar/navbarResearcher";
import DefaultFouter from "../../components/footer/DefaultFouter";
import CardPenyakit from "../../components/card/CardPenyakit";
import request from "../../utils/request";
import InputSearch from "../../components/inputField/InputSearch";
import Pagination from "../../components/paginations/Pagination";
import Loading from "../../components/loading/Loading";

const ResearcherPenyakitPage = () => {
  const [diseasesDatas, setDiseasesDatas] = useState([]);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const limit = 10;
  const [paginations, setPaginations] = useState({});
  const [loading, setLoading] = useState(true);
  

  const fetchDiseases = useCallback(async () => {
    setLoading(true);
    const payload = {
      page: page,
      per_page: limit,
      name: name,
    };
    request
      .get(`/diseases`, payload)
      .then(function (response) {
        setDiseasesDatas(response.data.data.diseases);
        setPaginations(response.data.data.pagination); // Add a fallback value for pagination
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  }, [name, page, limit]); // Add role to dependencies

  useEffect(() => {
    fetchDiseases();
  }, [fetchDiseases]);
  return (
    <div>
      <NavbarResearcher />

      <section className="bg-white py-8 lg:py-16 antialiased mt-[80px] max-[375px]:mx-[16px] max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-7xl  mx-auto space-y-10">
        <div className="space-y-4">
          <h1 className="font-semibold text-[42px] leading-none">Penyakit</h1>
          <p className="font-normal text-[14px] text-[#2D3748] leading-[150%]">
            Halaman ini menyediakan akses yang mudah dan cepat untuk informasi
            penyakit, cocok digunakan oleh peneliti atau tenaga medis yang
            membutuhkan data akurat dan terorganisir.
          </p>
        </div>
        <div className="">
          <InputSearch
            id={"search-name"}
            name={"search-name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"Search penyakit dari nama..."}
          />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {diseasesDatas &&
              diseasesDatas.map((data, index) => (
                <CardPenyakit
                  key={index}
                  image={data?.cover_page_url}
                  record={data?.disease_records_count}
                  name={data?.name}
                  dateUpdate={data?.updated_at}
                  id={data?.id}
                />
              ))}
          </div>
        )}
        <Pagination
          recordsTotal={paginations?.total}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </section>

      <DefaultFouter />
    </div>
  );
};

export default ResearcherPenyakitPage;
