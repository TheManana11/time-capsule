import React, { useState, useEffect } from "react";
import "./Capsule.css";
import axios from "axios";
import { IoFilterOutline } from "react-icons/io5";
import CapsuleCard from "../../components/Capsule Card/CapsuleCard";
import Button from '../../components/shared/Button/Button'


const Capsules = () => {
  const [capsules, setCapsules] = useState([]);
  // const[pages, setPages] = useState(1);

  const getCapsules = async() => {

    try {
      const response = await axios.get("http://127.0.0.1:8000/api/guest/capsules");

      setCapsules(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCapsules();
  }, [])


  function formatDate(dateString) {
  const date = new Date(dateString);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
}


  return (
    <div className="capsules-container">
      <div className="capsules-filters">
        <form>
          <p className="filter-label">
            <IoFilterOutline /> Filter By
          </p>
          <div className="filters">
            <input type="date" />
            <input type="date" />
            <select name="country">
              <option value="country">Country</option>
              <option value="country">Lebanon</option>
              <option value="country">France</option>
              <option value="country">Germany</option>
              <option value="country">Iraq</option>
              <option value="country">Syria</option>
              <option value="country">Turkey</option>
              <option value="country">Palestine</option>
            </select>
            <select name="mood">
              <option value="mood">mood</option>
              <option value="mood">happy</option>
              <option value="mood">sad</option>
              <option value="mood">depressed</option>
              <option value="mood">cute</option>
              <option value="mood">energetic</option>
              <option value="mood">angry</option>
              <option value="mood">strong</option>
            </select>
          </div>
          <Button text={"Submit"}/>
        </form>
      </div>

      <div className="capsules">
        <p className="capsules-head">{capsules.length} Capsules | Page 1</p>
        <div className="capsule-items">
          {console.log(capsules)}
          {capsules.map((capsule) => {
            return (
              <CapsuleCard
                key={capsule.id}
                id={capsule.id}
                img={`http://127.0.0.1:8000/storage/${capsule.image_url}`}
                title={capsule.title}
                country={capsule.country}
                city={capsule.city}
                set_date={formatDate(capsule.created_at)}
                reveal_date={formatDate(capsule.reveal_date)}
                views={capsule.views}
                tags={capsule.tags}
                color = {capsule.color}
              />
            );
          })}
        </div>
      </div>

      <div className="pagination">
        <Button text={"prev"}/>
        <Button text={"1"}/>
        <Button text={"2"}/>
        <Button text={"3"}/>
        <Button text={"next"}/>
      </div>
    </div>
  );
};

export default Capsules;
