import React from "react";
import { FaTimes, FaShoppingCart, FaUser, FaCheck } from "react-icons/fa";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Nếu modal không mở, không hiển thị

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                {/* Nút đóng modal */}
                <div className="modal-close" onClick={onClose}>
                    <FaTimes />
                </div>

                <header className="modal-header">
                    <FaShoppingCart /> MUA VÉ
                </header>

                <div className="modal-body">
                    <label className="modal-label">
                        <FaShoppingCart /> Nhập số lượng vé
                    </label>
                    <input type="text" className="modal-input" placeholder="Nhập số vé" />

                    <label className="modal-label">
                        <FaUser /> Gửi tới
                    </label>
                    <input type="email" className="modal-input" placeholder="Nhập email" />

                    <button className="modal-btn">
                        Thanh toán <FaCheck />
                    </button>
                </div>

                <footer className="modal-footer">
                    <p className="modal-help">
                        Need <a href="#">help?</a>
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Modal;
