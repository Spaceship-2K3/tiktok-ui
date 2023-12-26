import MenuItem from "./MenuItem";
import PropTypes from "prop-types";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import React, { useEffect, useState, forwardRef, Children } from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import Header from "./Header";
import { render } from "@testing-library/react";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({
    children,
    items = [],
    onChange = defaultFn,
    hideOnClick = false,
}) {
    // Lan dau tien render chi ra trang nhat, obj dai dien cho du lieu trang hien tai
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, index) => {
            // Khi click vao thang nao la cha thi se chuyen sang menu cap 2 cua no
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleOnback = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => {
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
                {/*   xu li khi mang k phai la phan tu dau tien thi xoa phan tu thu 2 roi back ve */}
                {history.length > 1 && (
                    <Header title="Language" onBack={handleOnback} />
                )}
                <div className={cx("menu-scrollable")}>{renderItem()}</div>
            </PopperWrapper>
        </div>;
    };

    const handleResetToFirstPage = () => setHistory((prev) => prev.slice(0, 1));

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={[10, 10]}
            hideOnClick={hideOnClick}
            placement="bottom-end"
            render={renderResult}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    );
}

Menu.prototype = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.bool,
    hideOnClick: PropTypes.func,
};

export default Menu;
