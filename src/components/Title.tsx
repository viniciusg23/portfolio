import { Box, Divider, Typography } from "@mui/material";

interface TitleProps {
    title: string;
}

function Title(props: TitleProps) {
    return (
        <Box>
            <Divider textAlign="left" sx={{mb: "1em"}}>
                <Typography sx={{ fontWeight: 800, fontSize: "2em" }} >
                    {props.title}
                </Typography>
            </Divider>
        </Box>
    );
}

export default Title;