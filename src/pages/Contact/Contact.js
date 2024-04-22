import React, {
    useEffect,
    useState
} from 'react'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container, Grid, useMediaQuery } from "@mui/material";
import toast from 'react-simple-toasts';
import Paragraph from "../../components/Typography/Paragraph";
import useStyles from "./styles";
import Button from "../../components/Button/Button";
import { Mail, Phone, Room } from "@mui/icons-material";
import FormInput from "../../components/FormInput/FormInput";
import map from "../../assets/images/map.png";
import linecontact from "../../assets/images/linecontact.svg";
import location from "../../assets/images/location.svg";
import email from "../../assets/images/email.svg";
import phone from "../../assets/images/phone.svg";
import fbcontacticon from "../../assets/images/fbcontacticon.svg";
import igcontacticon from "../../assets/images/igcontacticon.svg";
import linegetintouch from "../../assets/images/linegetintouch.svg";
import {
    get_contact
} from "../../api/API"


export default function Contact() {
    const classes = useStyles();

    const [contactData, setContactData] = useState(null)
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        setLoading(true);
        var resContact = await get_contact({});
        if (resContact.status) {
            setContactData(resContact.data[0])
            setLoading(false);
        }
    }

    //Contact Function
    const [loadingContact, setLoadingContact] = useState(false)
    const [contactUsData, setContactUsData] = useState({
        name: "",
        email: "",
        contact: "",
        message: "",
    });

    const handleChange = (event) => {
        setContactUsData({
            ...contactUsData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSend = () => {
        if (contactUsData.name.length == 0) {
            toast("Name Is Required");
            return
        }
        if (contactUsData.email.length == 0) {
            toast("Email Is Required");
            return
        }
        if (contactUsData.contact.length == 0) {
            toast("Contact Is Required");
            return
        }
        if (contactUsData.message.length == 0) {
            toast("Message Is Required");
            return
        }
        setLoadingContact(true);
        get_contact(contactUsData).then((json) => {
            if (json.status) {
                setContactUsData({
                    ...contactUsData,
                    name: "",
                    email: "",
                    contact: "",
                    message: "",
                });
                setLoadingContact(false);
                toast("Message send succesfully!");
            } else {
                toast(json.message);
                setLoadingContact(false);
            }
        });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <React.Fragment>
            {contactData != null &&
                <React.Fragment>
                    <Header />
                    <Container>
                        <div className={classes.theContactSpaceTop} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={6}>
                                <div className={classes.theContactMap}>
                                    <img src={map} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6}>
                                <div className={classes.theContactContent}>
                                    <div className={classes.theContactContentOne}>
                                        <div className={classes.theContactTitle}>
                                            <Paragraph size="20px" color="#000000" bold="500">
                                                COMPANY DETAILS
                                            </Paragraph>
                                        </div>
                                        <div className={classes.theContactBorder}>
                                            <img src={linecontact} />
                                        </div>
                                    </div>

                                    <div className={classes.theContactSpaceBig} />

                                    <div className={classes.theContactContentTwo}>
                                        <div className={classes.theContactLocation}>
                                            <img src={location} />
                                        </div>

                                        <div className={classes.theContactContentAll}>
                                            <a
                                                style={{ textDecoration: "none" }}
                                                href={contactData.hq_link}
                                                target="_blank"
                                            >
                                                <Paragraph size="12px" color="#0D0D0D" bold="500">
                                                    {contactData.hq_name}
                                                </Paragraph>
                                                <Paragraph size="12px" color="#0D0D0D" bold="400">
                                                    {contactData.hq_address}
                                                </Paragraph>
                                            </a>

                                            <div className={classes.theContactSpaceSmall} />

                                            <a
                                                style={{ textDecoration: "none" }}
                                                href={contactData.branch_link}
                                                target="_blank"
                                            >
                                                <Paragraph size="12px" color="#0D0D0D" bold="500">
                                                    {contactData.branch_name}
                                                </Paragraph>
                                                <Paragraph size="12px" color="#0D0D0D" bold="400">
                                                    {contactData.branch_address}
                                                </Paragraph>
                                            </a>
                                        </div>
                                    </div>

                                    <div className={classes.theContactSpaceMedium} />

                                    <div className={classes.theContactContentTwo}>
                                        <div className={classes.theContactEmail}>
                                            <img src={email} />
                                        </div>

                                        <div className={classes.theContactContentAll}>
                                            <a
                                                style={{ textDecoration: "none" }}
                                                href={"mailto:" + contactData.email}>
                                                <Paragraph size="12px" color="#0D0D0D" bold="400">
                                                    {contactData.email}
                                                </Paragraph>
                                            </a>
                                        </div>
                                    </div>

                                    <div className={classes.theContactSpaceMedium} />

                                    <div className={classes.theContactContentTwo}>
                                        <div className={classes.theContactPhone}>
                                            <img src={phone} />
                                        </div>

                                        <div className={classes.theContactContentAll}>
                                            <a
                                                style={{ textDecoration: "none" }}
                                                href={"tel:" + contactData.contact_1}
                                            >
                                                <Paragraph size="12px" color="#0D0D0D" bold="400" margin="0 0 10px">
                                                    {contactData.contact_1}
                                                </Paragraph>
                                            </a>
                                            <a
                                                style={{ textDecoration: "none" }}
                                                href={"tel:" + contactData.contact_2}
                                            >
                                                <Paragraph size="12px" color="#0D0D0D" bold="400">
                                                    {contactData.contact_2}
                                                </Paragraph>
                                            </a>

                                            <div className={classes.theContactSpaceSmall} />

                                            <Paragraph size="12px" color="#0D0D0D" bold="400">
                                                10am - 8pm
                                            </Paragraph>
                                        </div>
                                    </div>

                                    <div className={classes.theContactSpaceBig} />

                                    <div className={classes.theContactSocialMedia}>
                                        <div>
                                            <Paragraph size="20px" color="#000000" bold="400">
                                                Connect with us
                                            </Paragraph>
                                        </div>

                                        <div className={classes.theContactSpaceSmall} />

                                        <div className={classes.theContactSocialMediaFlex}>
                                            <a
                                                className={classes.theSocialMedia}
                                                href="https://www.facebook.com/homiestlivingsdnbhd/"
                                                target="_blank"
                                            >
                                                <img src={fbcontacticon} />
                                            </a>
                                            <a
                                                className={classes.theSocialMedia}
                                                href="https://www.instagram.com/homiestlivingsdnbhd/"
                                                target="_blank">
                                                <img src={igcontacticon} />
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>

                        <div className={classes.theContactSpaceBig} />

                        <div className={classes.theContactGetInTouch}>
                            <div className={classes.theGetInTouchOne}>
                                <div className={classes.theGetInTouchTitle}>
                                    <Paragraph size="20px" color="#000000" bold="500">
                                        GET IN TOUCH WITH US
                                    </Paragraph>
                                </div>
                                <div className={classes.theGetInTouchBorder}>
                                    <img src={linegetintouch} />
                                </div>
                            </div>
                            <div className={classes.theContactSpaceBig} />
                            <div>
                                <FormInput
                                    className={classes.theBorderRadius}
                                    placeholder="Name"
                                    name="name"
                                    value={contactUsData.name}
                                    onChange={handleChange}
                                    bg="#fff"
                                />
                                <FormInput
                                    placeholder="Email"
                                    name="email"
                                    value={contactUsData.email}
                                    onChange={handleChange}
                                    bg="#fff"
                                />
                                <FormInput
                                    placeholder="Contact Number"
                                    name="contact"
                                    value={contactUsData.contact}
                                    onChange={handleChange}
                                    bg="#fff"
                                />
                                <FormInput
                                    placeholder="Message"
                                    name="message"
                                    value={contactUsData.message}
                                    onChange={handleChange}
                                    bg="#fff"
                                    multiline
                                    rows={5}
                                />

                                <Button
                                    onClick={() => handleSend()}
                                    bg="#15AAA0"
                                    label="SUBMIT"
                                    color="#fff"
                                    size="12px"
                                    bold="bold"
                                    pd="1rem 0"
                                />
                            </div>
                        </div>
                        <div className={classes.theContactSpaceBig} />
                    </Container>
                    <Footer />
                </React.Fragment>
            }
        </React.Fragment>
    );
}