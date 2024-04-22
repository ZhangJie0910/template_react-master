import React, {
    useState,
    useEffect,
} from 'react'
import {
    Container,
    Grid,
    Slider,
    styled,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Checkbox,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Pagination,
    TablePagination,
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import Loader from "react-js-loader";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import useStyles from "./styles";
import "./style.css";
import Paragraph from "../../components/Typography/Paragraph";
import Banner from "../../assets/images/listingBanner.png"
import Product1 from "../../assets/images/01.png"
import Product2 from "../../assets/images/02.png"
import Product3 from "../../assets/images/03.png"
import {
    get_room_type_category,
    filter_product
} from "../../api/API"

const CustomSlider = styled(Slider)({
    color: '#15AAA0',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 16,
        width: 5,
        backgroundColor: '#15AAA0',
        borderRadius: 0,
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#15AAA0',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

export default function Listing() {
    const classes = useStyles();

    let RoomTypeId = useParams().room_type_id
    let CategoryId = useParams().category_id

    const [loading, setLoading] = useState(false)

    function valuetext(value) {
        return `${value}°C`;
    }

    const [value, setValue] = React.useState([0, 32]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //Category
    const [categoryData, setCategoryData] = useState(null);

    const [expanded, setExpanded] = React.useState(RoomTypeId);

    const handleChangeCategory = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const [selectedSubCategoryDetail, setSelectedSubCategoryDetail] = useState(null);

    const getCategory = async () => {
        var resCategory = await get_room_type_category({});
        if (resCategory.status) {
            var matchArray = checkMatchArray(resCategory.data)[0]
            setCategoryData(resCategory.data)
            // setExpanded(resCategory.data[0].room_type_id)
            // setSelectedCategoryData(resCategory.data[0].category)
            // firstCategory = resCategory.data.filter(obj => obj.room_type_id === RoomTypeId)
            // console.log(resCategory.data[0], 'resCategory.data[1].sub[0].category_id')
            if (CategoryId == undefined && RoomTypeId == undefined) {
                setExpanded(resCategory.data[0].room_type_id)
                if (resCategory.data[0].category[0].sub == "") {
                    setSelectedSubCategory(resCategory.data[0].category[1].sub[0].category_id)
                    // setSelectedSubCategoryDetail(resCategory.data[0].category[1].sub[0])
                } else {
                    setSelectedSubCategory(resCategory.data[0].category[0].sub[0].category_id)
                    // setSelectedSubCategoryDetail(resCategory.data[0].category[0].sub[0])
                }
            } else if (CategoryId == undefined && RoomTypeId != undefined) {
                if (matchArray.category[0].hasOwnProperty('sub')) {
                    if (matchArray.category[0].sub == "") {
                        setSelectedSubCategory(matchArray.category[1].sub[0].category_id)
                        // setSelectedSubCategoryDetail(matchArray.category[1].sub[0])
                    } else {
                        setSelectedSubCategory(matchArray.category[0].sub[0].category_id)
                        // setSelectedSubCategoryDetail(matchArray.category[0].sub[0])
                    }
                } else {
                    setSelectedSubCategory(matchArray.category[0].category_id)
                    // setSelectedSubCategoryDetail(matchArray.category[0])
                }
            } else {
                setSelectedSubCategory(CategoryId)
            }
        }
    }
    // console.log(selectedSubCategory, 'asd')

    const checkMatchArray = (array) => {
        return array.filter(obj => obj.room_type_id === RoomTypeId)
    }

    useEffect(() => {
        getCategory()
    }, [])

    //Sort
    const [sort, setSort] = React.useState(0);

    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };

    //Pagination
    const [page, setPage] = React.useState(1);
    const [totalCount, setTotalCount] = React.useState(1);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    //Filter Function
    const [productData, setProductData] = useState(null)
    const filterProduct = async () => {
        setLoading(true);
        var resProduct = await filter_product({
            category_id: selectedSubCategory,
            sort: sort,
            page: page
        });
        if (resProduct.status) {
            setProductData(resProduct.data)
            setSelectedSubCategoryDetail(resProduct.category)
            setLoading(false);
            setTotalCount(resProduct.total_count);
        }
    }

    useEffect(() => {
        filterProduct();
    }, [selectedSubCategory, sort, page])

    useEffect(() => {
        setPage(1);
    }, [selectedSubCategory])

    return (
        <React.Fragment>
            <Header />
            <div className={classes.theListing}>
                {selectedSubCategoryDetail != null &&
                    <React.Fragment>
                        <div
                            className={classes.theBanner}
                            style={{
                                backgroundImage: "url(" + selectedSubCategoryDetail.image + ")",
                            }}
                        >
                            <div className={classes.theBannerOVerlay}>
                            </div>
                            <Container>
                                <div className={classes.theText}>
                                    <div className={classes.theHorizontalText}>
                                        <Paragraph
                                            size="95px"
                                            color="#fff"
                                            bold="bold"
                                            textTransform="uppercase"
                                            margin="0 10px 0 0"
                                            style={{ flexGrow: 0 }}
                                        >
                                            {selectedSubCategoryDetail.room_type}
                                        </Paragraph>
                                        <div style={{ flexGrow: 1, height: 1, backgroundColor: "#fff" }} />
                                    </div>
                                    <Paragraph
                                        size="20px"
                                        color="#fff"
                                        bold="400"
                                        textTransform="uppercase"
                                    >
                                        {selectedSubCategoryDetail.label}
                                    </Paragraph>
                                </div>
                            </Container>
                        </div>
                    </React.Fragment>
                }
                <div className={classes.theContent} id="shopsection">
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={3}>
                                <div className={classes.theFilter}>
                                    <Paragraph
                                        size="14px"
                                        color="#0D0D0D"
                                        bold="bold"
                                        textTransform="uppercase"
                                        margin="0 0 1.5rem"
                                    >
                                        CATEGORIES
                                    </Paragraph>
                                    <div className={classes.theCategory}>
                                        {categoryData != null && categoryData.map((res) => (
                                            <Accordion
                                                style={{ boxShadow: "none" }}
                                                expanded={expanded === res.room_type_id} onChange={handleChangeCategory(res.room_type_id)}>
                                                <AccordionSummary aria-controls={res.room_type_id} id={res.room_type_id}>
                                                    <div className={classes.thCLabel}>
                                                        <div className={classes.theCategoryName}>
                                                            <Paragraph
                                                                size="12px"
                                                                color="#7C7C7C"
                                                                bold="400"
                                                                textTransform="capitalize"
                                                            >
                                                                {res.name}
                                                            </Paragraph>
                                                        </div>
                                                        <div className={classes.theCategoryIcon}>
                                                            {expanded === res.room_type_id ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                                                        </div>

                                                    </div>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {res.category.length > 1 && res.category[0].hasOwnProperty('sub') ?
                                                        <React.Fragment>
                                                            {res.category.map((resCategory) => (
                                                                <React.Fragment>
                                                                    {resCategory.sub.length != 0 &&
                                                                        <Paragraph
                                                                            size="12px"
                                                                            color="#7C7C7C"
                                                                            bold="400"
                                                                            margin="0 24px 24px"
                                                                            textTransform="capitalize"
                                                                        >
                                                                            {resCategory.category}
                                                                        </Paragraph>
                                                                    }
                                                                    {resCategory.sub.length != 0 ?
                                                                        <React.Fragment>
                                                                            {resCategory.sub.map((subres) => (
                                                                                <div
                                                                                    style={{ cursor: "pointer" }}
                                                                                    onClick={() => setSelectedSubCategory(subres.category_id)}
                                                                                >
                                                                                    <Paragraph
                                                                                        size="12px"
                                                                                        color={subres.category_id == selectedSubCategory ? "#0D0D0D" : "#7C7C7C"}
                                                                                        bold={subres.category_id == selectedSubCategory ? "500" : "400"}
                                                                                        margin="0 24px 24px 48px"
                                                                                        textTransform="capitalize"
                                                                                    >
                                                                                        {subres.name}
                                                                                    </Paragraph>
                                                                                </div>
                                                                            ))}
                                                                        </React.Fragment>
                                                                        :
                                                                        <React.Fragment>
                                                                            {/* <Paragraph
                                                                                size="12px"
                                                                                color="#D90416"
                                                                                bold="400"
                                                                                margin="0 24px 24px 48px"
                                                                                textTransform="capitalize"
                                                                            >
                                                                                No Category
                                                                            </Paragraph> */}
                                                                        </React.Fragment>
                                                                    }
                                                                </React.Fragment>
                                                            ))}
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            {res.category != "" ?
                                                                <React.Fragment>
                                                                    {res.category.map((subres) => (
                                                                        <div
                                                                            style={{ cursor: "pointer" }}
                                                                            onClick={() => setSelectedSubCategory(subres.category_id)}
                                                                        >
                                                                            <Paragraph
                                                                                size="12px"
                                                                                color={subres.category_id == selectedSubCategory ? "#0D0D0D" : "#7C7C7C"}
                                                                                bold={subres.category_id == selectedSubCategory ? "500" : "400"}
                                                                                margin="0 24px 24px"
                                                                                textTransform="capitalize"
                                                                            >
                                                                                {subres.name}
                                                                            </Paragraph>
                                                                        </div>
                                                                    ))}
                                                                </React.Fragment>
                                                                :
                                                                <Paragraph
                                                                    size="12px"
                                                                    color="#D90416"
                                                                    bold="400"
                                                                    margin="0 24px 24px"
                                                                    textTransform="capitalize"
                                                                >
                                                                    No Category
                                                                </Paragraph>
                                                            }
                                                        </React.Fragment>
                                                    }
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={9}>
                                <div className={classes.theListing}>
                                    <div className={classes.theFlexSort}>
                                        <div className={classes.theSortLabel}>
                                            <Paragraph
                                                size="14px"
                                                color="#7C7C7C"
                                                bold="400"
                                            // margin="2px 0 0 10px"
                                            >
                                                Sort By:
                                            </Paragraph>
                                        </div>
                                        <div className={classes.theSortSelect}>
                                            <FormControl className='theForm'>
                                                <Select
                                                    displayEmpty
                                                    value={sort}
                                                    onChange={handleChangeSort}
                                                >
                                                    <MenuItem value={0}>Latest to Oldest</MenuItem>
                                                    <MenuItem value={1}>Oldest to Latest</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    {loading ?
                                        <div style={{ margin: 'auto' }}>
                                            <Loader type="bubble-loop" bgColor={"#fff"} size={50} />
                                        </div>
                                        :
                                        <Grid container spacing={2}>
                                            {productData != null && productData.map((res) => (
                                                <Grid item xs={12} sm={6} md={4}>
                                                    <Link
                                                        to={`../product/` + res.product_id}
                                                        className={classes.theLCard}>
                                                        {res.is_new == 1 &&
                                                            <div className="ribbon" style={{ background: "#F22F1D" }}>new</div>
                                                        }
                                                        {res.is_bestseller == 1 &&
                                                            <div className="ribbon" style={{ background: "#F26835" }}>best selling</div>
                                                        }
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
                                                    </Link>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    }
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                    <div className={classes.theFullDivider}></div>
                    <Container>
                        <div className={classes.thePagination}>
                            <div className={classes.thePaginationText}>
                                <Paragraph
                                    size="14px"
                                    color="#0D0D0D"
                                    bold="400"
                                    margin="2px 0 0 10px"
                                >
                                    Showing {page > 1 ? (page * 15) - 14 : 1} to {page > 1 ? page * 15 : 15} of 150 (10 pages)
                                </Paragraph>
                            </div>
                            <div>
                                <Pagination
                                    count={totalCount}
                                    variant="outlined"
                                    page={page}
                                    onChange={handleChangePage}
                                />
                            </div>
                        </div>
                    </Container>
                </div>
            </div >
            <Footer />
        </React.Fragment >
    )
}