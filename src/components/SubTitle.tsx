import { Box, Divider, Typography } from "@mui/material";


interface SubTitleProps {
    title: string;
}

function SubTitle(props: SubTitleProps) {
    return (
        <Box>
            <Divider textAlign="left" sx={{ mt: "1em" }}>
                <Typography sx={{ fontWeight: 600, fontSize: "1.2em" }} >
                    {props.title}
                </Typography>
            </Divider>
        </Box>
    );
}

export default SubTitle;