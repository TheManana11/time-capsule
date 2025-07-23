import React, { useState, useEffect } from "react";
import "./Capsule.css";
import axios from "axios";
import { IoFilterOutline } from "react-icons/io5";
import CapsuleCard from "../../components/Capsule Card/CapsuleCard";
import Button from "../../components/shared/Button/Button";
import { formatDate } from '../../Services/dateFormat'
import useCapsules from "./useCapsules";

const Capsules = () => {
  const [filterForm, handleChange, handleSubmit, filteredCapsules, page, capsulesInPage, setPage, paginationCapsules, capsules] = useCapsules();

  return (
    <div className="capsules-container">
      <div className="capsules-filters">
        <form>
          <p className="filter-label">
            <IoFilterOutline /> Filter By
          </p>
          <div className="filters">
            Start Date
            <input
              type="date"
              name="start_date"
              value={filterForm.start_date}
              onChange={handleChange}
            />
            End Date
            <input
              type="date"
              name="end_date"
              value={filterForm.end_date}
              onChange={handleChange}
            />
            <input
              name="country"
              placeholder="country"
              value={filterForm.country}
              onChange={handleChange}
            />
            <select name="tag" value={filterForm.tag} onChange={handleChange}>
              <option value="tag">tag</option>
              <option value="happy">happy</option>
              <option value="sad">sad</option>
              <option value="funny">funny</option>
              <option value="excited">excited</option>
              <option value="excited">excited</option>
              <option value="inspiration">inspiration</option>
              <option value="angry">angry</option>
              <option value="tech">tech</option>
              <option value="business">business</option>
              <option value="travel">travel</option>
              <option value="music">music</option>
              <option value="food">food</option>
            </select>
          </div>
          <Button method={handleSubmit} text={"Submit"} />
        </form>
      </div>

      <div className="capsules">
        <p className="capsules-head">
          {filteredCapsules.length} Capsules | Page {page}
        </p>
        <div className="capsule-items">
          {console.log(capsules)}
          {paginationCapsules.map((capsule) => {
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
                color={capsule.color}
              />
            );
          })}
        </div>
      </div>

      <div className="pagination">
        <Button text={"prev"} method={()=>setPage(prev => Math.max(prev - 1, 1))} />
          {
            Array.from({length: Math.ceil(filteredCapsules.length / capsulesInPage)}, (_, i) => {
              return <Button text={i + 1} method={() => setPage(i + 1)}/>
            })
          }
          {console.log(page)}

        {/* <Button text={"1"} />
        <Button text={"2"} />
        <Button text={"3"} /> */}
        <Button text={"next"} method={()=>setPage(prev => Math.min(prev + 1, Math.ceil(filteredCapsules.length / capsulesInPage)))}/>
      </div>
    </div>
  );
};

export default Capsules;
