/* eslint-disable no-lone-blocks */
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import DefaultLayout from "~/layouts/DefaultLayout";
function App() {
    return (
        <Router>
            <div className="App">
                {" "}
                <Routes>
                    {/* 
                        ⁡⁢⁣⁣Đây là cho những trang mà ít phải điều hướng sang các trang khác 
                        VD : http://localhost:3000/following⁡
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/following" element={<Following />}></Route> 
                    */}

                    {/* ⁡⁢⁣⁣Đây là cho những trang mà nần nhiều điều hướng sang các trang khác⁡ */}
                    {publicRoutes.map((route, index) => {
                        {
                            /* ⁡⁢⁣⁢Component muon dung trong JSX phai viet hoa⁡ */
                        }

                        {
                            /* Neu khong co layout dc setting mac dinh se lay default layout */
                        }
                        const Page = route.component;
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
