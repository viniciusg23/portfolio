import { Typography, useTheme, Box } from "@mui/material";
import Typewriter from "typewriter-effect"

interface ITypewriterTextProps {
    text: string;
}

function TypewriterText(props: ITypewriterTextProps) {

    const theme = useTheme();

    return (

        <Box
            sx={{
                position: "relative",
            }}
        >
            <Typography textAlign="left" sx={{ display: "relative", color: theme.palette.background.default }}>
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