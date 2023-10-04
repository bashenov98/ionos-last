import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18n";
import { useLocation } from "react-router-dom";
import "./ExperimentalBase.css";
import ExperimentalBaseFirst from "./first/ExperimentalBaseFirst";
import ExperimentalBaseSecond from "./second/ExperimentalBaseSecond";
import ExperimentalBaseThird from "./third/ExperimentalBaseThird";
import ExperimentalBaseFourth from "./fourth/ExperimentalBaseFourth";

const ExperimentalBase = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="experimentalBase">
      <h1>{t(location.pathname.slice(11))}</h1>

        <ExperimentalBaseFirst/>
        <ExperimentalBaseSecond/>
        <ExperimentalBaseThird/>
        <ExperimentalBaseFourth/>
    </div>
  );
};

export default ExperimentalBase;
