import Image from "next/image";
import Link from "next/link";
import React from "react";
import toursData from "../../Data/ToursData";
import widgetData from "../../Data/WidgetData";
import { StyledButton } from "../../Ui/StyledButton";
import Widget from "../../Ui/Widget/Widget";

const ToursDescription = () => {
  widgetData;
  return (
    <div>
      {widgetData.map((item, index) => {
        return (
          <Widget
            key={item.id}
            title={item.title}
            src={item.src}
            alt={item.alt}
            description={item.body}
          />
        );
      })}
    </div>
  );
};

export default ToursDescription;
