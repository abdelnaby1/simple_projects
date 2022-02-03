import {useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 250px auto;
`;

const Loader = ({loading}) => {
let [color, setColor] = useState("#36D7B7");

  return <ClipLoader color={color} loading={loading} css={override} size={150} />
  ;
};

export default Loader;
