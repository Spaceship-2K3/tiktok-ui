import MenuItem from "./MenuItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import React, { useEffect, useState, forwardRef, Children } from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import Header from "./Header";

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
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
    return (
        <Tippy
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-popper")}>
                        {/*   xu li khi mang k phai la phan tu dau tien thi xoa phan tu thu 2 roi back ve */}
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    setHistory((prev) =>
                                        prev.slice(0, prev.length - 1)
                                    );
                                }}
                            />
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
