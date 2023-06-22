import React, { useState, useContext } from "react";
import { Button, Form, Modal, Image, Alert } from "react-bootstrap";

import { UPDATE_USER } from "../../reducer/action";

import {
  UserStateContext,
  DispatchContext,
} from "../../context/user/UserProvider";
import * as Api from "../../api";
import { showAlert, showSuccess } from "../../assets/alert";

const ChallengeParticipate = ({ show, onClose, challenge }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [previewURL, setPreviewURL] = useState(null);

  const dispatch = useContext(DispatchContext);
  const userState = useContext(UserStateContext);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setErrorMessage("");
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleUpload = async (e) => {
    if (selectedFile) {
      e.preventDefault();
      setShowConfirmation(true);
    } else {
      setErrorMessage("파일을 선택해주세요.");
    }
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  const confirmUpload = async () => {
    try {
      //이미지 전송 통신
      const formData = new FormData();
      formData.append("image", selectedFile);
      const imageRes = await Api.postFile("images/challenges/upload", formData);

      //참가 통신
      const res = await Api.post(`challenges/${challenge._id}/participants`, {
        imageId: imageRes.data._id,
      });
      showSuccess("인증사진 업로드가 완료되었습니다.");

      const userData = await Api.get("current");
      const user = userData.data;

      dispatch({
        type: UPDATE_USER,
        payload: user,
      });

      handleConfirmationClose();
      onClose();
    } catch (err) {
      showAlert(err.response.data.message);
    }
  };

  return (
    <Modal show={show} style={{ zIndex: "1050", marginTop: "50px" }}>
      <Modal.Header closeButton onHide={onClose}>
        {" "}
        <Modal.Title>참가하기</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>인증사진 업로드</h4>
        <Alert variant="danger" className="small">
          올바르지 않은 사진이 업로드 된 경우 마일리지 지급이 취소됩니다.
          <br />
          반드시 참여를 인증할 수 있는 사진만 올려주세요.
        </Alert>
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            onChange={handleFileChange}
            accept="image/*"
          />
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
        </Form.Group>
        {selectedFile && (
          <div style={{ paddingBottom: '10px' }}>
            <h6>미리보기</h6>
            <Image src={previewURL} alt="Selected Image" thumbnail />
          </div>
        )}
        <Button
          variant="light"
          onClick={handleUpload}
          style={{
            marginBottom: "30px",
            color: "white",
            borderRadius: "0px",
            backgroundColor: "#00D387",
          }}
        >
          인증 완료하기
        </Button>
        <Button variant="light" onClick={onClose} style={{
          marginBottom: "30px",
          borderRadius: "0px",
          marginLeft: '10px'
        }}>
          돌아가기
        </Button>

        <Modal
          show={showConfirmation}
          onHide={handleConfirmationClose}
          style={{ marginTop: "200px", zIndex: 1050 }}
        >
          <Modal.Header style={{ backgroundColor: "#fffee3" }}>
            <Modal.Title>반드시 확인해주세요.</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#fffee3" }}>
            올바르지 않은 사진이 업로드 된 경우 마일리지 지급이 취소됩니다.{" "}
            <br /> 진행하시겠습니까?
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#fffee3" }}>
            <Button variant="primary" onClick={confirmUpload}>
              진행
            </Button>
            <Button variant="secondary" onClick={handleConfirmationClose}>
              돌아가기
            </Button>
          </Modal.Footer>
        </Modal>
      </Modal.Body>
    </Modal>
  );
};

export default ChallengeParticipate;
