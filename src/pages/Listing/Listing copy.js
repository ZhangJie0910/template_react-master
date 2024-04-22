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
    get_room_type_product
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

    console.log("useParams", useParams())

    function valuetext(value) {
        return `${value}°C`;
    }

    const [value, setValue] = React.useState([0, 32]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    //Category
    const [categoryData, setCategoryData] = useState(null);

    const [expanded, setExpanded] = React.useState(null);

    const handleChangeCategory = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const [selectedSubCategory, setSelectedSubCategory] = useState(1);

    const getCategory = async () => {
        var resCategory = await get_room_type_category({});
        if (resCategory.status) {
            setCategoryData(resCategory.data)
            setExpanded(resCategory.data[0].room_type_id)
            // setSelectedCategoryData(resCategory.data[0].category)
        }
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

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <React.Fragment>
            <Header />
            <div className={classes.theListing}>

                <div
                    className={classes.theBanner}
                    style={{
                        backgroundImage: "url(" + Banner + ")",
                    }}
                >
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
                                    Living Room
                                </Paragraph>
                                <div style={{ flexGrow: 1, height: 1, backgroundColor: "#fff" }} />
                            </div>
                            <Paragraph
                                size="20px"
                                color="#fff"
                                bold="400"
                                textTransform="uppercase"
                            >
                                a room in a house for general everyday use
                            </Paragraph>
                        </div>
                    </Container>
                </div>
                <div className={classes.theContent}>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={3}>
                                <div className={classes.theFilter}>
                                    <Paragraph
                                        size="14px"
                                        color="#0D0D0D"
                                        bold="bold"
                                        textTransform="uppercase"
                                    >
                                        FILTER BY PRICE
                                    </Paragraph>
                                    <div className={classes.theFSlider}>
                                        <CustomSlider
                                            onChange={handleChange}
                                            getAriaValueText={valuetext}
                                            aria-label="pretto slider"
                                            defaultValue={[0, 40]} />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                        >

                                            Price: <span style={{ fontWeight: "bold", color: "#0D0D0D" }}>RM {(value[0] * 1000).toLocaleString()} - RM {(value[1] * 1000).toLocaleString()}</span>

                                        </Paragraph>
                                    </div>
                                    <div className={classes.theDivider}></div>
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
                                                            {res.category.map((subres) => (
                                                                <div
                                                                    onClick={() => setSelectedSubCategory(subres.id)}
                                                                >
                                                                    <Paragraph
                                                                        size="12px"
                                                                        color={subres.id == selectedSubCategory ? "#0D0D0D" : "#7C7C7C"}
                                                                        bold={subres.id == selectedSubCategory ? "500" : "400"}
                                                                        margin="0 24px 24px"
                                                                    >
                                                                        {subres.category}
                                                                    </Paragraph>
                                                                </div>
                                                            ))}
                                                        </React.Fragment>
                                                        :
                                                        <React.Fragment>
                                                            {res.category.map((subres) => (
                                                                <div
                                                                    onClick={() => setSelectedSubCategory(subres.id)}
                                                                >
                                                                    <Paragraph
                                                                        size="12px"
                                                                        color={subres.id == selectedSubCategory ? "#0D0D0D" : "#7C7C7C"}
                                                                        bold={subres.id == selectedSubCategory ? "500" : "400"}
                                                                        margin="0 24px 24px"
                                                                    >
                                                                        {subres.name}
                                                                    </Paragraph>
                                                                </div>
                                                            ))}
                                                        </React.Fragment>
                                                    }
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                    </div>
                                    <div className={classes.theDivider}></div>
                                    <Paragraph
                                        size="14px"
                                        color="#0D0D0D"
                                        bold="bold"
                                        textTransform="uppercase"
                                        margin="0 0 1.5rem"
                                    >
                                        COLLECTION
                                    </Paragraph>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            Summer
                                        </Paragraph>
                                    </div>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            Europe
                                        </Paragraph>
                                    </div>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            Minimalist
                                        </Paragraph>
                                    </div>
                                    <div className={classes.theDivider}></div>
                                    <Paragraph
                                        size="14px"
                                        color="#0D0D0D"
                                        bold="bold"
                                        textTransform="uppercase"
                                        margin="0 0 1.5rem"
                                    >
                                        Colour
                                    </Paragraph>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            Red
                                        </Paragraph>
                                    </div>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            Orange
                                        </Paragraph>
                                    </div>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            Yellow
                                        </Paragraph>
                                    </div>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            Green
                                        </Paragraph>
                                    </div>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            Blue
                                        </Paragraph>
                                    </div>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            Purple
                                        </Paragraph>
                                    </div>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            Khaki
                                        </Paragraph>
                                    </div>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            Grey
                                        </Paragraph>
                                    </div>
                                    <div className={classes.theFlexCheck}>
                                        <Checkbox
                                            sx={{
                                                '& .MuiSvgIcon-root': { fontSize: 20 },
                                                color: "#707070",
                                                '&.Mui-checked': {
                                                    color: "#707070",
                                                },
                                            }}
                                        // checked={checked}
                                        // onChange={handleChange}
                                        // inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Paragraph
                                            size="12px"
                                            color="#7C7C7C"
                                            bold="400"
                                            margin="2px 0 0 10px"
                                        >
                                            White
                                        </Paragraph>
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
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <Link
                                                to={`../product`}
                                                className={classes.theLCard}>
                                                <div className="ribbon" style={{ background: "#F22F1D" }}>new</div>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product2} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </Link>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className="ribbon" style={{ background: "#F26835" }}>best selling</div>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product1} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product3} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product3} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product2} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product1} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product2} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product1} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product3} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product3} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product2} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product1} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product2} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product1} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={4}>
                                            <div className={classes.theLCard}>
                                                <div className={classes.theLCTop}>
                                                    <div className={classes.theLTImage}>
                                                        <img src={Product3} />
                                                    </div>
                                                    <div className={classes.theColorFlex}>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#B40000" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#957A52" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#543904" }}>
                                                        </div>
                                                        <div className={classes.theColorCard} style={{ backgroundColor: "#8D8D3E" }}>
                                                        </div>
                                                        <Paragraph
                                                            size="12px"
                                                            color="#0D0D0D"
                                                            bold="400"
                                                            textDecoration="underline"
                                                        >
                                                            + 30 more
                                                        </Paragraph>
                                                    </div>
                                                </div>
                                                <div className={classes.theLCBottom}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#0D0D0D"
                                                        bold="500"
                                                        margin="0 0 10px"
                                                    >
                                                        Product Name
                                                    </Paragraph>
                                                    <Paragraph
                                                        size="12px"
                                                        color="#848484"
                                                        bold="400"
                                                        textTransform="uppercase"
                                                    >
                                                        RM 00.00
                                                    </Paragraph>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
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
                                    count={10}
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