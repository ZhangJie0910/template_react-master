import React, {
    useEffect,
    useState
} from 'react'
import {
    Container,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Slider from "react-slick";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import Loader from "react-js-loader";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Paragraph from "../../components/Typography/Paragraph";
import Button from "../../components/Button/Button";
import useStyles from "./styles";
import Banner001 from "../../assets/images/banner001.png"
import Category1 from "../../assets/images/category1.png"
import Category2 from "../../assets/images/category2.png"
import Category3 from "../../assets/images/category3.png"
import Category4 from "../../assets/images/category4.png"
import Product1 from "../../assets/images/01.png"
import Product2 from "../../assets/images/02.png"
import Product3 from "../../assets/images/03.png"
import HomeAbout from "../../assets/images/home_about.png"
import ProductServices from "../../assets/images/product_services.svg"
import LowestCosting from "../../assets/images/lowest_costing.svg"
import CustomerServices from "../../assets/images/customer_services.svg"
import FreeInstallation from "../../assets/images/free_installation.svg"
import ValueQuality from "../../assets/images/value_quality.svg"
import FastDelivery from "../../assets/images/fast_delivery.svg"
import {
    get_banner,
    get_homepage_room_type,
    get_new_product,
    get_bestselling_product,
    get_about_us
} from "../../api/API"

export default function Home() {
    const classes = useStyles();
    const navigate = useNavigate();

    const [banner, setBanner] = useState(null)
    const [category, setCategory] = useState(null)
    const [newProduct, setNewProduct] = useState(null)
    const [infiniteNewProductStatus, setInfiniteNewProductStatus] = useState(true)
    const [infiniteBestProductStatus, setInfiniteBestProductStatus] = useState(true)
    const [bestProduct, setBestProduct] = useState(null)
    const [aboutData, setAboutData] = useState(null)
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        setLoading(true);
        var resBanner = await get_banner({ page: "Home" });
        if (resBanner.status) {
            setBanner(resBanner.data[0].banner_image)
            setLoading(false);
        }

        var resCategory = await get_homepage_room_type({});
        if (resCategory.status) {
            setCategory(resCategory.data)
            setLoading(false);
        }

        var resNewProduct = await get_new_product({});
        if (resNewProduct.status) {
            setNewProduct(resNewProduct.data)
            setLoading(false);
            if (resNewProduct.data.length < 5) {
                setInfiniteNewProductStatus(false);
            } else {
                setInfiniteNewProductStatus(true);
            }
        }

        var resBestProduct = await get_bestselling_product({});
        if (resBestProduct.status) {
            setBestProduct(resBestProduct.data);
            setLoading(false);
            if (resBestProduct.data.length < 5) {
                setInfiniteBestProductStatus(false);
            } else {
                setInfiniteBestProductStatus(true);
            }
        }
        var resAbout = await get_about_us({});
        if (resAbout.status) {
            setAboutData(resAbout.data);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])


    const settings = {
        dots: false,
        infinite: infiniteNewProductStatus,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const settingstwo = {
        dots: false,
        infinite: infiniteBestProductStatus,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <React.Fragment>
            {loading ?
                <div style={{ margin: 'auto' }}>
                    <Loader type="bubble-loop" bgColor={"#fff"} size={50} />
                </div>
                :
                <React.Fragment>
                    <Header />
                    <div className={classes.theBanner}>
                        <div className={classes.theBannerIMG}>
                            <img src={banner} />
                        </div>
                        <div className={classes.theBannerOVerlay}>
                            <Paragraph
                                color="#000"
                                bold="bold"
                                margin="0 0 10px"
                                center
                                className={classes.theBTitle}
                            >
                                Make Your Interior More
                            </Paragraph>
                            <Paragraph
                                color="#000"
                                bold="bold"
                                center
                                className={classes.theBTitle}
                            >
                                Minimalistic & Modern
                            </Paragraph>
                            <div className={classes.theBDivider}></div>
                            <Paragraph
                                size="14px"
                                color="#000"
                                bold="400"
                                center
                            >
                                Turn your room with panto into a lot more minimalist
                            </Paragraph>
                            <Paragraph
                                size="14px"
                                color="#000"
                                bold="400"
                                center
                            >
                                and modern with ease and speed
                            </Paragraph>

                            <div className={classes.theBButton}>
                                <Button
                                    onClick={() => navigate("../listing")}
                                    label="EXPLORE NOW"
                                    color="#fff"
                                    bg="#0D0D0D"
                                    size="18px"
                                    bold="400"
                                    pd="0.5rem 1.5rem"
                                />
                            </div>
                        </div>
                    </div>
                    <Container maxWidth="xl">
                        <div className={classes.theCategory}>
                            {category != null &&
                                <div
                                    className={classes.theCategory1}
                                    onClick={() => navigate("../listing/" + category[0].room_type_id)}
                                >
                                    <div className={classes.theC1Left}>
                                        <div className={classes.theC1LTop}>
                                            <Paragraph
                                                size="32px"
                                                color="#707070"
                                                bold="500"
                                                center
                                                textTransform="uppercase"
                                            >
                                                Elegance Comfort,
                                            </Paragraph>
                                            <Paragraph
                                                size="32px"
                                                color="#707070"
                                                bold="500"
                                                center
                                                textTransform="uppercase"
                                            >
                                                Great Furniture
                                            </Paragraph>
                                        </div>
                                        <div className={classes.theC1LBottom}>
                                            <div className={classes.theC1LBText}>
                                                <Paragraph
                                                    size="20px"
                                                    color="#15AAA0"
                                                    bold="500"
                                                    textTransform="capitalize"
                                                >
                                                    Everything for your {category[0].name}
                                                </Paragraph>
                                            </div>
                                            <ArrowRightAltIcon style={{ color: "#15AAA0" }} />
                                        </div>
                                    </div>
                                    <div className={classes.theC1Right}>
                                        <div className={classes.theC1RImg}>
                                            <img src={category[0].room_type_image} />
                                        </div>
                                    </div>
                                </div>
                            }
                            {category != null &&
                                <div className={classes.theCategoryFlex}>
                                    <div className={classes.theCategory2}
                                        onClick={() => navigate("../listing/" + category[1].room_type_id)}
                                    >
                                        <div className={classes.theC2Top}>
                                            <div className={classes.theC2TImg}>
                                                <img src={category[1].room_type_image} />
                                            </div>

                                            <div className={classes.theC2TText}>
                                                <Paragraph
                                                    size="32px"
                                                    color="#707070"
                                                    bold="600"
                                                    center
                                                    textTransform="uppercase"
                                                    margin="2rem 0"
                                                >
                                                    Making homes impressive
                                                </Paragraph>
                                            </div>
                                        </div>
                                        <div className={classes.theC2Bottom}>
                                            <div className={classes.theC2BText}>
                                                <Paragraph
                                                    size="20px"
                                                    color="#15AAA0"
                                                    bold="500"
                                                >
                                                    Explore {category[1].name}
                                                </Paragraph>
                                            </div>
                                            <ArrowRightAltIcon style={{ color: "#15AAA0" }} />
                                        </div>
                                    </div>
                                    <div className={classes.theCategory2}
                                        onClick={() => navigate("../listing/" + category[2].room_type_id)}
                                    >
                                        <div className={classes.theC2Top}>
                                            <div className={classes.theC2TImg}>
                                                <img src={category[2].room_type_image} />
                                            </div>

                                            <div className={classes.theC2TText}>
                                                <Paragraph
                                                    size="32px"
                                                    color="#707070"
                                                    bold="600"
                                                    center
                                                    textTransform="uppercase"
                                                    margin="2rem 0"
                                                >
                                                    Sleep in comfort
                                                </Paragraph>
                                            </div>
                                        </div>
                                        <div className={classes.theC2Bottom}>
                                            <div className={classes.theC2BText}>
                                                <Paragraph
                                                    size="20px"
                                                    color="#15AAA0"
                                                    bold="500"
                                                >
                                                    Explore {category[2].name}
                                                </Paragraph>
                                            </div>
                                            <ArrowRightAltIcon style={{ color: "#15AAA0" }} />
                                        </div>
                                    </div>
                                </div>
                            }
                            {category != null &&
                                <div className={classes.theCategory3}
                                    onClick={() => navigate("../listing/" + category[3].room_type_id)}
                                >
                                    <div className={classes.theC3Left}>
                                        <div className={classes.theC3LImg}>
                                            <img src={category[3].room_type_image} />
                                        </div>
                                    </div>
                                    <div className={classes.theC3Right}>
                                        <Paragraph
                                            size="32px"
                                            color="#15AAA0"
                                            bold="500"
                                        >
                                            Shop By {category[3].name}
                                        </Paragraph>
                                        <ArrowRightAltIcon style={{ color: "#15AAA0" }} />
                                    </div>
                                </div>
                            }
                        </div>
                        <div className={classes.theProduct}>

                            <div className={classes.thePTitle}>
                                <Paragraph
                                    size="20px"
                                    color="#000"
                                    bold="bold"
                                    center
                                    textTransform="uppercase"
                                >
                                    new & Now
                                </Paragraph>
                            </div>
                            {/* <Paragraph
                                size="18px"
                                color="#15AAA0"
                                bold="400"
                                center
                                margin="0 0 2rem"
                            >
                                view all &#62;&#62;
                            </Paragraph> */}
                            <div className={classes.thePList}>
                                <Slider {...settings}>
                                    {newProduct != null && newProduct.map((res) => (
                                        <div>
                                            <div
                                                onClick={() => navigate("../product/" + res.product_id)}
                                                className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={res.product_image} />
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        {res.name}
                                                    </Paragraph>
                                                    {/* <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <div className={classes.theProduct}>

                            <div className={classes.thePTitle}>
                                <Paragraph
                                    size="20px"
                                    color="#000"
                                    bold="bold"
                                    center
                                    textTransform="uppercase"
                                >
                                    Best Selling
                                </Paragraph>
                            </div>
                            {/* <Paragraph
                                size="18px"
                                color="#15AAA0"
                                bold="400"
                                center
                                margin="0 0 2rem"
                            >
                                view all &#62;&#62;
                            </Paragraph> */}
                            <div className={classes.thePList}>
                                <Slider {...settingstwo}>

                                    {bestProduct != null && bestProduct.map((res) => (
                                        <div>
                                            <div
                                                onClick={() => navigate("../product/" + res.product_id)}
                                                className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={res.product_image} />
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        {res.name}
                                                    </Paragraph>
                                                    {/* <Paragraph
                                                    size="12px"
                                                    color="#848484"
                                                    bold="400"
                                                    textTransform="uppercase"
                                                >
                                                    RM 00.00
                                                </Paragraph> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </Container>
                    <div className={classes.theServices}>
                        <Container>
                            <div className={classes.theSFlexStart}>
                                <div className={classes.theFBox}>
                                    <div className={classes.theServiceIcon}>
                                        <img src={ProductServices} />
                                    </div>
                                    <Paragraph
                                        size="14px"
                                        color="#fff"
                                        bold="400"
                                        center
                                        textTransform="uppercase"
                                    >
                                        product services
                                    </Paragraph>
                                </div>
                                <div className={classes.theFBox}>
                                    <div className={classes.theServiceIcon}>
                                        <img src={LowestCosting} />
                                    </div>
                                    <Paragraph
                                        size="14px"
                                        color="#fff"
                                        bold="400"
                                        center
                                        textTransform="uppercase"
                                    >
                                        lowest costing
                                    </Paragraph>
                                </div>
                                <div className={classes.theFBox}>
                                    <div className={classes.theServiceIcon}>
                                        <img src={CustomerServices} />
                                    </div>
                                    <Paragraph
                                        size="14px"
                                        color="#fff"
                                        bold="400"
                                        center
                                        textTransform="uppercase"
                                    >
                                        customer services
                                    </Paragraph>
                                </div>
                            </div>
                            <div className={classes.theSFlexEnd}>
                                <div className={classes.theFBox}>
                                    <div className={classes.theServiceIcon}>
                                        <img src={FreeInstallation} />
                                    </div>
                                    <Paragraph
                                        size="14px"
                                        color="#fff"
                                        bold="400"
                                        center
                                        textTransform="uppercase"
                                    >
                                        free installation
                                    </Paragraph>
                                </div>
                                <div className={classes.theFBox}>
                                    <div className={classes.theServiceIcon}>
                                        <img src={ValueQuality} />
                                    </div>
                                    <Paragraph
                                        size="14px"
                                        color="#fff"
                                        bold="400"
                                        center
                                        textTransform="uppercase"
                                    >
                                        value & quality
                                    </Paragraph>
                                </div>
                                <div className={classes.theFBox}>
                                    <div className={classes.theServiceIcon}>
                                        <img src={FastDelivery} />
                                    </div>
                                    <Paragraph
                                        size="14px"
                                        color="#fff"
                                        bold="400"
                                        center
                                        textTransform="uppercase"
                                    >
                                        fast & Speed Delivery
                                    </Paragraph>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <div className={classes.theAbout}>
                        <div
                            className={classes.theAImg}
                            style={{
                                backgroundImage: "url(" + HomeAbout + ")",
                            }}
                        >
                            <Container>
                                <div className={classes.theAContent}>
                                    <Paragraph
                                        size="32px"
                                        color="#000"
                                        bold="bold"
                                        center
                                        textTransform="uppercase"
                                        margin="0 0 2rem"
                                    >
                                        About Homiest living sdn bhd
                                    </Paragraph>

                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: aboutData != null && aboutData.stories,
                                        }}
                                    />

                                    <div className={classes.theAButton}>
                                        <Button
                                            onClick={() => navigate("../about")}
                                            label="LEARN MORE"
                                            color="#fff"
                                            bg="#0D0D0D"
                                            size="18px"
                                            bold="400"
                                            pd="0.5rem 1.5rem"
                                        />
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <Footer />
                </React.Fragment>
            }
        </React.Fragment >
    )
}