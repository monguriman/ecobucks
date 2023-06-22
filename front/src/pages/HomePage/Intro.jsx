import { ChartPieIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
import { MapPinIcon } from "@heroicons/react/20/solid";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import LogoWhite from "../../assets/logoWhite.png";
import React, { useEffect } from "react";
import "./Intro.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import { Button, Image, Container, Card, Badge } from "react-bootstrap";
import { ROUTE } from "../../routes/routes";
import { ArrowTrendingUpIcon, BoltIcon } from "@heroicons/react/20/solid";
const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  const handleScrollDown = () => {
    const nextSection = document.getElementById("section2");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  const style = {
    minHeight: "100vh",
    minWidth: "100vw",
  };

  const introStyle = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    overflow: "-moz-scrollbars-none hidden",
  };

  return (
    <Container className="container" style={introStyle}>
      <style>
        {`
        ::-webkit-scrollbar {
          display: none;
        }
        .container {
          margin: 0;
          padding: 0;
        }
        .page {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      `}
      </style>
      <div
        className="page"
        style={{
          ...style,
          backgroundColor: "#00D387",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Image data-aos="fade-up" src={LogoWhite} style={{ width: "50%" }} />
          <h2
            data-aos="fade-up"
            style={{
              textAlign: "center",
              marginTop: 30,
              color: "white",
              lineHeight: "150%",
              marginBlock: 30
            }}
          >
            당신의 미래를 위해, 지금 시작하세요!
            <br />
            <br />
            <h3>
              전기에너지 절약 챌린지에 참여하고, <br />
              환경과 지각변화에 도움을 주세요.
            </h3>
          </h2>
          <button className="intro-button mt-2">
            <Link
              to={ROUTE.REGISTER.link}
              style={{
                textDecoration: "none",
                color: "black",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              회원가입
            </Link>{" "}
          </button>
          <button className="intro-button mt-2">
            <Link
              to={ROUTE.LOGIN.link}
              style={{
                textDecoration: "none",
                color: "black",
                paddingLeft: 17,
                paddingRight: 17,
              }}
            >
              로그인
            </Link>
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <ArrowDownIcon
            alt="아래화살표"
            color="white"
            style={{
              width: "25px",
              marginTop: "0px",
              marginRight: "5px",
              marginBottom: "50px",
              height: "30px",
            }}
            data-aos="fade-down"
          />
        </div>
      </div>

      <div
        className="page"
        style={{
          ...style,
          backgroundColor: "#ffd9d9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <h1
            data-aos="fade-up"
            style={{
              lineHeight: "1.5em",
              textAlign: "center",
              marginTop: 30,
              color: "black",
              marginBottom: 30,
            }}
          >
            올 여름도 화제가 될 전기 사용량 문제, <br />
            우리는 어떤 도움을 줄 수 있을까요?{" "}
          </h1>
          <h6
            data-aos="fade-up"
            style={{
              lineHeight: "1.8em",
              textAlign: "center",
              marginTop: 30,
              color: "black",
              marginBottom: 30,
            }}
          >
            어려운 숫자나 거창한 변화보다, 당신이 오늘 실천 가능한 환경에 대한
            배려를 제안합니다. <br />
            에코벅스에서 제공하는 다양한 기능을 살펴보세요.
          </h6>
          <Container style={{ display: "flex", marginTop: 30, color: "black" }}>
            <Card
              data-aos="flip-left"
              style={{
                backgroundColor: "#d6efff",
                width: "15em",
                height: "18em",
                marginRight: "30px",
                border: "0px",
              }}
            >
              <div style={{ position: "relative" }}>
                <Container
                  style={{
                    position: "absolute",
                    fontSize: "7em",
                    textAlign: "right",
                    top: "-9px",
                    right: "6px",
                  }}
                >
                  📈
                </Container>
              </div>
              <Card.Text
                style={{
                  textAlign: "left",
                  marginTop: 215,
                  fontSize: "1.1em",
                  paddingLeft: "20px",
                  fontWeight: "900",
                }}
              >
                시각화된 통계로 <br />
                쉽게 알아보는 전력 사용량
              </Card.Text>
            </Card>

            <Card
              data-aos="flip-left"
              style={{
                backgroundColor: "#ffffcc",
                width: "15em",
                height: "18em",
                marginRight: "30px",
                border: "0px",
              }}
            >
              <div style={{ position: "relative" }}>
                <Container
                  style={{
                    position: "absolute",
                    fontSize: "7em",
                    textAlign: "right",
                    top: "-9px",
                    right: "6px",
                  }}
                >
                  🪙
                </Container>
              </div>
              <Card.Text
                style={{
                  textAlign: "left",
                  marginTop: 215,
                  fontSize: "1.1em",
                  paddingLeft: "20px",
                  fontWeight: "900",
                }}
              >
                챌린지와 보상을 통해 <br />
                길러보는 절약 습관
              </Card.Text>
            </Card>

            <Card
              data-aos="flip-left"
              style={{
                backgroundColor: "#dfffcc",
                width: "15em",
                height: "18em",
                marginRight: "30px",
                border: "0px",
              }}
            >
              <div style={{ position: "relative" }}>
                <Container
                  style={{
                    position: "absolute",
                    fontSize: "7em",
                    textAlign: "right",
                    top: "-9px",
                    right: "6px",
                  }}
                >
                  🌏
                </Container>
              </div>
              <Card.Text
                style={{
                  textAlign: "left",
                  marginTop: 215,
                  fontSize: "1.1em",
                  paddingLeft: "20px",
                  fontWeight: "900",
                }}
              >
                유저들과 공유하는 <br />
                나만의 절약 꿀팁
              </Card.Text>
            </Card>
          </Container>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* <ArrowDownIcon
            alt="아래화살표"
            color="white"
            style={{
              position: "relative",
              top: 690,
              bottom: -300,
              width: "25px",
              height: "30px",
            }}
            data-aos="fade-down"
          /> */}
        </div>
      </div>

      <div className="page" style={{ ...style, backgroundColor: "#00A36B " }}>
        <div
          className="cover"
          data-aos="fade-left"
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            background:
              "linear-gradient(270deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%)",
            zIndex: 1,
          }}
        ></div>
        <Container
          className="d-flex"
          style={{ position: "relative", zIndex: 1 }}
        >
          <h1
            data-aos="fade-up"
            style={{
              color: "white",
              fontSize: "4em",
              textAlign: "left",
              marginBottom: "50px",
              lineHeight: "140%",
            }}
          >
            절약 인증하고
            <br />
            마일리지를 모아요
            <br />
            <Container className="mt-4">
              <h5 style={{ lineHeight: "150%" }}>
                다른 사람들이 만든 절약 챌린지에 참가하거나, <br /> 나만의
                챌린지를 만들어 보세요.
              </h5>
            </Container>
          </h1>
        </Container>
        {/* 카드예시데이터 */}
        <Container
          className="d-flex justify-content-between overflow-hidden mt-4"
          style={{
            maxWidth: "60vw",
            position: "absolute",
            right: "-90px",
            display: "flex",
          }}
          data-aos="fade-left"
        >
          <Card
            className="mb-4 mt-4 ms-0 ps-0"
            style={{
              width: "17rem",
              position: "relative",
              boxShadow: "8px 8px 15px 1px rgba(122, 122, 122, 0.5)",
            }}
          >
            <div
              style={{
                border: "solid 1px #878787",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "7rem",
                paddingBottom: "7px",
                margin: "20px",
                background: "linear-gradient(to right, beige, lightblue)",
              }}
            >
              🍃
            </div>
            <Card.Body>
              <Card.Title style={{ textAlign: "left", fontWeight: "900" }}>
                텀블러 사용 인증하기
              </Card.Title>
              <Card.Text style={{ textAlign: "left" }}>
                텀블러를 사용하고 플라스틱 사용을 줄여요.
              </Card.Text>
              <Card.Text style={{ textAlign: "left" }}>
                <span style={{ fontWeight: "900", fontSize: "0.9em" }}>
                  마감 일자
                </span>{" "}
                <span style={{ fontSize: "0.8em" }}>2023-07-14</span>
                <br />
                <span style={{ fontWeight: "900", fontSize: "0.9em" }}>
                  참여 인원
                </span>{" "}
                <span style={{ fontSize: "0.8em" }}>32 명</span>
                <br />
              </Card.Text>
            </Card.Body>
            <Badge
              bg="info"
              className="position-absolute bottom-0 end-0 m-3"
              style={{ zIndex: 1 }}
            >
              댓글 18
            </Badge>
          </Card>
          <Card
            className="mb-4 mt-4 ms-0 ps-0"
            style={{
              width: "17rem",
              position: "relative",
              boxShadow: "8px 8px 15px 1px rgba(122, 122, 122, 0.5)",
            }}
          >
            <div
              style={{
                border: "solid 1px #878787",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "7rem",
                paddingBottom: "7px",
                margin: "20px",
                background: "linear-gradient(to right, beige, lightblue)",
              }}
            >
              ♻️
            </div>
            <Card.Body>
              <Card.Title style={{ textAlign: "left", fontWeight: "900" }}>
                장바구니 사용 인증하기
              </Card.Title>
              <Card.Text style={{ textAlign: "left" }}>
                장바구니를 사용하고 1회용 비닐을 줄여요.
              </Card.Text>
              <Card.Text style={{ textAlign: "left" }}>
                <span style={{ fontWeight: "900", fontSize: "0.9em" }}>
                  마감 일자
                </span>{" "}
                <span style={{ fontSize: "0.8em" }}>2023-06-30</span>
                <br />
                <span style={{ fontWeight: "900", fontSize: "0.9em" }}>
                  참여 인원
                </span>{" "}
                <span style={{ fontSize: "0.8em" }}>26 명</span>
                <br />
              </Card.Text>
            </Card.Body>
            <Badge
              bg="info"
              className="position-absolute bottom-0 end-0 m-3"
              style={{ zIndex: 1 }}
            >
              댓글 7
            </Badge>
          </Card>
          <Card
            className="mb-4 mt-4 ms-0 ps-0"
            style={{
              width: "16.5rem",
              position: "relative",
              boxShadow: "8px 8px 15px 1px rgba(122, 122, 122, 0.5)",
              marginLeft: "-25%",
            }}
          >
            <div
              style={{
                border: "solid 1px #878787",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "7rem",
                paddingBottom: "7px",
                margin: "20px",
                background: "linear-gradient(to right, beige, lightblue)",
              }}
            >
              🏞️
            </div>
            <Card.Body>
              <Card.Title style={{ textAlign: "left", fontWeight: "900" }}>
                코드 뽑고 예비전력 아끼기
              </Card.Title>
              <Card.Text style={{ textAlign: "left" }}>
                쓰지 않는 가전제품의 코드를 뽑고 예비 전력을 아껴요.
              </Card.Text>
              <Card.Text style={{ textAlign: "left" }}>
                <span style={{ fontWeight: "900", fontSize: "0.9em" }}>
                  마감 일자
                </span>{" "}
                <span style={{ fontSize: "0.8em" }}>2023-07-21</span>
                <br />
                <span style={{ fontWeight: "900", fontSize: "0.9em" }}>
                  참여 인원
                </span>{" "}
                <span style={{ fontSize: "0.8em" }}>14 명</span>
                <br />
              </Card.Text>
            </Card.Body>
            <Badge
              bg="info"
              className="position-absolute bottom-0 end-0 m-3"
              style={{ zIndex: 1 }}
            >
              댓글 9
            </Badge>
          </Card>
        </Container>
      </div>

      <div className="page" style={{ ...style, backgroundColor: "#60FFAA " }}>
        <div
          className="cover"
          data-aos="fade-right"
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 50%)",
            zIndex: 1,
          }}
        ></div>
        {/* 카드예시데이터 */}
        <Container
          className="d-flex justify-content-between overflow-hidden mt-4"
          style={{
            maxWidth: "60vw",
            position: "absolute",
            left: "-45px",
            textAlign: "left",
          }}
          data-aos="fade-right"
        >
          <Card
            style={{
              width: "20rem",
              height: "20rem",
              marginBottom: 20,
              margin: 20,
              boxShadow: "8px 8px 15px 1px rgba(122, 122, 122, 0.5)",
            }}
          >
            <Card.Body className="card-body">
              <Card.Title className="card-title">
                <span>상품명:</span> 콘샐러드빵
              </Card.Title>
              <Card.Text className="card-text">가격: 1,000</Card.Text>
              <Card.Text
                className="card-text"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {/* <Button variant="primary" style={{ borderColor: 'transparent', backgroundColor: "#fff" }} onClick={() => handleLocate(item)}> */}
                <MapPinIcon
                  alt="위치찾기"
                  color="#009960"
                  style={{
                    width: "25px",
                    marginRight: "5px",
                    marginBottom: "3px",
                    height: "30px",
                  }}
                />
                서울시 에코구 74 에코빵집
              </Card.Text>
              <Card.Text className="card-text">판매자: 수호천사</Card.Text>
              <Card.Text className="card-text">재고: 4</Card.Text>
              <Card.Text className="card-text">
                설명: 오늘 만든 빵입니다. 마감시간이 다가와 저렴하게 내놓았어요.
              </Card.Text>

              <ShoppingBagIcon
                color="#00D387"
                style={{
                  width: "30px",
                  height: "30px",
                  position: "absolute",
                  bottom: 30,
                  right: 15,
                }}
              />
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "20rem",
              height: "20rem",
              marginBottom: 20,
              margin: 20,
              boxShadow: "8px 8px 15px 1px rgba(122, 122, 122, 0.5)",
            }}
          >
            <Card.Body className="card-body">
              <Card.Title className="card-title">
                <span>상품명:</span> 햇양파
              </Card.Title>
              <Card.Text className="card-text">가격: 500</Card.Text>
              <Card.Text
                className="card-text"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {/* <Button variant="primary" style={{ borderColor: 'transparent', backgroundColor: "#fff" }} onClick={() => handleLocate(item)}> */}
                <MapPinIcon
                  alt="위치찾기"
                  color="#009960"
                  style={{
                    width: "25px",
                    marginRight: "5px",
                    marginBottom: "3px",
                    height: "30px",
                    cursor: "pointer",
                  }}
                />
                서울시 전력구 44-1 행복청과
              </Card.Text>
              <Card.Text className="card-text">판매자: 양파요정</Card.Text>
              <Card.Text className="card-text">재고: 2</Card.Text>
              <Card.Text className="card-text">
                설명: 조금 물렀지만 양파즙 만들기에 적합해요.
              </Card.Text>

              <ShoppingBagIcon
                color="#00D387"
                style={{
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                  position: "absolute",
                  bottom: 30,
                  right: 15,
                }}
              />
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "20rem",
              height: "20rem",
              marginBottom: 20,
              margin: 20,
              boxShadow: "8px 8px 15px 1px rgba(122, 122, 122, 0.5)",
            }}
          >
            <Card.Body className="card-body">
              <Card.Title className="card-title">
                <span>상품명:</span> 떡볶이
              </Card.Title>
              <Card.Text className="card-text">가격: 2,000</Card.Text>
              <Card.Text
                className="card-text"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {/* <Button variant="primary" style={{ borderColor: 'transparent', backgroundColor: "#fff" }} onClick={() => handleLocate(item)}> */}
                <MapPinIcon
                  alt="위치찾기"
                  color="#009960"
                  style={{
                    width: "25px",
                    marginRight: "5px",
                    marginBottom: "3px",
                    height: "30px",
                    cursor: "pointer",
                  }}
                />
                서울시 파워구 12-3 코코분식
              </Card.Text>
              <Card.Text className="card-text">판매자: 손큰맘</Card.Text>
              <Card.Text className="card-text">재고: 12</Card.Text>
              <Card.Text className="card-text">
                설명: 맛있는 시장떡볶이입니다. 마감 전에 싸게 가져가세요.
              </Card.Text>

              <ShoppingBagIcon
                color="#00D387"
                style={{
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                  position: "absolute",
                  bottom: 30,
                  right: 15,
                }}
              />
            </Card.Body>
          </Card>
        </Container>
        <Container style={{ alignItems: "right" }}>
          <h1
            data-aos="fade-up"
            style={{
              color: "black",
              fontSize: "4em",
              textAlign: "left",
              marginBottom: "50px",
              left: "920px",
              lineHeight: "150%",
              position: "absolute",
              right: "5%",
              transform: "translateY(-50%)",
            }}
          >
            마일리지로
            <br />
            저렴하게 쇼핑해요
            <Container className="mt-4">
              <h5 style={{ lineHeight: "150%" }}>
                소상공인이 판매하는 유통기한 임박 상품을 <br /> 저렴하게
                만나보세요.
              </h5>
            </Container>
          </h1>
        </Container>
      </div>
      <div
        className="page"
        style={{
          ...style,
          backgroundColor: "#bafeff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "relative",
          }}
        >
          <h1
            data-aos="fade-up"
            style={{
              lineHeight: "1.5em",
              textAlign: "center",
              marginTop: 30,
              color: "black",
              marginBottom: 30,
            }}
          >
            오늘부터 에코벅스와 함께 <br />
            절약 습관을 기르고, 저렴하게 쇼핑해보세요.{" "}
          </h1>
          <button className="intro-button" data-aos="fade-up">
            <Link
              to={ROUTE.REGISTER.link}
              style={{
                textDecoration: "none",
                color: "black",
                paddingLeft: 10,
                paddingRight: 10,
              }}
            >
              회원가입
            </Link>{" "}
          </button>
          <button className="intro-button" data-aos="fade-up">
            <Link
              to={ROUTE.LOGIN.link}
              style={{
                textDecoration: "none",
                color: "black",
                paddingLeft: 17,
                paddingRight: 17,
              }}
            >
              로그인
            </Link>
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* <ArrowDownIcon
            alt="아래화살표"
            color="white"
            style={{
              position: "relative",
              top: 690,
              bottom: -300,
              width: "25px",
              height: "30px",
            }}
            data-aos="fade-down"
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default Intro;
