import { forwardRef, useState } from "react";
import images from "~/assets/images";
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

export default forwardRef(Image);
