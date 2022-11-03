import React, { createRef } from "react";
import "./App.css";
interface Props {}
interface State {
  checkPlay: boolean;
}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checkPlay: false,
    };
  }

  render(): React.ReactNode {
    return (
      <div
        id="__layout"
        onClick={async () => {
          let element = document.getElementById("Audio123");
          if (element) {
            let playedPromise = (element as any).play();
            if (playedPromise) {
              await playedPromise;
            }
          }
        }}
   
      >
        <div className="ws">
          {/**/}{" "}
          <div style={{}}>
            <audio
              webkit-playsinline="true"
              muted={false}
              autoPlay={true}
              id={"Audio123"}
            >
              <source src={require("./img/SONG.mp3")} type="audio/mpeg" />
            </audio>
            <div className="t6 text-base">
              <section data-widget="header" className="t6-invitation">
                <div>
                  <div
                    data-block="decoration"
                    data-decoration-id={-1}
                    className="decoration"
                  >
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/banner.png"
                      className="decor1"
                    />
                  </div>
                  <div
                    data-block="decoration"
                    data-decoration-id={1}
                    className="decoration"
                  >
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau1/bn1.png"
                      className="mau1-decor1"
                    />{" "}
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau1/bn2.png"
                      className="mau1-decor2"
                    />
                  </div>
                  <div
                    data-block="decoration"
                    data-decoration-id={2}
                    className="decoration"
                  >
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau2/bn1.png"
                      className="mau2-decor1"
                    />{" "}
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau2/bn2.png"
                      className="mau2-decor2"
                    />
                  </div>
                  <div
                    data-block="decoration"
                    data-decoration-id={3}
                    className="decoration"
                  >
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau3/bn1.png"
                      className="mau3-decor1"
                    />{" "}
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau3/bn2.png"
                      className="mau3-decor2"
                    />
                  </div>
                </div>
                <div className="t6-container t6-container-banner">
                  <div className="t6-invitation-content">
                    <p className="t6-invitation-title t6-text-brown text-4xl">
                      Save Our Date
                    </p>
                    <div className="t6-invitation-name t6-text-secondary text-6xl">
                      <div className="groom t6-font-secondary">
                        <p>Quang Anh</p>
                      </div>
                      <img
                        src="https://static.namtay.vn/assets/img/theme6/and.png"
                        width={200}
                        className="and"
                      />
                      <div className="bride t6-font-secondary">
                        <p>Hồng Nhân</p>
                      </div>
                    </div>
                    <h3 className="t6-invitation-date t6-text-brown text-4xl">
                      30 . 12 . 2022
                    </h3>
                    <div className="t6-bowtie">
                      <div
                        data-block="decoration"
                        data-decoration-id={-1}
                        className="decoration"
                      >
                        <img
                          src="https://static.namtay.vn/assets/img/theme6/bowtie.png"
                          width="200px"
                          className="invitation-decor1"
                        />
                      </div>
                      <div
                        data-block="decoration"
                        data-decoration-id={1}
                        className="decoration"
                      >
                        <img
                          src="https://static.namtay.vn/assets/img/theme6/mau1/bn3.png"
                          className="mau1-decor3"
                        />
                      </div>
                      <div
                        data-block="decoration"
                        data-decoration-id={3}
                        className="decoration"
                      >
                        <img
                          src="https://static.namtay.vn/assets/img/theme6/mau3/bn3.png"
                          className="mau3-decor3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section data-widget="location" className="t6-place">
                <div className="t6-container t6-place-wrapper">
                  <div className="t6-place-title text-4xl t6-text-secondary">
                    Trân trọng kính mời
                    <br />
                    <span
                      data-id="invitation"
                      id="invitation"
                      style={{ display: "none !important" }}
                    >
                      {"{"}
                      {"{"}__guest_name__{"}"}
                      {"}"}
                    </span>
                  </div>
                  <div className="t6-place-invitation upper text-xl t6-text-brown">
                    <p>
                      Tới dự bữa cơm thân mật mừng lễ thành hôn của gia đình
                      chúng tôi
                    </p>
                  </div>
                  <div className="t6-place-line nt-mx-auto" />
                  <div className="t6-place-area nt-grid nt-grid-cols-8">
                    <div className="t6-square top-left" />
                    <div className="t6-square top-right" />
                    <div className="t6-square bot-left" />
                    <div className="t6-square bot-right" />
                    <div className="t6-place-starttime">
                      <div className="hour text-xl t6-text-brown">
                        <p>11:30, Thứ 6</p>
                      </div>
                      <div className="day text-6xl t6-text-secondary">
                        <p>30</p>
                      </div>
                      <div className="month text-xl t6-text-brown">
                        <p>Tháng 12 năm 2022</p>
                      </div>
                    </div>
                    <div className="t6-place-address">
                      <div className="t6-square mid-left" />
                      <div className="t6-square mid-right" />
                      <div className="t6-title text-xl t6-text-brown">
                        <p>tại:</p>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            window.open(
                              "https://goo.gl/maps/WiDYHboMyXmn3gAt7",
                              "_blank"
                            );
                          }}
                        >
                          LONG VĨ PALACE
                        </a>
                      </div>
                      <div className="name text-xl t6-text-brown">
                        <p>Tầng 2, Số 3A Đào Duy Anh, Quận Đống Đa, Hà Nội</p>
                      </div>
                    </div>
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/decorate-flower.png"
                      className="t6-place-decorate"
                    />
                  </div>
                  <div className="t6-place-line nt-mx-auto mb-35" />

                  <div className="t6-bowtie t6-place-bowtie">
                    <div
                      data-block="decoration"
                      data-decoration-id={-1}
                      className="decoration"
                    >
                      <img src="https://static.namtay.vn/assets/img/theme6/bowtie.png" />
                    </div>
                  </div>
                </div>
              </section>
              <section data-widget="bio" className="t6-info">
                <div className="t6-container">
                  <div
                    data-block="decoration"
                    data-decoration-id={2}
                    className="decoration"
                  >
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau2/bio1.png"
                      className="mau2-bio-decor1"
                    />{" "}
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau2/bio2.png"
                      className="mau2-bio-decor2"
                    />
                  </div>
                  <div
                    data-block="decoration"
                    data-decoration-id={3}
                    className="decoration"
                  >
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau3/bio1.png"
                      className="mau3-bio-decor1"
                    />{" "}
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau3/bio5.png"
                      className="mau3-bio-decor4"
                    />{" "}
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau3/bio2.png"
                      className="mau3-bio-decor2"
                    />{" "}
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau3/bio4.png"
                      className="mau3-bio-decor3"
                    />
                  </div>
                  <div className="t6-info-wrapper groom">
                    <p className="t6-info-title text-xl t6-text-brown">
                      Chú rể
                    </p>
                    <span className="t6-info-name text-5xl t6-text-secondary t6-font-secondary">
                      Đặng Quang Anh
                    </span>
                    <div className="t6-info-desc text-base t6-text-brown" />
                    <div className="t6-info-wapper-decor">
                      <img
                        src="https://image.namtay.vn/fit/800/images/wedsite/c3jjZ9kktK_tmp.png"
                        width={567}
                        height={567}
                        className="t6-info-img"
                      />
                      <div
                        data-block="decoration"
                        data-decoration-id={1}
                        className="decoration"
                      >
                        <img
                          src="https://static.namtay.vn/assets/img/theme6/mau1/bio1.png"
                          className="mau1-bio-decor1"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="t6-info-wrapper bride">
                    <p className="t6-info-title text-xl t6-text-brown">
                      Cô dâu
                    </p>
                    <span className="t6-info-name text-5xl t6-text-secondary t6-font-secondary">
                      Nguyễn Hồng Nhân
                    </span>
                    <div className="t6-info-desc text-base t6-text-brown" />
                    <div className="t6-info-wapper-decor">
                      <img
                        src="https://image.namtay.vn/fit/800/images/wedsite/EMOnf8x1LH_tmp.png"
                        alt="bride"
                        width={567}
                        height={567}
                        className="t6-info-img"
                      />
                      <div
                        data-block="decoration"
                        data-decoration-id={1}
                        className="decoration"
                      >
                        <img
                          src="https://static.namtay.vn/assets/img/theme6/mau1/bio2.png"
                          className="mau1-bio-decor2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="t6-info-wrapper">
                    <div
                      data-block="decoration"
                      data-decoration-id={-1}
                      className="decoration t6-info-wrapper_img"
                    >
                      <img src="https://static.namtay.vn/assets/img/theme6/bowtie.png" />
                    </div>
                  </div>
                </div>
              </section>
              <section data-widget="event" className="t6-event">
                <div className="t6-container">
                  <p className="t6-event-title text-4xl t6-text-secondary">
                    Sự kiện
                  </p>
                  <div className="t6-event-content-wrap nt-grid-cols-3">
                    <div
                      data-block="timemark"
                      className="t6-event-first t6-event-point"
                    >
                      <div id="ips847" className="t6-event-date">
                        <p
                          data-block-node="timemark-datetime"
                          id="igu9jj"
                          className="text-xl t6-text-brown"
                        >
                          07:00 30/12/2022
                        </p>
                        <div id="iq1txg" className="t6-event-line" />
                        <div id="ihxw3v" className="t6-event-square first" />
                      </div>
                      <div
                        data-block-node="timemark-name"
                        id="i0bp9g"
                        className="t6-event-name text-2xl t6-font-secondary t6-text-secondary"
                      >
                        Lễ rước dâu
                      </div>
                      <a
                        data-block-node="timemark-address"
                        target="_blank"
                        id="i7v4kq"
                        className="t6-event-place text-base mb-16 t6-text-brown"
                      >
                        Nhà gái
                      </a>
                      <div
                        data-block-node="timemark-content"
                        id="ivia2e"
                        className="t6-event-address text-base t6-text-brown"
                      >
                        Tại Nhà gái: Xóm II, Vĩnh Quỳnh, Thanh Trì, Hà Nội
                      </div>
                    </div>
                    <div
                      data-block="timemark"
                      className="t6-event-mid t6-event-point"
                    >
                      <div id="i7tw8o" className="t6-event-date">
                        <p
                          data-block-node="timemark-datetime"
                          id="ia7g7z"
                          className="text-xl t6-text-brown"
                        >
                          11:00 30/12/2022
                        </p>
                        <div id="iq9ql4" className="t6-event-line" />
                      </div>
                      <div
                        data-block-node="timemark-name"
                        id="io2b21"
                        className="t6-event-name text-2xl t6-font-secondary t6-text-secondary"
                      >
                        Welcome
                      </div>
                      <a
                        data-block-node="timemark-address"
                        target="_blank"
                        id="iixt3j"
                        className="t6-event-place text-base mb-16 t6-text-brown"
                      >
                        Long Vĩ Palace
                      </a>
                      <div
                        data-block-node="timemark-content"
                        id="i32dcf"
                        className="t6-event-address text-base t6-text-brown"
                      >
                        Tại Tầng 2, Long Vĩ Palace, Số 3A Đào Duy Anh, Quận Đống
                        Đa, Hà Nội
                      </div>
                    </div>
                    <div
                      data-block="timemark"
                      className="t6-event-last t6-event-point"
                    >
                      <div id="ijl2g7" className="t6-event-date">
                        <p
                          data-block-node="timemark-datetime"
                          id="ippph7"
                          className="text-xl t6-text-brown"
                        >
                          11:30 30/12/2022
                        </p>
                        <div id="irgtxz" className="t6-event-line" />
                        <div id="idn7dg" className="t6-event-square last" />
                      </div>
                      <div
                        data-block-node="timemark-name"
                        id="idv8ua"
                        className="t6-event-name text-2xl t6-font-secondary t6-text-secondary"
                      >
                        Lễ Thành hôn và bữa cơm thân mật
                      </div>
                      <a
                        href="https://goo.gl/maps/WiDYHboMyXmn3gAt7"
                        data-block-node="timemark-address"
                        target="_blank"
                        id="ijex7t"
                        className="t6-event-place text-base mb-16 t6-text-brown"
                      >
                        Tại Tầng 2, Long Vĩ Palace, Số 3A Đào Duy Anh, Quận Đống
                        Đa, Hà Nội
                      </a>
                    </div>
                  </div>
                </div>
              </section>
              <section data-widget="album" className="t6-album">
                <div className="t6-album-title text-4xl t6-text-secondary">
                  <span>Album ảnh</span>
                </div>
                <div className="t6-container">
                  <div data-block="album" className="nt-album-list">
                    <div className="nt-album-item">
                      <img src={require("./img/4.jpg")} />
                    </div>
                    <div className="nt-album-item">
                      <img src={require("./img/5.jpg")} />
                    </div>
                    <div className="nt-album-item">
                      <img src={require("./img/6.jpg")} />
                    </div>
                    <div className="nt-album-item">
                      <img src={require("./img/7.jpg")} />
                    </div>
                    <div className="nt-album-item">
                      <img src={require("./img/8.jpg")} />
                    </div>
                    <div className="nt-album-item">
                      <img src={require("./img/9.jpg")} />
                    </div>
                    <div className="nt-album-item">
                      <img src={require("./img/10.jpg")} />
                    </div>
                    <div className="nt-album-item">
                      <img src={require("./img/11.jpg")} />
                    </div>
                    <div className="nt-album-item">
                      <img src={require("./img/12.jpeg")} />
                    </div>
                    <div className="nt-album-item">
                      <img src={require("./img/13.jpeg")} />
                    </div>
                    <div className="nt-album-item">
                      <img src={require("./img/14.jpeg")} />
                    </div>
                    <div className="nt-album-item">
                      <img src={require("./img/15.jpeg")} />
                    </div>
                  </div>
                </div>
              </section>
              <div className="message">
                <img
                  src={require("./img/2.jpg")}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    display: "flex",
                    justifyContent: "center",
                  }}
                ></img>
                <div className="overlay"></div>
                <div className="text">
                  <p className="messageText">
                    “Come live with me, and be my love,{" "}
                  </p>
                  <p className="messageText">
                    And we will some new pleasures prove,{" "}
                  </p>
                  <p className="messageText">
                    Of golden sands, and crystal brooks,
                  </p>

                  <p className="messageText">
                    With silken lines, and silver hooks”
                  </p>
                  <p className="author"> ~ John Donne ~</p>
                </div>
              </div>

              <section className="t6-footer">
                <div className="t6-container t6-footer-wrapper">
                  <div className="t6-footer-content">
                    <p className="messageText"> Quang Anh ~ Hồng Nhân</p>
                  </div>
                </div>
                <div>
                  <div
                    data-block="decoration"
                    data-decoration-id={1}
                    className="decoration"
                  >
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau1/ft2.png"
                      className="mau1-footer-decor1"
                    />{" "}
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau1/ft1.png"
                      className="mau1-footer-decor2"
                    />
                  </div>
                  <div
                    data-block="decoration"
                    data-decoration-id={2}
                    className="decoration"
                  >
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau2/ft1.png"
                      className="mau2-footer-decor1"
                    />{" "}
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau2/ft2.png"
                      className="mau2-footer-decor2"
                    />
                  </div>
                  <div
                    data-block="decoration"
                    data-decoration-id={3}
                    className="decoration"
                  >
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau3/ft2.png"
                      className="mau2-footer-decor1"
                    />{" "}
                    <img
                      src="https://static.namtay.vn/assets/img/theme6/mau3/ft1.png"
                      className="mau2-footer-decor2"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>{" "}
          <div className="notification-wrapper" data-v-0d9974ee>
            {/**/}
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default App;
