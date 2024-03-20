import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { Modal, Button } from "react-ui-essentials";

const ErrorLogs = ({
  show,
  handleClose,
  errorMessage,
  setError,
  infoLogs,
  setInfoLogs,
  warningLogs,
  setWarningLogs,
}) => {
  const formatErrorDetails = (errorDetails) => {
    let parsedData = JSON.parse(errorDetails);
    return (
      parsedData &&
      parsedData?.map((line, index) => (
        <div key={index}>
          {line?.split("\n")?.map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </div>
      ))
    );
  };

  const formatInfoLogs = (infoLogs) => {
    return infoLogs.map((log, index) => <div key={index}>{JSON.stringify(log, null, 2)}</div>);
  };

  const formatWarningLogs = (warningLogs) => {
    return warningLogs.map((log, index) => <div key={index}>{JSON.stringify(log, null, 2)}</div>);
  };

  useEffect(() => {
    const originalError = console.error;
    const originalInfo = console.info;
    const originalWarn = console.warn;
    console.error = (...args) => {
      const errorObject = args.length === 1 ? args[0] : args;
      setError(JSON.stringify(errorObject, null, 2));
      originalError(...args);
    };
    console.info = (...args) => {
      setInfoLogs((prevLogs) => [...prevLogs, args]);
      originalInfo(...args);
    };
    console.warn = (...args) => {
      setWarningLogs((prevLogs) => [...prevLogs, args]);
      originalWarn(...args);
    };
    return () => {
      console.error = originalError;
      console.info = originalInfo;
      console.warn = originalWarn;
    };
  }, [setError, setInfoLogs, setWarningLogs]);

  return (
    <Modal isOpen={show} variant="primary" size="xl" placement="center">
      <Modal.Header>
        <h3 className="modal-title">Warning</h3>
        <Button size="sm" variant="light" onClick={handleClose}>
          &#x2715;
        </Button>
      </Modal.Header>
      <Modal.Body>
        <p>erroes</p>
        <pre>
          <code>{formatErrorDetails(errorMessage)}</code>{" "}
        </pre>
        <p>info</p>
        <pre>
          <code>{formatInfoLogs(infoLogs)}</code>
        </pre>
        <p>warnings</p>
        <pre>
          <code>{formatWarningLogs(warningLogs)}</code>
        </pre>
      </Modal.Body>
    </Modal>
    // <Modal size="lg" show={show} onHide={handleClose}>
    //   {" "}
    //   <Modal.Header closeButton>
    //     {" "}
    //     <Modal.Title>Error</Modal.Title>{" "}
    //   </Modal.Header>{" "}
    //   <Modal.Body>
    //     {" "}
    //     <Tabs activeKey={activeTab} onSelect={(key) => setActiveTab(key)} id="logs-tabs">
    //       {" "}
    //       <Tab eventKey="error" title="Error">
    //         {" "}
    //         <pre>
    //
    //           <code>{formatErrorDetails(errorMessage)}</code>{" "}
    //         </pre>
    //       </Tab>{" "}
    //       <Tab eventKey="info" title="Info">
    //         {" "}
    //         {formatInfoLogs(infoLogs)}{" "}
    //       </Tab>{" "}
    //       <Tab eventKey="warning" title="Warning">
    //         {" "}
    //         {formatWarningLogs(warningLogs)}{" "}
    //       </Tab>{" "}
    //     </Tabs>{" "}
    //   </Modal.Body>{" "}
    //   <Modal.Footer>
    //     {" "}
    //     <Button variant="secondary" onClick={handleClose}>
    //       {" "}
    //       Close{" "}
    //     </Button>{" "}
    //   </Modal.Footer>{" "}
    // </Modal>
  );
};

ErrorLogs.propTypes = {
  errorMessage: PropTypes.any,
  handleClose: PropTypes.any,
  infoLogs: PropTypes.shape({
    map: PropTypes.func,
  }),
  setError: PropTypes.func,
  setInfoLogs: PropTypes.func,
  setWarningLogs: PropTypes.func,
  show: PropTypes.any,
  warningLogs: PropTypes.shape({
    map: PropTypes.func,
  }),
};
export default ErrorLogs;
