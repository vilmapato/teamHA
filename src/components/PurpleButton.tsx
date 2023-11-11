import React, { ReactNode } from "react";
import PropTypes from "prop-types";

type PurpleButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};

const PurpleButton = ({ children, onClick }: PurpleButtonProps) => {
    return (
        <button
            onClick={onClick}
            className="border-2 mb-3 bg-purple-500 border-black text-white hover:bg-gray-400 hover: border-black hover:text-white transition duration-300 ease-in-out py-2 px-4 rounded-lg w-48"
        >
            {children}
        </button>
    );
};

PurpleButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
};

export default PurpleButton;
