import { HeaderOnly } from "~/layouts";
import Home from "~/pages/Home";
import Following from "~/pages/Following";
import Profile from "~/pages/Profile";
import Upload from "~/pages/Upload";
import Search from "~/pages/Search";
import config from "~/config";
import Live from "~/pages/Live";

// ! Public Routes
// todo : Không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.nickname, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

// ! Private Routes
// todo : Bắt buộc  cần đăng nhập vẫn xem được
const privateRoutes = [];
export { publicRoutes, privateRoutes };
