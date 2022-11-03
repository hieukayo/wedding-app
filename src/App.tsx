import React from "react";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    if(document!.getElementById("backgroundMusic")){
      (document && (document!.getElementById("backgroundMusic") as any))!
      .play()
      .catch(() => {
        document.addEventListener(
          "click",
          () => {
            (document!.getElementById("backgroundMusic") as any).play();
          },
          { once: true }
        );
      });
    }
   
 
  }
  render(): React.ReactNode {
    return (
      <div id="__layout">
        <div className="ws">
          {/**/}{" "}
          <div style={{}}>
            <audio autoPlay={true} id="backgroundMusic">
              <source
                src={
                  "http://musicmd1fr.keeng.net/bucket-audio-keeng/sata03/songv3/2019/11/11/srLjU6M21ekUBJ8yF3N15dc924891767d.mp3"
                }
                type="audio/mpeg"
              />
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
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                '\n    @font-face { font-family: \'Vnf-Bodoni\'; src: url(\'/fonts/VNF-Bodoni-Regular.ttf\'); } @font-face { font-family: \'Svn-Wallows\'; src: url(\'/fonts/SVN-Wallows.otf\'); } @font-face{font-family:\'Svn-Wallows\';src:url(\'/fonts/SVN-Wallows.otf\');}\n    @font-face{font-family:\'Svn-Wallows\';src:url(\'/fonts/SVN-Wallows.otf\');}@font-face{font-family:\'Vnf-Bodoni\';src:url(\'/fonts/VNF-Bodoni-Regular.ttf\');}\n    * { box-sizing: border-box; } body {margin: 0;}*{box-sizing:border-box;}body{margin:0;}*{box-sizing:border-box;}body{margin:0;}*{box-sizing:border-box;}body{margin:0;}*{box-sizing:border-box;}body{margin:0;}*{box-sizing:border-box;}body{margin:0;}*{box-sizing:border-box;}body{margin:0;}*{box-sizing:border-box;}body{margin:0;}*{box-sizing:border-box;}body{margin:0;}*{box-sizing:border-box;}body{margin:0;}*{box-sizing:border-box;}body{margin:0;}*{box-sizing:border-box;}body{margin:0;}:root{--color-1:#675e5e;--color-2:#bb6350;--color-3:#fff;--font-1:\'Svn-Wallows\';--font-2:\'Vnf-Bodoni\';}body{overflow-x:hidden;}a{text-decoration:none;}.t6-font-primary{font-family:var(--font-2) !important;font-weight:400;white-space:pre-wrap;}.t6-font-secondary{font-family:var(--font-1) !important;font-weight:400;white-space:pre-wrap;}.t6-text-primary{color:var(--color-3);}.t6-text-secondary{color:var(--color-2);}.t6-text-brown{color:var(--color-1);}.t6-bg-primary{background-color:var(--color-2);}.text-xs{font-size:14px;line-height:20px;}.text-sm{font-size:18px;line-height:20px;}.text-base{font-size:20px;line-height:29px;}.text-lg{font-size:30px;line-height:43px;}.text-xl{font-size:35px;line-height:55px;margin-bottom:15px;}.text-2xl{font-size:45px;line-height:97px;}.text-3xl{font-size:50px;line-height:108px;}.text-4xl{font-size:60px;line-height:86px;}.text-5xl{font-size:80px;line-height:172px;}.text-6xl{font-size:100px;line-height:215px;}.mb-35{margin-bottom:35px;}.py-35{padding:35px 0 !important;}.mb-16{margin-bottom:16px !important;}.t6{color:#000000;font-family:var(--font-2);//:#fffdf8;}.t6 section{margin-bottom:1rem;}.t6-container{max-width:1160px;margin:0 auto;}.t6-bowtie{text-align:center;}.t6-bowtie img{max-width:200px;}.t6-square{width:0;height:0;border:5px solid transparent;border-bottom-color:var(--color-1);position:absolute;}.t6-square:after{content:\'\';position:absolute;left:-5px;top:5px;width:0;height:0;border:5px solid transparent;border-top-color:var(--color-1);}.form-question span{color:#ff0000;}.t6-invitation-title{margin:0 auto 72px;max-width:980px;text-align:center;overflow-wrap:anywhere;}.t6-place-title{margin:0 auto 72px;max-width:980px;text-align:center;overflow-wrap:anywhere;}.t6-story-title{margin:0 auto 72px;max-width:980px;text-align:center;overflow-wrap:anywhere;}.t6-album-title{margin:0 auto 72px;max-width:980px;text-align:center;overflow-wrap:anywhere;}.t6-event-title{margin-bottom:72px !important;}.t6-invitation{position:relative;overflow-wrap:anywhere;}.t6-container-banner{position:relative;top:0;}.decor1{position:absolute;width:100%;object-fit:cover;height:100%;}.invitation-decor1{width:200px;}.mau1-decor1{position:absolute;left:0;max-width:25%;}.mau1-decor2{position:absolute;right:0;max-width:24%;}.mau1-decor3{max-width:70%;}.mau2-decor1{bottom:0;position:absolute;max-width:25%;}.mau2-decor2{position:absolute;right:0;bottom:0;max-width:25%;}.mau3-decor1{position:absolute;top:0;left:0;max-width:29%;}.mau3-decor2{position:absolute;right:5%;top:35%;max-width:13%;}.mau3-decor3{position:absolute;left:0;max-width:12%;}.t6-info-wapper-decor{position:relative;width:100%;display:flex;justify-content:center;}.t6-invitation-content{display:flex;align-items:center;justify-content:flex-start;flex-direction:column;height:inherit;padding-top:68px;padding-bottom:86px;}.t6-invitation-name{text-align:center;position:relative;margin-bottom:48px;}.t6-invitation-name .groom{margin-bottom:48px;}.t6-invitation-name .and{left:50%;position:absolute;top:50%;transform:translate(-50%, -50%);}.t6-invitation-date{margin-bottom:64px;text-align:center;}.t6-place{margin-top:50px;}.t6-place-wrapper{text-align:center;padding:30px 0;}.t6-place-line{height:1px;width:50%;background-color:var(--color-1);}.t6-place-area{margin:18px 0;position:relative;z-index:0;column-gap:0;}.t6-place-area .mid-left, .t6-place-area .mid-right{display:none;}.t6-place-area .top-left, .t6-place-area .top-right{top:-9px;}.t6-place-area .bot-left, .t6-place-area .bot-right{bottom:1.5px;}.t6-place-area .top-left, .t6-place-area .mid-left, .t6-place-area .bot-left{left:-8px;}.t6-place-area .top-right, .t6-place-area .mid-right, .t6-place-area .bot-right{right:-8px;}.t6-place-decorate{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;z-index:-1;}.t6-place-starttime{border:2px solid var(--color-1);border-left:0;border-right:0;padding:38px 50px;overflow-wrap:anywhere;}.t6-place-address{border:2px solid var(--color-1);border-left:0;border-right:0;padding:38px 50px;overflow-wrap:anywhere;}.t6-place-address .name{line-height:60px;}.t6-place-invitation, .t6-place-address .name *{line-height:2;}.t6-place-starttime{grid-column-start:1;grid-column-end:5;}.t6-place-starttime .day{margin:2rem 0;line-height:1;padding-bottom:1.5rem;}.t6-place-address{grid-column-start:5;grid-column-end:9;display:flex;flex-direction:column;justify-content:center;}.t6-place-invitation.upper{text-align:center;max-width:500px;margin:0 auto 3rem;line-height:120%;}.t6-place-invitation{text-align:center;max-width:850px;margin:auto;}.t6-place-bowtie{margin:75px 0;}.t6-link{background-image:url(\'https://static.namtay.vn/assets/img/bg-link.png\');background-repeat:no-repeat;background-size:cover;padding-top:70px;padding-bottom:70px;position:relative;z-index:0;}.t6-link:before{content:\'\';position:absolute;inset:0;background-color:#ffffff;opacity:0.4;z-index:-1;}.t6-link-wrap{display:flex;align-items:center;justify-content:space-between;flex:1;}.t6-link-wrap p{flex:1;}.t6-link-button{margin-left:100px;padding:24px 2rem;color:#ffffff !important;}.t6-info{margin-top:35px;margin-bottom:100px;position:relative;padding:30px 0;}.t6-info-wrapper{display:flex;flex-direction:column;align-items:center;justify-content:center;}.t6-info-wrapper.groom{margin-bottom:95px;}.t6-info-wrapper.bride img{margin-bottom:42px;}.t6-info-title{margin-bottom:8px;overflow-wrap:anywhere;}.t6-info-name{margin-bottom:8px;overflow-wrap:anywhere;}.t6-info-desc{margin-bottom:72px;overflow-wrap:anywhere;}.day{overflow-wrap:anywhere;}.month{overflow-wrap:anywhere;}.hour, .t6-info-desc *{overflow-wrap:anywhere;}.mau1-bio-decor2{position:absolute;top:274px;left:181px;max-width:350px;}.mau1-bio-decor1{position:absolute;top:249px;right:168px;max-width:350px;}.mau2-bio-decor1{position:absolute;top:19%;left:0%;max-width:30%;z-index:-1;}.mau2-bio-decor2{position:absolute;right:0%;bottom:20%;max-width:30%;z-index:-1;}.mau3-bio-decor1{position:absolute;top:38%;max-width:15%;left:10%;}.mau3-bio-decor4{position:absolute;right:5%;top:0;max-width:15%;}.mau3-bio-decor2{position:absolute;bottom:28%;right:3%;max-width:14%;}.mau3-bio-decor3{position:absolute;left:5%;bottom:10%;max-width:10%;z-index:-1;}.t6-story-wrapper{display:flex;padding-bottom:30px;}.t6-story-text{width:50%;display:flex;flex-direction:column;align-items:center;justify-content:start;margin-right:2rem;}.t6-story-text p{position:relative;padding:0;}.t6-story-text p:before{top:0;}.t6-story-text p:after{bottom:0;}.t6-story-img{width:50%;display:flex;align-items:center;}.t6-story-img img{width:100%;}.t6-timeline{position:relative;margin-bottom:125px;padding:70px 0;}.t6-timeline-wrapper{position:relative;display:flex;padding:3rem 0;}.t6-timeline-wrapper .heart{position:absolute;bottom:-10px;right:-27px;z-index:1;}.t6-timeline-wrapper .heart path{fill:var(--color-2);}.t6-timeline-wrapper:after{content:\'\';position:absolute;width:1px;background-color:var(--color-2);top:0;bottom:0;left:50%;}.t6-timeline-left{left:0;}.t6-timeline-right{left:0;}.t6-timeline-left:before{content:\' \';height:1px;position:absolute;top:0;width:180px;z-index:1;background-color:var(--color-2);}.t6-timeline-right:before{content:\' \';height:1px;position:absolute;top:0;width:180px;z-index:1;background-color:var(--color-2);}.t6-timeline-left{text-align:right;padding-right:100px;}.t6-timeline-left:before{right:-90px;}.t6-timeline-right{text-align:left;padding-left:100px;}.t6-timeline-right:before{left:-90px;}.t6-timeline-right:after{left:-5px;}.t6-timeline-content{border-radius:6px;position:relative;}.t6-timeline-content .date, .t6-timeline-content .t6-title, .t6-timeline-content .date{position:relative;}.t6-timeline-content .date{top:-32px;}.t6-timeline-content .t6-title{top:-3rem;}.t6-timeline-content .place{text-decoration-line:underline;margin-bottom:6px;}.t6-timeline-box{position:relative;background-color:inherit;width:50%;padding-bottom:70px;undefined:undefined;}.t6-timeline-box:after{content:\'\';position:absolute;width:11px;height:11px;right:-6px;background-color:var(--color-2);top:-6px;border-radius:50%;z-index:1;}.t6-album-list{margin-bottom:72px;}.t6-event{text-align:center;padding:10px 0 30px 0;}.t6-event-content-wrap{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0, 1fr);position:relative;column-gap:0.5rem;}.t6-event-first{position:relative;}.t6-event-mid{position:relative;}.t6-event-last{position:relative;}.t6-event-date{position:relative;}.t6-event-first p, .t6-event-mid p, .t6-event-last p, .t6-event-date p{margin-bottom:20px;position:relative;}.t6-event-date::after{content:\'\';position:absolute;height:1px;background-color:var(--color-1);left:0;right:0;}.t6-event-line{height:76px;width:1px;background-color:var(--color-1);position:relative;left:50%;}.t6-event-square{width:0;height:0;border:5px solid transparent;border-bottom-color:var(--color-1);position:absolute;bottom:-0.5px;}.t6-event-square.first{left:-8px;}.t6-event-square.last{right:-8px;}.t6-event-square:after{content:\'\';position:absolute;}.t6-event-line:after{content:\'\';position:absolute;}.t6-event-square:after{left:-5px;top:5px;width:0;height:0;border:5px solid transparent;border-top-color:var(--color-1);}.t6-event-line::after{width:10px;height:10px;border-radius:50%;background-color:var(--color-1);transform:translateX(-50%);bottom:-5px;}.t6-event-name{margin-top:23px;max-width:100%;overflow-wrap:anywhere;width:100%;padding:0 0.5rem;}.t6-event-place{text-decoration-line:underline;color:var(--color-1);}.t6-event-address{padding:0 40px;}.t6-contact{position:relative;}.t6-contact-wrapper{display:grid;grid-template-columns:repeat(8, minmax(0, 1fr));column-gap:20px;}.t6-contact-txt{grid-column:span 5 / span 5;padding-right:3rem;}.t6-contact-txt-title{font-weight:bold;font-size:60px;line-height:73px;color:#bb6350;margin-bottom:42px;}.t6-contact-txt-desc{padding-right:40px;}.t6-contact .form{grid-column:span 3 / span 3;}.t6-contact .form-label{margin-bottom:1rem !important;}.t6-contact .form input{border:1px solid var(--color-2);padding:12px;margin-bottom:36px;width:100%;}.t6-contact .form input:focus{outline:none;}.t6-contact .form-question .btn-wrap{display:flex;align-items:center;}.t6-contact .form-btn{padding:12px 24px;border:1px solid var(--color-2);margin-right:20px;cursor:pointer;color:var(--color-1);}.t6-contact .form-radio{position:absolute;opacity:0;pointer-events:none;user-select:none;}.t6-contact .form-radio:checked + label{color:#fffdf8;background-color:#bb6350;}.t6-contact .form-btn.active{color:#fffdf8;background-color:#bb6350;}.t6-contact .form-submit-wrap{margin-top:38px;}.t6-contact .form-submit{padding:24px 48px;color:#fffdf8;background-color:var(--color-2);font-size:24px;line-height:29px;}.t6-footer{margin-bottom:0 !important;background-color:var(--color-2);position:relative;}.t6-footer-wrapper{padding:54px 0;color:var(--color-3);text-align:center;}.t6-footer-top{border-bottom:1px solid white;padding-bottom:18px;margin-bottom:10px;}.t6-footer-top div{max-width:264px;text-align:center;margin:auto auto 6px auto;}.t6-event-address, .t6-timeline-content p[data-block-node="journey-point-content"], .t6-event p[data-block-node="timemark-datetime"]{white-space:pre-wrap !important;overflow-wrap:anywhere;}.t6-event p[data-block-node="timemark-datetime"]{width:100%;text-align:center;margin:auto;word-spacing:100vw;white-space:pre-line !important;}.t6-event-point{max-width:100%;}.t6-invitation{margin-bottom:0 !important;}.t6-guestname{font-size:60px;line-height:86px;font-weight:400;text-align:center;color:var(--color-2);padding-top:68px;}.mau1-timeline-decor1{position:absolute;z-index:2;left:50%;top:-3%;transform:translateX(-50%);max-width:135px;}.mau2-timeline-decor1{position:absolute;z-index:2;left:50%;top:2%;transform:translateX(-50%);max-width:135px;}.mau3-timeline-decor1{position:absolute;z-index:2;left:50%;top:2%;transform:translateX(-50%);max-width:135px;}.mau1-footer-decor1{position:absolute;bottom:70%;max-width:10%;}.mau1-footer-decor2{position:absolute;right:0;bottom:70%;max-width:10%;}.mau2-footer-decor1{position:absolute;bottom:100%;max-width:10%;z-index:-1;}.mau2-footer-decor2{position:absolute;right:0;bottom:100%;max-width:16%;z-index:-1;}.mau3-footer-decor1{position:absolute;bottom:100%;max-width:10%;z-index:-1;}.mau3-footer-decor2{position:absolute;right:0;bottom:100%;max-width:10%;z-index:-1;}.t6-info-img{border-radius:50%;}.t6-footer-content{display:flex;align-items:center;justify-content:center;}.t6-footer-content span{color:var(--color-3);}.t6-footer-content svg{margin-left:25px;}.t6-footer-content svg path{fill:var(--color-3);}.t6-invitation-date{overflow-wrap:anywhere;}.t6-link-text{overflow-wrap:anywhere;}.t6-info-desc{overflow-wrap:anywhere;}.t6-story-text{overflow-wrap:anywhere;}.message{overflow-wrap:anywhere;}.t6-event-place{overflow-wrap:anywhere;}.t6-event-name{overflow-wrap:anywhere;}.rsvp-title{overflow-wrap:anywhere;}.rsvp-text, .t6-invitation-name .groom, .t6-invitation-name .groom p, .t6-invitation-name .bride, .t6-invitation-name .bride p, .t6-info-desc *, .t6-place-invitation *, .t6-story-text p, .t6-timeline-content .t6-title, .t6-timeline-content .t6-title *, .t6-event-place p, .t6-event-name *, .rsvp-title *, .rsvp-text *{overflow-wrap:anywhere;}.t6-link-text{white-space:pre-wrap;overflow-wrap:anywhere;}.t6-link-text p{overflow-wrap:anywhere;}.t6-invitation-name .groom, .t6-invitation-name .bride{max-width:800px;}.t6-title{margin-bottom:1.5rem;}.t6-timeline .heart{left:50%;bottom:35px;position:absolute;transform:translateX(-50%);}.t6-timeline .heart path{fill:var(--color-2);}.message{position:relative;top:-3rem;}.sticky-btn-wrapper{display:flex;justify-content:center;flex-direction:column;align-items:end;position:relative;width:83px;height:120px;transform:translate(-2rem, -2rem);}.sticky-btn-back{top:10px;right:0.5px;z-index:100;position:absolute;transition:all 0.1s;}.sticky-btn-front{z-index:900;top:25px;position:absolute;}.sticky-btn-opener{transition:all 0.35s linear;position:absolute;left:-2.5px;top:-45px;z-index:1000;}.sticky-btn-button{position:absolute;z-index:10000;transition:all 0.35s linear;pointer-events:none;left:50%;transform:translateX(-50%);top:35px;}.sticky-btn-money1{position:absolute;top:15%;transition:all 0.35s linear;}.sticky-btn-money2{position:absolute;top:15%;transition:all 0.35s linear;}.sticky-btn-money3{position:absolute;top:15%;transition:all 0.35s linear;}.sticky-btn-money1{transform:rotateZ(-50deg) scale(0.5);z-index:200;right:-2.2rem;}.sticky-btn-money2{transform:rotateZ(-40deg) scale(0.5);z-index:300;left:0;}.sticky-btn-money3{transform:rotateZ(50deg) scale(0.5);z-index:200;left:0rem;top:2.5rem;}.sticky-btn-front:hover ~ .sticky-btn-back{transform:translateY(-0.5rem);}.sticky-btn-front:hover ~ .sticky-btn-opener{z-index:100;transform:rotateX(180deg) translateY(-0.5rem);}.sticky-btn-front:hover ~ .sticky-btn-opener path{fill:#ce062c;}.sticky-btn-front:hover ~ .sticky-btn-money1{z-index:600;transform:translateY(-3rem) translateX(0rem) rotateZ(3deg) scale(1);}.sticky-btn-front:hover ~ .sticky-btn-money2{z-index:700;transform:translateY(-4rem) translateX(-0.2rem) rotateZ(-3deg) scale(1);}.sticky-btn-front:hover ~ .sticky-btn-money3{z-index:600;transform:translateY(-4.6rem) translateX(-2.5rem) rotateZ(-1deg) scale(1);}.sticky-btn-front:hover ~ .sticky-btn-button{transform:translateY(0.2rem) translateX(-50%);}.t6-love{white-space:pre-wrap;}.t6-story-hr{height:2px;width:100px;margin-bottom:2rem;}[data-decoration-id="-1"]{display:block;}[data-decoration-id="1"]{display:none;}[data-decoration-id="2"]{display:none;}[data-decoration-id="3"]{display:none;}:root{--font-1:"Svn-Wallows";}:root{--font-2:"Vnf-Bodoni";}#invitation{display:none;}:root{--color-1:#675E5E;--color-2:#BB6350;--color-3:#FFF;}[data-decoration-id="-1"]{display:none;}[data-decoration-id="1"]{display:block;}[data-decoration-id="2"]{display:none;}[data-decoration-id="3"]{display:none;}[data-decoration-id="-1"]{display:none;}[data-decoration-id="1"]{display:none;}[data-decoration-id="2"]{display:block;}[data-decoration-id="3"]{display:none;}[data-decoration-id="-1"]{display:none;}[data-decoration-id="1"]{display:none;}[data-decoration-id="2"]{display:none;}[data-decoration-id="3"]{display:block;}[data-decoration-id="-1"]{display:none;}[data-decoration-id="1"]{display:block;}[data-decoration-id="2"]{display:none;}[data-decoration-id="3"]{display:none;}:root{--color-1:#010201;--color-2:#CD6C3C;--color-3:#FFF;}:root{--color-1:#675E5E;--color-2:#8580C1;--color-3:#FFF;}:root{--color-1:#675E5E;--color-2:#BB6350;--color-3:#FFF;}@media only screen and (max-width: 1160px){.text-xs{font-size:14px;line-height:20px;}.text-lg{font-size:24px;line-height:34px;}.text-xl{font-size:20px;line-height:28px;}.text-2xl{font-size:30px;line-height:65px;}.text-3xl{font-size:35px;line-height:75px;}.text-4xl{font-size:40px;line-height:57px;}.text-5xl{font-size:60px;line-height:129px;}.text-6xl{font-size:72px;line-height:155px;}.t6-container{max-width:672px;padding-left:20px;padding-right:20px;}.t6-invitation-title{margin-bottom:23px;}.t6-invitation .bowtie img{width:100%;}.t6-invitation-name{margin-bottom:25px;flex-direction:column;}.t6-invitation .groom{margin-bottom:72px;}.t6-invitation-dot{display:none;}.t6-invitation-date{font-size:40px;line-height:48px;margin-top:34px;}.t6-place-title{margin-bottom:21px;}.t6-place-area{margin:10px 0;display:flex;}.t6-place-starttime{padding:10px 20px;width:100%;}.t6-place-starttime .day{line-height:1;padding-bottom:0.5rem;}.t6-place-address{width:100%;padding:10px 20px;margin-bottom:0;}.t6-link{background-image:url("https://static.namtay.vn/assets/img/bg-link-tablet.png");}.t6-link-wrap{flex:1;}.t6-link-wrap p{flex:1;}.t6-link-button{margin-left:48px;}.t6-info-wrapper{margin-top:30px;grid-template-rows:repeat(6, minmax(0, 1fr));}.t6-info-wrapper p{font-size:35px;line-height:50px;}.t6-info-wrapper.groom{margin-bottom:87px;}.t6-info-wrapper.bride img{margin-bottom:13px;}.t6-info-img{height:100%;width:500px;}.t6-info-wapper-decor{position:relative;width:100%;display:flex;justify-content:center;}.mau1-bio-decor1{top:250px;right:-20px;max-width:250px;}.mau1-bio-decor2{top:260px;left:-15px;max-width:250px;}.mau3-bio-decor1{left:3%;}.mau3-bio-decor3{bottom:2%;}.mau1-timeline-decor1{top:0;width:95px;}.mau1-timeline-decor2{top:30%;width:95px;}.mau1-timeline-decor3{bottom:30%;width:95px;}.mau2-timeline-decor1{top:0;width:80px;}.mau2-timeline-decor2{top:30%;width:80px;}.mau2-timeline-decor3{bottom:31%;width:80px;}.t6-info-content.groom{grid-column-start:7;grid-column-end:13;grid-row-start:1;grid-row-end:4;}.t6-info-content.bride{grid-column-start:1;grid-column-end:7;grid-row-start:4;grid-row-end:7;display:flex;flex-direction:column;justify-content:flex-end;}.t6-info-title{font-size:18px;line-height:22px;}.t6-info-content{font-size:18px;line-height:22px;}.t6-info-name{font-size:30px;line-height:36px;}.t6-story{margin-bottom:136px;}.t6-story-title{margin-bottom:66px;}.t6-story-text p{padding-top:8px;padding-right:0;}.t6-story-text p:before, .t6-story-text p:after{width:66px;}.t6-timeline .t6-title{top:-40px;}.t6-timeline .date{font-size:25px;top:-18px;}.t6-timeline-left{padding-right:78px;}.t6-timeline-left::before{width:120px;right:-60px;}.t6-timeline-right{padding-left:78px;}.t6-timeline-right::before{width:120px;left:-60px;}.t6-album{margin-bottom:115px;}.t6-album-title{margin-bottom:47px;}.t6-event{margin-bottom:76px;}.t6-event-content-wrap{padding-left:35px;}.t6-event-title{margin-bottom:60px;}.t6-event-place{margin-top:24px;margin-bottom:10px;}.t6-event-address{padding:0 20px;}.t6-contact .flower-bot1{max-width:210px;}.t6-contact .flower-bot5{max-width:236px;}.t6-contact-txt{grid-column:span 4 / span 4;}.t6-contact-txt-desc{padding:0;}.t6-contact-txt-title{font-size:45px;line-height:59px;}.t6-contact .form{grid-column:span 4 / span 4;}.t6-contact .form-label{font-size:18px;line-height:125%;}.t6-footer-wrapper{font-size:18px;line-height:22px;}.t6-guestname{font-size:40px;}}@media only screen and (max-width: 672px){.t6-place-title{text-align:center;margin:3rem 0;}.t6-info-wrapper_img{width:100%;}.t6-info-wrapper_img img{display:flex;}.text-base{font-size:18px;line-height:26px;}.t6-love{font-size:20px;line-height:26px;}.text-lg{font-size:18px;line-height:26px;}.text-xl{font-size:20px;line-height:29px;}.text-2xl{font-size:20px;line-height:29px;}.text-3xl{font-size:30px;line-height:65px;}.text-4xl{font-size:30px;line-height:43px;}.text-5xl{font-size:40px;line-height:86px;}.text-6xl{font-size:40px;line-height:86px;}.t6-container{width:100%;padding:0 20px;}.t6-invitation-title{margin-bottom:21px;}.t6-invitation-name{flex-direction:column;font-size:50px;line-height:50px;margin:50px 0;}.t6-invitation-name .and{width:140px;}.t6-invitation-date{font-size:20px;line-height:24px;}.t6-place{margin-bottom:15px;}.t6-place-wrapper{display:block;}.t6-place-time{margin-top:18px;}.t6-place-time p{font-size:18px;line-height:22px;}.t6-place-area{flex-direction:column;align-items:center;}.t6-place-area img{display:none;}.t6-place-area .mid-left, .t6-place-area .mid-right{display:block;top:-11px;}.t6-place-address{border-top:0;margin-bottom:0;text-align:center;position:relative;padding:25px 20px;}.t6-place-address .t6-title{font-size:25px;line-height:36px;margin-bottom:13px;}.t6-place-invitation{margin-bottom:16px;overflow-wrap:anywhere;}.t6-link{background-image:url("https://static.namtay.vn/assets/img/bg-link-mobile.png");padding-top:50px;padding-bottom:50px;}.t6-link-wrap{flex-direction:column;}.t6-link-button{margin-top:14px;margin-left:0;padding:12px 24px;}.t6-info-wrapper{margin-top:0;margin-bottom:30px;display:flex;flex-direction:column;align-items:flex-start;}.t6-info-wrapper img{width:250px;//:0;margin:auto;}.mau1-bio-decor1{top:111px;left:191px;max-width:143px;}.mau1-bio-decor2{top:108px;right:191px;max-width:143px;}.mau2-bio-decor1{top:28%;}.mau2-bio-decor2{bottom:25%;}.mau3-bio-decor1{top:46%;}.mau3-bio-decor4{top:3%;}.mau1-timeline-decor1{top:-3%;left:52px;width:47px;}.mau1-timeline-decor2{top:32%;left:67px;width:47px;}.mau1-timeline-decor3{bottom:32%;left:67px;width:47px;}.mau3-timeline-decor1{top:-4%;left:43px;width:47px;}.mau3-timeline-decor2{top:32.5%;left:64px;width:47px;}.mau3-timeline-decor3{bottom:32.5%;left:64px;width:47px;}.mau2-timeline-decor1{top:-6%;left:6px;transform:scale(0.6);}.mau2-timeline-decor2{top:32.5%;left:67px;}.mau2-timeline-decor3{bottom:32.5%;left:67px;}.mau1-footer-decor1{bottom:90%;}.mau1-footer-decor2{bottom:90%;}.t6-timeline-wrapper .heart{left:26px;}.t6-info-wrapper .t6-bowtie{inset:0;margin:auto;}.t6-story-title{margin-bottom:10px;text-align:left;}.t6-story-wrapper{flex-direction:column-reverse;}.t6-story-text{width:100%;}.t6-story-img{width:100%;}.t6-story-text{margin-right:0;}.t6-story-img{margin-bottom:28px;}.t6-timeline-wrapper{width:100%;padding:0;flex-direction:column;}.t6-timeline-wrapper #heart{left:25px;}.t6-timeline-wrapper #heart-2{left:25px;}.t6-timeline-wrapper::after{left:50px;}.t6-timeline-content{position:static;}.t6-timeline-content img{position:relative;z-index:1;margin-bottom:60px;}.t6-timeline-content .date{position:absolute;left:70px;top:-40px;}.t6-timeline-content .t6-title{top:10px;margin-bottom:20px;}.t6-timeline-reverse{flex-direction:column-reverse;}.t6-timeline-reverse .t6-timeline-box::after{left:45px;}.t6-timeline-reverse .t6-timeline-left{padding-bottom:40px;padding-right:0;}.t6-timeline-reverse .t6-timeline-left::before{content:none;}.t6-timeline-reverse .t6-timeline-left::after{content:none;}.t6-timeline-reverse .t6-timeline-right{padding-left:70px;padding-right:20px;}.t6-timeline-reverse .t6-timeline-right::before{left:50px;width:90px;}.t6-timeline-noreverse .t6-timeline-left{padding-right:20px;padding-left:70px;}.t6-timeline-noreverse .t6-timeline-left::after{left:45px;}.t6-timeline-noreverse .t6-timeline-left::before{left:50px;width:90px;}.t6-timeline-noreverse .t6-timeline-right{padding-left:0;left:0;}.t6-timeline-noreverse .t6-timeline-right::after{content:none;}.t6-timeline-noreverse .t6-timeline-right::before{content:none;left:50px;width:90px;}.t6-timeline-noreverse .t6-timeline-content{text-align:left;}.t6-timeline-box{width:100%;padding-bottom:40px;position:static;}.t6-timeline-box::after{left:0;}.t6-album{margin-bottom:60px;}.t6-event-title{text-align:left;}.t6-event-content-wrap{display:flex;flex-direction:column;text-align:left;}.t6-event-square.first{display:none;}.t6-event-square.last{left:-5px;}.t6-event-date{position:static;text-align:left;}.t6-event-date p{position:absolute;top:-30px;}.t6-event-date:after{content:none;}.t6-event-name{margin:1rem 0;}.t6-event-place{margin-top:7px;}.t6-event-address{margin-bottom:60px;padding:0;}.t6-event-line{position:absolute;top:0;left:0;width:74px;height:1px;}.t6-event-line:after{left:0;}.t6-event-first{padding-left:72px;}.t6-event-mid{padding-left:72px;}.t6-event-last{padding-left:72px;}.t6-event-first:after{content:\'\';height:100%;width:1px;position:absolute;left:0;top:0;background-color:var(--color-1);}.t6-event-mid:after{content:\'\';height:100%;width:1px;position:absolute;left:0;top:0;background-color:var(--color-1);}.t6-event-last:after{content:\'\';height:100%;width:1px;position:absolute;left:0;top:0;background-color:var(--color-1);}.t6-contact .flower-bot1{display:none;}.t6-contact .flower-bot5{display:none;}.t6-contact-wrapper{display:flex;flex-direction:column;}.t6-contact-wrapper .form{font-size:14px;line-height:17px;}.t6-contact-wrapper .form-submit-wrap{margin-top:18px;}.t6-contact-wrapper .form-submit{font-size:18px;line-height:22px;}.t6-contact-txt{margin-bottom:46px;padding-right:0;}.t6-contact-txt-title{font-size:24px;line-height:29px;}.t6-footer-wrapper{font-size:14px;line-height:17px;padding:1.5rem;}.t6-guestname{font-size:30px;text-align:left;padding-top:52px;}.t6-event p[data-block-node="timemark-datetime"]{width:auto;text-align:left;word-spacing:normal;}.t6-info-wrapper p{font-size:18px;line-height:32px;}.message{top:0px;}.sticky-btn-wrapper{transform:translate(-2rem, -2rem) scale(0.7);}.t6-timeline .heart{left:70px;bottom:40px;width:24px;}.t6-place-starttime{border:1px solid var(--color-1);border-left:0;border-right:0;}.t6-place-address{border:1px solid var(--color-1);border-left:0;border-right:0;}.t6-place-address{top:-1px;}.t6-place-line{margin:1rem auto;}.t6-square{transform:scale(0.8);}}\n  ',
            }}
          />{" "}
          {/**/}{" "}
          <div className="notification-wrapper" data-v-0d9974ee>
            {/**/}
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default App;
