import React, { useEffect, useState, forwardRef } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
    faEllipsisVertical,
    faLanguage,
    faCircleQuestion,
    faKeyboard,
    faCloudArrowUp,
    faArrowRightFromBracket,
    faBitcoinSign,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { MessageIcon, InboxIcon } from "~/components/Icons";
import Image from "~/components/Image";
import Search from "~/components/Layout/Search";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    type: "Language",
                    code: "en",
                    title: "English",
                    /*children: {
                        title: "Language",
                        data: [
                            {
                                code: "en",
                                title: "English1",
                            },
                            { code: "vi", title: "Vietnamese1" },
                            { code: "fr", title: "French1" },
                        ],
                    }*/
                },
                { type: "Language", code: "vi", title: "Vietnamese" },
                { type: "Language", code: "fr", title: "French" },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

function Header() {
    const currentUser = true;

    // handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case "language":
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: "/profile",
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoinSign} />,
            title: "Get coins",
            to: "/coins",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/setting",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: "Logout",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                {/* Search */}
                <Search />
                <div className={cx("actions")}>
                    {currentUser ? (
                        <>
                            <Tippy
                                content="Upload Video"
                                delay={[0, 200]}
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Message"
                                delay={[0, 200]}
                                placement="bottom"
                            >
                                <button className={cx("action-btn")}>
                                    <MessageIcon
                                        width={"2.6rem"}
                                        height={"2.6rem"}
                                    />
                                </button>
                            </Tippy>
                            <Tippy
                                content="Inbox"
                                delay={[0, 200]}
                                placement="bottom"
                            >
                                <button
                                    className={cx("action-btn", "inbox-btn")}
                                >
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                src="https://khoinguonsangtao.vn/wp-content/uploads/2022/08/hinh-nen-phi-hanh-gia-1-305x560.jpg"
                                className={cx("user-avatar")}
                                alt="Dao Van Sang"
                                fallback="https://ttcompany.com.vn/wp-content/uploads/2022/09/hinh-nen-phi-hanh-gia-cute-cho-dien-thoai-13.jpg"
                            />
                        ) : (
                            <button className={cx("more-btn")}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
