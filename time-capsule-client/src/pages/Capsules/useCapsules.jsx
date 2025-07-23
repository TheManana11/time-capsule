import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useCapsules = () => {
  const [capsules, setCapsules] = useState([]);
  const [filteredCapsules, setFilteredCapsules] = useState([]);
  const [paginationCapsules, setPaginationCapsules] = useState([]);
  const [page, setPage] = useState(1);
  const capsulesInPage = 9;

  // const indexOfLastCapsule = ;
  // const indexOfFirstCapsule = ;

  const [filterForm, setFilterForm] = useState({
    start_date: "",
    end_date: "",
    country: "",
    tag: "",
  });

  const getCapsules = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/guest/capsules"
      );

      setCapsules(response.data.payload);
      setFilteredCapsules(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCapsules();
  }, []);


  useEffect(() => {
    const start = (page - 1) * capsulesInPage;
    const end = start + capsulesInPage;
    setPaginationCapsules(filteredCapsules.slice(start, end))
  }, [filteredCapsules, page]);


  const handleChange = (e) => {
    setFilterForm({
      ...filterForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let array = [...capsules];
    if (filterForm.start_date)
      array = array.filter(
        (item) => item.reveal_date.slice(0, 10) >= filterForm.start_date
      );
    if (filterForm.end_date)
      array = array.filter((item) => item.reveal_date <= filterForm.end_date);
    if (filterForm.country)
      array = array.filter(
        (item) =>
          item.country.toLowerCase() === filterForm.country.toLowerCase()
      );
    if (filterForm.tag)
      array = array.filter((item) =>
        item?.tags?.some((tag) => tag.name === filterForm.tag)
      );

    setFilteredCapsules(array);

    setFilterForm({
      start_date: "",
      end_date: "",
      country: "",
      tag: "",
    });
  };

  return [filterForm, handleChange, handleSubmit, filteredCapsules, page, capsulesInPage, setPage, paginationCapsules, capsules];
}

export default useCapsules