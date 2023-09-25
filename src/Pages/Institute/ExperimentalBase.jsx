import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useLocation } from "react-router-dom";
import "./ExperimentalBase.css";
import ExperimentalBaseFirst from "./components/experimentals-base/ExperimentalBaseFirst";
import ExperimentalBaseSecond from "./components/experimentals-base/ExperimentalBaseSecond";

const ExperimentalBase = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="experimentalBase">
      <h1>{t(location.pathname.slice(11))}</h1>

        <ExperimentalBaseFirst/>
        <ExperimentalBaseSecond/>
    </div>
  );
};

export default ExperimentalBase;
