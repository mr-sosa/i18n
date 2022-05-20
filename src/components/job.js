import React from "react";
import { FormattedDate, FormattedNumber, FormattedPlural } from 'react-intl';

const Job = (props) => {

  function check(){
    let res = <FormattedPlural 
      one={' million'} 
      other={' million'}
      value={props.offer.salary} 
    />;

    if(props.ln === 'en-US'){
        return res;
    } else {
      
      return <FormattedPlural 
        one={' millón'} 
        other={' millones'}
        value={props.offer.salary} 
      />;
      
      
    }

  }

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>$
        {props.offer.salary}{check()}        
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} />
      </td>
    </tr>
  );
};

export default Job;
