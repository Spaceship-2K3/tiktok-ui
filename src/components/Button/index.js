import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

// ! Do nhiều lúc cái nút có thể là 1 thẻ a or 1 định tuyến(router)
function Button({
    to,
    href,
    children,
    primary,
    onClick,
    outline = false,
    large = false,
    small = false,
    text = false,
    disabled = false,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Component = "button";

    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = "a";
    }
    // todo : Remove even listener when disabled
    else if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    const classes = cx("wrapper", {
        primary, // add them primary vao cai nut
        outline,
        text,
        small,
        disabled,
        large,
        rounded,
        [className]: className,
    });
    return (
        <Component className={classes} {...props} {...passProps}>
            {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
            <span className={cx("title")}>{children}</span>
            {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
