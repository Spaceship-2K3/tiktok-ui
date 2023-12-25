import { forwardRef, useState } from "react";
import images from "~/assets/images";
import PropTypes from "prop-types";

import styles from "./Image.module.scss";
import classNames from "classnames";
function Image(
    {
        src,
        className,
        alt,
        fallback: customFallback = images.noImage,
        ...props
    },
    ref
) {
    const [fallback, setFallback] = useState("");
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
            className={classNames(styles.wrapper, className)}
        />
    );
}

Image.prototype = {
    src: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default forwardRef(Image);
