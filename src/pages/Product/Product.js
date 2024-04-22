import React, {
    useState,
    useEffect,
} from 'react'
import {
    Container,
    Grid,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "react-js-loader";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import useStyles from "./styles";
import "./style.css";
import Paragraph from "../../components/Typography/Paragraph";
import Slider from "react-slick";
import { ClassNames } from '@emotion/react';
import Product1 from "../../assets/images/01.png"
import Product2 from "../../assets/images/02.png"
import Product3 from "../../assets/images/03.png"
import linecategory from "../../assets/images/linecategory.svg";
import {
    get_product_detail
} from "../../api/API"


export default function Product() {
    const classes = useStyles();
    const navigate = useNavigate();

    let ProductId = useParams().product_id

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const [expanded, setExpanded] = useState('overview');

    const handleChangeCategory = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    const settingsItems = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
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

    const [loading, setLoading] = useState(false)
    const [productData, setProductData] = useState(null)
    const [infiniteStatus, setInfiniteStatus] = useState(true)

    const getDetail = async () => {
        setLoading(true);
        var resProduct = await get_product_detail({
            product_id: ProductId,
        });
        if (resProduct.status) {
            setProductData(resProduct.data[0])
            if (resProduct.data[0].images.length < 5) {
                setInfiniteStatus(false);
            } else {
                setInfiniteStatus(true);
            }
            setLoading(false);
        }
    }

    useEffect(() => {
        getDetail();
    }, [ProductId])

    return (
        <React.Fragment>
            {loading ?
                <div style={{ margin: 'auto' }} >
                    <Loader type="bubble-loop" bgColor={"#fff"} size={50} />
                </div >
                :
                <React.Fragment>
                    <Header />
                    <div className={classes.theProduct}>
                        <div className={classes.theProductDetail}>
                            {productData != null &&
                                <Container>
                                    <div className={classes.theFlex}>
                                        <div className={classes.theImageSlider}>
                                            <div className={classes.theImageView}>
                                                <Slider
                                                    asNavFor={nav2}
                                                    ref={(slider1) => setNav1(slider1)}
                                                >
                                                    {productData.images.map((res) => (
                                                        <div>
                                                            <div className={classes.theImageBig}>
                                                                <img src={res.product_image} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                            <div>
                                                <Slider
                                                    asNavFor={nav1}
                                                    ref={(slider2) => setNav2(slider2)}
                                                    slidesToShow={4}
                                                    swipeToSlide={true}
                                                    focusOnSelect={true}
                                                    infinite={infiniteStatus}
                                                // className={classes.theTransform}
                                                >
                                                    {productData.images.map((res) => (
                                                        <div>
                                                            <div className={classes.theImageSmall}>
                                                                <img src={res.product_image} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </Slider>
                                            </div>
                                        </div>
                                        <div className={classes.theContent}>
                                            <Paragraph
                                                size="24px"
                                                color="#15AAA0"
                                                bold="bold"
                                                // margin="0 0 10px"
                                                margin="0 0 2rem"
                                            >
                                                {productData.name}
                                            </Paragraph>
                                            {/* <Paragraph
                                                size="18px"
                                                color="#848484"
                                                bold="400"
                                                textTransform="uppercase"
                                                margin="0 0 2rem"
                                            >
                                                RM 00.00
                                            </Paragraph> */}
                                            <Accordion
                                                style={{ boxShadow: "none" }}
                                                expanded={expanded === 'overview'} onChange={handleChangeCategory('overview')}>
                                                <AccordionSummary aria-controls={'overview'} id='overview'>
                                                    <div
                                                        className={classes.thCLabel}
                                                        style={{
                                                            borderBottom: "1px solid #0D0D0D"
                                                        }}
                                                    >
                                                        <div className={classes.theCategoryIcon}>
                                                            {expanded === 'overview' ? <RemoveIcon fontSize="14px" /> : <AddIcon fontSize="14px" />}
                                                        </div>
                                                        <div className={classes.theCategoryName}>
                                                            <Paragraph
                                                                size="14px"
                                                                color="#7C7C7C"
                                                                bold="500"
                                                            >
                                                                Overview
                                                            </Paragraph>
                                                        </div>

                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: productData.overview,
                                                        }}
                                                    />
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion
                                                style={{ boxShadow: "none" }}
                                                expanded={expanded === 'dimension'} onChange={handleChangeCategory('dimension')}>
                                                <AccordionSummary aria-controls={'dimension'} id='dimension'>
                                                    <div
                                                        className={classes.thCLabel}
                                                        style={{
                                                            borderBottom: "0px solid #0D0D0D"
                                                        }}
                                                    >
                                                        <div className={classes.theCategoryIcon}>
                                                            {expanded === 'dimension' ? <RemoveIcon fontSize="14px" /> : <AddIcon fontSize="14px" />}
                                                        </div>
                                                        <div className={classes.theCategoryName}>
                                                            <Paragraph
                                                                size="14px"
                                                                color="#7C7C7C"
                                                                bold="500"
                                                            >
                                                                Dimensions
                                                            </Paragraph>
                                                        </div>

                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: productData.dimension,
                                                        }}
                                                    />
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    </div>
                                </Container>
                            }

                            <div className={classes.theMarginBig} />

                            <div className={classes.theCategorySectionTwo}>
                                <Container>
                                    <div className={classes.theCategoryOne}>
                                        <div className={classes.theCategoryTitle}>
                                            <Paragraph size="20px" color="#000000" bold="500">
                                                RELATED PRODUCT
                                            </Paragraph>
                                        </div>
                                        <div className={classes.theCategoryBorder}>
                                            <img src={linecategory} />
                                        </div>
                                    </div>

                                    <div className={classes.theMarginMedium} />

                                    <Slider {...settingsItems}>

                                        {productData != null && productData.related_product.map((res) => (
                                            <div
                                                onClick={() => navigate("../product/" + res.product_id)}
                                                className={classes.theLCard}
                                            >
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
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </Container>
                            </div>

                        </div>
                    </div >
                    <Footer />
                </React.Fragment >
            }
        </React.Fragment >

    )
}