import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={images.logo.default} alt="Tiktok" />
                </div>

                <div className={cx("search")}>
                    <input
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                    />
                    <button className={cx("clear")}>
                        {/* Clear */}
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    {/* Loading */}
                    <FontAwesomeIcon
                        className={cx("loading")}
                        icon={faSpinner}
                    />

                    <button className={cx("search-btn")}>
                        {/* Search */}
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx("actions")}></div>
            </div>
        </header>
    );
}
export default Header;
