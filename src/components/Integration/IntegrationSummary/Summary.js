import SSBox from "components/common/Box/SSBox";
import React from "react";

const Summary = ({ summaryValues }) => {
  const {
    name,
    description,
    interval,
    addigyUserName,
    password,
    clientId,
    clientSecret,
    integrationId,
  } = summaryValues;
  return (
    <SSBox>
      <h3 className="mb-3">Instance details</h3>
      <div className="mb-3">
        <div className="subtitle2">Id</div>
        <div className="body2">{integrationId}</div>
      </div>
      <div className="mb-3">
        <div className="subtitle2">Account name</div>
        <div className="body2">{name}</div>
      </div>
      <div className="mb-3">
        <div className="subtitle2">Description</div>
        <div className="body2">{description}</div>
      </div>
      <div className="mb-3">
        <div className="subtitle2">Polling interval</div>
        <div className="body2">{interval}</div>
      </div>
      <div className="mb-3">
        <div className="subtitle2">Addigy Username</div>
        <div className="body2">{addigyUserName}</div>
      </div>
      <div className="mb-3">
        <div className="subtitle2">Addigy Password</div>
        <div className="body2">{password}</div>
      </div>
      <div className="mb-3">
        <div className="subtitle2">Addigy Client ID</div>
        <div className="body2">{clientId}</div>
      </div>
      <div className="mb-3">
        <div className="subtitle2">Addigy Client Secret</div>
        <div className="body2">{clientSecret}</div>
      </div>
      <div className="mb-3">
        <div className="subtitle2">AccountName</div>
        <div className="body2">{name}</div>
      </div>
    </SSBox>
  );
};
export default Summary;
