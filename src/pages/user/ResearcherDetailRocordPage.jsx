import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import request from '../../utils/request';

const ResearcherDetailRocordPage = () => {
  const { id, id_record } = useParams();
  const navigate = useNavigate();

  const [detailRecordDiseases, setDetailRecordDiseases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formValues, setFormValues] = useState({});
  const [schema, setSchema] = useState([]);
  const [validations, setValidations] = useState([]);

  console.log(loading);

  const fetchDetailDiseases = useCallback(async () => {
    setLoading(true);
    request
      .get(`/diseases/${id}/records/${id_record}`)
      .then(function (response) {
        setDetailRecordDiseases(response.data.data.record.data);
        setSchema(response?.data?.data?.schema);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
      });
  }, [id, id_record]); // Add role to dependencies

  useEffect(() => {
    fetchDetailDiseases();
  }, [fetchDetailDiseases]);

  console.log(detailRecordDiseases);
  return <div>ResearcherDetailRocordPage</div>;
};

export default ResearcherDetailRocordPage;
