import { Container, Typography } from "@mui/material";
import { useIsPresent } from "framer-motion";
import { aboutPageContent } from "../../data/aboutPageContent"
import Title from "./components/Title";

function AboutPage() {

    const isPresent = useIsPresent();


    return (
        <Container
            sx={{
                height: "100%",
            }}
        >
            <Title />
        </Container>
    );
}

export default AboutPage;