import React from "react";
import CrossSvg from "../SVG/Cross";
import styles from "./Main.module.css";
import headerImg from "../../assets/Main_Header.png";
import ProductLogo from "../SVG/ProductLogo";
import ProductLogo2 from "../SVG/ProductLogo2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
    const [showTop, setShowTop] = useState(true);
    const Navigate = useNavigate();
    // console.log("isLoggedIn: ", isLoggedIn);
    return (
        <div className={styles.parent}>
            {/* top notification */}
            {showTop && (
                <div className={styles.Main_parent_Notification}>
                    <div></div>
                    <div className={styles.Main_Top_Notification}>
                        Organize all your marketing in one place with marketing
                        calendar software from CoSchedule.
                        <span className={styles.Main_Top_Notification_Span}>
                            Get Started Free
                        </span>
                    </div>
                    <div
                        className={styles.CrossSvg}
                        onClick={() => {
                            setShowTop(false);
                        }}
                    >
                        <CrossSvg />
                    </div>
                </div>
            )}

            {/* main header */}
            <div className={styles.Main_parent_header}>
                <div className={styles.header_h1}>
                    Organize All Of Your Marketing In One Place. From Any Place.
                </div>
                <div className={styles.header_h2}>
                    Get more done in less time with the only work management
                    software for marketers.
                </div>
                <div className={styles.header_btn}>Get Started Free</div>
                <div className={styles.header_h3}>
                    Why not? It's free forever.
                </div>
            </div>

            <div className={styles.Main_parent_header_Img}>
                <img src={headerImg} alt="" />
            </div>

            <div className={styles.Main_parent_header_company}>
                <h1 className={styles.company_headline}>
                    30,000 marketers start their day with CoSchedule
                </h1>
                <div className={styles.company_logos}>
                    <div>
                        <img
                            src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=256&q=75"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=256&q=75"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=256&q=75"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fconvertkit-logo.webp&w=256&q=75"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=256&q=75"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=256&q=75"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=256&q=75"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src="https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=256&q=75"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <h1 className={styles.Main_Products_Headline}>Our Products</h1>
            <div className={styles.Main_Products}>
                <div>
                    <img
                        src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100"
                        alt=""
                    />
                    <div className={styles.Main_Products_subLogo_Wrapper}>
                        <img
                            src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=64&q=75"
                            alt=""
                        />
                    </div>
                    <div className={styles.Main_Products_Content}>
                        <h2>Marketing Callender</h2>
                        <p>
                            A callender that helps you see, schedule and share
                            your marketting
                        </p>
                        <ul
                            style={{
                                listStyle: "square",
                                marginLeft: 40,
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                            }}
                        >
                            <li>See everything together in one place</li>
                            <li>Share your progress with higher-ups</li>
                            <li>Show what your marketing is done</li>
                        </ul>
                        <div
                            className={styles.Products_btn}
                            onClick={() => Navigate("/callender")}
                        >
                            Explore More
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fsuite-product-background.png&w=1920&q=100"
                        alt=""
                    />
                    <div className={styles.Main_Products_subLogo_Wrapper}>
                        <img
                            src="https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=64&q=75"
                            alt=""
                        />
                    </div>
                    <div className={styles.Main_Products_Content}>
                        <h2>Marketing Suite</h2>
                        <p>
                            A family of agile marketing products to coordinate
                            your team, projects and process.
                        </p>
                        <ul
                            style={{
                                listStyle: "square",
                                marginLeft: 40,
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                            }}
                        >
                            <li>Manage marketing requests</li>
                            <li>Eliminate content bottlenecks</li>
                            <li>Maximize resource to increase output</li>
                        </ul>
                        <div
                            className={styles.Products_btn}
                            onClick={() => Navigate("/suite")}
                        >
                            Explore More
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fhs-product-background.png&w=1920&q=100"
                        alt=""
                    />
                    <div className={styles.Main_Products_subLogo_Wrapper}>
                        <ProductLogo />
                    </div>
                    <div className={styles.Main_Products_Content}>
                        <h2>Healine Studio</h2>
                        <p>
                            Write better headlines that will boost your traffic.
                        </p>
                        <ul
                            style={{
                                listStyle: "square",
                                marginLeft: 40,
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                            }}
                        >
                            <li>Score your headlines based on proven data</li>
                            <li>Improve headlines and smart suggestions</li>
                            <li>Find the high-scoring words instantly</li>
                        </ul>
                        <div
                            className={styles.Products_btn}
                            onClick={() => Navigate("/headline")}
                        >
                            Explore More
                        </div>
                    </div>
                </div>
                <div>
                    <img
                        src="https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fami-product-background.png&w=1920&q=100"
                        alt=""
                    />
                    <div className={styles.Main_Products_subLogo_Wrapper}>
                        <ProductLogo2 />
                    </div>
                    <div className={styles.Main_Products_Content}>
                        <h2>Actionable Marketing Institue</h2>
                        <p>
                            Develop new marketing skills in 30 minutes (or
                            less).
                        </p>
                        <ul
                            style={{
                                listStyle: "square",
                                marginLeft: 40,
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                            }}
                        >
                            <li>
                                Improve your marketing with fluff-free training
                            </li>
                            <li>Spend less time learning & more time doing</li>
                            <li>Learn from industry pros and trust</li>
                        </ul>
                        <div
                            className={styles.Products_btn}
                            onClick={() =>
                                Navigate("/ActionableInstitute")
                            }
                        >
                            Explore More
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
