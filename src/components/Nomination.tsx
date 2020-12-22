import React from "react";
import { IMovie } from "../interfaces/common";

interface NominationProps extends IMovie {
  removeNomination: any;
}

const Nomination: React.FC<NominationProps> = (props) => {
  return <div onClick={() => props.removeNomination(props)}>{props.title}</div>;
};

export default Nomination;
