import React, {
    useState,
    useEffect,
} from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    Button,
    IconButton,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Container,
    Grid,
} from "@mui/material";
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Paragraph from "../../components/Typography/Paragraph";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Logo from "../../assets/images/logo.png"
import useStyles from "./styles";
import {
    get_room_type_category
} from "../../api/API"

const drawerWidth = "100%";
const navItems = ['Home', 'About', 'Contact'];

export default function Header(props) {
    const classes = useStyles();
    const location = useLocation();

    // console.log(location.pathname.replace(/[^A-Za-z]+/g, ''))

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // Dropdown Nav
    const [shopNav, setShopNav] = useState(false);

    const handleShopNav = () => {
        setShopNav(!shopNav);
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    //Shop Data
    const [shopData, setShopData] = useState(null)

    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedCategoryData, setSelectedCategoryData] = useState(null)

    const getData = async () => {
        var resCategory = await get_room_type_category({});
        if (resCategory.status) {
            setShopData(resCategory.data)
            setSelectedCategory(resCategory.data[0].room_type_id)
            setSelectedCategoryData(resCategory.data[0].category)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <React.Fragment>
            <div className={classes.theNavBar}>
                {/* <AppBar component="nav">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </AppBar> */}
                <Container>
                    <div className={classes.theNBTop}>
                        <div className={classes.theLogo}>
                            <img src={Logo} />
                        </div>
                        <div className={classes.theNBMenu}>
                            <div
                                className={classes.theNBBIcon}
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon style={{ color: "#15AAA0" }} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.theNBDivider}></div>
                    <div className={classes.theNBBottom}>
                        <Link to="/" className={classes.theLink}>
                            <Paragraph
                                size="16px"
                                color={location.pathname.replace(/[^A-Za-z]+/g, '') == '' ? "#15AAA0" : "#0D0D0D"}
                                bold={location.pathname.replace(/[^A-Za-z]+/g, '') == '' ? "bold" : "normal"}
                                textTransform="uppercase"
                                margin="0 1.5rem"
                                style={{}}>
                                Home
                            </Paragraph>
                        </Link>
                        {location.pathname.replace(/[^A-Za-z]+/g, '') != 'listing' ?
                            <div onClick={() => handleShopNav()} className={classes.theLink}>
                                <Paragraph
                                    size="16px"
                                    color={location.pathname.replace(/[^A-Za-z]+/g, '') == 'listing' || location.pathname.replace(/[^A-Za-z]+/g, '') == 'product' ? "#15AAA0" : "#0D0D0D"}
                                    bold={location.pathname.replace(/[^A-Za-z]+/g, '') == 'listing' || location.pathname.replace(/[^A-Za-z]+/g, '') == 'product' ? "bold" : "normal"}
                                    textTransform="uppercase"
                                    margin="0 1.5rem"
                                    style={{}}>
                                    SHOP
                                </Paragraph>
                            </div>
                            :
                            <Link to={location.pathname + "#shopsection"}
                                className={classes.theLink}
                            >
                                <Paragraph
                                    size="16px"
                                    color={location.pathname.replace(/[^A-Za-z]+/g, '') == 'listing' || location.pathname.replace(/[^A-Za-z]+/g, '') == 'product' ? "#15AAA0" : "#0D0D0D"}
                                    bold={location.pathname.replace(/[^A-Za-z]+/g, '') == 'listing' || location.pathname.replace(/[^A-Za-z]+/g, '') == 'product' ? "bold" : "normal"}
                                    textTransform="uppercase"
                                    margin="0 1.5rem"
                                    style={{}}>
                                    SHOP
                                </Paragraph>
                            </Link>
                        }
                        <Link to="/about" className={classes.theLink}>
                            <Paragraph
                                size="16px"
                                color={location.pathname.replace(/[^A-Za-z]+/g, '') == 'about' ? "#15AAA0" : "#0D0D0D"}
                                bold={location.pathname.replace(/[^A-Za-z]+/g, '') == 'about' ? "bold" : "normal"}
                                textTransform="uppercase"
                                margin="0 1.5rem"
                                style={{}}>
                                About
                            </Paragraph>
                        </Link>
                        {/* <Link to="/" className={classes.theLink}>
                            <Paragraph
                                size="16px"
                                color="#D90416"
                                bold="bold"
                                textTransform="uppercase"
                                margin="0 1.5rem"
                                style={{}}>
                                SALE %
                            </Paragraph>
                        </Link> */}
                        <Link to="/contact" className={classes.theLink}>
                            <Paragraph
                                size="16px"
                                color={location.pathname.replace(/[^A-Za-z]+/g, '') == 'contact' ? "#15AAA0" : "#0D0D0D"}
                                bold={location.pathname.replace(/[^A-Za-z]+/g, '') == 'contact' ? "bold" : "normal"}
                                textTransform="uppercase"
                                margin="0 1.5rem"
                                style={{}}>
                                Contact
                            </Paragraph>
                        </Link>
                    </div>
                </Container>
                <div className={shopNav == true ? classes.theShopNav : classes.theShopNavHide}>
                    <div className={classes.theSNContent}>
                        <div className={classes.theSNCFlexStartBetween}>
                            <div className={classes.theSNCLeft}>
                                {shopData != null && shopData.map((res) => (
                                    <div
                                        className={classes.theSNCFlex}
                                        onClick={() => { setSelectedCategory(res.room_type_id); setSelectedCategoryData(res.category) }}
                                    >
                                        <Paragraph
                                            size="14px"
                                            color={selectedCategory == res.room_type_id ? "#15AAA0" : "#848484"}
                                            bold="normal"
                                            textTransform="uppercase"
                                            style={{}}>
                                            {res.name}
                                        </Paragraph>
                                        {res.category != "" &&
                                            <ChevronRightIcon style={{ color: selectedCategory == res.room_type_id ? "#15AAA0" : "#848484" }} />
                                        }
                                    </div>
                                ))}
                            </div>
                            {selectedCategoryData == "" ?
                                <div className={classes.theSNCRight}>
                                    <Paragraph
                                        size="14px"
                                        color="#D90416"
                                        bold="normal"
                                        textTransform="uppercase"
                                        style={{}}>
                                        No Category
                                    </Paragraph>
                                </div>
                                :
                                <div className={classes.theSNCRight}>
                                    <Grid container spacing={3}>
                                        {selectedCategoryData != null && selectedCategoryData[0].hasOwnProperty('sub') ?
                                            <React.Fragment>
                                                {selectedCategoryData != null && selectedCategoryData.map((res) => (

                                                    <Grid item xs={12} sm={2} md={2}>
                                                        {res.hasOwnProperty('category') &&
                                                            <Paragraph
                                                                size="14px"
                                                                color="#15AAA0"
                                                                bold="normal"
                                                                textTransform="capitalize"
                                                                margin="0 0 1rem"
                                                            >
                                                                {res.category}
                                                            </Paragraph>
                                                        }
                                                        {res.hasOwnProperty('sub') &&
                                                            <React.Fragment>
                                                                {res.sub != "" ?
                                                                    <React.Fragment>
                                                                        {res.sub.map((resP) => (
                                                                            <Link to={"/listing/" + selectedCategory + '/' + resP.category_id}
                                                                                style={{ textDecoration: "none" }}>
                                                                                <Paragraph
                                                                                    size="14px"
                                                                                    color="#000"
                                                                                    bold="normal"
                                                                                    textTransform="capitalize"
                                                                                    margin="0 0 1rem"
                                                                                    textDecoration="none"
                                                                                >
                                                                                    {resP.name}
                                                                                </Paragraph>
                                                                            </Link>
                                                                        ))}
                                                                    </React.Fragment>
                                                                    :
                                                                    <Paragraph
                                                                        size="14px"
                                                                        color="#D90416"
                                                                        bold="normal"
                                                                        textTransform="capitalize"
                                                                        margin="0 0 1rem"
                                                                    >
                                                                        No Category
                                                                    </Paragraph>

                                                                }
                                                            </React.Fragment>
                                                        }
                                                    </Grid>
                                                ))}
                                            </React.Fragment>
                                            :
                                            <Grid item xs={12} sm={2} md={2}>
                                                <Paragraph
                                                    size="14px"
                                                    color="#15AAA0"
                                                    bold="normal"
                                                    textTransform="capitalize"
                                                    margin="0 0 1rem"
                                                >
                                                    All
                                                </Paragraph>
                                                {selectedCategoryData != null && selectedCategoryData.map((res) => (
                                                    <Link
                                                        to={"/listing/" + selectedCategory + '/' + res.category_id}
                                                        style={{ textDecoration: "none" }}
                                                    >
                                                        <Paragraph
                                                            size="14px"
                                                            color="#000"
                                                            bold="normal"
                                                            textTransform="capitalize"
                                                            margin="0 0 1rem"
                                                            textDecoration="none"
                                                        >
                                                            {res.name}
                                                        </Paragraph>
                                                    </Link>
                                                ))}
                                            </Grid>
                                        }
                                    </Grid>
                                </div>
                            }
                        </div>

                        <Link to="/listing">
                            <Paragraph
                                size="14px"
                                color="#15AAA0"
                                bold="normal"
                                textTransform="uppercase"
                                margin="0 0 1rem"
                                textDecoration="underline"
                                center
                            >
                                explore all &gt;
                            </Paragraph>
                        </Link>
                    </div>
                </div>

                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        <Box sx={{ textAlign: 'center' }}>
                            <Container>
                                <div className={classes.theNBTopMob}>
                                    <div className={classes.theLogo}>
                                        <img src={Logo} />
                                    </div>
                                    <div className={classes.theNBMenu}>
                                        <div
                                            className={classes.theNBBIcon}
                                            onClick={handleDrawerToggle}
                                        >
                                            <CloseIcon style={{ color: "#15AAA0" }} />
                                        </div>
                                    </div>
                                </div>
                            </Container>
                            <div className={classes.theNBDividerMob}></div>
                            <div className={classes.theNBBottomMob}>
                                <Link to="/" className={classes.theLink}>
                                    <Paragraph
                                        size="16px"
                                        color={location.pathname.replace(/[^A-Za-z]+/g, '') == '' ? "#15AAA0" : "#0D0D0D"}
                                        bold={location.pathname.replace(/[^A-Za-z]+/g, '') == '' ? "bold" : "normal"}
                                        textTransform="uppercase"
                                        margin="1rem 0"
                                        style={{}}>
                                        Home
                                    </Paragraph>
                                </Link>
                                <div onClick={() => location.pathname.replace(/[^A-Za-z]+/g, '') != 'listing' ? handleShopNav() : handleDrawerToggle()} className={classes.theLink}>
                                    <Paragraph
                                        size="16px"
                                        color={location.pathname.replace(/[^A-Za-z]+/g, '') == 'listing' || location.pathname.replace(/[^A-Za-z]+/g, '') == 'product' ? "#15AAA0" : "#0D0D0D"}
                                        bold={location.pathname.replace(/[^A-Za-z]+/g, '') == 'listing' || location.pathname.replace(/[^A-Za-z]+/g, '') == 'product' ? "bold" : "normal"}
                                        textTransform="uppercase"
                                        margin="1rem 0"
                                        style={{}}>
                                        SHOP
                                    </Paragraph>
                                </div>
                                <Link to="/about" className={classes.theLink}>
                                    <Paragraph
                                        color={location.pathname.replace(/[^A-Za-z]+/g, '') == 'about' ? "#15AAA0" : "#0D0D0D"}
                                        bold={location.pathname.replace(/[^A-Za-z]+/g, '') == 'about' ? "bold" : "normal"}
                                        textTransform="uppercase"
                                        margin="1rem 0"
                                        style={{}}>
                                        About
                                    </Paragraph>
                                </Link>
                                {/* <Link to="/" className={classes.theLink}>
                                    <Paragraph
                                        size="16px"
                                        color="#D90416"
                                        bold="bold"
                                        textTransform="uppercase"
                                        margin="1rem 0"
                                        style={{}}>
                                        SALE %
                                    </Paragraph>
                                </Link> */}
                                <Link to="/contact" className={classes.theLink}>
                                    <Paragraph
                                        size="16px"
                                        color={location.pathname.replace(/[^A-Za-z]+/g, '') == 'contact' ? "#15AAA0" : "#0D0D0D"}
                                        bold={location.pathname.replace(/[^A-Za-z]+/g, '') == 'contact' ? "bold" : "normal"}
                                        textTransform="uppercase"
                                        margin="1rem 0"
                                        style={{}}>
                                        Contact
                                    </Paragraph>
                                </Link>
                                <div className={shopNav == true ? classes.theShopNavMob : classes.theShopNavMobHide}>
                                    <div className={classes.theSNContentMob}>
                                        <div className={classes.theSNCFlexStartBetween}>
                                            <div className={classes.theSNCLeftMob}>
                                                {shopData != null && shopData.map((res) => (
                                                    <div
                                                        className={classes.theSNCFlex}
                                                        onClick={() => { setSelectedCategory(res.room_type_id); setSelectedCategoryData(res.category) }}
                                                    >
                                                        <Paragraph
                                                            size="14px"
                                                            color={selectedCategory == res.room_type_id ? "#15AAA0" : "#848484"}
                                                            bold="normal"
                                                            textTransform="uppercase"
                                                            style={{}}>
                                                            {res.name}
                                                        </Paragraph>
                                                        {res.category != "" &&
                                                            <ChevronRightIcon style={{ color: selectedCategory == res.room_type_id ? "#15AAA0" : "#848484" }} />
                                                        }
                                                    </div>
                                                ))}
                                            </div>
                                            {selectedCategoryData == "" ?
                                                <div className={classes.theSNCRightMob}>
                                                    <Paragraph
                                                        size="14px"
                                                        color="#15AAA0"
                                                        bold="normal"
                                                        textTransform="uppercase"
                                                        style={{}}>
                                                        No Category
                                                    </Paragraph>
                                                </div>
                                                :
                                                <div className={classes.theSNCRightMob}>
                                                    <Grid container spacing={3}>
                                                        {selectedCategoryData != null && selectedCategoryData[0].hasOwnProperty('sub') ?
                                                            <React.Fragment>
                                                                {selectedCategoryData != null && selectedCategoryData.map((res) => (

                                                                    <Grid item xs={12} sm={2} md={2}>
                                                                        {res.hasOwnProperty('category') &&
                                                                            <Paragraph
                                                                                size="14px"
                                                                                color="#15AAA0"
                                                                                bold="normal"
                                                                                textTransform="capitalize"
                                                                                margin="0 0 1rem"
                                                                            >
                                                                                {res.category}
                                                                            </Paragraph>
                                                                        }
                                                                        {res.hasOwnProperty('sub') &&
                                                                            <React.Fragment>
                                                                                {res.sub != "" ?
                                                                                    <React.Fragment>
                                                                                        {res.sub.map((resP) => (
                                                                                            <Link to={"/listing/" + selectedCategory + '/' + resP.category_id}
                                                                                                style={{ textDecoration: "none" }}>
                                                                                                <Paragraph
                                                                                                    size="14px"
                                                                                                    color="#000"
                                                                                                    bold="normal"
                                                                                                    textTransform="capitalize"
                                                                                                    margin="0 0 1rem"
                                                                                                    textDecoration="none"
                                                                                                >
                                                                                                    {resP.name}
                                                                                                </Paragraph>
                                                                                            </Link>
                                                                                        ))}
                                                                                    </React.Fragment>
                                                                                    :
                                                                                    <Paragraph
                                                                                        size="14px"
                                                                                        color="#D90416"
                                                                                        bold="normal"
                                                                                        textTransform="capitalize"
                                                                                        margin="0 0 1rem"
                                                                                    >
                                                                                        No Category
                                                                                    </Paragraph>

                                                                                }
                                                                            </React.Fragment>
                                                                        }
                                                                    </Grid>
                                                                ))}
                                                            </React.Fragment>
                                                            :
                                                            <Grid item xs={12} sm={2} md={2}>
                                                                <Paragraph
                                                                    size="14px"
                                                                    color="#15AAA0"
                                                                    bold="normal"
                                                                    textTransform="capitalize"
                                                                    margin="0 0 1rem"
                                                                >
                                                                    All
                                                                </Paragraph>
                                                                {selectedCategoryData != null && selectedCategoryData.map((res) => (
                                                                    <Link
                                                                        to={"/listing/" + selectedCategory + '/' + res.category_id}
                                                                        style={{ textDecoration: "none" }}
                                                                    >
                                                                        <Paragraph
                                                                            size="14px"
                                                                            color="#000"
                                                                            bold="normal"
                                                                            textTransform="capitalize"
                                                                            margin="0 0 1rem"
                                                                            textDecoration="none"
                                                                        >
                                                                            {res.name}
                                                                        </Paragraph>
                                                                    </Link>
                                                                ))}
                                                            </Grid>
                                                        }
                                                    </Grid>
                                                </div>
                                            }
                                        </div>

                                        <Link to="/listing">
                                            <Paragraph
                                                size="14px"
                                                color="#15AAA0"
                                                bold="normal"
                                                textTransform="uppercase"
                                                margin="0 0 1rem"
                                                textDecoration="uinderline"
                                                center
                                            >
                                                explore all &gt;
                                            </Paragraph>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Drawer>
                </Box>
            </div >
        </React.Fragment >
    )
}