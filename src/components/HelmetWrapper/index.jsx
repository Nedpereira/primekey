import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function HelmetWrapper() {
  const { t } = useTranslation();

  return (
    <Helmet>
      <title>{t("title")}</title>
      <meta name="description" content={t("description")} />
    </Helmet>
  );
}

export default HelmetWrapper;
