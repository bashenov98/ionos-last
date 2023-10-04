import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useLocation } from "react-router-dom";
import "./ExperimentalBase.css";
import ExperimentalBaseFirst from "./components/experimentals-base/first/ExperimentalBaseFirst";
import ExperimentalBaseSecond from "./components/experimentals-base/second/ExperimentalBaseSecond";
import ExperimentalBaseThird from "./components/experimentals-base/third/ExperimentalBaseThird";
import ExperimentalBaseFourth from "./components/experimentals-base/fourth/ExperimentalBaseFourth";

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
