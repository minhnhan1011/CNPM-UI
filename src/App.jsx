import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import "./style.css";
import tour1 from "../src/assets/img/tour-img/newyork.jpg"
import tour2 from "../src/assets/img/tour-img/paris.jpg"
import tour3 from "../src/assets/img/tour-img/sanfran.jpg"
import sliderImage from "../src/assets/img/slider/slider2.jpg";
import contentPic1 from "../src/assets/img/content-img/pic1.jpg";
import contentPic2 from "../src/assets/img/content-img/pic2.jpg";
import contentPic3 from "../src/assets/img/content-img/pic3.jpg";
import Modal from "./components/Modal";
import Chatbot from "./components/Chatbot";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);

    return (
        <>
            <title>Shop cầu lông</title>
            <div id="main">
                <div id="header">
                    {/* Nav */}
                    <ul id="nav">
                        <li>
                            <a href="#">Trang chủ</a>
                        </li>
                        <li>
                            <a href="#band">Giới thiệu</a>
                        </li>
                        <li>
                            <a href="#tour">Lịch trình</a>
                        </li>
                        <li>
                            <a href="#contact">Liên hệ</a>
                        </li>
                        <li>
                            <a href="#">
                                More
                            </a>
                            <ul className="subnav">
                                <li>
                                    <a href="https://www.yonex.com/">Yonexxxxxx</a>
                                </li>
                                <li>
                                    <a href="https://liningbadminton.vn/">Lininggggg</a>
                                </li>
                                <li>
                                    <a href="https://www.victorsport.com/index.html">Victorrrrr</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {/* Search */}
                    <div className="search-btn">
                        <FaSearch className="search-icon" />
                    </div>
                    <div id="mobile-menu" className="menu-mobile">
                        <i className=" menu-icon ti-menu" />
                    </div>
                </div>
                <div id="slider">
                    <div className="slider-img">
                        <img src={sliderImage} alt="" />
                    </div>
                    <div className="text-content">
                        <h2 className="text-heading">ĐAM MÊ</h2>
                        <div className="text-description">Hãy đến trải nghiệm thoải đam mê</div>
                    </div>
                </div>


                <div className="app-container">
                    {/* Icon mở Chatbot */}
                    {!isChatOpen && (
                        <div className="chatbot-icon" onClick={() => setIsChatOpen(true)}>
                            <FaUser />
                        </div>
                    )}

                    {/* Cửa sổ Chatbot */}
                    {isChatOpen && <Chatbot onClose={() => setIsChatOpen(false)} />}
                </div>


                <div id="content">
                    {/* About section */}
                    <div id="band" className="content-section">
                        <h2 className="section-heading">BADMINTON</h2>
                        <p className="section-sub-heading">We love badminton</p>
                        <p className="about-text">
                            Cầu lông, một môn thể thao tuyệt vời, kết hợp sức mạnh và sự tinh tế,
                            thu hút người chơi từ khắp nơi trên thế giới. Trò chơi này yêu cầu kỹ
                            thuật cao và tốc độ nhanh chóng khi hai đội chơi đối đầu nhau trên
                            sân. Cầu lông đòi hỏi sự linh hoạt, sự đồng đội và chiến thuật tốt để
                            chiến thắng. Người chơi sử dụng vợt nhẹ và cú đánh khéo léo để đưa cầu
                            qua mạng, tạo nên những pha bóng đẹp mắt. Môn thể thao này không chỉ
                            là một hoạt động giải trí mà còn là một cách tuyệt vời để cải thiện
                            sức khỏe và tăng cường sự gắn kết xã hội.
                        </p>
                        <div className=" row member-list">
                            <div className="member-item col col-third text-center">
                                <p className="member-name">Name1</p>
                                <img
                                    src={contentPic1}
                                    alt="Name"
                                    className="avt"
                                />
                            </div>
                            <div className="member-item col col-third text-center">
                                <p className="member-name">Name2</p>
                                <img
                                    src={contentPic2}
                                    alt="Name"
                                    className="avt"
                                />
                            </div>
                            <div className="member-item col col-third text-center">
                                <p className="member-name">Name3</p>
                                <img
                                    src={contentPic3}
                                    alt="Name"
                                    className="avt"
                                />
                            </div>
                            <div className="clear" />
                        </div>
                    </div>
                    {/* Tour section */}
                    <div id="tour" className="tour-section">
                        <div className="content-section">
                            <h2 className="section-heading text-white">LỊCH TRÌNH THI ĐẤU</h2>
                            <p className="section-sub-heading text-white">
                                Hãy đặt vé để xem Idol bạn thi đấu
                            </p>
                            <ul className="tickets-list">
                                <li>
                                    Tháng 1 <span className="sold-out">Sold out</span>
                                </li>
                                <li>
                                    Tháng 7 <span className="sold-out">Sold out</span>
                                </li>
                                <li>
                                    Tháng 11 <span className="quantity">3</span>
                                </li>
                            </ul>
                            {/* Tourplace */}
                            <div className="row place-list">
                                <div className="list-ticket col col-third">
                                    <img
                                        src={tour1}
                                        alt="New York"
                                        className="place-img"
                                    />
                                    <div className="place-body">
                                        <h3 className="place-heading">New York</h3>
                                        <p className="place-time">Thứ Sáu, 27 tháng 1 năm 2020</p>
                                        <p className="place-description">NewYork xứ sở thần tiên.</p>
                                        <button className="mobile-center btn" onClick={() => setIsModalOpen(true)}>
                                            Mua vé
                                        </button>
                                    </div>
                                </div>
                                <div className="list-ticket col col-third">
                                    <img
                                        src={tour2}
                                        alt="Paris"
                                        className="place-img"
                                    />
                                    <div className="place-body">
                                        <h3 className="place-heading">Paris</h3>
                                        <p className="place-time">Thứ Bảy, 05 tháng 7 năm 2020</p>
                                        <p className="place-description">Paris xứ sở tình yêu.</p>
                                        <button className="mobile-center btn" onClick={() => setIsModalOpen(true)}>
                                            Mua vé
                                        </button>
                                    </div>
                                </div>
                                <div className="list-ticket col col-third">
                                    <img
                                        src={tour3}
                                        alt="San Francisco"
                                        className="place-img"
                                    />
                                    <div className="place-body">
                                        <h3 className="place-heading">San Francisco</h3>
                                        <p className="place-time">Chủ Nhật, 10 tháng 11 năm 2021</p>
                                        <p className="place-description">Xứ sở băng hà.</p>
                                        <button className="mobile-center btn" onClick={() => setIsModalOpen(true)}>
                                            Mua vé
                                        </button>
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                    </div>
                    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    {/* Begin: Contact section */}
                    <div id="contact" className="content-section">
                        <h2 className="section-heading">Liên hệ</h2>
                        <p className="section-sub-heading">Hãy liên hệ chúng tôi qua email</p>
                        <div className="row contact-content">
                            <div className="contact-mobile col col-half contact-info">
                                <p>
                                    <i className="ti-location-pin" />
                                    VietNam,VN
                                </p>
                                <p>
                                    <i className="ti-mobile" />
                                    Phone: +84 000 999 444
                                </p>
                                <p>
                                    <i className="ti-email" />
                                    Email: ....@gmail.com
                                </p>
                            </div>
                            <div className="contact-mobile col col-half contact-form">
                                <form action="#">
                                    <div className="row">
                                        <div className="col col-half s-col-full">
                                            <input
                                                type="text"
                                                name=""
                                                required=""
                                                id=""
                                                className="form-control"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div className="col col-half s-col-full">
                                            <input
                                                type="email"
                                                name=""
                                                required=""
                                                id=""
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-8">
                                        <div className="col col-full">
                                            <input
                                                type="text"
                                                name=""
                                                required=""
                                                id=""
                                                className="form-control"
                                                placeholder="Message"
                                            />
                                        </div>
                                    </div>
                                    <input
                                        className="btn pull-right mt-16 contact-mobile"
                                        type="submit"
                                        defaultValue="SEND"
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* End: Contact */}
                    {/* <div class="map-section">
            <img src="./assets/img/map-img/map.jpg" alt="Map">
        </div> */}
                </div>
                <div id="footer">
                    <p className="copyright">
                        Bản quyền bởi <a href="#">Nhân</a>
                    </p>
                </div>
            </div>
            {/* <div className="modal js-modal">
                <div className="modal-container js-modal-container">
                    <div className="modal-close js-modal-close">
                        <i className="ti-close" />
                    </div>
                    <header className="modal-header">
                        <i className="ti-bag" />
                        MUA VÉ
                    </header>
                    <div className="modal-body">
                        <label htmlFor="quantity" className="modal-label">
                            <i className="ti-shopping-cart" />
                            Nhập số lượng vé
                        </label>
                        <input
                            id="quantity"
                            type="text"
                            className="modal-input"
                            placeholder="Nhập số vé"
                        />
                        <label htmlFor="send-mail-ticket" className="modal-label">
                            <i className="ti-user" />
                            Gửi tới
                        </label>
                        <input
                            id="send-mail-ticket"
                            type="email"
                            className="modal-input"
                            placeholder="Nhập email"
                        />
                        <button id="buy-tickets">
                            Thanh toán
                            <i className="ti-check" />
                        </button>
                    </div>
                    <footer className="modal-footer">
                        <p className="modal-help">
                            Need <a href="#">help?</a>
                        </p>
                    </footer>
                </div>
            </div> */}
        </>

    );
}

export default App;
