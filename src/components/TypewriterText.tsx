import { Typography, Box } from "@mui/material";
import Typewriter from "typewriter-effect"

interface ITypewriterTextProps {
    text: string;
}

function TypewriterText(props: ITypewriterTextProps) {

    return (

        <Box
            sx={{
                position: "relative",
            }}
        >
            <Typography textAlign="left" sx={{ display: "relative", opacity: 0}}>
                {props.text}
            </Typography>

            <Typography
                sx={{
                    textAlign: "left",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            >
                <Typewriter
                    options={{
                        strings: props.text,
                        autoStart: true,
                        delay: 0.3
                    }}
                />
            </Typography>
        </Box>
    );
}

export default TypewriterText;