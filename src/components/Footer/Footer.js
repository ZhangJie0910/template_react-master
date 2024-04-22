import React, {
  useEffect,
  useLayoutEffect,
  useState
} from 'react'
import Paragraph from "../../components/Typography/Paragraph";
import { Container, Grid, Input, useMediaQuery } from "@mui/material";
import useStyles, { CustomInput } from "./styles";
import {
} from "./styles";
import FormInput from "../../components/FormInput/FormInput";
import { useTheme } from "@mui/material/styles";
import toast from 'react-simple-toasts';
import Loader from "react-js-loader";
import Button from "../Button/Button";

import Logo from "../../assets/images/logo.png"
import FBLogo from "../../assets/images/fbicon.svg"
import IGLogo from "../../assets/images/igicon.svg"

import {
  get_contact,
  subscribe,
} from "../../api/API"

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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

  //Subscribe Function
  const [loadingSubscribe, setLoadingSubscribe] = useState(false)
  const [subscribeData, setSubscribeData] = useState({
    email: "",
  });

  const handleChange = (event) => {
    setSubscribeData({
      ...subscribeData,
      [event.target.name]: event.target.value,
    });
  };

  const getSubscribe = () => {
    if (subscribeData.email.length == 0) {
      toast("Email Is Required");
      return
    }
    setLoadingSubscribe(true);
    subscribe(subscribeData).then((json) => {
      if (json.status) {
        setSubscribeData({
          ...subscribeData,
          email: "",
        });
        setLoadingSubscribe(false);
        toast("Subscribe succesfully!");
      } else {
        toast(json.message);
        setLoadingSubscribe(false);
      }
    });
  }
  //useEffect to get data
  useEffect(() => {
    getData();
  }, [])
  
  return (
    <React.Fragment>
      {contactData != null &&
        <React.Fragment>
          <div className={classes.theFooter}>
            <div className={classes.theFooterTop}>
              <Container>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={12} md={4}>
                    <div
                      className={classes.theFlexCenter}
                      style={{ margin: "0 0 1rem 0" }}
                    >
                      <img src={Logo} />
                    </div>

                    <div className={classes.theFlexCenter}>
                      <a className={classes.theIcon}
                        href="https://www.facebook.com/homiestlivingsdnbhd/"
                        target="_blank"
                      >
                        <img src={FBLogo} />
                      </a>
                      <a className={classes.theIcon}
                        href="https://www.instagram.com/homiestlivingsdnbhd/"
                        target="_blank"
                      >
                        <img src={IGLogo} />
                      </a>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4}>
                    <Paragraph
                      size="14px"
                      color="#15AAA0"
                      bold="500"
                      style={{ margin: "0 0 1rem 0", textAlign: isMobile ? "center" : "left" }}
                    >
                      CONTACT US
                    </Paragraph>

                    <a className={classes.theCBox}
                      href={contactData.hq_link}
                      target="_blank"
                    >
                      <Paragraph
                        size="12px"
                        color="#0D0D0D"
                        bold="500"
                        style={{ textAlign: isMobile ? "center" : "left" }}
                      >
                        {contactData.hq_name}
                      </Paragraph>
                      <Paragraph
                        size="12px"
                        color="#0D0D0D"
                        bold="400"
                        style={{ margin: "0 0 1rem 0", textAlign: isMobile ? "center" : "left" }}
                      >
                        {contactData.hq_address}
                      </Paragraph>
                    </a>

                    <a className={classes.theCBox}
                      href={contactData.branch_link}
                      target="_blank"
                    >
                      <Paragraph
                        size="12px"
                        color="#0D0D0D"
                        bold="500"
                        style={{ textAlign: isMobile ? "center" : "left" }}
                      >
                        {contactData.branch_name}
                      </Paragraph>
                      <Paragraph
                        size="12px"
                        color="#0D0D0D"
                        bold="400"
                        style={{ margin: "0 0 1rem 0", textAlign: isMobile ? "center" : "left" }}
                      >
                        {contactData.branch_address}
                      </Paragraph>
                    </a>

                    <a className={classes.theCBox}
                      href={"mailto:" + contactData.email}
                    >
                      <Paragraph
                        size="12px"
                        color="#0D0D0D"
                        bold="400"
                        style={{ margin: "0 0 1rem 0", textAlign: isMobile ? "center" : "left" }}
                      >
                        {contactData.email}
                      </Paragraph>
                    </a>

                    <a className={classes.theCBox}
                      href={"tel:" + contactData.contact_1}
                    >
                      <Paragraph
                        size="12px"
                        color="#0D0D0D"
                        bold="400"
                        style={{ margin: "0 0 1rem 0", textAlign: isMobile ? "center" : "left" }}
                      >
                        {contactData.contact_1}
                      </Paragraph>
                    </a>

                    <a className={classes.theCBox}
                      href={"tel:" + contactData.contact_2}
                    >
                      <Paragraph
                        size="12px"
                        color="#0D0D0D"
                        bold="400"
                        style={{ margin: "0 0 1rem 0", textAlign: isMobile ? "center" : "left" }}
                      >
                        {contactData.contact_2}
                      </Paragraph>
                    </a>

                    <div className={classes.theCBox}>
                      <Paragraph
                        size="12px"
                        color="#0D0D0D"
                        bold="400"
                        style={{ margin: "0 0 1rem 0", textAlign: isMobile ? "center" : "left" }}
                      >
                        10am - 8pm
                      </Paragraph>
                    </div>
                  </Grid>

                  <Grid item xs={12} sm={12} md={4}>
                    <Paragraph
                      size="14px"
                      color="#15AAA0"
                      bold="500"
                      style={{ margin: "0 0 1rem 0", textAlign: isMobile ? "center" : "left" }}
                    >
                      SUBSCRIBE
                    </Paragraph>

                    <Paragraph
                      size="12px"
                      color="#0D0D0D"
                      bold="400"
                      style={{ margin: "0 0 1rem 0", textAlign: isMobile ? "center" : "left" }}
                    >
                      Enter your email to get notified about<br />
                      our latest promotion
                    </Paragraph>

                    <div className={classes.theFlexButton}>

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{}}>
                          <CustomInput
                            placeholder="Email"
                            name="email"
                            value={subscribeData.email}
                            onChange={handleChange}
                          />
                        </div>
                        <Button
                          onClick={() => getSubscribe()}
                          label={loadingSubscribe ? "submitting..." : "SUBMIT"}
                          color="#fff"
                          bg="#15AAA0"
                          size="12px"
                          bold="400"
                          pd="16px 24px"
                          className={classes.theCusBtn}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Container>
            </div>
            <div className={classes.theFooterBtm}>

              <Paragraph
                size="12px"
                color="#fff"
                bold="400"
                center="center"
              >
                &copy; 2022 Homiest Living Sdn Bhd. All right reserved.
              </Paragraph>
            </div>
          </div>
        </React.Fragment>
      }
    </React.Fragment >
  );
}
