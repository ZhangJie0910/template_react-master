import React, {
    useEffect,
    useState
} from 'react'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container, Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Paragraph from "../../components/Typography/Paragraph";
import useStyles from "./styles";
import Button from "../../components/Button/Button";
import { Mail, Phone, Room } from "@mui/icons-material";
import FormInput from "../../components/FormInput/FormInput";
import aboutBanner from "../../assets/images/aboutBanner.png";
import aboutstoryline from "../../assets/images/aboutstoryline.svg";
import aboutmissionline from "../../assets/images/aboutmissionline.svg";
import aboutmission from "../../assets/images/aboutmission.png";
import aboutvision from "../../assets/images/aboutvision.png";
import visionmobile from "../../assets/images/visionmobile.png";
import missionmobile from "../../assets/images/missionmobile.png";
import {
    get_about_us
} from "../../api/API"

export default function About() {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const [aboutData, setAboutData] = useState(null)
    const [loading, setLoading] = useState(false)
    const getData = async () => {
        setLoading(true);

        var resAbout = await get_about_us({});
        if (resAbout.status) {
            setAboutData(resAbout.data);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <React.Fragment>
            {aboutData != null &&
                <React.Fragment>
                    <Header />
                    <Container>
                        <div className={classes.theContactSpaceTop} />
                        <div>
                            <Paragraph center size="32px" bold="bold">
                                HOMIEST LIVING
                            </Paragraph>
                        </div>

                        <div className={classes.theContactSpaceBig} />

                        <div>
                            <div className={classes.theAboutImg}>
                                <img src={aboutBanner} />
                            </div>

                            <div className={classes.theContactSpaceMedium} />

                            <div className={classes.theGetInTouchOne}>
                                <div className={classes.theGetInTouchTitle}>
                                    <Paragraph size="20px" color="#0D0D0D" bold="bold">
                                        OUR STORIES
                                    </Paragraph>
                                </div>
                                <div className={classes.theGetInTouchBorder}>
                                    <img src={aboutstoryline} />
                                </div>
                            </div>

                            <div className={classes.theContactSpaceMedium} />

                            <div>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: aboutData.stories,
                                    }}
                                />
                            </div>

                        </div>

                        <div className={classes.theContactSpaceBig} />

                        <div style={{ overflow: "hidden" }}>

                            <div className={classes.theMissionOne}>
                                <div className={classes.theMissionTitle}>
                                    <Paragraph size="20px" color="#0D0D0D" bold="bold">
                                        OUR MISSION & VISION
                                    </Paragraph>
                                </div>
                                <div className={classes.theMissionBorder}>
                                    <img src={aboutmissionline} />
                                </div>
                            </div>

                            <div className={classes.theContactSpaceMedium} />

                            {isMobile ?
                                (
                                    <>

                                        <div className={classes.theAboutMobileMission}>
                                            <img src={missionmobile} />
                                            <div className={classes.theAboutMobileMissionContent}>
                                                <div style={{
                                                    padding: "0 4rem 0 1rem"
                                                }}>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: aboutData.mission,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classes.theContactSpaceMedium} />

                                        <div className={classes.theAboutMobileVision}>
                                            <img src={visionmobile} />
                                            <div className={classes.theAboutMobileVisionContent}>
                                                <div>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: aboutData.vision,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                ) : (
                                    <>
                                        <div className={classes.theAboutMission}>
                                            <img src={aboutmission} />
                                            <div className={classes.theAboutMissionContent}>
                                                <div>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: aboutData.mission,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className={classes.theContactSpaceMedium} />

                                        <div className={classes.theAboutVision}>
                                            <img src={aboutvision} />
                                            <div className={classes.theAboutVisionContent}>
                                                <div>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: aboutData.vision,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}


                            <div className={classes.theContactSpaceBig} />
                        </div>


                    </Container>
                    <Footer />
                </React.Fragment>
            }
        </React.Fragment>
    );
}