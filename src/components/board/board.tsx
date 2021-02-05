import React from "react";
import Cell from "../cell/cell";
import cellData from "../../metadata/cellsData";
import { ImageType } from "../../enums/ImageType";
import "./board.css";

function getImagePath(imageType: ImageType) {
  if (imageType === ImageType.NONE) return;
  return `/img/cells/${imageType}.png`;
}

export default function Board() {
  return (
    <div className="board-wrap">
      {cellData.map((cell) => (
        <Cell
          key={"cell-#" + cell.index}
          index={cell.index}
          imagePath={getImagePath(cell.imageType)}
        />
      ))}
    </div>
  );
}
