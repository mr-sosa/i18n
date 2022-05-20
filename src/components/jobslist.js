import React, { useState } from "react";
import { FormattedMessage } from 'react-intl';
import Job from "./job";

const JobsList = (props) => {
  const { ln } = props;
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      views: 2354
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      views: 24
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      views: 56192
    },
  ]);

  let background = 'thead-dark';
  let color = 'black';
  if(props.ln === 'en-US') {
    background = 'thead bg-dark';
    color = 'white';
  }
console.log(navigator.language)
  return (
    <div>
      <table className="table">
        <thead className={background}>
          <tr>
            <th scope="col"><font  color={color}>#</font></th>
            <th scope="col">
            <font color={color}>
              <FormattedMessage id="Position"/>
            </font>
            </th>
            <th scope="col">
            <font color={color}>
              <FormattedMessage id="Company"/>
            </font>
            </th>
            <th scope="col">
            <font color={color}>
              <FormattedMessage id="Salary"/>
            </font>
            </th>
            <th scope="col">
            <font color={color}>
              <FormattedMessage id="City"/>
            </font>
            </th>
            <th scope="col">
            <font color={color}>
              <FormattedMessage id="PublicationDate"/>
            </font>
            </th>
            <th scope="col">
            <font color={color}>
              <FormattedMessage id="Views"/>
            </font>
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job ln={ln} key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
