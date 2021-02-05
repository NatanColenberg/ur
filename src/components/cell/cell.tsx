import React from "react";
import { PlayerNumber } from "../../enums/PlayerNumber";
import "./cell.css";

interface Props {
  index: number;
  imagePath?: string;
}

export default function Cell({ index, imagePath }: Props) {
  return (
    <div
      className="cell-wrap"
      style={{ backgroundImage: imagePath ? `url(${imagePath})` : "" }}
    ></div>
  );
}
