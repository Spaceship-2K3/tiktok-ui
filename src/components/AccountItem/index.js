import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Image";
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <Image
                src="https://i.pinimg.com/736x/4f/60/3b/4f603b6bcbfbeca9e93f01a57c041c86.jpg"
                alt="Hoa"
                className={cx("avatar")}
            />
            <div className={cx("info")}>
                <h4 className={cx("name")}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx("check-icon")}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx("username")}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
